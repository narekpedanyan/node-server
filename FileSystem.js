const fs = require('fs');

// fs.readFileSync(__filename, (err, data) => {
//
// });



fs.writeFile('file.txt', 'Hello dear ni', (err, data) => {
    console.log(err, 'err');
    console.log(data, 'data');
});

// fs.appendFile('file_1.txt', 'Hello dear ni', (error, data) => {
//     if (error) {
//         console.log(error);
//     }
//     console.log(data, 'data')
// });
