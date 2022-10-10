



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
        // alert(localStorage.getItem('numStorage'))
        console.log(`storage exist by ${localStorage.getItem('numStorage')}`)
        
    } else{
        console.log('Storage does not exist')
    }
}
checkIfOnStorage()


// Alternate method
// const myObj = {name: 'RayDue', last: 'Idengeli'}

// if(localStorage.getItem('num')){
//     let cnt = localStorage.getItem('num')
//     cnt = Number(cnt)
//     cnt++;
//     localStorage.setItem('num',cnt)
// } else{
//     localStorage.setItem('num',1)
// }
// console.log(localStorage.getItem('num'))



// Create a countdown timer that decreases by one second until it reaches zero
let timeLeft = 20;
let downloadTimer = setInterval(function(){
    if(timeLeft <= 0 ){
        clearInterval(downloadTimer)
        document.querySelector('.countDownClass').innerHTML = 'Finished'
    } else{
        document.querySelector('.countDownClass').innerHTML = `${timeLeft}  Seconds remaining`
    }
    timeLeft = timeLeft - 1
}, 1000)