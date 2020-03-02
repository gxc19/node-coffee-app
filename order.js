const fs = require("fs")

const LoadOrder = () => {
    try {
        const dataBuffer = fs.readFileSync("order.json")
        const orderJson = dataBuffer.toString()
        return JSON.parse(orderJson)
    }   catch (error) {
        return []
    }
}

const addOrder = (myOrder) => {
    const allOrder = LoadOrder()
    allOrder.push({ reminder: myOrder })

    saveOrder(allOrder)
}

const saveOrder = allOrder => {
    const orderJson = JSON.stringify(allOrder)
    fs.writeFileSync("order.json", orderJson)
}

const listOrder = () => {
    const allOrder = LoadOrder()

    allOrder.map(order => {
        console.log(order)
    })
}

const removeOrder = orderToDelete => {
    const allOrder = LoadOrder()

    const orderToKeep = allOrder.filter(order => {
        return order.reminder != orderToDelete
    })
    saveOrder(orderToKeep)
}

module.exports = {
    addOrder,
    listOrder,
    removeOrder
}