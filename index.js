// let ctx=document.getElementById("canvasMoto").getContext("2d");
// let imgObj= new Image();
// let backObj= new Image();
// backObj.onload=function(){
//     ctx.drawImage(backObj,0,0,1400,700);
// }

// let moto=new Moto(5,5);

// imgObj.onload=function(){
//     ctx.drawImage(imgObj,700,650,40,60);
// }

// function Moto(){
//     this.x=5;
//     this.y=5;
//     this.setX=function(value){
//         this.x=this.x+value;
//         return this.x;
//     }
//     this.setY= function(value){
//         this.y=this.y+value;
//         return this.y;
//     }
// }
function startGame() {
    myGameMoto.start();
}
let myGameMoto = {
    canvas: document.getElementById("canvasMoto"),
    start: function () {
        this.canvas.width = 480;
        this.canvas.height = 270;
        this.context = this.canvas.getContext("2d");
        
        document.body.insertBefore(this.canvas, document.body.childNodes[0]);
    }
}

function Moto(x, y) {
    this.width = 40;
    this.height = 60;
    this.x = x;
    this.y = y;
    ctx = myGameMoto.context;
    let imgObj = new Image();

    imgObj.onload = function () {
        ctx.drawImage(imgObj, 0, 0, 40, 60);
    }
    imgObj.src="https://media.istockphoto.com/id/1151058903/vi/vec-to/xe-%C4%91ua-nh%C3%ACn-t%E1%BB%AB-tr%C3%AAn-cao.jpg?s=1024x1024&w=is&k=20&c=ujfE33-DOR4cnS5yQegfdYvn1gr0HOtaw-JhySVtBSo=";
}

// backObj.src="https://st.gamevui.com/images/image/2017/08/21/duong-dua-khac-nghiet-hd1.jpg";
