#!/usr/bin/env node

const yargs = require("yargs");
const { hideBin } = require("yargs/helpers")

yargs(hideBin(process.argv))
    .command("flags", "Get the flags", (yArgs) => {
        return yArgs
    }, (argv) => {
        
    })