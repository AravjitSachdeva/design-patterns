// prototype.ts
export interface Prototype<T> {
  clone(): T;
}

export class Image implements Prototype<Image> {
  constructor(
    public readonly filename: string,
    public readonly width: number,
    public readonly height: number,
    public readonly pixelData?: Uint8Array
  ) {
    this.filename = filename;
    this.width = width;
    this.height = height;
    this.pixelData = pixelData;
  }

  clone(): Image {
    // Create deep copy of pixel data if it exists
    let newPixelData: Uint8Array | undefined = undefined;
    if (this.pixelData) {
      newPixelData = new Uint8Array(this.pixelData.length);
      newPixelData.set(this.pixelData);
    }

    return new Image(this.filename, this.width, this.height, newPixelData);
  }
}

export class Document implements Prototype<Document> {
  private content: string;
  private styles: Map<string, string>;
  private images: Map<string, Image>;
  private loadedResources: any[];

  constructor(templateName?: string) {
    this.content = "";
    this.styles = new Map<string, string>();
    this.images = new Map<string, Image>();
    this.loadedResources = [];

    if (templateName) {
      console.log(`Loading template ${templateName} from server...`);
      this.loadTemplateFromServer(templateName); // expensive operation
    }
  }

  private loadTemplateFromServer(name: string): void {
    // Simulate expensive template loading
    this.content = `Template ${name} content`;
    this.styles.set("header", "bold 16px");
    this.styles.set("body", "normal 12px");

    // Load images
    this.images.set("logo", new Image("logo.png", 100, 100));
    this.images.set("background", new Image("bg.png", 1920, 1080));

    // Populate resources
    this.loadedResources.push("font1", "font2", "stylesheet");
  }

  clone(): Document {
    const clone = new Document();

    // Copy the already processed content
    clone.content = this.content;

    // Deep copy complex structures
    this.styles.forEach((value, key) => {
      clone.styles.set(key, value);
    });

    // Deep copy images
    this.images.forEach((image, key) => {
      clone.images.set(key, image.clone());
    });

    // Copy loaded resources references
    clone.loadedResources = [...this.loadedResources];

    return clone;
  }

  setContent(content: string): void {
    this.content = content;
  }

  getContent(): string {
    return this.content;
  }

  getImageCount(): number {
    return this.images.size;
  }
}
