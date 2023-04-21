// Create an array containing the names of all items in the inventory.

let item = ["avocado", "apple", "pineapple", "peas", "orange"]


// Create a separate array with the corresponding stock quantities of each item.

let stockAmount = [24, 122, 240, 56, 100]

let similarArrays = {}
item.forEach((Element, index)=>{
    similarArrays[Element]=stockAmount[index]
})
console.log(similarArrays)


// Write a function to add a new item to the inventory, updating both arrays.

function addNew(){
    similarArrays.screens = 4
}
addNew()
console.log(similarArrays)


// Write a function to update the stock quantity of an existing item.

function updateItems(){
    similarArrays["watermelon"] = 20
}
updateItems()
console.log(similarArrays)


// Write a function to calculate the total number of items in the inventory.

function findTotal(){
    let value = 0;
    for(let i = 0; i < stockAmount.length; i ++){
        value += stockAmount [i];
    }
    return value;
}
let nums = findTotal();
console.log(nums);



// Write a function to find the item with the lowest stock quantity.

function findMin(){
    let thisObject = Object.values(similarArrays);
    let lower = Math.min(...thisObject);
    console.log(lower)
}
findMin()


