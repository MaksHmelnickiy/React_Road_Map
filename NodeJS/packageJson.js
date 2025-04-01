// Так как ⁡⁢⁣⁢нельзя⁡ в ⁡⁢⁣⁣package.json⁡⁡ делать какие то коментарии , буду писать здесь и описывать все свойства. 

let packageJson = {
  "name": "nodejs",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "start": "node index.js"
  },
  "author": "maksHmelnickiy",
  "license": "ISC",
  "dependencies": {
    "currency-converter-lt": "^2.0.1" // как мы видим мы установили дополнительную либу. И здесь описывается ее версия. ⁡⁣⁣⁢dependencies - зависимости⁡ (перевод)
  }
}
