
try {
    fetch('https://google.com').then(r => console.log('Fetch works')).catch(e => console.error(e));
} catch (e) {
    console.log('Fetch not defined');
}
