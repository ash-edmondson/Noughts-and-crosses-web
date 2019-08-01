var board = document.getElementById('board')
board.addEventListener('mouseover', function(e){

  if  (e.target.tagName != "SPAN"){
    return
  }
e.target.style.backgroundColor = "hsl(330, 100%, 60%)"

})


var board = document.getElementById('board')
board.addEventListener('mouseout', function(e){

  if  (e.target.tagName != "SPAN"){
    return
  }
e.target.style.backgroundColor = "white"

})


    

    var player = 'X'
    var moves = {}
    var scores = {
      X: 0,
      O: 0
    }

     var scoreBoard = document.getElementById('scoreBoard')




    var statusDiv= document.getElementById('status')


  board.addEventListener('click', function(e){
    
    if  (e.target.tagName != "SPAN"){
    return
    }
   
    if (e.target.innerText != ""){
       return
    }

    if(won(moves)){

      return

    }

    e.target.innerText = player
    moves[e.target.id] =player

      if (won(moves) ){

        statusDiv.innerText = player +  ' wins'

        //update scoreBoard

        scores[player]++
        scoreBoard.innerText= `X: ${scores.X} O: ${scores.O}`

        return
        
      }


      //cheack for draw

      if (Object.keys(moves).length == 9){
      statusDiv.innerText="Its a draw!"
      return
      }


    if (player == 'X'){

      player = 'O'
    } else {
      player = 'X'
    }

    statusDiv.innerText = player + "'S turn"


 
  
  })

function won(m){

  with(m){
    return line (a1, b1, c1) || 
    line (a1, a2, a3) ||
    line (a2, b2, c2) ||
    line (a3, b3, c3) ||
    line (b1, b2, b3) ||
    line (c1, c2, c3) ||
    line (a1, b2, c3) ||
    line (c1, b2, a3)
  }

    
}

function line (a, b, c){

return a && a == b && b == c
}

var clear= document.getElementById('clear')
clear.addEventListener('click', function(){

  moves= {}
  player = "X"

  // acualy clear board

  document.querySelectorAll('#board span') .forEach(function(n){
  n.innerText =''
  })

})

