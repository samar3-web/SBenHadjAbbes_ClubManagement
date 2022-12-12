const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
class Adherent{
    constructor() {
        this.adherent = [];
    }

    list() {
        return [...this.adherent];
    }

  
    complete(title) {
        let todoFound = false;
        this.adherent.forEach((adherent) => {
            if (adherent.title === title) {
                adherent.completed = true;
                adherentFound = true;
                return;
            }
        });

        if (!adherentFound) {
            throw new Error(`No adherent was found with the title: "${title}"`);
        }
    }

}
module.exports = Adherent;