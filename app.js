let button=document.getElementById("generate");
var numberInShape=1;
var oldValue=0;


button.onclick=()=>{
    let num=document.getElementById("number").value;
    let cir=document.getElementById("circle");
    let sqrt=document.getElementById("square");
    let rect=document.getElementById("rectangle");
    let tri=document.getElementById("triangle");
    let box=document.getElementById("box");
    let col=document.getElementById("color").value;
     num=Number(num)+Number(oldValue);
    for(let i=numberInShape;i<=num;i++){
        let shape=document.createElement("div");
        shape.innerHTML+=numberInShape;
        if(cir.checked){
            shape.style.backgroundColor=col;
            shape.classList.add("circle");
        }
        else if(sqrt.checked){
            shape.style.backgroundColor=col;
            shape.classList.add("square");
        }
        else if(rect.checked){
            shape.style.backgroundColor=col;
            shape.classList.add("rectangle");
        }
        else if(tri.checked){
            // shape.style.backgroundColor=col;
            shape.classList.add("triangle");
        }
        else{
        document.writeln("Invalid Input");
        }

        numberInShape++;
        box.appendChild(shape);
        oldValue=document.getElementById("box").lastElementChild.innerHTML;
    }
}