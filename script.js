// Create stars
const starsContainer = document.getElementById('stars');
for (let i = 0; i < 100; i++) {
  const star = document.createElement('div');
  star.className = 'star';
  star.style.width = Math.random() * 2 + 1 + 'px';
  star.style.height = star.style.width;
  star.style.left = Math.random() * 100 + '%';
  star.style.top = Math.random() * 100 + '%';
  star.style.animationDelay = Math.random() * 3 + 's';
  starsContainer.appendChild(star);
}

let currentSection = 0;

function explode() {
  const btn = document.querySelector('.explode-btn');
  const rect = btn.getBoundingClientRect();
  const centerX = rect.left + rect.width / 2;
  const centerY = rect.top + rect.height / 2;

  btn.classList.add('exploding');

  setTimeout(() => createFirework(centerX, centerY, '#ffeaa7'), 0);
  setTimeout(() => createFirework(centerX, centerY, '#ff9a9e'), 100);
  setTimeout(() => createFirework(centerX, centerY, '#a29bfe'), 200);
  setTimeout(() => createFirework(centerX, centerY, '#74b9ff'), 300);
  setTimeout(() => createFirework(centerX, centerY, '#fecfef'), 400);
  
  setTimeout(() => {
    const celebText = document.getElementById('celebrationText');
    celebText.classList.add('show');
  }, 500);

  setTimeout(() => {
    document.getElementById('introPage').classList.add('hidden');
    document.getElementById('mainContent').classList.add('visible');
  }, 2500);
}

function createFirework(x, y, baseColor) {
  const colors = [baseColor, '#ffffff', '#ffd700', '#ff6b6b', '#4ecdc4'];
  const particleCount = 80;

  for (let i = 0; i < particleCount; i++) {
    const particle = document.createElement('div');
    particle.className = 'particle';
    particle.style.left = x + 'px';
    particle.style.top = y + 'px';
    const color = colors[Math.floor(Math.random() * colors.length)];
    particle.style.backgroundColor = color;
    particle.style.color = color;
    
    document.body.appendChild(particle);

    const angle = (Math.PI * 2 * i) / particleCount;
    const velocity = 8 + Math.random() * 8;
    const vx = Math.cos(angle) * velocity;
    const vy = Math.sin(angle) * velocity;

    animateParticle(particle, x, y, vx, vy);
  }
}

function animateParticle(particle, startX, startY, vx, vy) {
  let x = startX;
  let y = startY;
  let opacity = 1;
  let frame = 0;

  const animate = () => {
    frame++;
    x += vx;
    y += vy;
    opacity -= 0.02;

    particle.style.left = x + 'px';
    particle.style.top = y + 'px';
    particle.style.opacity = opacity;

    if (opacity > 0 && frame < 100) {
      requestAnimationFrame(animate);
    } else {
      particle.remove();
    }
  };

  animate();
}

function showSection(index) {
  document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
  document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
  document.querySelectorAll('.dot').forEach(d => d.classList.remove('active'));
  
  document.getElementById('section' + index).classList.add('active');
  document.querySelectorAll('.nav-btn')[index].classList.add('active');
  document.getElementById('dot' + index).classList.add('active');
  
  currentSection = index;
}
