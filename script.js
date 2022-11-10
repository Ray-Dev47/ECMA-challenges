// challene 16 - Create an interactive typing test for web users with javascript code with the features below

/*
Random Prases for typing test
Counts start and end time
Checks for errors count errors in words
Show result
*/ 

   
const inputBox =  document.getElementById('textBox');
const btnType = document.getElementById('btnType');
const disp_Msg = document.querySelector('.disp_Msg');
const arrayQuotes = document.querySelector('.arrayQuotes');
let quotes_array = [
    "Push yourself, because no one else is going to do it for you.",
    "Failure is the condiment that gives success its flavor.",
    "Wake up with determination. Go to bed with satisfaction.",
    "It's going to be hard, but hard does not mean impossible.",
    "Learning never exhausts the mind.",
    "The only way to do great work is to love what you do."
    ];

let startTime;
let endTime;



btnType.addEventListener('click', function(){

    console.log( btnType.innerHTML) 
    if(this.innerHTML === 'Start'){
        inputBox.disabled = false
        btnType.innerHTML = 'Done'
        startPlayGame()
    } 

    let val = inputBox.value
    console.log(val.length)
    if(btnType.innerHTML == 'Done'){
        btnType.addEventListener('click', function(){
            val = disp_Msg.innerHTML = `You typed a total of ${val.length} words per minute`
        })
        console.log('clicked');
    }

    function startPlayGame(){
        let ran_quotes = Math.floor(Math.random() * quotes_array.length);
        arrayQuotes.innerText = quotes_array[ran_quotes];
        let dateNow = new Date();
        // console.log(dateNow);
        startTime = dateNow.getTime();
        console.log(startTime);


           
        
    }
    
    // // console.log(val.length)
    // btnType.style.display = 'none'
    // doneBtn.style.display = 'block'
   

    // let ran_quotes = Math.floor(Math.random() * quotes_array.length);
    // function showRanQuotes(){
    //     arrayQuotes.innerHTML = quotes_array[ran_quotes];

    // }
    // showRanQuotes();
    
})
// doneBtn.addEventListener('click', function(){
//     let val = inputBox.value
//     disp_Msg.innerHTML = `You typed a total of ${val.length} words per minute`

// })




