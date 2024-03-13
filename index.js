const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
canvas.width = 360;
canvas.height = 640;

let gameOver = false;
let pipeArray = [];
let score = 0;
let highScore = 0;

let character = new Character({
  position: { x: 10, y: 5 },
  width: 34,
  height: 24,
  image: createImage("./image/flappybird.png"),
});

function pipePlaces() {
  if (gameOver) {
    return;
  }
  let pipeHeight = 512;
  let pipeYposition = 0;
  let randomYpoisitionPipe =
    pipeYposition - pipeHeight / 4 - Math.random() * (pipeHeight / 2);
  let platformTop = new Platform({
    position: { x: canvas.width, y: randomYpoisitionPipe },
    width: 64,
    height: pipeHeight,
    image: createImage("./image/toppipe.png"),
    passed: false,
  });

  let openingSpace = canvas.height / 4;
  let YpositionBottom = randomYpoisitionPipe + pipeHeight + openingSpace;
  let platformBottom = new Platform({
    position: { x: canvas.width, y: YpositionBottom },
    width: 64,
    height: pipeHeight,
    image: createImage("./image/bottompipe.png"),
    passed: false,
  });

  pipeArray.push(platformTop);
  pipeArray.push(platformBottom);
}

// setInterval(pipeBottomPlaces, 1500);
// function pipeBottomPlaces() {
//   let pipeHeight = 512;
//   let pipeYposition = ;
//   let randomYpoisitionPipe =
//     pipeYposition - pipeHeight / 4 - Math.random() * (pipeHeight / 2);
//   let platform = new Platform({
//     position: { x: canvas.width, y: randomYpoisitionPipe },
//     width: 64,
//     height: pipeHeight,
//     image: createImage("./image/bottompipe.png"),
//   });
//   pipeArray.push(platform);
// }

console.log({ pipeArray });

console.log({ character });
function animate() {
  if (gameOver) {
    return;
  }
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  //   ctx.fillStyle = "green";
  //   ctx.fillRect(10, 5, 34, 24);

  character.draw(ctx);
  character.move(ctx);
  pipeArray.forEach((platform) => {
    platform.draw(ctx);
    platform.move(ctx);

    if (collisionDetection(character, platform)) {
      console.log("Game Over");
      gameOver = true;
    }

    if (
      !platform.passed &&
      character.position.x > platform.position.x + platform.width
    ) {
      score += 0.5;
      platform.passed = true;
    }
  });

  ctx.font = "25px 'Nunito', sans-serif";
  ctx.fillStyle = "black";
  ctx.strokeStyle = "black";
  ctx.fillText(`Score :${score}`, 10, 20);

  //clears pipe
  // console.log(pipeArray);

  // if (pipeArray.length > 0) {
  //   const firstPlatformPositionX = pipeArray[0].position.x;
  //   while (firstPlatformPositionX > 0) {
  //     pipeArray.shift(); //removes first element from the array
  //   }
  // }

  // if (gameOver) {
  //   if (keys.SPACEBAR) {
  //     character.position.x = 10;
  //     character.position.y = 5;
  //     pipeArray = [];
  //     score = 0;
  //     gameOver = false;
  //   }
  // }

  if (gameOver) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "rgb(104,153,34)";
    ctx.font = "50px Arial";
    ctx.textAlign = "center";
    ctx.fillText("Game Over!", canvas.width / 2, canvas.height / 2);
    ctx.fillStyle = "rgb(169,40,34)";
    ctx.font = "30px Arial";
    ctx.fillText(`Score : ${score}`, canvas.width / 2, canvas.height / 2 + 35);

    if (score > highScore) {
      highScore = score;
      localStorage.setItem("birdflap", highScore);
      ctx.fillText(
        `New Highscore : ${highScore}`,
        canvas.width / 2,
        canvas.height / 2 + 65
      );
    } else {
      // Display the regular high score
      ctx.fillText(
        `Highscore : ${highScore}`,
        canvas.width / 2,
        canvas.height / 2 + 65
      );
    }

    button = document.createElement("button");
    button.classList.add("btnEnd");
    button.innerHTML = "Play";
    document.body.appendChild(button);
    button.addEventListener("click", function () {
      console.log("Button clicked!");
      resetGame();
    });
  }

  requestAnimationFrame(animate);
}
// animate();

function resetGame() {
  gameOver = false;
  pipeArray = [];
  score = 0;
  character.position.x = 10;
  character.position.y = 5;
}

function startGame() {
  console.log("akjdbak");
  button = document.createElement("button");
  button.classList.add("btnStart");
  button.innerHTML = "Play";
  document.body.appendChild(button);
  button.addEventListener("click", function () {
    console.log("Button clicked!");
    // resetGame();
    setInterval(pipePlaces, 1500);
    animate();
    document.body.removeChild(button);
  });
  ctx.font = "45px 'Nunito', sans-serif";
  ctx.fillStyle = "green";
  ctx.strokeStyle = "black";
  ctx.fillText(`Flappy Bird`, canvas.width / 3.75, canvas.height / 2.5);
  ctx.font = "15px 'Nunito', sans-serif";
  ctx.fillStyle = "red";
  ctx.strokeStyle = "black";

  ctx.fillText(
    `(by Sachin Manandhar)`,
    canvas.width / 2,
    canvas.height / 2 + 65
  );
}

startGame();
