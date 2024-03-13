const keys = {
  SPACEBAR: false,
};

window.onkeyup = (e) => {
  //   console.log(e);
  //   console.log(e.code);
  switch (e.code) {
    case "Space":
      keys.SPACEBAR = false;

      break;
  }
};

window.onkeydown = (e) => {
  //   console.log(e);
  //   console.log(e.code);
  switch (e.code) {
    case "Space":
      keys.SPACEBAR = true;
      break;
  }
};
// console.log(keys.SPACEBAR);
