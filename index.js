class Upgrade {
    constructor(name, cost, increase, level = 0, type = 'upgrade', powerUps = []) {
      this.name = name;
      this.cost = cost;
      this.increase = increase;
      this.level = level;
      this.type = type;
      this.powerUps = powerUps;
    }
  
    buyUpgrade() {
      console.log(`Upgrade "${this.name}" bought!`);
    }
  }
  
  class PlayerStats {
    constructor(gpc = 1, gps = 0, gems = 0) {
      this.gpc = gpc;
      this.gps = gps;
      this.gems = gems;
    }
  
    incrementGems() {
      console.log('Gems incremented!');
    }
  }
  
  class Shop {
    constructor() {
      this.upgrades = [];
      this.playerStats = new PlayerStats();
    }
  
    addUpgrade(upgrade) {
      this.upgrades.push(upgrade);
    }
  
    buyUpgrade(upgradeName) {
      const upgrade = this.upgrades.find(u => u.name === upgradeName);
      if (upgrade && this.playerStats.gems >= upgrade.cost) {
        this.playerStats.gems -= upgrade.cost;
        upgrade.buyUpgrade();
        this.saveGame(); 
      } else {
        console.log('Not enough gems or upgrade not found!');
      }
    }
  
    saveGame() {
      const gameData = {
        upgrades: this.upgrades,
        playerStats: this.playerStats
      };
      localStorage.setItem('gameData', JSON.stringify(gameData));
      console.log('Game saved!');
    }
  
    loadGame() {
      const savedData = localStorage.getItem('gameData');
      if (savedData) {
        const gameData = JSON.parse(savedData);
        this.upgrades = gameData.upgrades;
        this.playerStats = gameData.playerStats;
        console.log('Game loaded!');
      } else {
        console.log('No saved game found.');
      }
    }
  }
  
  const boutique = new Shop();
  boutique.addUpgrade(new Upgrade('Clicker', 10, 1, 0, 'upgrade', [{ multiplier: 2, description: 'Double gem production' }]));
  boutique.addUpgrade(new Upgrade('Pickaxe', 20, 2, 0, 'upgrade', [{ multiplier: 3, description: 'Triple gem production' }]));
  
  boutique.loadGame(); 
  
  boutique.buyUpgrade('Clicker');
  boutique.playerStats.incrementGems();
  