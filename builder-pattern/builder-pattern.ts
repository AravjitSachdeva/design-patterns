type Tier = "standard" | "premium" | "luxury";

export class Car {
  public readonly engine: string;
  public readonly wheels: number = 4;
  public readonly color: string;
  public readonly sunroof: boolean;

  constructor(
    engine: string,
    wheels?: number,
    color?: string,
    sunroof?: boolean
  ) {
    this.engine = engine;
    this.wheels = wheels ?? 4;
    this.color = color ?? "black";
    this.sunroof = sunroof ?? false;
  }
}

// Examples of how to create different cars using this class

export class CarBuilder {
  // Default values for the car properties

  private tier: Tier = "standard";
  private engine: string = "standard engine";
  private wheels: number = 4;
  private color: string = "black";
  private sunroof: boolean = false;

  constructor(tier?: Tier) {
    this.tier = tier ?? "standard";
  }

  public setStandard(): CarBuilder {
    this.tier = "standard";
    this.wheels = 4;
    this.color = "black";
    this.sunroof = false;
    return this;
  }

  public setPremium(): CarBuilder {
    this.tier = "premium";
    this.engine = "premium engine";
    this.wheels = 4;
    this.color = "black";
    this.sunroof = false;
    return this;
  }

  // Chainable method to set the engine type
  public setEngine(engine: string): CarBuilder {
    this.engine = engine;
    return this;
  }

  // Chainable method to set the number of wheels
  public setWheels(wheels: number): CarBuilder {
    this.wheels = wheels;
    return this;
  }

  // Chainable method to set the car color
  public setColor(color: string): CarBuilder {
    this.color = color;
    return this;
  }

  // Chainable method to specify if the car has a sunroof
  public setSunroof(sunroof: boolean): CarBuilder {
    this.sunroof = sunroof;
    return this;
  }

  // The build method constructs the final Car object
  public build(): Car {
    return new Car(this.engine, this.wheels, this.color, this.sunroof);
  }
}
