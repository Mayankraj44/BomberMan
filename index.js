let bomb=[];
let score;



let gscore=document.getElementById("gameScore");
let rdisplay=document.getElementById("resultDisplay")
function reset(){
    score=0;
    let block=document.getElementById("main");
    block.innerHTML="";
    bomb=[];
    for(let i=1;i<82;i++)
    {
        block.innerHTML+=`<div id="cell_${i}" flag="false"></div>`
    }
    
    while(bomb.length<10)
    {
       
        let num=Math.floor(Math.random()*80)+1;
        if(bomb.indexOf(num)==-1)
        {
            bomb.push(num);
        }
    }
    gscore.innerHTML=score;
    rdisplay.innerHTML="";
    window.random=bomb;
    document.getElementById("main").addEventListener("click",clicked);
//     console.log("window.random",window.random);
        }
reset();
console.log(window.random);

function clicked(ev){
    // console.log(ev.target.id);
    let target=ev.target;
    // console.log(target);
    let cid=target.id;
    cid=parseInt(cid.slice(5));
   console.log(cid);
    if(bomb.indexOf(cid)==-1)
    {
        if(target.getAttribute("flag")=="false")
        {
            target.style.backgroundColor="green";
            score++;
            gscore.innerHTML=score;
            target.setAttribute("flag","true")
        }
       
        

    }
    else
    {
        for(let i=0;i<10;i++)
        {
            document.getElementById(`cell_${bomb[i]}`).style.backgroundImage=`url("https://img.icons8.com/emoji/48/000000/bomb-emoji.png")`;
            document.getElementById("main").removeEventListener("click",clicked);
            rdisplay.innerHTML="game over";
        }
       
    }
    if(score==71)
    {
        rdisplay.innerHTML="win";
         document.getElementById("main").removeEventListener("click",clicked);

    }
}