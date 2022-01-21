class Livestock {
  constructor(id, type) {
    this.id = id;
    this.type = type || '';
  };
};

class Chicken {
  constructor(id, type, eggs) {
    super(id, type);
    this.eggs = eggs;
  };
};

class Cow {
  constructor(id, type, milks) {
    super(id, type);
    this.milks = milks;
  };
};

class Sheep {
  constructor(id, type, wools) {
    super(id, type);
    this.wools = wools;
  };
};