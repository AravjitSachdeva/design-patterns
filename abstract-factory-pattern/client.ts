import { FurnitureFactory } from "./abstract-factory-class";

const smallFactory = FurnitureFactory.createFactory("small");

const smallChair = smallFactory.createChair();
const smallSofa = smallFactory.createSofa();

const smallChairName = smallChair.getName();
console.log(`Small Chair Name ${smallChairName}`);
