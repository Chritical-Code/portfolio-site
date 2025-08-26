//show feature to the left
function moveLeft(){
    let featureShower = document.getElementById("featureShower");
    featureShower.scrollBy({left: -660, behavior: "smooth"});
    disableButton("leftButton");
}

//show feature to the right
function moveRight(){
    let featureShower = document.getElementById("featureShower");
    featureShower.scrollBy({left: 660, behavior: "smooth"});
    disableButton("rightButton");
}

//briefly disable button
function disableButton(buttonID){
    //get correct button
    let button = document.getElementById(buttonID);

    //disable button
    button.disabled = true;

    //enable after timer
    setTimeout(() => {
        button.disabled = false;
    }, 750);
}