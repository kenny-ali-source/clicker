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
      } else {
        console.log('Not enough gems or upgrade not found!');
      }
    }
  }
  
  class SaveManager {
    saveGame() {
      console.log('Game saved!');
    }
  
    loadGame() {
      console.log('Game loaded!');
    }
  }
  const boutique = new Boutique();
  boutique.addUpgrade(new Upgrade('Clicker', 10, 1, 0, 'upgrade', [{ multiplier: 2, description: 'Double gem production' }]));
  boutique.addUpgrade(new Upgrade('Pickaxe', 20, 2, 0, 'upgrade', [{ multiplier: 3, description: 'Triple gem production' }]));
  const saveManager = new SaveManager();
  boutique.buyUpgrade('Clicker'); 
  boutique.playerStats.incrementGems(); 
  saveManager.saveGame(); 
  saveManager.loadGame();
  