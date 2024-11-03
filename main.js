const score = document.querySelector('.score');
const startMenu = document.querySelector('.start_menu');
const gameScene = document.querySelector('.game_scene');

// console.log(score);
// console.log(startMenu);
// console.log(gameScene);

let player = {
    speed: 5
};

let keys = {
    ArrowUp: false,
    ArrowDown: false,
    ArrowRight: false,
    ArrowLeft: false
}

// Start Menu
startMenu.addEventListener("click", startGame);

function startGame() {
    startMenu.classList.add("hide");
    gameScene.classList.remove("hide");

    player.start = true;

    for (let x = 0; x < 6; x++) {
        let div = document.createElement('div');
        div.classList.add("line");
        div.style.top = (x * 150) + "px";
        gameScene.appendChild(div);
    }

    window.requestAnimationFrame(gameplayLoop);

    let vehicle = document.createElement('div');
    
    vehicle.innerText = "Vehicle";
    vehicle.setAttribute("class", "vehicle");

    gameScene.appendChild(vehicle);

    player.x = vehicle.offsetLeft;
    player.y = vehicle.offsetTop;
    // console.log(player);
}

// Gameplay Loop
function gameplayLoop() {
    // console.log('Gameplay loop running');

    let vehicle = document.querySelector(".vehicle");
    let road = gameScene.getBoundingClientRect();
    // console.log(player.x);

    if (player.start) {
        if (keys.ArrowUp && player.y > (road.top - 21)) { 
            player.y -= player.speed; 
        }

        if (keys.ArrowDown && player.y < (road.bottom - 174)) { 
            player.y += player.speed; 
        }

        if (keys.ArrowLeft && player.x > 0) { 
            player.x -= player.speed; 
        }

        if (keys.ArrowRight && player.x < (road.width - 50)) { 
            player.x += player.speed; 
        }

        vehicle.style.left = player.x + 'px';
        vehicle.style.top = player.y + 'px';

        window.requestAnimationFrame(gameplayLoop);
    }
}

// Key Press
document.addEventListener("keydown", pressOn);
document.addEventListener("keyup", pressOff);

function pressOn(e) {
    e.preventDefault();
    keys[e.key] = true;
    // console.log(keys);
}

function pressOff(e) {
    e.preventDefault();
    keys[e.key] = false;
    // console.log(keys);
}