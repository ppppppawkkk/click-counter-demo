import monkeyUrl from './monkey.jpg';

let count = 0;

const countText = document.querySelector("#count");
const button = document.querySelector("#click-button");
const monkeyImg = document.querySelector("#monkey-img");

button.addEventListener("click", () => {
    count = count + 1;
    countText.textContent = count;

    if (count === 1) {
        button.textContent = "คลิกทำไหมมมมมมมมมมมมม";
    } else if (count === 2) {
        button.textContent = "ยิ่งคลิกยิ่งเอ๋อนะ";
    } else if (count >= 67) {
        button.textContent = count === 67 
            ? "บอกแล้วว่าอย่ากดถึง 67!" 
            : `เกิน 67 มา ${count - 67} ครั้งแล้ว พอได้แล้ว!`;

        if (monkeyImg) {
            monkeyImg.src = monkeyUrl;           // ใส่ Path รูปที่ Vite build ออกมาให้
            monkeyImg.style.display = "inline-block"; // แสดงรูปภาพ
        }
    } else {
        button.textContent = `บอกให้หยุดไง! (กดไป ${count} ครั้งแล้วนะ ถ้ากดถึง 67 มีอะไรให้ดู)`;
    }

    console.log("จำนวนคลิก:", count);
});