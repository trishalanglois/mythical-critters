class Medusa {
  constructor(name) {
    this.name = name;
    this.statues = [];
  }
  stare(victim) {
    if (this.statues.length < 3) {
      this.statues.push(victim);
      victim.stoned = true;
    } else {
      this.statues.shift() && this.statues.push(victim);
    }
  }
}

module.exports = Medusa;
