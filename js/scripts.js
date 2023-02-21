
const checkboxOne = document.getElementById('checkboxOne');
const checkboxTwo = document.getElementById('checkboxTwo');
const submitBtn = document.getElementById("submitBtn");
checkboxOne.addEventListener('change', function () {
    if (this.checked) {
        checkboxTwo.checked = false;
    }
});

checkboxTwo.addEventListener('change', function () {
    if (this.checked) {
        checkboxOne.checked = false;
    }
});

submitBtn.addEventListener('click', function () {
    if (checkboxOne.checked) {
        console.log(checkboxOne.value)
        location.href = checkboxOne.value;
    } else {
        location.href = checkboxTwo.value;
    }

})
