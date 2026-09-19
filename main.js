let count = 0;

const countText = document.querySelector("#count");
const button = document.querySelector("#click-button");

button.addEventListener("click", () => {
    count = count + 1;
    countText.textContent = count;

    if (count === 1) {
        button.textContent = "คลิกทำไหมมมมมมมมมมมมม";
    } else if (count === 2) {
        button.textContent = "ยิ่งคลิกยิ่งเอ๋อนะ";
    } else {
        button.textContent = `บอกให้หยุดไง! (กดไป ${count} ครั้งแล้วนะ ถ้ากดถึง 67 มีอะไรให้ดู)`;
    }

    console.log("จำนวนคลิก:", count);
});