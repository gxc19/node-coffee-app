const yargs = require("yargs")
const { addOrder, listOrder, removeOrder } = require("./order")

console.log(yargs.argv)

const command = process.argv[2]

if (command == "add") {
    console.log("adding a order...")
    addOrder(yargs.argv.order)
}
else if (command == "remove") {
    console.log("removing order...")
    removeOrder(yargs.argv.order)
}
else if (command == "list") {
    console.log("fetching orders...")
    listOrder()
}
else {
    console.log("command not recognised")
}