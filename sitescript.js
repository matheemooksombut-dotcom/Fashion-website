// Script 
const minusBtn = document.querySelector('.minus')
const plusBtn  = document.querySelector('.plus')
const qtyInput = document.querySelector('.qty-input')
const qtyitem  = document.querySelector('.qty-item')
const price  = document.querySelector('.price')

plusBtn.onclick = () => {
    let value = parseInt(qtyInput.value)
    let valueItem  = parseInt(qtyitem.value)
    let pricevalue = parseInt(price.value)
    
    if(value < 99){
        qtyInput.value = value + 1 
        qtyitem.value = valueItem + 1
        price.value = pricevalue*2
    }   
}

minusBtn.onclick = () => {
    let value = parseInt(qtyInput.value)
    let valueItem  = parseInt(qtyitem.value)
    let pricevalue = parseInt(price.value)
    if(value > 1){
    qtyInput.value = value - 1
    qtyitem.value = valueItem -1
    price.value = pricevalue / 2
    } 
}



