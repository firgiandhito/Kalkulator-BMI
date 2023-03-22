const form = document.getElementByclass("form");
const male = document.getElementById("l");
const female = document.getElementById("p");
const age = document.getElementById("usia");
const weight = document.getElementById("berat-badan");
const height = document.getElementById("tinggi-badan");
const alert = document.getElementById("alert")
const alertText = document.getElementById("alert-text")

function calculate() {
    if (
        age.value === "" ||
        weight.value === "" ||
        height.value === "" ||
        (!male.checked && !female.checked)
    ) {
        alert.style.display = "block";
        alertText.innerHTML = 'Harap isi semua data, jangan ada yang kosong!';
    } else {
        countBmi()
    }
}