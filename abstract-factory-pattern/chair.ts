interface IChair {
  name: string;
  size: string;
  getName(): string;
  getSize(): string;
}

class Chair implements IChair {
  name: string;
  size: string;
  constructor(name: string, size: string) {
    this.name = name;
    this.size = size;
  }

  getSize(): string {
    return this.size;
  }
  getName(): string {
    return this.name;
  }
}

class SmallChair extends Chair {
  name: string;
  size: string;
  constructor() {}
}
