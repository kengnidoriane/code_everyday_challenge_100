const images = document.getElementsByClassName("image");
// const container = document.querySelector(".container");
console.log(images);

images[0].classList.add('active');

for (let i = 0; i < images.length; i++) {
    images[i].addEventListener("click", function(){

        // remove 'active' class from all images

        for(const image of images){
            image.classList.remove('active');
        }
        // add 'active' class to the clicked image

        this.classList.add('active');
    })
    
}

