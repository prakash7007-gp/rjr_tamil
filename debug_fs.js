
console.log("Start");
const fs = require('fs');
console.log("Req fs");
try {
    fs.writeFileSync('d:/RJR_tamil_website_01/rjr_tamil_website_main_01/rjr_tamil/app/data/debug_test.txt', 'Hello world');
    console.log("Wrote file");
} catch (e) {
    console.error(e);
}
console.log("End");
