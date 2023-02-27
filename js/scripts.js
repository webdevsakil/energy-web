

// checkbox

const mainArea = document.getElementById("mainArea");
const inputElements = mainArea.querySelectorAll("input");
const inputElementsLength = inputElements.length;
const submitBtn = document.getElementById("submitBtn");

for (let i = 0; i < inputElementsLength; i++) {
    inputElements[i].addEventListener('change', function () {
        unchecked(inputElements)
        inputElements[i].checked = true;
        if (inputElements[i].checked) {
            location.href = inputElements[i].value;
        }
    })
}

function unchecked(el) {
    el.forEach(element => {
        element.checked = false;
    });
}

submitBtn.addEventListener('click', function () {

    for (let i = 0; i < inputElementsLength; i++) {
        if (inputElements[i].checked === true) {
            location.href = inputElements[i].value
        }
    }

})







