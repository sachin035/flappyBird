function createImage(src) {
  let img = new Image();
  img.src = src;
  img.onload = function () {
    if (typeof callback === "function") {
      callback(img);
    }
  };
  return img;
}

function collisionDetection(character, platform) {
  return (
    character.position.x < platform.position.x + platform.width &&
    character.position.x + character.width > platform.position.x &&
    character.position.y < platform.position.y + platform.height &&
    character.position.y + character.height > platform.position.y
  );
}
