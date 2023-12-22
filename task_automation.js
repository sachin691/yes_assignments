const fs = require("fs");
const path = require("path");

const directoryPath = "./task_automation";

// Function to create directory if it doesn't exist
const createDirectory = () => {
  if (!fs.existsSync(directoryPath)) {
    fs.mkdirSync(directoryPath);
    console.log("Directory created: task_automation");
  }
};

// Function to create and concatenate text files
const createAndConcatenateFiles = () => {
  const fileContents = [
    "Content of file 1",
    "Content of file 2",
    "Content of file 3",
  ];

  fileContents.forEach((content, index) => {
    const fileName = `file${index + 1}.txt`;
    const filePath = path.join(directoryPath, fileName);

    fs.writeFileSync(filePath, content);
    console.log(`File created: ${fileName}`);
  });

  const concatenatedContent = fileContents.join("\n");
  const concatenatedFilePath = path.join(directoryPath, "concatenated.txt");
  fs.writeFileSync(concatenatedFilePath, concatenatedContent);

  console.log("Files concatenated into concatenated.txt");
  console.log("Concatenated content:");
  console.log(concatenatedContent);

  // Deleting files
  fileContents.forEach((_, index) => {
    const fileName = `file${index + 1}.txt`;
    const filePath = path.join(directoryPath, fileName);
    fs.unlinkSync(filePath);
    console.log(`File deleted: ${fileName}`);
  });
};

// Execute the tasks
createDirectory();
createAndConcatenateFiles();
