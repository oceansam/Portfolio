header = document.getElementById("skills-header")

setInterval(function(){

    var temp = setTimeout(function(){
        header.style.borderRight = "0px";
    },500);

    header.style.borderRight = "5px solid white";

    
},800);

function skillDisplay(Image){

    header.innerHTML = Image.alt;
    Image.style.transform = "rotateY(350deg)";

}

function stopDisplay(Image){
    header.innerHTML = "Skills";
}