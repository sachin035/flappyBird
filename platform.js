class Platform {
  constructor({ position, width, height, image }) {
    this.position = position;
    this.width = width;
    this.height = height;
    this.image = image;
  }

  draw(ctx) {
    ctx.drawImage(
      this.image,
      this.position.x,
      this.position.y,
      this.width,
      this.height
    );
  }
  move(ctx) {
    this.position.x += -SPEED;
    // console.log(this.position.x);
  }
}
