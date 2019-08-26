class Dragon {
  constructor(name) {
    this.name = name;
    this.rider = 'Eragon';
    this.color = 'blue';
    this.hungry = true;
    this.meals = 0
  }
eat() {
    if (this.meals < 2) {
      this.meals++
    } else {
      this.hungry = false;
    }
  }
};


module.exports = Dragon;

//1. READ TEST
//2. ASK YOURSELF IF IT'S GOING TO FAIL AND WHY
//3. RUN TEST
//4. MAKE TEST PASS
