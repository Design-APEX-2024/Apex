const creditsDiv = document.querySelector('.credits');
if (creditsDiv) {
    const htmlContent = `
        <a href="https://www.linkedin.com/in/dhruv1086k/" target="_blank">
            <div class="developer text-3xl">Developed by <span>Dhruv Pal</span></div>
        </a>
        <div class="designer text-3xl">
            Designed by 
            <a href="https://www.linkedin.com/in/priyanshusharma02/" target="_blank"><span>Priyanshu Sharma</span></a> & 
            <a href="https://www.linkedin.com/in/abhinav-singh-677021311/" target="_blank"><span>Abhinav Singh</span></a>
        </div>
    `;
    creditsDiv.innerHTML = htmlContent;
} else {
    console.error('Div with class "credits" not found');
}
