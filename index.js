const fs = require('fs');

const port = 8000;
const http = require('http');
const server = http.createServer((req, res) => {
    let date = new Date().toDateString();
    let today = new Date().toISOString();
    fs.writeFileSync(`${date}.txt`, `${today}`, 'utf-8');
    let data = fs.readFileSync(`${date}.txt`, 'utf8');
    res.writeHead(200, {
        "content-type": "text/html"
    })
    res.end(data);
})

server.listen(port, () => console.log(`app is listening to the ${port}`));



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

