let boxes=document.querySelector(".board");

let boxout=document.querySelector(".boardout")
let inn=[];
let ent=0;
let j1=true;
let j=1;
let winpop=document.createElement("div");;
let drawpop=document.createElement("div");
let array=[[0,1,2],
           [0,3,6],
           [0,4,8],
           [1,4,7],
           [2,5,8],
           [2,4,6],
           [3,4,5],
           [6,7,8],
           ];
let Player1=document.createElement("h3");        
let Player2=document.createElement("h3");
let fill=0;
let idx=0;
const player_turn=document.querySelectorAll(".player");
const enthand=function(i){
  return function(){
  if (ent==0){
    inn[i].style.backgroundColor="red";
      ent=1;
      fill+=1;
    Player2.classList.add("player2");
    Player2.innerText="Player2";
    Player1.remove();
    player_turn[0].append(Player2);
    j1=false;
  }
  else{
    inn[i].style.backgroundColor="blue";
    ent=0;
    fill+=1;
    Player1.classList.add("player1");
    Player1.innerText="Player1";
    Player2.remove();
    player_turn[1].append(Player1);
    j1=false;
  }
  inn[i].removeEventListener("click",handlers[i]);
checkWin();
};
};
let handlers=[];
function setindx(indx){
  const handler=enthand(indx);
  handlers[indx]=handler;
  return handler;
}
function newgame(){
  fill=0;
  if(j==0){
    j1=false;
    j=1;
    fill=0;
  }
for(let i=0;i<9;i++){
inn[i]=document.createElement("div");
inn[i].classList.add("box");
boxes.appendChild(inn[i]);
if (ent==0){
    Player1.classList.add("player1");
    Player1.innerText="Player1";
    Player2.remove();
    player_turn[1].append(Player1);
    
}
else{
    Player2.classList.add("player2");
    Player2.innerText="Player2";
    Player1.remove();
    player_turn[0].append(Player2);
    
}
const handler=setindx(i);
   inn[i].addEventListener("click",handler);

   
  }
}
let color1="";
let color2="";
let color3="";
function checkWin(){
    for (let ab of array) {
    // let [a, b, c] = ab;
    color1=inn[ab[0]].style.backgroundColor;
    color2=inn[ab[1]].style.backgroundColor;
    color3=inn[ab[2]].style.backgroundColor;
     if(color1 && color2 && color3){
        checkcolor();
     }
    }
     function checkcolor(){
    if (color1===color2 && color1===color3) {
      j1=true;
      j=0;
      drawpop.remove();
      console.log("Player", color1 === 'red' ? "Red" : "Blue", "wins!");
      winpop.classList.add("winpopup");
      winpop.innerHTML=`<div class="wonmsg" >Congratulations ${color1} You Won the Game</div>`;
      let wonmsg=document.querySelector(".wonmsg");
      boxes.append(winpop);
      startnew=document.createElement("button");
      startnew.innerText="Start New Game";
      startnew.classList.add("startnew");
      winpop.appendChild(startnew);
        for(let i=0;i<9;i++){
          inn[i].classList.add("disabled");
        }
      startnew.onclick=function(){
        for(let i=0;i<9;i++){
          inn[i].remove();
        }
          winpop.remove();
          newgame();
      }
    
}
        else{
          if(j!=0){
            checkdraw();
          }
        }
        function checkdraw(){
          if ( fill===9 && j1!=true){
        drawpop.classList.add("drawpopup");
          drawpop.innerHTML=`<div class="drawmsg" >It's Draw Equal Strategy</div>`;
      let drawmsg=document.querySelector(".drawmsg");
      boxes.append(drawpop);
      startnewbtn=document.createElement("button");
      startnewbtn.innerText="Start New Game";
      startnewbtn.classList.add("startnewbtn");
      drawpop.appendChild(startnewbtn);
      startnewbtn.onclick=function(){
        for(let i=0;i<9;i++){
          inn[i].remove();
        }
        drawpop.remove();  
          newgame();
        
      }
          fill=0;
          }
      } 
}
}
let resetbtn=document.querySelector(".resbtn");
resetbtn.onclick=function(){
  for(let i=0;i<9;i++){
          inn[i].remove();
        }
        drawpop.remove(); 
        winpop.remove();
  newgame();
}
newgame();

