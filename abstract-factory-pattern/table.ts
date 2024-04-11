export interface ITable {
  name: string;
  size: string;
  getName(): string;
  getSize(): string;
}

export class Table implements ITable {
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

export class SmallTable implements ITable {
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

export class MediumTable implements ITable {
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

export class LargeTable implements ITable {
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
