let ctx = document.getElementById("canvasMoto");
let canvasMoto = ctx.getContext("2d");
let backImg = new Image();
let motoImg = new Image();
let boxImg = new Image();
let coinImg = new Image();
backImg.src = "https://st.gamevui.com/images/image/2017/08/21/duong-dua-khac-nghiet-hd1.jpg";
motoImg.src = "https://media.istockphoto.com/id/1151058903/vi/vec-to/xe-%C4%91ua-nh%C3%ACn-t%E1%BB%AB-tr%C3%AAn-cao.jpg?s=1024x1024&w=is&k=20&c=ujfE33-DOR4cnS5yQegfdYvn1gr0HOtaw-JhySVtBSo=";
boxImg.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQW6O2wbv68dorOKeDVkrOvE_CFR9ozdkkRtg&usqp=CAU";
coinImg.src = "https://img.lovepik.com/free-png/20210928/lovepik-game-shopping-consumption-gold-coins-png-image_401751616_wh1200.png";
ctx.width = 1100;
ctx.height = 720;
let mapHeight = ctx.height * 10;
function Map() {
    this.x = 0;
    this.y = -mapHeight + ctx.height;
    this.newY = function () {
        this.y += 60;
    }
    this.update = function () {
        if (this.y >= 0) {
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
        this.y -= 0.5;
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
        this.y -= 0.5;
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
let playGame = document.getElementById("play");
playGame.addEventListener("click", startGame);
let game;
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