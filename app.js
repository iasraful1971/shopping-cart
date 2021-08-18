
function updateProductNumber (product , price , isIncrising){
    const productInput = document.getElementById(product + '-number');
    let productNumber = productInput.value;
    if(isIncrising === true){
        productNumber  = parseInt(productNumber) + 1;
    }
    else if(isIncrising === false && productNumber > 0){
        productNumber = parseInt(productNumber) - 1;
    }
    productInput.value = productNumber;
    //update  total
    const productTotal = document.getElementById(product + '-total');
    productTotal.innerText = productNumber * price;
    //calculate total 
    calculateTotal();
}

//get input value 
function getInputValue (product){
    const productInput  =  document.getElementById(product + '-number');
    const productNumber =  parseInt(productInput.value);
    return productNumber;
}
// calculation 
function calculateTotal (){
    //phone total
    const phoneTotal = getInputValue('phone') * 1219;
    //case total
    const caseTotal = getInputValue('case') * 59;

     //update in html
    const subTotal= phoneTotal + caseTotal;

    // tax calc 
    const tax = subTotal / 10;
   
    //total
    const totalPrice = subTotal + tax;

    document.getElementById('sub-total').innerText = subTotal;
    document.getElementById('tax-amount').innerText = tax;
    document.getElementById('total-price').innerText = totalPrice;

}







//phone plus handler
document.getElementById('phone-plus').addEventListener('click' , function(){
    updateProductNumber('phone' ,1259,  true);
 });
 //phone minus handler
 document.getElementById('phone-minus').addEventListener('click' , function(){
    updateProductNumber('phone' ,1259, false);
 });

// cases plus handler
document.getElementById('case-plus').addEventListener('click' , function(){
    updateProductNumber('case' ,59, true);
})
// cases minus handler
document.getElementById('case-minus').addEventListener('click' , function(){
   updateProductNumber('case' ,59, false)
});
