const currency_one = document.getElementById('currency-one')
const currency_two = document.getElementById('currency-two')

const amount_one = document.getElementById('amount-one')
const amount_two = document.getElementById('amount-two')

const rate_text = document.getElementById('rate')

const btn = document.getElementById('btn-swap')

currency_one.addEventListener('change', calculateMoney)
currency_two.addEventListener('change', calculateMoney)

amount_one.addEventListener('input', calculateMoney)
amount_two.addEventListener('input', calculateMoney)



function calculateMoney() {
    const one = currency_one.value
    const two = currency_two.value

    let url = `https://v6.exchangerate-api.com/v6/96f63046eed6e6b4c696890a/latest/${one}` // API
    fetch(url).then(res=>res.json()).then(res=>{
        const rate = res.conversion_rates[two] // create rate valiable for store rates data on API 
        rate_text.innerText = `1 ${one} = ${rate} ${two}` // display rate value by compare with currency in currency_two
        amount_two.value = (amount_one.value * rate) // display result in currency_two input
    }) // Calculate 
}

btn.addEventListener('click' , () => {
    const temp = currency_one.value // create temp valiable for store currency_one value
    currency_one.value = currency_two.value // swap value in currency_one to currency_two
    currency_two.value = temp // swap value in currency_two to currency_one
    calculateMoney() // after swapped use calculateMoney() func to calculate again
})

calculateMoney()


