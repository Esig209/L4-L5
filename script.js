var perso = document.querySelector(".perso");
var obstacles = document.querySelector(".obstacles");
var scoreDisplay = document.querySelector(".score");
var bestScoreDisplay = document.querySelector(".bestScore"); 

var score = 0;
var scoreText = "Score mon loulou : " + score;
var bestScore = 0; //

function sauter(){ // fonction qui permet de faire sauter le perso
    if(perso.classList != "animation"){
        perso.classList.add('animation'); 
        score++;
        scoreText = "Score mon loulou : " + score;
        scoreDisplay.innerText = scoreText;
    }
    setTimeout(function(){ // permet de retirer la classe animation après 500ms
        perso.classList.remove('animation'); 
    },500)
}

var verification = setInterval(function(){ // permet de vérifier si le perso est en collision avec l'obstacle
    var persoTop = parseInt(window.getComputedStyle(perso).getPropertyValue("top")) ; // sert à récupérer la valeur de la propriété top de l'élément perso
    var obstaclesLeft = parseInt(window.getComputedStyle(obstacles).getPropertyValue("left")) ; // sert à récupérer la valeur de la propriété left de l'élément obstacles

    if(obstaclesLeft<20 && obstaclesLeft >0 && persoTop>= 130){ // si l'obstacle est à une position donnée et que le perso est à une position donnée
        // alors on affiche un message d'alerte
        obstacles.style.animation = "none"; 
        alert("Vous avez perdu");
        if(score > bestScore) { 
            bestScore = score; 
        }
        bestScoreDisplay.innerText = "Meilleur Score : " + bestScore;
        score = 0;
        scoreText = "Score mon loulou : " + score;
        scoreDisplay.innerText = scoreText;
    }
},1) 