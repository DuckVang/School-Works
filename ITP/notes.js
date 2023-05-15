var fs = require("fs");
const prompt = require("prompt-sync")({ sigint: true });
fs.writeFile("test.txt", "Hello World!", function (err, file) {})
while (true) {
  let text;
  let path = "./data/";

  const action = prompt("Enter file action ( either +, -, * or / ): ").trim();
  try {
    switch (action) {
      case "+":
        path += prompt("enter file: ").trim() + ".txt";
        if (!fs.existsSync(path)) throw "file not found";
        break;
      case "*":
        path += prompt("enter name of new file: ").trim() + ".txt"
        console.log(path)
        if(fs.existsSync(path)) throw "file already exists";
        fs.writeFileSync(path, '', function (err, file) {
            if (err) throw err;
            console.log('Created!');
          });
        break;
    }
  } catch (error) {
    console.log(error);
    continue;
  }

  const operator = prompt("Enter file operator ( either +, -, * or / ): ").trim();
  switch (operator) {
    case "+":
    text = prompt("Enter text: ").trim();
    console.log(text)
      fs.appendFileSync(path, text, function (err, file) {
        if (err) throw err;
        console.log("Updated!");
      });
      break;
    case "-":
      fs.writeFileSync(path, "", function (err, file) {});
      break;

    case "*":
    text = prompt("Enter text: ").trim();
      fs.writeFileSync(path, text, function (err, file) {});
      break;

    case "/":
      console.log(fs.readFileSync(path, "utf8"));
      break;

    default:
      console.log("Invalid operator");
      break;
  }
}
