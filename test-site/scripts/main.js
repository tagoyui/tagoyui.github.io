let myImage = document.querySelector('img');

myImage.onclick = function(){
    let mySrc = myImage.getAttribute('src');
    if(mySrc==='images/image.png'){
        myImage.setAttribute('src','images/image2.png');
    }else{
        myImage.setAttribute('src','images/image.png')
    }
}