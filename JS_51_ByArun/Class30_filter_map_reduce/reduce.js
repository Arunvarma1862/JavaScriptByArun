let num=[1,2,3,4,5,6,7,8,9,10]
let newNum= num.reduce((acc,cur)=>{
    // console.log(`acc : ${acc} and cur ${cur}`)
    return acc+cur
},0)
// console.log(newNum)


const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const newItem= shoppingCart.reduce((acc,item)=>{
    return item.price+acc
},0)

console.log(newItem)