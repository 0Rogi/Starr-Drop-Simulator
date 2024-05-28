const starr = document.getElementById(`starr`);
let opened = false;
let cooldown = false;

setInterval(() => {
    if (opened) {
        document.addEventListener(`click`, () => {
            window.location.reload();
        })
    }

    //? Remove Cooldown for Upgrading (Bug Prevention)
    if (cooldown) cooldown = !cooldown;
}, 500);

starr.addEventListener(`click`, e => {
    if (cooldown) return;

    const currentUpgrade = document.getElementById(`current`);

    if (!currentUpgrade) {
        //? Get the rarity
        const currentRarity = document.getElementById(`rarityText`);

        //? Calibrating prizes
        let prizes = [];
        switch (currentRarity.textContent.toLowerCase()) {
            case `rare`: {
                prizes = [`50x Coins`, `25x Power Points`, `10x Credits`, `10x Bling`, `25x XP Doublers`];
            } break;
            case `super rare`: {
                prizes = [`100x Coins`, `50x Power Points`, `50x Credits`, `20x Bling`, `200x XP Doublers`];
            } break;
            case `epic`: {
                prizes = [`500x Coins`, `200x Power Points`, `100x Credits`, `50x Bling`, `500x XP Doublers`];
            } break;
            case `mythic`: {
                prizes = [`700x Coins`, `500x Power Points`, `200x Credits`, `100x Bling`, `700x XP Doublers`];
            } break;
            case `legendary`: {
                prizes = [`1000x Coins`, `1000x Power Points`, `500x Credits`, `200x Bling`, `1000x XP Doublers`];
            } break;
            default: {
                prizes = [`50x Coins`, `25x Power Points`, `10x Credits`, `10x Bling`, `25x XP Doublers`];
            } break;
        }

        //? Choosing prize
        const prize = prizes[Math.floor(Math.random() * prizes.length)];

        //? Displaying prize
        document.getElementById(`container`).remove();
        document.body.style.backgroundImage = 'radial-gradient(white 10%, rgb(0, 89, 255), rgb(2, 92, 194))';

        const div = document.createElement(`div`);
        div.className = `container`;
        div.id = `container`;
        document.body.appendChild(div);

        const img = document.createElement(`img`);
        img.className = `prize`
        const text = document.createElement(`h2`);
        text.textContent = prize;
        const note = document.createElement(`p`);
        note.textContent = `Press Anywhere to Open a New Starr Drop`;

        if (prize.includes(`Coins`)) {
            img.src = `./assets/images/prizes/coins.png`;
        } else if (prize.includes(`Power Points`)) {
            img.src = `./assets/images/prizes/power_points.png`;
        } else if (prize.includes(`Credits`)) {
            img.src = `./assets/images/prizes/credits.png`;
        } else if (prize.includes(`Bling`)) {
            img.src = `./assets/images/prizes/blings.png`;
        } else if (prize.includes(`XP Doublers`)) {
            img.src = `./assets/images/prizes/xp_doublers.png`;
        }

        document.getElementById(`container`).appendChild(img);
        document.getElementById(`container`).appendChild(text);
        document.getElementById(`container`).appendChild(note);

        opened = true;

        return;
    }

    currentUpgrade.id = ``;
    currentUpgrade.src = `./assets/images/empty-upgrade.png`;

    //? Animation
    starr.id = `rotate`;
    setTimeout(() => {
        starr.id = `starr`;
    }, 300);

    //? Upgrade Starr Drop
    let upgrades = parseInt(currentUpgrade.getAttribute(`name`)) + 1;
    const currentRarity = document.getElementById(`rarityText`);
    switch (currentRarity.textContent.toLowerCase()) {
        case `rare`: {
            let upgrade = Math.random() <= 0.28;
            if (upgrade) {
                currentRarity.textContent = `SUPER RARE`;
                currentRarity.style.color = `rgb(147, 207, 228)`;
                document.body.style.backgroundImage = 'radial-gradient(white 10%, rgb(31, 59, 197), rgb(0, 47, 128))';
            }
        } break;
        case `super rare`: {
            let upgrade = Math.random() <= 0.15;
            if (upgrade) {
                currentRarity.textContent = `EPIC`;
                currentRarity.style.color = `rgb(214, 161, 242)`;
                document.body.style.backgroundImage = 'radial-gradient(white 10%, rgb(153, 31, 197), rgb(127, 0, 182))';
            }
        } break;
        case `epic`: {
            let upgrade = Math.random() <= 0.05;
            if (upgrade) {
                currentRarity.textContent = `MYTHIC`;
                currentRarity.style.color = `rgb(255, 147, 141)`;
                document.body.style.backgroundImage = 'radial-gradient(white 10%, rgb(197, 50, 31), rgb(182, 0, 0))';
            }
        } break;
        case `mythic`: {
            let upgrade = Math.random() <= 0.05;
            if (upgrade) {
                currentRarity.textContent = `LEGENDARY`;
                currentRarity.style.color = `rgb(251, 255, 141)`;
                document.body.style.backgroundImage = 'radial-gradient(white 10%, rgb(197, 194, 31), rgb(182, 179, 0))';
            }
        } break;
    }

    //? Set a Cooldown for Upgrading (Bug Prevention)
    cooldown = true;

    //? Change Upgrade Images
    let nextUpgrade = document.getElementsByName(upgrades)[0];
    if (nextUpgrade) {
        nextUpgrade.src = `./assets/images/upgrade-mark.png`;
        nextUpgrade.id = `current`;
    } else {
        let circle = document.getElementsByClassName(`circle`);
        for (let i = 0; i < circle.length; i++) {
            circle[i].style.visibility = `hidden`;
        }
        document.getElementById(`upgradeText`).textContent = `TAP TO OPEN`;
    }
});