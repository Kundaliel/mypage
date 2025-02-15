const canvas = document.getElementById('bg-canvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const dotSpacing = 50;  // Dot spacing
const dotSize = 1;  // Dot size
const animationSpeed = 0.32; // Dot moving speed
const enableTrail = true;  // Shadow (Trail) effect

class Dot {
    constructor(x, y) {
        this.baseX = x;
        this.baseY = y;
        this.x = x;
        this.y = y;
    }

    update() {
        this.x += animationSpeed;
        this.y -= animationSpeed;
        if (this.x > canvas.width + dotSize) {
            this.x = -dotSize;
        }
        if (this.y < -dotSize) {
            this.y = canvas.height + dotSize;
        }
    }
    draw() {
        if (enableTrail) {
            ctx.shadowColor = 'rgba(255, 255, 255, 0.6)';
            ctx.shadowBlur = 12;
        } else {
            ctx.shadowBlur = 0;
        }
        ctx.beginPath();
        ctx.arc(this.x, this.y, dotSize, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(255, 255, 255, 0.2)';
        ctx.fill();
        ctx.closePath();
    }
}

const dots = [];
for (let x = dotSpacing / 2; x < canvas.width; x += dotSpacing) {
    for (let y = dotSpacing / 2; y < canvas.height; y += dotSpacing) {
        dots.push(new Dot(x, y));
    }
}

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    dots.forEach((dot) => {
        dot.update();
        dot.draw();
    });

    requestAnimationFrame(animate);
}

window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    dots.length = 0;
    for (let x = dotSpacing / 2; x < canvas.width; x += dotSpacing) {
        for (let y = dotSpacing / 2; y < canvas.height; y += dotSpacing) {
            dots.push(new Dot(x, y));
        }
    }
});

animate();
