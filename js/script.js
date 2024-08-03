const button =
document.querySelector('.download-btn');
button.addEventListener('click',
() => {
    alert("clicked");
});

const input = document.querySelectorAll('.interests-box__tag'); 
const interestsBoxContent = document.querySelector('.interests-box__content');
for (let i = 0; i < 10; ++i){ 
    input[i].addEventListener('input', resizeInput); 
    resizeInput.call(input[i]);

}

function resizeInput() {
    if (this.value.length < 20) {
        this.style.width = this.value.length + "ch";
    }
}


const page = document.querySelector('.wrapper');

const opt = {
    margin: 0.3,
    filename: "resume.pdf",
    image: { type: "svg", quality: 0.98 },
    html2canvas: { scale: 4 },
    jsPDF: { unit: "in", format: "letter", orientation: "portrait" },
  };

html2pdf().from(page).set(opt).save();
