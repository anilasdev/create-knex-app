const fs = require('fs');
const templates = require('es6-template-strings');
module.exports = (args) => {
    const contents = fs.readFileSync(`${process.env.PWD}/templates/model.txt`, 'utf8');
    if (args.name.substr(-1) === 'y') {
        args.name
    }
    const names = {
        Model: args.name,
        model: args.name.toLowerCase(),
        Models: args.name.substr(-1) === 'y' ? args.name.substr(0, args.name.length - 1) + 'ies' : args.name + 's',
    }
    names.modelName = names.Models.match(/[A-Z][a-z]+/g).join('_').toLocaleLowerCase()
    const parsed = templates(contents, names)
    fs.writeFile(`${process.env.PWD}/models/${args.name}.js`, parsed, function(err) {
        if (err) throw err;
        console.log(`Model ${args.name} is created successfully`);
    });
}