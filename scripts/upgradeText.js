const text = document.getElementById(`upgradeText`);
const phrases = [`UPGRADE CHANCES`, `A FEW MORE`, `STILL UPGRADE`];

setInterval(() => {
    if (text.textContent == `TAP TO OPEN`) return;

    text.textContent = phrases[Math.floor(Math.random() * phrases.length)];
}, 1500);