let count = 0;

const countText = document.querySelector("#count")
const button = document.querySelector("#click-button")

button.addEventListener("click", () => {
    count = count + 1;
    countText.textContent = count;

    console.log("จำนวนคลิก:", count);
})