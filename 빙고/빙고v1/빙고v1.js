const row = document.getElementsByClassName("row");

for(let j of row){

    j.style.display="flex";
}

const col = document.getElementsByClassName("col");

for(let i of col){
    i.style.width = "60px";
    i.style.height = "60px";
    
    i.style.border = "1px solid black";

    i.style.fontSize="20px";
    i.style.justifyContent="center";
    i.style.alignItems="center";

    i.style.margin="2px";

    i.addEventListener("mouseenter",function(){
        this.style.backgroundColor="yellow";
    });
    
    i.addEventListener("mouseleave",function(){
        this.style.backgroundColor="white";
        
    })
}

const bingoBoard=document.getElementById("bingoBoard");
bingoBoard.style.padding="50px";