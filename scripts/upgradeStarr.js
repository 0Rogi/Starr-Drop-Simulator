const starr = document.getElementById(`starr`);

starr.addEventListener(`click`, e => {
    const currentUpgrade = document.getElementById(`current`);

    if (!currentUpgrade) {
        // TODO Aprire Starr Drop
        return;
    }

    currentUpgrade.id = ``;
    currentUpgrade.src = ``;

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
            let upgrade = Math.random() <= 0.02;
            if (upgrade) {
                currentRarity.textContent = `LEGENDARY`;
                currentRarity.style.color = `rgb(251, 255, 141)`;
                document.body.style.backgroundImage = 'radial-gradient(white 10%, rgb(197, 194, 31), rgb(182, 179, 0))';
            }
        } break;
    }

    //? Change Upgrade Images
    let nextUpgrade = document.getElementsByName(upgrades)[0];
    if (nextUpgrade) {
        nextUpgrade.src = `./assets/images/upgrade-mark.png`;
        nextUpgrade.id = `current`;
    } else {
        document.getElementById(`upgradeText`).textContent = `TAP TO OPEN`;
    }
});