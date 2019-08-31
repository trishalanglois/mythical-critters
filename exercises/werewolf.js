class Werewolf {
  constructor(name, location) {
    this.name = name;
    this.location = location;
    this.human = true;
    this.wolf = false;
    this.hungry = false;
  }
  change() {
    this.wolf = !this.wolf;
    this.human = !this.human;
    this.hungry = !this.hungry;
  }
  eat(victim) {
    if (this.hungry = true) {
      victim.alive = !victim.alive;
      this.human = !this.human;
    }
    if (this.human = true) {
      return "I'm no cannibal.";
    }
  }
}



module.exports = Werewolf;
