// Heart button click interaction
const heartBtn = document.getElementById('heartBtn');
const hiddenMessage = document.getElementById('hiddenMessage');
let messageShown = false;

heartBtn.addEventListener('click', function (e) {
    if (!messageShown) {
        hiddenMessage.classList.add('show');
        heartBtn.querySelector('.btn-text').textContent = 'เก่งมากก 🥰';
        messageShown = true;

        // Create floating hearts
        createFloatingHearts(e);
    } else {
        // Create more hearts on subsequent clicks
        createFloatingHearts(e);
    }
});

// Create floating hearts animation
function createFloatingHearts(e) {
    const hearts = ['💗', '💝', '🌸', '✨', '💕'];
    const numHearts = 5;

    for (let i = 0; i < numHearts; i++) {
        setTimeout(() => {
            const heart = document.createElement('div');
            heart.classList.add('floating-heart');
            heart.textContent = hearts[Math.floor(Math.random() * hearts.length)];

            // Position near the button
            const rect = heartBtn.getBoundingClientRect();
            heart.style.left = rect.left + rect.width / 2 + (Math.random() - 0.5) * 100 + 'px';
            heart.style.top = rect.top + 'px';

            document.body.appendChild(heart);

            // Remove heart after animation
            setTimeout(() => {
                heart.remove();
            }, 4000);
        }, i * 100);
    }
}

// Add subtle hover effect to emoji
const emoji = document.querySelector('.emoji');
emoji.addEventListener('mouseenter', function () {
    this.style.transform = 'scale(1.1) rotate(10deg)';
});

emoji.addEventListener('mouseleave', function () {
    this.style.transform = 'scale(1) rotate(0deg)';
});

// Add smooth transition to emoji
emoji.style.transition = 'transform 0.3s ease';

// Add interactive sparkles on mouse move
document.addEventListener('mousemove', function (e) {
    if (Math.random() > 0.95) {
        createSparkle(e.clientX, e.clientY);
    }
});

function createSparkle(x, y) {
    const sparkle = document.createElement('div');
    sparkle.textContent = '✨';
    sparkle.style.position = 'fixed';
    sparkle.style.left = x + 'px';
    sparkle.style.top = y + 'px';
    sparkle.style.pointerEvents = 'none';
    sparkle.style.fontSize = '15px';
    sparkle.style.zIndex = '1000';
    sparkle.style.animation = 'sparkleFloat 1s ease-out forwards';

    document.body.appendChild(sparkle);

    setTimeout(() => {
        sparkle.remove();
    }, 1000);
}

// Scroll reveal animation
function revealOnScroll() {
    const reveals = document.querySelectorAll('.scroll-reveal');

    reveals.forEach(reveal => {
        const windowHeight = window.innerHeight;
        const elementTop = reveal.getBoundingClientRect().top;
        const elementVisible = 150;

        if (elementTop < windowHeight - elementVisible) {
            reveal.classList.add('visible');
        }
    });
}

window.addEventListener('scroll', revealOnScroll);
// Initial check
revealOnScroll();

// Quiz response function
function showResponse(message) {
    const response = document.getElementById('quizResponse');
    response.textContent = message;
    response.style.opacity = '0';
    setTimeout(() => {
        response.style.opacity = '1';
        response.style.transition = 'opacity 0.5s ease';
    }, 100);

    // Create confetti effect
    createConfetti();
}

function createConfetti() {
    const emojis = ['🎉', '🎊', '✨', '💝', '🌸', '💕'];
    for (let i = 0; i < 10; i++) {
        setTimeout(() => {
            const confetti = document.createElement('div');
            confetti.textContent = emojis[Math.floor(Math.random() * emojis.length)];
            confetti.style.position = 'fixed';
            confetti.style.left = Math.random() * window.innerWidth + 'px';
            confetti.style.top = '-50px';
            confetti.style.fontSize = '25px';
            confetti.style.zIndex = '1000';
            confetti.style.pointerEvents = 'none';
            confetti.style.animation = 'floatHeart 3s ease-in forwards';

            document.body.appendChild(confetti);

            setTimeout(() => {
                confetti.remove();
            }, 3000);
        }, i * 100);
    }
}

// Escape button - runs away from cursor (ไม่มีวันกดได้!)
const escapeBtn = document.getElementById('escapeBtn');
let escapeCount = 0;

function moveEscapeButton() {
    escapeCount++;

    if (escapeCount === 1) {
        escapeBtn.textContent = 'เอ๊ะ? 🤔';
    } else if (escapeCount === 2) {
        escapeBtn.textContent = 'จะทำไมอะ ไม่ให้กด!!!';
    } else if (escapeCount === 3) {
        escapeBtn.textContent = 'ไม่ให้กดดด!!! 😤';
    } else if (escapeCount === 4) {
        escapeBtn.textContent = 'จับไม่ได้หรอก! 😝';
    } else if (escapeCount === 5) {
        escapeBtn.textContent = 'กลับไปกดปุ่มเเรกเลยย 😡';
    } else if (escapeCount === 6) {
        escapeBtn.textContent = 'บอกแล้วไงงงง ไปกดปุ่มเเรกเลยยยย! 😤';
    } else if (escapeCount === 7) {
        escapeBtn.textContent = 'ทำไมดื้อจังเลยยยยย!!! 😠';
    } else if (escapeCount === 8) {
        escapeBtn.textContent = 'จะโกดละนะ ไม่ให้กดดดด! 🙅‍♀️';
    } else if (escapeCount === 9) {
        escapeBtn.textContent = 'ไปกดปุ่มบนน!! 😤😤😤';
    } else if (escapeCount >= 10) {
        escapeBtn.textContent = 'จะหนีไปไกลๆละะะ! 😫💨';
    }

    // Move button to random position - หลังรอบ 5 หนีไกลขึ้น!
    const container = escapeBtn.parentElement;
    const containerRect = container.getBoundingClientRect();
    const btnRect = escapeBtn.getBoundingClientRect();

    const maxX = containerRect.width - btnRect.width;
    const maxY = containerRect.height - btnRect.height;

    // ถ้าเกินรอบ 5 ให้หนีไกลขึ้นเรื่อยๆ
    let escapeDistance = escapeCount >= 5 ? 300 + (escapeCount - 5) * 50 : 200;

    const randomX = Math.random() * Math.min(maxX, escapeDistance) - escapeDistance / 2;
    const randomY = Math.random() * Math.min(maxY, escapeDistance / 2) - escapeDistance / 4;

    escapeBtn.style.transform = `translate(${randomX}px, ${randomY}px)`;
    escapeBtn.style.transition = 'transform 0.3s ease';
}

// รองรับทั้ง mouse และ touch
escapeBtn.addEventListener('mouseenter', moveEscapeButton);
escapeBtn.addEventListener('touchstart', function (e) {
    e.preventDefault(); // ป้องกันการกดบน mobile
    moveEscapeButton();
});
// รองรับการคลิกบนคอม - ปุ่มจะหนีทันทีที่พยายามคลิก!
escapeBtn.addEventListener('click', function (e) {
    e.preventDefault(); // ป้องกันการกด
    moveEscapeButton();
});
