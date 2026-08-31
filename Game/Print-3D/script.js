document.addEventListener("DOMContentLoaded", () => {

    // 1. ควบคุม BUZZ LIGHTYEAR (บินวน 1 นาที -> มาตรงกลางพุ่งลง -> ครบ 2 นาทีทำซ้ำ)
    const buzz = document.getElementById("buzzCharacter");
    buzz.classList.add("buzz-flying");

    let buzzTimer = 0;

    setInterval(() => {
        buzzTimer += 1;

        // นาทีที่ 1 และ นาทีที่ 2 (ทำความเคารพตรงกลางแล้วพุ่งทะลุจอ)
        if (buzzTimer === 60 || buzzTimer === 120) {
            buzz.classList.remove("buzz-flying");
            buzz.classList.add("buzz-reset");

            setTimeout(() => {
                buzz.classList.remove("buzz-reset");
                buzz.classList.add("buzz-flying");
            }, 3000); // ระยะเวลาพุ่งผ่านจอ 3 วินาที
        }

        // รีเซ็ตตัวนับเมื่อครบ 2 นาที (120 วินาที)
        if (buzzTimer >= 120) {
            buzzTimer = 0;
        }
    }, 1000);

    // 2. ควบคุม ไดโนเสาร์พ่นไฟ (เริ่มทำงานทันทีพร้อม Loop CSS)
    const dino = document.getElementById("dinoCharacter");
    dino.classList.add("dino-active");

    // 3. ควบคุม จรวด (ปล่อยพุ่งขึ้นฟ้าทุกๆ 1 นาที)
    const rocket = document.getElementById("rocketCharacter");
    rocket.classList.add("rocket-launching");

});

// --- CODE UI เว็บไซต์ทั่วไป (Slider & Modals) ---
let currentSlideIndex = 0;
const slides = document.querySelectorAll('.slide');

function showSlide(index) {
    slides.forEach(s => s.classList.remove('active'));
    if (index >= slides.length) currentSlideIndex = 0;
    else if (index < 0) currentSlideIndex = slides.length - 1;
    else currentSlideIndex = index;
    slides[currentSlideIndex].classList.add('active');
}

setInterval(() => {
    currentSlideIndex++;
    showSlide(currentSlideIndex);
}, 5000);

// Modal Controls
const uploadModal = document.getElementById('uploadModal');
document.querySelectorAll('.openUploadModal').forEach(btn => {
    btn.addEventListener('click', () => uploadModal.classList.add('active'));
});
document.getElementById('closeUploadModal').addEventListener('click', () => {
    uploadModal.classList.remove('active');
});