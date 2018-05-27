var el = document.getElementById('c');
var ctx = el.getContext("2d");
var isDrawing;


el.onmousedown = function(e) {
    isDrawing = true;
    ctx.moveTo(e.clientX, e.clientY);
    console.log(e);
    //@TODO connect menu to this color
    ctx.strokeStyle="#FF0000";
    //@TODO connect menu to width
    ctx.lineWidth=10;

};
el.onmousemove = function(e) {
    if (isDrawing) {
        ctx.lineTo(e.clientX, e.clientY);
        ctx.stroke();
    }
};
el.onmouseup = function() {
    isDrawing = false;
};

/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {

        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}


