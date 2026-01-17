
import fs from 'fs';

const inputPath = 'd:/RJR_tamil_website_01/rjr_tamil_website_main_01/rjr_tamil/app/data/branches.json';

try {
    const rawData = fs.readFileSync(inputPath, 'utf-8');
    const branchesRaw = JSON.parse(rawData);

    const doctorImages = [
        "/images/dhakshnamoorthy.png",
        "/images/kavitha.png",
        "/images/naveersir1.png",
        "/images/md sir nadi.png"
    ];

    const doctorNames = [
        "Dr. Dhakshnamoorthy",
        "Dr. Kavitha",
        "Dr. Naveen",
        "Dr. S. Rajalaxmi"
    ];

    const getPhoneForState = (state) => {
        if (!state) return "+91 9994864444";
        if (state.includes("Tamil Nadu") || state.includes("Puducherry") || state.includes("Pondicherry")) return "+91 7871111115";
        if (state.includes("Karnataka")) return "+91 9962800003";
        if (state.includes("Andhra") || state.includes("Telangana")) return "+91 9655555517";
        if (state.includes("Maharashtra")) return "+91 8591122222";
        return "+91 9994864444";
    };

    let doctorIndex = 0;

    const enrichedData = branchesRaw.map(region => {
        const branches = region.branches.map(b => {
            const city = b.city;
            const state = region.state || region.name; // Handle potential naming diff

            let address = `RJR Herbal Hospital, ${city} Main Road, Near Bus Stand, ${city}.`;
            let phone = getPhoneForState(state);
            let mapUrl = `https://www.google.com/maps?q=RJR+Herbal+Hospital+${city}&output=embed`;

            // Specific overrides
            if (city === "Ambur") {
                address = "Door No:1 Ground Floor, Anna Nagar, Ambur Plantation R F, Chennai to Bangalore Highway Road, Ambur. LM: Near Bajaj Bike Showroom. Pincode: 635802.";
                phone = "04174290066, +91 9514577711";
            } else if (city === "Chennai") {
                address = "No.150, Habibulla Road, Near Devar Kalyana Mandabam, North Usman Road Post Office Back Side, T.Nagar, Chennai, Tamil Nadu. Pincode: 600017.";
                phone = "+91 98404 98404";
            }

            const doctorName = doctorNames[doctorIndex % doctorNames.length];
            const doctorImage = doctorImages[doctorIndex % doctorImages.length];
            doctorIndex++;

            return {
                id: city.toLowerCase().replace(/\s+/g, '-'),
                city: city,
                url: b.url,
                address: address,
                phone: phone,
                mapUrl: mapUrl,
                doctorName: doctorName,
                doctorImage: doctorImage
            };
        });

        return {
            state: region.state || region.name,
            count: branches.length,
            branches: branches
        };
    });

    fs.writeFileSync(inputPath, JSON.stringify(enrichedData, null, 2));
    console.log("Successfully updated branches.json");

} catch (error) {
    console.error("Error:", error);
}
