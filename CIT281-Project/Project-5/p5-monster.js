/*
    CIT 281 Project 5:

    Name: Jorge Soto
*/

// export a class
module.exports = class Monster {
  constructor({ monsterName = "Unknown", minimumLife = 0, currentLife = 100 } = {}) {
    this.name = monsterName;
    this.minLifeDrain = minimumLife;
    this.life = currentLife;
    this.isAlive = this.life >= this.minLifeDrain ? "Alive" : "Dead";
  }

  // Update monster life value
  updateLife = (lifeChangeAmount) => {
    this.life = Math.max(this.life + lifeChangeAmount, 0);
    this.isAlive = this.life >= this.minLifeDrain
  };


  // Randomly drain monster's life
  randomLifeDrain = (minimumLifeDrain, maximumLifeDrain) => {
    const lifeDrain = Math.floor(
      Math.random() * (maximumLifeDrain - minimumLifeDrain + 1) + minimumLifeDrain
    );
    this.updateLife(-lifeDrain);
    console.log(`${this.name} random power drain by ${lifeDrain}!`);
  };
}

