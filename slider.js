//variables
let moveSize = 660;
let counter = 0;

//slide feature to the left
function moveLeft(){
    //get feature shower
    let featureShower = document.getElementById("featureShower");
    
    //counter
    counter -= 1;
    if(counter < 0){
        counter = 0;
    }

    //move
    featureShower.scrollTo({left: moveSize * counter, behavior: "smooth"});
}

//slide feature to the right
function moveRight(){
    //get feature shower
    let featureShower = document.getElementById("featureShower");

    //counter
    counter += 1;
    if(counter >= featureShower.children.length){
        counter = featureShower.children.length - 1;
    }

    //move
    featureShower.scrollTo({left: moveSize * counter, behavior: "smooth"});
}