const input = document.querySelectorAll('.interests-box__tag');
for (let i = 0; i < 10; ++i) {
    input[i].addEventListener('input', resizeInput);
    resizeInput.call(input[i]);

}

function resizeInput() {
    if (this.value.length < 20) {
        this.style.width = this.value.length + "ch";
    }
}

function saveChanges() {
    const inputFields = document.querySelectorAll("input");
    const areaFields = Array.from(document.querySelectorAll("textarea"));

    const inputData = [];
    for (let i = 0; i < inputFields.length; ++i) {
        inputData[i] = inputFields[i].value;
    }

    const areaData = [];
    for (let i = 0; i < areaFields.length; ++i) {
        areaData[i] = areaFields[i].value;
    }

    localStorage.setItem("inputData", JSON.stringify(inputData));
    localStorage.setItem("areaData", JSON.stringify(areaData));
}

const button =
    document.querySelector('.download-btn');
button.addEventListener('click',
    () => {

        saveChanges();

        const content = document.querySelector(".resume-page");

        const opt = {
            margin: 0.2,
            filename: 'resume.pdf',
            image: { type: 'jpeg', quality: 0.98 },
            html2canvas: { scale: 2 },
            jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
        };

        html2pdf().from(content).set(opt).save();
    });

function getChanges() {
    const inputFields = document.querySelectorAll("input");
    const areaFields = document.querySelectorAll("textarea");

    const inputData = JSON.parse(localStorage.getItem("inputData"));
    const areaData = JSON.parse(localStorage.getItem("areaData"));

    if (!inputData || !areaData) {
        return;
    }

    for (let i = 0; i < inputFields.length; ++i) {
        inputFields[i].value = inputData[i];
    }

    for (let i = 0; i < areaFields.length; ++i) {
        areaFields[i].value = areaData[i];
    }
}

window.onclick = saveChanges;
window.onload = getChanges;