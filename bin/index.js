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
})
.demandCommand(1).help().argv