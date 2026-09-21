// ข้อมูลคำถามปั่นๆ
const questions = [
    {
        title: "เวลาเพื่อนชวนไปหาดวอนตอนเที่ยงคืน คุณมักจะตอบว่า?",
        options: [
            "จัดไป ขอแวะไปซื้อน้ำเก๊กฮวยก่อน",
            "ไปดิ แต่ขอนั่งซ้อนท้ายแนบชิดนะ",
            "ไม่ว่าง กำลังแก้บั๊กส่งโปรเจกต์ 23:59",
            "ไปห้องแกเลยดีกว่า ไม่ต้องไปหาดหรอก"
        ]
    },
    {
        title: "เวลาเขียนโค้ดเจอ Error สีแดงเต็มจอ คุณทำยังไง?",
        options: [
            "ก๊อปวาง Stack Overflow รัวๆ",
            "ทุบโต๊ะ พร้อมยิ้มมุมปากแล้วหันไปหาเพื่อน",
            "หันไปอ้อนเพื่อนข้างๆ ให้ช่วยแก้",
            "ไปนอนมา 1 ตื่นแล้วมันหายเอง"
        ]
    },
    {
        title: "สเปกคนที่เดินผ่านหน้าคณะที่เห็นแล้วเหลียวหลังทันที?",
        options: [
            "คนน่ารัก ยิ้มหวาน ออร่าจับ",
            "กล้ามแน่น มีซิกแพก กลิ่นน้ำหอมฟุ้ง",
            "คนที่แก้โค้ดชวนเราเข้ากลุ่มด้วย",
            "หมาจรแถวตึกคณะ น่ารักดี"
        ]
    },
    {
        title: "ถ้าให้เลือกนั่งกินเหล้ากับเพื่อน 2 ต่อ 2 จะเลือกที่ไหน?",
        options: [
            "ร้านนั่งชิลล์แถวซอยสดใส",
            "นั่งมองตากันตรงมุมมืดหาดวอน",
            "บนห้องเพื่อน เปิดแอร์ฉ่ำๆ สองคน",
            "ร้านนมสดใสใส ไม่เมาเหล้าแต่เมารัก"
        ]
    }
];

let currentStep = 0;
let victimName = "คุณ";

// ดึง Elements จากหน้าเว็บ
const stepStart = document.querySelector("#step-start");
const stepQuiz = document.querySelector("#step-quiz");
const stepScanning = document.querySelector("#step-scanning");
const stepResult = document.querySelector("#step-result");

const inputName = document.querySelector("#friend-name");
const btnStart = document.querySelector("#btn-start");
const btnRestart = document.querySelector("#btn-restart");

const questionText = document.querySelector("#question-text");
const questionNumber = document.querySelector("#question-number");
const quizProgress = document.querySelector("#quiz-progress");
const optionsContainer = document.querySelector("#options-container");

const scanStatus = document.querySelector("#scan-status");
const scanProgress = document.querySelector("#scan-progress");
const displayName = document.querySelector("#display-name");

// เริ่มทำแบบทดสอบ
btnStart.addEventListener("click", () => {
    const name = inputName.value.trim();
    if (!name) {
        alert("กรุณาใส่ชื่อก่อน เดี๋ยวผลตรวจไม่ตรง!");
        return;
    }
    victimName = name;

    stepStart.classList.add("hidden");
    stepQuiz.classList.remove("hidden");
    loadQuestion(0);
});

// แสดงคำถามแต่ละข้อ
function loadQuestion(index) {
    currentStep = index;
    const q = questions[index];
    questionText.textContent = q.title;
    questionNumber.textContent = `ข้อ ${index + 1}/${questions.length}`;
    quizProgress.style.width = `${((index + 1) / questions.length) * 100}%`;

    optionsContainer.innerHTML = "";
    q.options.forEach((opt) => {
        const btn = document.createElement("button");
        btn.className = "opt-btn";
        btn.textContent = opt;
        btn.addEventListener("click", () => {
            if (currentStep + 1 < questions.length) {
                loadQuestion(currentStep + 1);
            } else {
                startScanning();
            }
        });
        optionsContainer.appendChild(btn);
    });
}

// แถบหลอกประมวลผล
function startScanning() {
    stepQuiz.classList.add("hidden");
    stepScanning.classList.remove("hidden");

    const messages = [
        "กำลังดึงความเกย์...",
        "กำลังเจาะประวัติการแชทเกย์...",
        "ตรวจพบความเกย์ในสมอง...",
        "กำลังประมวลผลอัลกอริทึม Gaydar Quantum...",
        "วิเคราะห์ผลเสร็จสิ้น 100%!"
    ];

    let progress = 0;
    let msgIdx = 0;

    const interval = setInterval(() => {
        progress += 5;
        scanProgress.style.width = `${progress}%`;

        if (progress % 20 === 0 && msgIdx < messages.length) {
            scanStatus.textContent = messages[msgIdx];
            msgIdx++;
        }

        if (progress >= 100) {
            clearInterval(interval);
            setTimeout(showResult, 400);
        }
    }, 100);
}

// หน้าเฉลยหักมุมรูปลิง
function showResult() {
    stepScanning.classList.add("hidden");
    stepResult.classList.remove("hidden");
    displayName.textContent = victimName;

    // เอฟเฟกต์สั่นการ์ดตกใจตอนเฉลย
    const card = document.querySelector(".card");
    if (card) {
        card.style.animation = "shake 0.5s ease-in-out";
    }
}

// ปุ่มรีเซ็ตกลับไปแกล้งคนอื่นต่อ
btnRestart.addEventListener("click", () => {
    inputName.value = "";
    const card = document.querySelector(".card");
    if (card) card.style.animation = "";
    stepResult.classList.add("hidden");
    stepStart.classList.remove("hidden");
});