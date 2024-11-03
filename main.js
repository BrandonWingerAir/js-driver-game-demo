const score = document.querySelector('.score');
const startMenu = document.querySelector('.start_menu');
const gameScene = document.querySelector('.game_scene');

console.log(score);
console.log(startMenu);
console.log(gameScene);

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
    window.requestAnimationFrame(gameplayLoop);

    let vehicle = document.createElement('div');
    vehicle.innerText = "Vehicle";
    vehicle.setAttribute("class", "vehicle");

    gameScene.appendChild(vehicle);

    player.x = vehicle.offsetLeft;
    player.y = vehicle.offsetTop;
    console.log(player);
    
}

// Key Press
document.addEventListener("keydown", pressOn);
document.addEventListener("keyup", pressOff);

function pressOn(e) {
    e.preventDefault();
    keys[e.key] = true;
    console.log(keys);
}

function pressOff(e) {
    e.preventDefault();
    keys[e.key] = false;
    console.log(keys);
}

// Gameplay Loop
function gameplayLoop() {
    console.log('Gameplay loop running');

    let vehicle = document.querySelector(".vehicle");

    if (player.start) {
        if (keys.ArrowUp) { player.y -= player.speed; }
        if (keys.ArrowDown) { player.y += player.speed; }
        if (keys.ArrowLeft) { player.x -= player.speed; }
        if (keys.ArrowRight) { player.x += player.speed; }

        vehicle.style.left = player.x + 'px';
        vehicle.style.top = player.y + 'px';

        window.requestAnimationFrame(gameplayLoop);
    }
}