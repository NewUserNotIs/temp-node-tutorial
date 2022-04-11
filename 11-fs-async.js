const { readFile, writeFile } = require('fs');

console.log('start');
readFile('./content/first.txt', 'utf-8', (err, result) => {
    if (err) {
        console.log(err);
        return;
    }
    const first = result;
    
    readFile('./content/second.txt', 'utf-8', (err, result) => {
        if (err) {
            console.log(err);
            return;
        }
        const second = result;
        writeFile(
            './content/result-async.txt', 
            `Here is the results : ${first}, ${second}`,
        (err, result) => {
            if (err) {
                console.log(err);
                return;
            }
            console.log('done with this task!!!');
        })
    });
});
console.log('starting the next task');
console.log('starting another task after next');
console.log('and starting another task after the another one task :)');