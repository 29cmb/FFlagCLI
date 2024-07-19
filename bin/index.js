#!/usr/bin/env node

const yargs = require("yargs");

yargs.command({
    command: "flags",
    describe: "Get all flag values",
    builder: (yargs) => {
        return yargs
    },
    handler: (argv) => {
        console.log("Good morning")
    }
}).demandCommand(1).help().argv