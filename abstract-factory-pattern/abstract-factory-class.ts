import {
  SmallChair,
  MediumChair,
  LargeChair,
  type Chair,
  type IChair,
} from "./chair";

import {
  SmallTable,
  MediumTable,
  LargeTable,
  type Table,
  type ITable,
} from "./table";

import {
  SmallSofa,
  MediumSofa,
  LargeSofa,
  type Sofa,
  type ISofa,
} from "./sofa";

interface IFurnitureFactory {
  createChair(): IChair;
  createTable(): ITable;
  createSofa(): ISofa;
}

export class SmallFurnitureFactory implements IFurnitureFactory {
  createChair(): IChair {
    console.log("Small Chair Created.......");
    return new SmallChair("small chair", "small");
  }
  createTable(): ITable {
    console.log("Small Table Created.......");
    return new SmallTable("small table", "small");
  }
  createSofa(): ISofa {
    console.log("Small Sofa Created.......");
    return new SmallSofa("small sofa", "small");
  }
}

export class MediumFurnitureFactory implements IFurnitureFactory {
  createChair(): IChair {
    console.log("Medium Chair Created");
    return new MediumChair("Medium chair", "Medium");
  }
  createTable(): ITable {
    console.log("Medium Table Created");
    return new MediumTable("Medium table", "Medium");
  }
  createSofa(): ISofa {
    console.log("Medium Sofa Created");
    return new MediumSofa("Medium sofa", "Medium");
  }
}

export class LargeFurnitureFactory implements IFurnitureFactory {
  createChair(): IChair {
    console.log("Large Chair Created");
    return new LargeChair("Large chair", "Large");
  }
  createTable(): ITable {
    console.log("Large Table Created");
    return new LargeTable("Large table", "Large");
  }
  createSofa(): ISofa {
    console.log("Large Sofa Created");
    return new LargeSofa("Large sofa", "Large");
  }
}

export class FurnitureFactory {
  // public furnitureType: IFurniture;

  static createFactory(furnitureSize: string): IFurnitureFactory {
    if (furnitureSize == "small") {
      return new SmallFurnitureFactory();
    } else if (furnitureSize == "medium") {
      return new MediumFurnitureFactory();
    } else if (furnitureSize === "large") {
      return new LargeFurnitureFactory();
    } else {
      throw new Error("Furniture factory size not supported");
    }
  }
}
