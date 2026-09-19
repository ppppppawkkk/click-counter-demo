let count = 0;

const countText = document.querySelector("#count");
const button = document.querySelector("#click-button");

button.addEventListener("click", () => {
    count = count + 1;
    countText.textContent = count;

    if (count === 1) {
        button.textContent = "คลิกทำไหมมมมมมมมมมมมม";
    } else if (count === 2) {
        button.textContent = "หยุดดดดดดดดดดดดด";
    } else {
        button.textContent = `บอกให้หยุดไง! (กดไป ${count} ครั้งแล้วนะ)`;
    }

    console.log("จำนวนคลิก:", count);
});