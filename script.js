/* NAVBAR - CURSOR KE ATAS */
document.addEventListener("mousemove", e => {
  document.getElementById("navbar")
    .classList.toggle("show", e.clientY < 40);
});

/* TERMINAL TYPING */
const commandText = "whoami";
const commandEl = document.getElementById("command");
const outputEl = document.getElementById("terminal-output");

let i = 0;
function typeCommand() {
  if (i < commandText.length) {
    commandEl.textContent += commandText[i++];
    setTimeout(typeCommand, 120);
  } else {
    setTimeout(() => {
      outputEl.textContent =
`abdi_dzil_ikram
cyber_security_backend_engineer`;
    }, 500);
  }
}
typeCommand();

/* MATRIX BACKGROUND */
const canvas = document.getElementById("matrix");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const chars = "01";
const fontSize = 14;
const columns = canvas.width / fontSize;
const drops = Array(Math.floor(columns)).fill(1);

function drawMatrix() {
  ctx.fillStyle = "rgba(0,0,0,0.05)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = "#22c55e";
  ctx.font = fontSize + "px monospace";

  drops.forEach((y, i) => {
    const text = chars[Math.floor(Math.random() * chars.length)];
    ctx.fillText(text, i * fontSize, y * fontSize);
    if (y * fontSize > canvas.height && Math.random() > 0.975) {
      drops[i] = 0;
    }
    drops[i]++;
  });
}

setInterval(drawMatrix, 50);
