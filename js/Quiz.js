class Quiz {
  constructor(){}

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      contestant = new Contestant();
      var contestantCountRef = await database.ref('contestantCount').once("value");
      if(contestantCountRef.exists()){
        contestantCount = contestantCountRef.val();
        contestant.getCount();
      }
      question = new Question()
      question.display();
    }
  }

  play(){
   
      //write code here to hide question elements
      question.hide();

      //write code to change the background color here
      background("yellow");
  
      //write code to show a heading for showing the result of Quiz
  fill("purple")
  textSize(25);
    text("Results", 400, 70);
    
      //call getContestantInfo( ) here
      Contestant.getPlayerInfo()
  
      //write condition to check if contestantInfor is not undefined
  
      if(allContestants !== undefined){
  
        fill("blue");
        textSize(20);
        text("NOTE: The constestant who gave the correct answer will be highlighted in green colour", 130, 230);
  
      }
      //write code to add a note here
  
      //write code to highlight contest who answered correctly

    var displayPosition= 300;
      
  for(var plr in allContestants){
  
    var correctAns= "2";
    if(correctAns === allContestants[plr].answer){
  
      fill("green")
      }
      else{
  
        fill("red");


      }
      displayPosition += 40;
      textSize(25);
      text(allContestants[plr].name + ":" + allContestants[plr].answer, 120, displayPosition);
    }
  }
}
