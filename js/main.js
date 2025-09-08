import { item, cartEl } from "./module.js";

const itemContainer = document.querySelector(".itemsContainer");
const cart = document.querySelector(".cart");
const result = document.getElementById("result")
let cartItems = []
let cartNames = []
let cartsum = 0

loadData();

fetch("./js/db.json")
.then(res => res.json())
.then(db => {
    db.forEach(el=>{
        const newItem = new item(el.nam, el.imgNam, el.price);
    
        newItem.htmlEl.addEventListener("click", ()=>{
            result.textContent = ""
            if(!cartNames.includes(newItem.name)){
                cartNames.push(newItem.name)
                const newCartItem = new cartEl(newItem.name, newItem.imgNam, newItem.price)
                cartItems.push(newCartItem)
    
                newCartItem.rightArrow.addEventListener("click", ()=>{
                    addTo(newCartItem)
                })
    
                newCartItem.leftArrow.addEventListener("click", ()=>{
                    removeFrom(newCartItem)
                })
    
                cart.appendChild(newCartItem.htmlEl)
                saveData();
            }
            addTo(cartItems[cartNames.indexOf(newItem.name)])
         })
         itemContainer.appendChild(newItem.htmlEl);
    });
});



function addTo(item){
    cartsum+=parseFloat(item.price)
    result.textContent=cartsum.toFixed(2)

    item.amountValue++;
    item.amount.textContent = item.amountValue
    saveData()
}

function removeFrom(item){
    cartsum-=parseFloat(item.price)
    result.textContent=cartsum.toFixed(2)

    if(item.amountValue > 1){
        item.amountValue--;
        item.amount.textContent = item.amountValue
    } else{
        let locIndex = cartItems.indexOf(item);

        cartItems.splice(locIndex, 1);
        cartNames.splice(locIndex, 1);

        cart.removeChild(item.htmlEl)
        item = null
    }
    saveData();
}

function saveData() {
    localStorage.clear();

    localStorage.setItem("cartItems", JSON.stringify(cartItems));
    localStorage.setItem("cartNames", JSON.stringify(cartNames))
}

function loadData() {
    const savedData = JSON.parse(localStorage.getItem("cartItems"))
    if (!savedData) return;

    savedData.forEach(el => {
        const newLoadCartItem = new cartEl(el.nameValue, el.imgNam, el.price);
        newLoadCartItem.amountValue = el.amountValue;
        newLoadCartItem.amount.textContent = newLoadCartItem.amountValue;

        cartsum += parseFloat(el.price)*el.amountValue
        result.textContent = cartsum.toFixed(2)
        cartItems.push(newLoadCartItem)

        newLoadCartItem.rightArrow.addEventListener("click", ()=>{
            addTo(newLoadCartItem)
        })

        newLoadCartItem.leftArrow.addEventListener("click", ()=>{
            removeFrom(newLoadCartItem)
        })

        cart.appendChild(newLoadCartItem.htmlEl)
    })
    const savedNames = JSON.parse(localStorage.getItem("cartNames"));

    savedNames.forEach(el => {
        cartNames.push(el)
    })
}

document.querySelector(".clearCart").addEventListener("click", () => {
    
    cartItems.forEach(item => {
        let locIndex = cartItems.indexOf(item);
        cart.removeChild(item.htmlEl)
        item = null
    })
    cartItems = [];
    cartNames = [];
    cartsum = 0;
    result.textContent = cartsum.toFixed(2);
    saveData()
})
