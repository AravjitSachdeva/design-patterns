export interface ISofa {
  name: string;
  size: string;
  getName(): string;
  getSize(): string;
}

export class Sofa implements ISofa {
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

export class SmallSofa implements ISofa {
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

export class MediumSofa implements ISofa {
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

export class LargeSofa implements ISofa {
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
