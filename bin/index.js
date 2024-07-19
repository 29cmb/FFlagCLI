#!/usr/bin/env node

const yargs = require("yargs");
const axios = require("axios")

const baseAPIURL = "https://flags.devcmb.hackclub.app"

yargs.command({
    command: "flags",
    describe: "Get all flag values",
    builder: (yargs) => { return yargs },
    handler: async (argv) => {
        await axios.get(`${baseAPIURL}/api/flags`).then(response => {
            response.data.data.forEach((flag) => {
                console.log(`${flag.locked == true ? "🔒 " : ""}${flag.flag}: ${typeof flag.value == "boolean" ? (flag.value == true ? "✅" : "❌") : flag.value}`)
            })
        }).catch((err) => {
            console.log("An error occured")
        })
    }
}).command({
    command: "logs",
    describe: "View the flag logs",
    builder: (yargs) => { return yargs },
    handler: async (argv) => {
        await axios.get(`${baseAPIURL}/api/logs`).then(response => {
            response.data.data.forEach((flag) => {
                console.log(flag.message)
            })
        }).catch((err) => {
            console.log("An error occured")
        })
    }
}).command({
    command: "create",
    describe: "Create a new flag",
    builder: (yargs) => { 
        return yargs.positional("name", {
            describe: "Name of the flag",
            type: "string",
        })
        .positional("value", {
            describe: "Value of the flag",
            type: "string",
            demandOption: true,
        })
    },
    handler: async (argv) => {
        if(argv._.length !== 3) return console.log("You did not provide the valid amount of arguments")
        if(argv._[2] == "true") argv._[2] = true
        if(argv._[2] == "false") argv._[2] = false
        await axios.post(`${baseAPIURL}/api/create`, {
            flag: argv._[1],
            value: argv._[2]
        }).then(response => {
            console.log(response.data.message)
        }).catch(err => {
            console.log("An error occured")
        })
    }
})
.demandCommand(1).help().argv