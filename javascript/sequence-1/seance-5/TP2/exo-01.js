function cacherImg(event)
{
    // sur mouse Event :  event.srcElement
    event.srcElement.style.visibility="hidden";
}
/*
let image1= document.querySelector('#image1');
image1.addEventListener('dblclick',cacherImg)
*/
let images =document.querySelectorAll('img');
images.forEach(image=>{
    image.addEventListener('click',cacherImg);
})
