// Browser Object Model [BOM]
// Window Object
// console.log(window);
// alert('Hello');

function test() {
    window.open('https://www.google.com/', "_blank");
}

// Navigator Object
function detectBrowser() {
    console.log(navigator.userAgent);
}
// detectBrowser();

function checkOnlineStatus() {
    if (navigator.onLine) console.log("You are online!...");
    else console.log("You are offline");
}
// checkOnlineStatus();

// Location object
function redirecttoWebpage() {
    location.href = 'https://www.cyberpunk.net/us/en/';
}
// redirecttoWebpage();

function reloadPage() {
    location.reload();
    alert("Page Reloaded");
}

function showURL() {
    console.log(location.protocol);
    console.log(location)
}

showURL();