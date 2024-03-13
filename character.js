class Character {
  constructor({ position, width, height, image }) {
    this.position = position;
    // this.x = x;
    // this.y = y;
    this.width = width;
    this.height = height;
    this.vx = 0;
    this.vy = 0;
    this.image = image;
  }
  draw(ctx) {
    //ctx.fillStyle = "green";
    //ctx.fillRect(this.position.x, this.position.y, this.width, this.height);

    ctx.drawImage(
      this.image,
      //   106,
      //   164,
      //   597,
      //   620,
      this.position.x,
      this.position.y,
      this.width,
      this.height
    );
  }

  move(ctx) {
    // console.log("awljdb", this.position.y, this.vy);
    // this.vy += GRAVITY;
    // this.position.y = this.vy;
    //     if (keys.SPACEBAR) {
    //       //   this.vy += JUMP_VELOCITY;
    //       this.position.y += JUMP_VELOCITY;
    //     } else {
    //       this.vy += GRAVITY;
    //       this.position.y += this.vy;
    //     }

    if (keys.SPACEBAR) {
      this.vy = -JUMP_VELOCITY;
      //   console.log("Key", this.vy);
    } else {
      this.vy += GRAVITY;
      //   console.log("gravity", this.vy);
    }
    this.position.y += this.vy;

    if (this.position.y + this.height > canvas.height) {
      this.position.y = canvas.height - this.height;
    }
    if (this.position.y > 0) {
    }
  }
}
