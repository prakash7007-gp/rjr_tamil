
import fs from 'fs';
import path from 'path';

const BASE_URL = 'https://www.rjrherbalhospitals.in/';
const STATES = [
    { file: 'tamil-nadu.php', name: 'Tamil Nadu' },
    { file: 'andra.php', name: 'Andhra Pradesh' },
    { file: 'telangana.php', name: 'Telangana' },
    { file: 'karnataka.php', name: 'Karnataka' },
    { file: 'puducherry.php', name: 'Puducherry' },
    { file: 'maharashtra.php', name: 'Maharashtra' }
];

const IGNORE_LINKS = new Set([
    'index.php', 'about.php', 'branche.php', 'herbal-book.php',
    'before-after.php', 'contact.php', 'tamil-nadu.php', 'andra.php',
    'telangana.php', 'karnataka.php', 'puducherry.php', 'maharashtra.php',
    '#', 'javascript:void(0);', 'treatments.php'
]);

async function fetchHtml(url) {
    try {
        const res = await fetch(url);
        if (!res.ok) throw new Error(`Failed to fetch ${url}: ${res.status}`);
        return await res.text();
    } catch (err) {
        console.error(`Error fetching ${url}:`, err.message);
        return null;
    }
}

function extractCityLinks(html) {
    const regex = /href="([^"]+\.php)"/g;
    const links = new Set();
    let match;
    while ((match = regex.exec(html)) !== null) {
        const link = match[1];
        if (!IGNORE_LINKS.has(link) &&
            !link.startsWith('http') &&
            !link.includes('treatment') &&
            !link.includes('specialist')
        ) {
            links.add(link);
        }
    }
    return Array.from(links);
}

function parseBranchPage(html) {
    // Simplification: text extraction
    // We rely on "Location" or "Address" headings usually found in these pages

    let content = html.replace(/<script\b[^>]*>([\s\S]*?)<\/script>/gm, "")
        .replace(/<style\b[^>]*>([\s\S]*?)<\/style>/gm, "");

    // Extract block that likely contains the address
    // Often: <h4>Address</h4> ... <h4>Phone</h4>

    let address = "Not found";
    let phone = "Not found";
    let mapLink = "";

    // Address extraction
    // Look for "Address" followed by some tag, then content until "Phone" or similar
    const addrRegex = /Address\s*<[^>]+>\s*([\s\S]*?)\s*(?:Phone|Call)/i;
    const addrMatch = content.match(addrRegex);
    if (addrMatch) {
        // Clean tags
        let raw = addrMatch[1];
        // Replace <br> with comma
        raw = raw.replace(/<br\s*\/?>/gi, ", ");
        address = raw.replace(/<[^>]+>/g, " ").replace(/\s+/g, ' ').trim();
    } else {
        // Fallback for different structures
        const addrRegex2 = /Address([\s\S]*?)Phone/i;
        const m2 = content.match(addrRegex2);
        if (m2) {
            address = m2[1].replace(/<[^>]+>/g, " ").replace(/\s+/g, ' ').trim();
        }
    }

    // Phone extraction
    const phoneRegex = /Phone\s*<[^>]+>\s*([\s\S]*?)(?:<h|Treatment)/i;
    const phoneMatch = content.match(phoneRegex);
    if (phoneMatch) {
        let raw = phoneMatch[1];
        raw = raw.replace(/<br\s*\/?>/gi, ", ");
        phone = raw.replace(/<[^>]+>/g, " ").replace(/\s+/g, ' ').trim();
    } else {
        // Fallback
        const phoneRegex2 = /(?:Phone|Call)([\s\S]*?)(?:Treatment|Quick Links|<footer)/i;
        const m2 = content.match(phoneRegex2);
        if (m2) {
            // Take first 100 chars to avoid grabbing too much
            let raw = m2[1].substring(0, 200);
            phone = raw.replace(/<[^>]+>/g, " ").replace(/\s+/g, ' ').trim();
        }
    }

    const mapMatch = content.match(/src="([^"]*google\.com\/maps\/embed[^"]*)"/);
    if (mapMatch) {
        mapLink = mapMatch[1];
    }

    return { address, phone, mapLink };
}

async function main() {
    const allBranches = [];

    for (const state of STATES) {
        console.log(`Processing state: ${state.name} (${state.file})`);
        const stateHtml = await fetchHtml(BASE_URL + state.file);

        if (!stateHtml) continue;

        const cityLinks = extractCityLinks(stateHtml);
        console.log(`  Found ${cityLinks.length} potential city links.`);

        const stateBranchData = {
            state: state.name,
            branches: []
        };

        for (const cityLink of cityLinks) {
            const cityNameRaw = cityLink.replace('.php', '').replace(/-/g, ' ');
            // Capitalize
            const cityName = cityNameRaw.split(' ').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');

            // Check if we already processed this city for this state (unlikely but good to check)
            if (stateBranchData.branches.find(b => b.city === cityName)) continue;

            console.log(`    Fetching city: ${cityName}`);

            const cityHtml = await fetchHtml(BASE_URL + cityLink);
            if (cityHtml) {
                const details = parseBranchPage(cityHtml);

                // Basic validation - if address is "Not found", maybe we picked up a wrong link
                if (details.address === "Not found" && !cityLink.includes('chennai')) {
                    // Chennai page might be formatted differently or be the home page?
                    // Just keep it but mark it
                }

                stateBranchData.branches.push({
                    city: cityName,
                    link: BASE_URL + cityLink,
                    ...details
                });
            }

            // throttle
            await new Promise(r => setTimeout(r, 50));
        }
        allBranches.push(stateBranchData);
    }

    const outputPath = 'd:/RJR_tamil_website_01/rjr_tamil_website_main_01/rjr_tamil/app/data/branches.json';
    fs.writeFileSync(outputPath, JSON.stringify(allBranches, null, 2));
    console.log(`Done! Saved ${allBranches.length} states to ${outputPath}`);
}

main();
