
import fs from 'fs';
import https from 'https';

const inputPath = 'd:/RJR_tamil_website_01/rjr_tamil_website_main_01/rjr_tamil/app/data/branches.json';
const outputPath = 'd:/RJR_tamil_website_01/rjr_tamil_website_main_01/rjr_tamil/app/data/branches_detailed.json';
const logPath = 'd:/RJR_tamil_website_01/rjr_tamil_website_main_01/rjr_tamil/scrape.log';

function log(msg) {
    fs.appendFileSync(logPath, msg + '\n');
}

log("Starting script...");

const rawData = fs.readFileSync(inputPath, 'utf-8');
const states = JSON.parse(rawData);

function fetchHtml(url) {
    return new Promise((resolve, reject) => {
        https.get(url, (res) => {
            let data = '';
            res.on('data', (chunk) => data += chunk);
            res.on('end', () => resolve(data));
        }).on('error', (err) => {
            log(`Error fetching ${url}: ${err.message}`);
            resolve(null);
        });
    });
}

function parseBranchDetails(html, city) {
    let content = html.replace(/<script\b[^>]*>([\s\S]*?)<\/script>/gm, "")
        .replace(/<style\b[^>]*>([\s\S]*?)<\/style>/gm, "");

    let address = "Contact us for more details";
    let phone = "+91 7871111115";
    let mapLink = "";

    // Address
    const addrRegex = /Address[:\s]*<[^>]*>([\s\S]*?)(?:Phone|Call|Contact|LM:)/i;
    let match = content.match(addrRegex);
    if (!match) match = content.match(/Location[:\s]*<[^>]*>([\s\S]*?)(?:Phone|Call)/i);
    if (match) {
        let raw = match[1];
        raw = raw.replace(/<br\s*\/?>/gi, ", ").replace(/<\/?[^>]+(>|$)/g, " ").replace(/\s+/g, " ").trim();
        if (raw.length > 10) address = raw;
    }

    // Phone
    const phoneRegex = /(?:Phone|Call)[:\s]*<[^>]*>([\s\S]*?)(?:Treatment|Quick Link|<div|<footer)/i;
    let pMatch = content.match(phoneRegex);
    if (pMatch) {
        let raw = pMatch[1];
        const nums = raw.match(/[\d\+\s-]{10,}/g);
        if (nums) phone = nums.join(', ').replace(/\s+/g, ' ').trim();
    }

    // Map
    const mapMatch = content.match(/src="([^"]*google\.com\/maps\/embed[^"]*)"/);
    if (mapMatch) {
        mapLink = mapMatch[1];
    } else {
        mapLink = `https://www.google.com/maps/embed/v1/place?key=YOUR_API_KEY&q=RJR+Herbal+Hospital+${city.replace(" ", "+")}`;
        // Fallback to a searchable embed if API key issue, actually let's use a generic map url that works for display or just keep empty if not found?
        // Let's us the one constructed previously but note it might not be a valid embed without key.
        // Better fallback:
        // mapLink = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.2550974868204!2d80.2282!3d13.0381"; // Chennai generic
    }

    return { address, phone, mapLink };
}

async function main() {
    const enrichedStates = [];
    let count = 0;

    for (const state of states) {
        log(`Processing ${state.state}...`);
        const newBranches = [];

        for (const branch of state.branches) {
            log(`  Fetching ${branch.city}`);
            const html = await fetchHtml(branch.url);

            let details = { address: "RJR Herbal Hospital Branch", phone: "+91 7871111115", mapLink: "" };
            if (html) {
                details = parseBranchDetails(html, branch.city);
            }

            newBranches.push({
                id: branch.city.toLowerCase().replace(/\s+/g, '-'),
                city: branch.city,
                url: branch.url,
                address: details.address,
                phone: details.phone,
                mapUrl: details.mapLink || "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3000!2d0!3d0!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTPCsDAwJzAwLjAiTiA4MMKwMTInMDAuMCJF!5e0!3m2!1sen!2sin!4v1600000000000!5m2!1sen!2sin",
                doctorName: "Specialist Doctor",
                doctorImage: "/images/doctor-placeholder.jpg"
            });
            count++;

            // throttle
            await new Promise(r => setTimeout(r, 100));
        }

        enrichedStates.push({
            name: state.state,
            count: newBranches.length,
            branches: newBranches
        });
    }

    fs.writeFileSync(outputPath, JSON.stringify(enrichedStates, null, 2));
    log(`Done. Saved ${count} branches.`);
}

main();
