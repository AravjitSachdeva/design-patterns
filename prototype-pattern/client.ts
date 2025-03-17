// client.ts
import { Document } from "./prototype-pattern";

function runDocumentSystem(): void {
  console.time("Template Loading");

  // Load template once (expensive operation)
  const reportTemplate = new Document("quarterly-report");
  console.timeEnd("Template Loading");

  console.time("Creating 5 documents with constructor");
  // Without prototype - would need to reload template each time (slow)
  for (let i = 0; i < 5; i++) {
    const doc = new Document("quarterly-report"); // Expensive operation repeated
    doc.setContent(`Report for Department ${i}`);
    console.log(`Created new document with content: ${doc.getContent()}`);
  }
  console.timeEnd("Creating 5 documents with constructor");

  console.time("Creating 5 documents with prototype");
  // With prototype - fast cloning
  for (let i = 0; i < 5; i++) {
    const docClone = reportTemplate.clone(); // Fast operation
    docClone.setContent(`Report for Department ${i} (cloned)`);
    console.log(
      `Created cloned document with content: ${docClone.getContent()}`
    );
    console.log(`Document has ${docClone.getImageCount()} images`);
  }
  console.timeEnd("Creating 5 documents with prototype");
}

// Run the example
runDocumentSystem();
