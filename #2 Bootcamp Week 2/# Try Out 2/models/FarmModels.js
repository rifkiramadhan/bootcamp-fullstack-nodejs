const fs = require('fs');

class FarmModels {
  constructor(id, name, livestock) {
    this.id = id;
    this.name = name || "";
    this.livestock = livestock || [];
  };

  static getData(){
    let farms = fs.readFileSync('./data.json', 'utf-8');
    farms = JSON.parse(farms);

    farms = farms.map(farm => {
      const {id, name, livestock} = farm;

      return new FarmModels(id, name, livestock);
    });

    return farms;
  };

  static show() {
    let farms = this.getData();
    return farms;
  };

  static create(params) {
    let farms = this.getData();
    const [farmName] = params;
    let id = farms[farms.length - 1].id + 1;

    farms.push(new FarmModels(id, farmName));
    this.save(farms);
    
    return `"${farmName}" has been bought!`;
  };

  static save(farms) {
    fs.writeFileSync('./data.json', JSON.stringify(farms));
  };
};

module.exports = FarmModels;