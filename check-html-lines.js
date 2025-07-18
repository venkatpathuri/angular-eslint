const { glob } = require("glob");
const fs = require("fs").promises;
const path = require("path");

const MAX_LINES =200

async function checkHtmlLines() {
  try {
    
    const files = await glob("src/**/*.component.html");

    if (files.length === 0) {
      console.log("No component HTML files found.");
      return;
    }

    let overLimitCount = 0;

    for (const file of files) {
      const content = await fs.readFile(file, "utf8");
      const lineCount = content.split(/\r?\n/).length;

      if (lineCount > MAX_LINES) {
        overLimitCount++;
        console.warn(
          `WARNING: ${file} has ${lineCount} lines (exceeds max of ${MAX_LINES})`
        );
      } else {
        console.log(`${file}: ${lineCount} lines`);
      }
    }

    if (overLimitCount === 0) {
      console.log(`All files are within the ${MAX_LINES} lines limit.`);
    } else {
      console.log(`${overLimitCount} file(s) exceeded the line limit.`);
    }
  } catch (err) {
    console.error("Error checking HTML lines:", err);
  }
}

checkHtmlLines();
