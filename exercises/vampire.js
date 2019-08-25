//1.READ TEST THAT YOU'RE RUNNING
//2.ASK YOURSELF IF IT'S GOING TO FAIL AND WHY
//3.RUN TEST
//4.MAKE IT PASS

class Vampire  {
  constructor(name, pet) {
    this.name = name;
    this.pet = pet || 'bat';
    this.thirsty = true;
  }
  drink() {
    this.thirsty = false;
  }
}

module.exports = Vampire;
