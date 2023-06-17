//API https://v6.exchangerate-api.com/v6/0e6b664cbc953312f2a776bf/latest/

//Include all elements
const main_currency = document.querySelector('#main_currency')
const exchange_currency = document.querySelector('#exchange_currency')

const main_input = document.querySelector('#main_currency_value')
const exchange_input = document.querySelector('#exchange_currency_value')

const swapBtn = document.querySelector('#swap_curreny')

const rate_text = document.querySelector('#rate')

const APIUrl = 'https://v6.exchangerate-api.com/v6/0e6b664cbc953312f2a776bf/latest/'

main_currency.addEventListener('change', exchangeMoney)
exchange_currency.addEventListener('change', exchangeMoney)

main_input.addEventListener('input', exchangeMoney)
exchange_input.addEventListener('input', exchangeMoney)

function exchangeMoney () {
    let main_value = main_currency.value
    let exchange_value = exchange_currency.value

    let API = APIUrl + main_value
    fetch(API)
        .then(res=>res.json())
        .then(data=> {
            let rate = data.conversion_rates[exchange_value]
            rate_text.innerHTML = `1 ${main_value} = ${rate} ${exchange_value}`

            exchange_input.value = (main_input.value * rate).toFixed(2)
        })
}

swapBtn.addEventListener('click', () => {
    const temp = main_currency.value
    main_currency.value = exchange_currency.value
    exchange_currency.value = temp

    exchangeMoney()
})

exchangeMoney()