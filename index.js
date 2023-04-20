let ctx = document.getElementById("canvasMoto");
let canvasMoto = ctx.getContext("2d");

ctx.width = 1100;
ctx.height = 560;

function Moto(){
    this.x=0;
    this.y=0;
 
    this.update = function(){
        this.x+=1;
        canvasMoto.clearRect(0,0,ctx.width,ctx.height);
        canvasMoto.fillStyle="#f01c11";
        canvasMoto.fillRect(this.x,0,40,60);
    }
}

let moto=new Moto();

function Hello(){

    moto.update();
}

let game=setInterval(Hello,1000/60);

// moto.updata();
// window.onload=auto();
// imgObj.src="https://media.istockphoto.com/id/1151058903/vi/vec-to/xe-%C4%91ua-nh%C3%ACn-t%E1%BB%AB-tr%C3%AAn-cao.jpg?s=1024x1024&w=is&k=20&c=ujfE33-DOR4cnS5yQegfdYvn1gr0HOtaw-JhySVtBSo=";

// backObj.src="https://st.gamevui.com/images/image/2017/08/21/duong-dua-khac-nghiet-hd1.jpg";
