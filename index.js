#!/usr/bin/env node

const program = require('commander');
// Require logic.js file and extract controller functions using JS destructuring assignment
const { createController, createRouter, createModel } = require('./logic');

program
    .version('0.0.1')
    .description('Creates MVC using knex ORM');

program
    .command('all <name>')
    .alias('a')
    .description('Add a controller,router file')
    .action((name) => {
        createController({ name });
        createRouter({ name });
        createModel({ name });
    });
program
    .command('controller <name>')
    .alias('c')
    .description('Add a controller file')
    .action((name) => {
        createController({ name });
    });
program
    .command('router <name>')
    .alias('r')
    .description('Add a router file')
    .action((name) => {
        createRouter({ name });
    });
program
    .command('model <name>')
    .alias('m')
    .description('Add a model file')
    .action((name) => {
        createModel({ name });
    });
program.parse(process.argv);
