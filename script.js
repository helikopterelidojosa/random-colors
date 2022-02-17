let redB;
let greenB;
let blueB;

let redC;
let greenC;
let blueC;


function randomColor(){

redB = Math.ceil(Math.random()*255);
greenB = Math.ceil(Math.random()*255);
blueB = Math.ceil(Math.random()*255);

redC = Math.ceil(Math.random()*255);
greenC = Math.ceil(Math.random()*255);
blueC = Math.ceil(Math.random()*255);

function backgroundColors(r,g,b){
    let color = "rgb("+ r +","+ g + ","+ b + ")";
    return color;
};
 document.body.style.backgroundColor = backgroundColors(redB,greenB,blueB);


 function fontColors(r,g,b){
    let color = "rgb("+ r +","+ g + ","+ b + ")";
    return color;
};

 document.body.style.color = fontColors(redC,greenC,blueC);

};

