let body = document.querySelector("body"),
    lightBox = document.querySelector (".lightBox"),
    img = document.querySelectorAll (".gImg"),
    showImg = lightBox.querySelector(".showImg img"),
    close = lightBox.querySelector (".close");
    
    for (let image of img){
        image.addEventListener("click", ()=>{
            lightBox.getElementsByClassName.display = "block";
        })
    }