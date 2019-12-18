const fs = require('fs');
const templates = require('es6-template-strings');
module.exports = (args) => {
    console.log(args);
    console.log(`${process.env.PWD}/templates/controller.txt`)
    const contents = fs.readFileSync(`${process.env.PWD}/templates/controller.txt`, 'utf8');
    if (args.name.substr(-1) === 'y') {
        args.name
    }
    const options = {
        Model: args.name,
        model: args.name.toLowerCase(),
        Models: args.name.substr(-1) === 'y' ? args.name.substr(0, args.name.length - 1) + 'ies' : args.name + 's',
    }
    const parsed = templates(contents, options)
    fs.writeFile(`${process.env.PWD}/controllers/${options.Models}.js`, parsed, function (err) {
        if (err) throw err;
        console.log(`Controller ${options.Models} is created successfully`);
    });
}