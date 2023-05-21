const currency_one = document.getElementById('currency-one')
const currency_two = document.getElementById('currency-two')

const amount_one = document.getElementById('amount-one')
const amount_two = document.getElementById('amount-two')

const exchange_rate = document.getElementById('rate')
const swap_btn = document.getElementById('btn-swap')

const last_update = document.getElementById('update')


currency_one.addEventListener('change', calculateMoney)
currency_two.addEventListener('change', calculateMoney)

amount_one.addEventListener('input' , calculateMoney)
amount_two.addEventListener('input', calculateMoney)

function calculateMoney() {
    const currency_one_value = currency_one.value
    const currency_two_value = currency_two.value

    let url = `https://v6.exchangerate-api.com/v6/96f63046eed6e6b4c696890a/latest/${currency_one_value}`
    fetch(url).then(res => res.json()).then(data=> {
        const rate = data.conversion_rates[currency_two_value]
        const update_time = data.time_last_update_utc
        exchange_rate.innerText = `1 ${currency_one_value} = ${rate} ${currency_two_value}`
        amount_two.value = amount_one.value * rate
        last_update.innerText = `Last Update is ${update_time}`
    })
}

swap_btn.addEventListener('click', () => {
    const temp = currency_one.value
    currency_one.value = currency_two.value
    currency_two.value = temp
})
