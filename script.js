function skillDisplay(Image){
    
    console.log(Image.alt);
    overlay = document.getElementById(Image.alt);

    overlay.style.opacity = 1;
    overlay.style.display = "block";
    overlay.innerHTML = Image.alt;
}

function stopDisplay(Image){
    overlay = document.getElementById(Image.alt)

    overlay.style.opacity = 0;
    overlay.style.display = "none";
    
}