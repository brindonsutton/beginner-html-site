let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/polar-bear-1.jpg') {
        myImage.setAttribute ('src','images/polar-bear-2.jpg');
    } else{
        myImage.setAttribute ('src','images/polar-bear-1.jpg');
    }
}
