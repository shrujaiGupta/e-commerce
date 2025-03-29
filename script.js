const bananaAtcBtn = document.getElementById('banana-atc-btn')
const appleAtcBtn = document.getElementById('apple-atc-btn')
const orangeAtcBtn = document.getElementById('orange-atc-btn')
const cartTotalValue = document.getElementById('cart-value')
const cartTotal = document.getElementById('cart-total')

let totalMoney = 0

const fruitCount = {
    banana: 0,
    apple: 0,
    orange: 0
};


bananaAtcBtn.addEventListener('click', ()=>{
    totalMoney+= 60
    fruitCount["banana"]++
    console.log(JSON.stringify(fruitCount, null, 2))
    cartTotalValue.className = "text-lg font-semibold"
    cartTotalValue.innerHTML = `
    <span>Total Cart Value : ${totalMoney}/-</span>
    `
    cartTotal.className="text-green-600"
})

appleAtcBtn.addEventListener('click', ()=>{
    totalMoney+= 150
    fruitCount["apple"]++
    console.log(JSON.stringify(fruitCount, null, 2))
    cartTotalValue.className = "text-lg font-semibold"
    cartTotalValue.innerHTML = `
    <span>Total Cart Value : ${totalMoney}/-</span>
    `
    cartTotal.className="text-green-600"
})

orangeAtcBtn.addEventListener('click', ()=>{
    totalMoney+= 100
    fruitCount["orange"]++
    console.log(JSON.stringify(fruitCount, null, 2))
    cartTotalValue.className = "text-lg font-semibold"
    cartTotalValue.innerHTML = `
    <span>Total Cart Value : ${totalMoney}/-</span>
    `
    cartTotal.className="text-green-600"
})
