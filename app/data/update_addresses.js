const fs = require('fs');
const https = require('https');
const path = require('path');

const branchesFile = path.resolve(__dirname, 'branches.json');
const logFile = path.resolve(__dirname, 'update_log.txt');
const branchesData = JSON.parse(fs.readFileSync(branchesFile, 'utf8'));

function log(message) {
    fs.appendFileSync(logFile, message + '\n');
    console.log(message);
}

// Helper to fetch URL content
function fetchContent(url) {
    return new Promise((resolve, reject) => {
        https.get(url, (res) => {
            let data = '';
            res.on('data', (chunk) => data += chunk);
            res.on('end', () => resolve(data));
        }).on('error', (err) => reject(err));
    });
}

// Helper to extract address from HTML
function extractAddress(html) {
    // Regex logic to find the address section
    // looking for signatures around "Address" and usually ending near "Phone" or "Pincode"
    // This is a heuristic based on observed structure such as:
    // Address\n ...content... \n Phone

    // Normalize html slightly to make regex easier
    const text = html.replace(/<[^>]+>/g, '\n').replace(/\s+/g, ' ');

    // Try to find the block "Address ... Phone"
    const match = text.match(/Address(.*?)(Phone)/i);
    if (match && match[1]) {
        let addr = match[1].trim();
        // Cleanup extra potential "Pincode" label duplication if present
        // addresses often have "Pincode: xxx"

        // Remove leading/trailing non-address characters
        addr = addr.replace(/^[:\s-]+/, '').replace(/[:\s-]+$/, '');
        return addr;
    }
    return null;
}

// Map of branch IDs (normalized) to their page URLs
// I'll populate this map via reading the state pages logic inside the main function or manually provided map
// Since I have the state pages listings from the context, I can map ID -> URL key.
// E.g. "ambur" -> "ambur.php"
// Note: Some IDs in branches.json might not perfectly match the .php filename.
// I'll try to deduce the URL from the ID.

async function updateAddresses() {
    log("Starting address update...");

    for (const region of branchesData) {
        log(`Processing region: ${region.state}`);
        for (const branch of region.branches) {
            // Construct potential URL
            // Most follow pattern: https://www.rjrherbalhospitals.com/[id].php
            // Some special cases observed: "ameerpet---hyderabad" -> "ameerpet.php"? NO, context showed "ameerpet.php"
            // I need a mapping strategy. 
            // Simpler heuristic: try to find the link in the state page content I previously fetched?
            // Since I can't access previous turn's memory of fetching, I will fetch the state page again?
            // No, that's inefficient.

            // Let's rely on constructing the URL. 
            // Clean the ID: "ameerpet---hyderabad" -> "ameerpet" ?
            // let's try direct mapping construction:

            let pageName = branch.id;

            // Manual overrides based on observed links in state chunks
            if (pageName === 'ameerpet---hyderabad') pageName = 'ameerpet';
            if (pageName === 'a.s.rao-nagar---hyderabad') pageName = 'asraonagar';
            if (pageName === 'chanda-nagar---hyderabad') pageName = 'chandhanagar';
            if (pageName === 'himayat-nagar---hyderabad') pageName = 'himayathnagar';
            if (pageName === 'mumbai-/-bombay') pageName = 'mumbai';
            if (pageName === 'navi-mumbai') pageName = 'navi';
            if (pageName === 'kalyan-nagar---bangalore') pageName = 'kalyannagar';
            if (pageName === 'rajaji-nagar---bangalore') pageName = 'bangalore';
            if (pageName === 'hsr-layout') pageName = 'hsrlayout';
            if (pageName === 'puducherry') pageName = 'puducherry-1'; // noted from chunk
            if (pageName === 'ahmednagar') pageName = 'ahmed';
            if (pageName === 'pimpri-chinchwad') pageName = 'pimpri';

            // Default logic: remove dashes for some? NO, 'tamil-nadu' was a state page.
            // branch pages seem to be distinct.
            // 'chennai' -> chennai.php (has sub branches T Nagar etc, but JSON has generic 'chennai')
            // The main 'chennai.php' lists T Nagar, Urapakkam, Arumbakkam.
            // The JSON has id: 'chennai', city: 'Chennai'. This probably corresponds to the T.Nagar main branch.
            // We'll leave 'chennai' address as users manually fixed it? 
            // User said: "check the all bracnher address proper;y put branchess .josnn"
            // If I overwrite valid user edits, that's bad. 
            // But user just changed Chennai to "T.Nagar, Chennai" short form. 
            // Maybe I should fetch the full T.Nagar address if available.

            const url = `https://www.rjrherbalhospitals.com/${pageName}.php`;

            try {
                const content = await fetchContent(url);
                const newAddress = extractAddress(content);

                if (newAddress && newAddress.length > 10) { // simple validation
                    log(`Updated ${branch.city}: ${newAddress}`);
                    branch.address = newAddress;
                } else {
                    log(`Could not extract address for ${branch.city} from ${url}`);
                }
            } catch (e) {
                log(`Failed to fetch/process ${branch.city} (${url}): ${e.message}`);
            }
        }
    }

    fs.writeFileSync(branchesFile, JSON.stringify(branchesData, null, 4));
    log("Finished updating addresses.");
}

updateAddresses();
