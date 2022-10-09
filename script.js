



// challenge 5 - Check if a value exists in the local storage, if it does, increment it by one, otherwise create it and set it to:
// Output the value in the console
let numStorage;
let cnt2 = 1
cnt2 = Number(cnt2)
cnt2++
localStorage.setItem('numStorage', cnt2++);
// localStorage.clear('numStorage')  // test to clear 

function checkIfOnStorage(){
    if(localStorage.getItem('numStorage')!== null){
        alert(localStorage.getItem('numStorage'))
        console.log(`storage exist by ${localStorage.getItem('numStorage')}`)
        
    } else{
        console.log('Storage does not exist')
    }
}
checkIfOnStorage()


// Alternate method
const myObj = {name: 'RayDue', last: 'Idengeli'}

if(localStorage.getItem('num')){
    let cnt = localStorage.getItem('num')
    cnt = Number(cnt)
    cnt++;
    localStorage.setItem('num',cnt)
} else{
    localStorage.setItem('num',1)
}
// getTime()
setInterval(getTime, 1000);


// calculating elapsed time
const startTime = Date.now();
const endTime = Date.now();
const totalElapsed =  endTime - startTime 
console.log(totalElapsed)    // elapsed time in milliseconds\


// Get the number of seconds since the ECMAScript Epoch
const scondz = Math.floor((Date.now() / 1000))
console.log(scondz);   // 1665267340

// challenge : add one day to current date.
const oneDay = new Date();
console.log( oneDay.setDate(oneDay.getDate() + 1))

// add a week to current date
const numOfWeek = 1
console.log(oneDay.setDate(oneDay.getDate() + numOfWeek * 7))



// challenge - get the number of milliseconds since july 15th 1990 and output in the console.
const birthdayz = new Date("July 15, 1990 01:15:00:526");
console.log(birthdayz.getMilliseconds()) // 526


