function myHome() {
    window.open("../index.html");
}

function myblog(){
    window.open("/sites/javascript.html");
}

function myScript() {
    window.open("/sites/javascript.html");
}

function myCourse(){
    window.open("/sites/courses.html");
}

function myWebdev(){
    window.open("/sites/web_development.html");
}

function next(){
    window.open('#next');
}

function learn_javascript(){
    window.open('/sites/web_development.html#next')
}

function donate(){
    var link1 = 'https://upi-linkpe.netlify.app/index.html?pa=mohitlab@fam&pn=Mohit&cu=INR';
    var link2 = 'upi://pay?pa=mohitlab@fam&pn=Mohit&cu=INR';
        // Open the links in new tabs or windows
    window.open(link1, '_blank');
    window.open(link2);
}

const iframe = document.getElementById('resizableIframe');

// Set the initial width based on the screen width
const initialScreenWidth = 100; // Change this value based on your needs
const initialIframeWidth = 0.7 * initialScreenWidth;

// Set the initial width of the iframe
iframe.style.width = `${initialIframeWidth}vw`;

// Update the iframe width on window resize
window.addEventListener('resize', () => {
  const screenWidth = window.innerWidth;
  const iframeWidth = (0.7 * screenWidth);
  iframe.style.width = `${iframeWidth}px`;
});