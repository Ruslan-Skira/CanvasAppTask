(function () {
    window.onload = function () {
        const menu = new Menu();
        const field = new Field({width: 300, color: '#ffffff'});

        window.editor  = {
            menu,
            field,
        };
    };


    class Menu {
        constructor() {

        }
    }

    class Field {
        constructor ({width, color}) {//
            this.width = width;
            this.color = color;

            const domNode = document.getElementById("editor");

            const c = domNode;
            const ctx = c.getContext("2d");

            canvas.onmousemove = function (event){
                let x = event.offset(x);
                let y = event.offset(y);
                //ctx.fillRect(x, y, 10, 10);

                ctx.strokeStyle = "green";
                ctx.lineWidth = "5";
                ctx.beginPath();
                ctx.moveTo(50,50);
                ctx.lineTo(x, y);
                ctx.lineCap = "round";
                ctx.stroke();//command to draw



            };





        }
    }
}());
ctx.clear();//I don't know how to clear the line

//canvas.onmousemove = function (event){
//     let x = event.offset(x);
//     let y = event.offset(y);
//     ctx.fillRect(x, y, 10, 10);
// };
