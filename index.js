let ctx = document.getElementById("canvasMoto");
let canvasMoto = ctx.getContext("2d");

let backImg = new Image();
let motoImg = new Image();
let boxImg = new Image();
let coinImg = new Image();

backImg.src = "img/map2.jpg";
motoImg.src = "img/truTri.jpg";
boxImg.src = "img/yeuQuai.jpg";
coinImg.src = "img/sachThanh.jpg";

ctx.width = 1100;
ctx.height = 720;
let mapHeight = ctx.height * 10;

function Map() {
    this.x = 0;
    this.y = -mapHeight + ctx.height;
    this.newY = function () {
        this.y += 20;
    }
    this.update = function () {
        if (this.y >= -350*10) {
            this.y = -mapHeight + ctx.height;
            canvasMoto.drawImage(backImg, 0, this.y, ctx.width, mapHeight);

        } else {
            box.newY();
            coin.newY();
            this.y += 20;
            canvasMoto.drawImage(backImg, 0, this.y, ctx.width, mapHeight);
        }
    }
}

function Moto() {
    this.x = ctx.width / 2;
    this.y = ctx.height - 60;
    this.newY = function () {
        this.y -= 0.1;
        map.newY();
    }
    this.newX = function (value) {
        if (value == 39) {
            this.x += 20;
        } else {
            this.x -= 20;
        }
    }
    this.update = function () {
        this.y -= 0.1;
        canvasMoto.clearRect(0, 0, ctx.width, ctx.height);
        map.update();
        canvasMoto.drawImage(motoImg, this.x, this.y, 40, 60);
        if (this.y - 55 <= box.y) {
            if (this.x <= box.x - 40 || this.x >= box.x + 40) {

            } else {
                clearInterval(game);
                alert("count =" + coin.count);
                alert("game over");
            }
        }

        //coin
        if (this.y - 55 <= coin.y) {
            if (this.x <= coin.x - 40 || this.x >= coin.x + 40) {

            } else {
                coin.newCount(true);
                coin.newX();

            }
        }
    }
}

function BoxRandom() {
    this.x = Math.floor(Math.random() * ctx.width / 2);
    this.y = Math.floor(Math.random() * (ctx.height - 400));
    this.newY = function () {
        this.y += 10;
    }
    this.update = function () {
        if (this.y > 720) {
            this.y = Math.floor(Math.random() * (ctx.height - 400));
            this.x = Math.floor(Math.random() * ctx.width / 2);

        }
        canvasMoto.drawImage(boxImg, this.x, this.y, 40, 60);

    }
}

function CoinRandom() {
    this.x = Math.floor(Math.random() * ctx.width / 2);
    this.y = Math.floor(Math.random() * (ctx.height - 400));

    this.count = 0;
    this.newX = function () {
        this.x = -100;
    }
    this.newY = function () {
        this.y += 10;
    }
    this.newCount = function (value) {
        if (value == true) {
            this.count += 1;
        }
    }
    this.update = function () {
        if (this.y > 720) {
            this.y = Math.floor(Math.random() * (ctx.height - 400));
            this.x = Math.floor(Math.random() * ctx.width / 2);

        }
        canvasMoto.drawImage(coinImg, this.x, this.y, 40, 60);

    }
}

let moto = new Moto();
let map = new Map();
let box = new BoxRandom();
let coin = new CoinRandom();

function loopGame() {
    moto.update();
    box.update();
    coin.update();
    canvasMoto.font = "30px Arial";
    canvasMoto.fillText(coin.count, 100, 100);
}

let game;

let playGame = document.getElementById("play");
playGame.addEventListener("click", startGame);

function startGame() {
    playGame.style.display = "none";
    game = setInterval(loopGame, 1000 / 60);

}
window.addEventListener("keydown", keyInput);

function keyInput(evt) {
    switch (evt.keyCode) {
        case 17:
            moto.newY();
            break;
        case 39:
            moto.newX(39);
            break;
        case 37:
            moto.newX(37);
            break;
        case 38:
            moto.newY();
            break;
        default:
            break;
    }
}