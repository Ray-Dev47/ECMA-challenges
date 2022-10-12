// challenge 8 -try to code the URL below and encode/decode with all encode/decode url method
let url2 = 'https://wwww.discoveryvip.com/?id=user-id&more=hello world';
console.log(decodeURI(url2));
console.log(decodeURIComponent(url2)); 




// challenge 9 -create a date prototype that add days to the date value. Output the date with 7 days added into the console.

Date.prototype.addDays = function(days){
    let date = new Date(this.valueOf());
    date.setDate(date.getDate() + days);
    return date;
}
let date = new Date();
console.log(date.addDays(7)); // works


// challenge 10 - Multiply an input field value by 10 on button press. Provide error messages to the user of the input is not correct format.
// Clear the input value each time.
let elTry = document.createElement('input')
elTry.setAttribute('type','value')
elTry.setAttribute('value',10)
document.body.appendChild(elTry);
let tryCatch = document.getElementById('tryCatch')

tryCatch.addEventListener('click', useCatch)
function useCatch(){
    let num6 = elTry.value
    num6 *= 10
    
    try{
        console.log(num6)
        if(elTry.value === '' && num6 === 0) throw 'empty input'
        if(isNaN(num6)) throw 'invalid input'
    }catch(e){
        console.log(e)
    } finally {
        elTry.value = ''
    }
}


