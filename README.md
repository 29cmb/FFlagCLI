# FFlag Command Line Utility 🚩
You thought a discord bot and roblox module was enough? Think again. This is the third and final frontend for my FFlag System. Connects with my [backend source code](https://github.com/29cmb/FFlagAPI) for FastFlags

--- 
## What is a Fast Flag?
A fast flag is a key value pair which is used to asynchronously toggle features on multiple different instances without having to manually update every single one, very useful for games and high-traffic services which can't have long down-time/outages.

---
## Contributions
Contributions are always welcome! If you find a bug, you can open an issue or make a pull request!

## How to use
1. Run `npm install` to install dependancies
2. Run `npm install -g .` to update the utility
3. Run `npm link` to have it be usable outside of the cmd environment

## Commands
`flag flags`
> Get a list of flags

`flag logs`
> Get the log list for the flags

`flag create (flag name) (flag value)`
> Create a new flag

`flag set (flag name) (flag value)`
> Change the value of a flag

`flag delete (flag name)`
> Delete a flag

`flag lock (flag name)`
> Lock a flag

`flag unlock (flag name)`
> Unlock a flag