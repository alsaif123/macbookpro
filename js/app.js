const memoryCost = document.getElementById('memory-cost');
const storageCost = document.getElementById('storage-cost');
const delivaryCost = document.getElementById('delivary-cost');

//Memory update

function eightMemory(){
    memoryCost.innerText = '0';
    calculateTotal()
}

function sixteenMemory(){
      memoryCost.innerText = '180';
      calculateTotal()
}   


//Storage update

function firstStorage(){
    storageCost.innerText = '0';
    calculateTotal()
}

function secondStorage(){
    storageCost.innerText = '100';
    calculateTotal()
}
function thirdStorage(){
    storageCost.innerText = '180';
    calculateTotal()
}
//Delivary Update

function freeDelivary(){
    delivaryCost.innerText = "0";
    calculateTotal()
}
function costDelivary(){
    delivaryCost.innerText = "20";
    calculateTotal()
}
//Best Price Update

function calculateTotal(){
    
const totalPrice = parseFloat(memoryCost.innerText) + parseFloat(storageCost.innerText) + parseFloat(delivaryCost.innerText) + 1299 ;

document.getElementById('total-price').innerText = totalPrice;
document.getElementById('last-price').innerText = totalPrice;
};

//Promocode section

document.getElementById('verifyCode').addEventListener('click', function(){
   
   const inputCode = document.getElementById('promo-code');
   const promoCode = inputCode.value;
   
   let totalPriceText = document.getElementById('last-price');
   let totalPrice = totalPriceText.innerText;

   let lastPrice = parseFloat(totalPrice);
   
    if(promoCode == 'stevekaku'){
       
      lastPrice = lastPrice * .8;
        
    }
});

