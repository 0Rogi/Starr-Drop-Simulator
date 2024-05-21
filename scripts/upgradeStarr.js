const starr = document.getElementById(`starr`);
let opened = false;

setInterval(() => {
    if(opened) {
        document.addEventListener(`click`, () => {
            window.location.reload();
        })
    }
}, 500);

starr.addEventListener(`click`, e => {
    const currentUpgrade = document.getElementById(`current`);

    if (!currentUpgrade) {
        //? Get the rarity
        const currentRarity = document.getElementById(`rarityText`);

        //? Calibrating Prices
        let prices = [];
        switch (currentRarity.textContent.toLowerCase()) {
            case `rare`: {
                prices = [`50x Coins`, `25x Power Points`, `10x Credits`, `10x Bling`, `25x XP Doublers`];
            } break;
            case `super rare`: {
                prices = [`100x Coins`, `50x Power Points`, `50x Credits`, `20x Bling`, `200x XP Doublers`];
            } break;
            case `epic`: {
                prices = [`500x Coins`, `200x Power Points`, `100x Credits`, `50x Bling`, `500x XP Doublers`];
            } break;
            case `mythic`: {
                prices = [`700x Coins`, `500x Power Points`, `200x Credits`, `100x Bling`, `700x XP Doublers`];
            } break;
            case `legendary`: {
                prices = [`1000x Coins`, `1000x Power Points`, `500x Credits`, `200x Bling`, `1000x XP Doublers`];
            } break;
            default: {
                prices = [`50x Coins`, `25x Power Points`, `10x Credits`, `10x Bling`, `25x XP Doublers`];
            } break;
        }

        //? Choosing Price
        const price = prices[Math.floor(Math.random() * prices.length)];

        //? Displaying Price
        document.getElementById(`container`).remove();
        document.body.style.backgroundImage = 'radial-gradient(white 10%, cyan, blue)';

        const div = document.createElement(`div`);
        div.className = `container`;
        div.id = `container`;
        document.body.appendChild(div);
        
        const img = document.createElement(`img`);
        const text = document.createElement(`h2`);
        text.textContent = price;

        if (price.includes(`Coins`)) {
            img.src = `./assets/images/prices/coins.png`;
        } else if (price.includes(`Power Points`)) {
            img.src = `./assets/images/prices/power_points.png`;
        } else if (price.includes(`Credits`)) {
            img.src = `./assets/images/prices/credits.png`;
        } else if (price.includes(`Bling`)) {
            img.src = `./assets/images/prices/blings.png`;
        } else if (price.includes(`XP Doublers`)) {
            img.src = `./assets/images/prices/xp_doublers.png`;
        }

        document.getElementById(`container`).appendChild(img);
        document.getElementById(`container`).appendChild(text);
        
        opened = true;

        return;
    }

    currentUpgrade.id = ``;
    currentUpgrade.src = `./assets/images/empty-upgrade.png`;

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
        let circle = document.getElementsByClassName(`circle`);
        for (let i = 0; i < circle.length; i++) {
            circle[i].style.visibility = `hidden`;
        }
        document.getElementById(`upgradeText`).textContent = `TAP TO OPEN`;
        // document.getElementById(`starr`).style.width = `32%`
        // document.getElementById(`starr`).style.height = `32%`
    }
});