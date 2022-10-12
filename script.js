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


