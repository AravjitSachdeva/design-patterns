import { Car, CarBuilder } from "./builder-pattern";

const slowCar: Car = new Car("V4", 4, "blue", false);

const newCar: CarBuilder = new CarBuilder();

const builtCar: Car = newCar
  .setEngine("V8")
  .setColor("red")
  .setSunroof(true)
  .build();

const standardCar: Car = newCar.setStandard().build();

const premiumCar: Car = newCar.setPremium().build();
