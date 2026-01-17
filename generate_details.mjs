
import fs from 'fs';

const inputPath = 'd:/RJR_tamil_website_01/rjr_tamil_website_main_01/rjr_tamil/app/data/branches.json';
const outputPath = 'd:/RJR_tamil_website_01/rjr_tamil_website_main_01/rjr_tamil/app/data/branches_detailed.json';

const states = JSON.parse(fs.readFileSync(inputPath, 'utf-8'));

const enrichedStates = states.map(state => {
    const branches = state.branches.map((b, i) => {
        let address = `RJR Herbal Hospital, ${b.city} Main Road, Near Bus Stand, ${b.city}.`;
        let phone = "+91 7871111115";
        let mapUrl = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3000!2d0!3d0!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTPCsDAwJzAwLjAiTiA4MMKwMTInMDAuMCJF!5e0!3m2!1sen!2sin!4v1600000000000!5m2!1sen!2sin`;

        if (b.city === 'Ambur') {
            address = "Door No:1 Ground Floor, Anna Nagar, Ambur Plantation R F, Chennai to Bangalore Highway Road, Ambur. LM: Near Bajaj Bike Showroom. Pincode: 635802.";
            phone = "04174290066, +91 9514577711";
        } else if (b.city === 'Chennai') {
            address = "No.150, Habibulla Road, Near Devar Kalyana Mandabam, North Usman Road Post Office Back Side, T.Nagar, Chennai, Tamil Nadu. Pincode: 600017.";
            phone = "+91 98404 98404";
        }

        return {
            id: b.city.toLowerCase().replace(/\s+/g, '-'),
            city: b.city,
            address: address,
            phone: phone,
            mapUrl: mapUrl,
            doctorName: "Dr. Specialist",
            doctorImage: "/images/treatments/doctor.png"
        };
    });

    return {
        name: state.state,
        count: branches.length,
        branches: branches
    };
});

fs.writeFileSync(outputPath, JSON.stringify(enrichedStates, null, 2));
console.log("Generated detailed branches.");
