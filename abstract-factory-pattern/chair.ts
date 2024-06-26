export interface IChair {
  name: string;
  size: string;
  getName(): string;
  getSize(): string;
}

export class Chair implements IChair {
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

export class SmallChair implements IChair {
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

export class MediumChair implements IChair {
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

export class LargeChair implements IChair {
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
