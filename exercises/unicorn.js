class Unicorn {
  constructor(name, color) {
    console.log(name);
    this.name = name;
    if (color === undefined) {
      this.color = 'white'
    } else {
      this.color = color;
      // OR this.color = color || 'white' -- checks for a color first, and if there's nothing, it will default to white ;
    }
  }
  isWhite() {
    console.log(this.color);
    if (this.color !== 'white') {
      return false;
    }
  }
  says(message) {
    return `**;* ${message} *;**`;
  }
}

module.exports = Unicorn;

//1.READ TEST THAT YOU'RE RUNNING
//2.ASK YOURSELF IF IT'S GOING TO FAIL AND WHY
//3.RUN TEST
//4.MAKE IT PASS
