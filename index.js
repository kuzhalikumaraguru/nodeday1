const exp = require('express');
const fs = require('fs');
const path = require('path');
const app = exp();
const port = process.env.port || 8000;
app.use(exp.json());
let files = [];
const folderPath = path.join(__dirname, '/files');

//Endpoint to create a text file in a folder
app.post('/create-file', (req, res) => {
  req.body.id = files.length > 0 ? files[files.length - 1].id + 1 : 1;
  function text () { //to differentiate the folder name
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789 ';
    let randomText = '';
    for (let i = 0; i < 2; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      randomText += characters.charAt(randomIndex);
    }
    return randomText;
  }
  let filename = new Date().toDateString();
  let currentDate = new Date().toISOString();
  files.push(req.body);
  const filePath = path.join(folderPath, `${filename + text()}.txt`);
  fs.writeFileSync(filePath, currentDate, 'utf-8', (err) => {
    if (err) {
      console.error(err);
      return res.status(500).send('Internal Server Error');
    }
  });
  res.status(200).send(`File ${filename}.txt created successfully`);
  // let filename = req.body.fileName;
  // const filePath = `${filename}.txt`;
});


//Endpoint to retrieve all text file in a folder
app.get('/get-file', (req, res) => {
  const getAllFiles = fs.readdirSync(folderPath);
  fs.readdir(folderPath, 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      return res.status(404).send('File not found');
    }
    data.forEach(e => {
      console.log(e);
    })
  });
  res.status(200).send({ message: 'Fetched Successfully', getAllFiles });
  // const filePath = path.join(folderPath, `${filename}.txt`);
  // let { filename } = req.params;
  // const filepath = `${filename}.txt`;
  //  res.status(200).send(data);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});





// const fs = require('fs');
// const port = 8000;
// const http = require('http');
// const server = http.createServer((req, res) => {
//     let date = new Date().toDateString();
//     let today = new Date().toISOString();
//     fs.writeFileSync(`${date}.txt`, `${today}`, 'utf-8');
//     let data = fs.readFileSync(`${date}.txt`, 'utf8');
//     res.writeHead(200, {
//         "content-type": "text/html"
//     })
//     res.end(data);
// })
// server.listen(port, () => console.log(`app is listening to the ${port}`));
// const os = require('os');
// console.log(os.cpus());
// console.log(os.freemem());
// console.log(os.hostname());
// console.log(os.type());
// console.log(os.version());
// const fs = require('fs');
//async
// fs.writeFile('sample.txt', "This is a sample text", 'utf8', (err) => {
//     if (err) {
//         console.log(err);
//     } else {
//         fs.readFile('sample.txt', 'utf8', (err, data) => {
//             if (err)
//                 console.log(err);
//             else
//                 console.log(data);
//         })
//     }
// })
//sync
// try {
//     fs.writeFileSync('sample1.txt', 'this is a synchronous way of writing the file', 'utf8');
//     fs.appendFileSync('sample1.txt', 'appending the data', 'utf8');
//     let data = fs.readFileSync('sample1.txt', 'utf8');
//     console.log(data);
// }
// catch(error){
//     console.log(error);
// }
// const port = 8000;
// const http = require('http');
// const server = http.createServer((req, res) => {
//     res.writeHead(200, {
//         "content-type": "text/html"
//     })
//     res.end(`<h1>Welcome to NodeJs Server</h1>`);
// })
// server.listen(port, () => console.log(`app is listening to the ${port}`));
// const port = 8000;
// const http = require('http');
// const server = http.createServer((req, res) => {
//     let data = fs.readFileSync('index.html', 'utf8');
//     res.writeHead(200, {
//         "content-type": "text/html"
//     })
//     res.end(data);
// })
// server.listen(port, () => console.log(`app is listening to the ${port}`));