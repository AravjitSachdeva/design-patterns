import { FurnitureFactory } from "./abstract-factory-class";

const resultObject = FurnitureFactory.createFactory("SmallChair");

const name = resultObject.name;
const size = resultObject.size;

console.log(`Name: ${name} Size: ${size}`);
