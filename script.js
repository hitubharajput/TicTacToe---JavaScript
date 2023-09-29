let boxes = document.querySelectorAll('.box')

let turn = "X" ;

let isGameover = false ;

boxes.forEach(e=>{
    e.innerHTML ="";
    e.addEventListener("click",()=>{
        if(!isGameover && e.innerHTML ==="")
        {
            e.innerHTML = turn ;
            checkWin();
            checkDraw(); 
            changeTurn();
        
            

        }
    })
})


function changeTurn()
{
    if(turn ==="X")
    {
        turn ="0" ;
        document.querySelector(".bg").style.left="90px" ;
    }
    else
    {
        turn ="X" ;
        document.querySelector(".bg").style.left="0px" ;
    }

}

function checkWin()
{
  let winConditions = [
    [0,1,2],[3,4,5],[6,7,8],
    [0,3,6],[1,4,7],[2,5,8],
    [0,4,8],[2,4,6]
  ]


  for(let i = 0 ; i<winConditions.length;i++)
  {
  let v0 = boxes[winConditions[i][0]].innerHTML ;
  let v1 = boxes[winConditions[i][1]].innerHTML ;
  let v2 = boxes[winConditions[i][2]].innerHTML ;

  if(v0 !="" && v0 ===v1 && v0===v2)
  {
    isGameover = true ;
    document.querySelector("#results").innerHTML = "Congratulations ! " + turn +" You win this game" ;


    document.querySelector("#playAgain").style.display = "inline" ;


    for(let j = 0 ;j<3;j++)
    {
        boxes[winConditions[i][j]].style.backgroundColor = "green",
        boxes[winConditions[i][j]].style.color = "black"
        
    }
  }

  }

}

function checkDraw()
{
    if(!isGameover)
    {
        let isDraw = true;
        boxes.forEach(e=>{
            if(e.innerHTML ==="")  isDraw = false ;
        })

        if(isDraw)
        {
            isGameover = true ;
         document.querySelector("#results").innerHTML = "Match Draws";


                 document.querySelector("#playAgain").style.display = "inline" ;
        }
    }
}

document.querySelector("#playAgain").addEventListener("click",()=>{
      isGameover = false ;
      turn ="X" ;
      document.querySelector(".bg").style.left ="0";
      document.querySelector("#results").innerHTML = "" ;
      document.querySelector("#playAgain").style.display="none" ;

      boxes.forEach(e=>{
        e.innerHTML = "" ;
        e.style.removeProperty("background-color") ;
        e.style.color = "#fff";
      })
})