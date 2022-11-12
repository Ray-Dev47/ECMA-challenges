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
// let quotes_array = [
//     "Push yourself, because no one else is going to do it for you.",
//     "Failure is the condiment that gives success its flavor.",
//     "Wake up with determination. Go to bed with satisfaction.",
//     "It's going to be hard, but hard does not mean impossible.",
//     "Learning never exhausts the mind.",
//     "The only way to do great work is to love what you do."
//     ];
let quotes_array = [
    "hello here",
    "god is good"
    ];

let startTime;
let endTime;



btnType.addEventListener('click', function(){

    if(this.innerHTML === 'Start'){
        inputBox.disabled = false
        btnType.innerText = 'Done'
        startPlayGame();
    } else if(this.innerHTML === 'Done'){
        
        inputBox.disabled = true;
        btnType.innerText = 'Start'
        // inputBox.value = '';
        endGame();
    }
     
    function endGame(){
        let dateNow = new Date();
        endTime = dateNow.getTime();
        let totalTime = ((endTime - startTime)/1000);
        let str2 = inputBox.value;
        console.log(str2)
        let wordCount = wordCounter(str2);
        let speed = Math.round((wordCount / totalTime)* 60)
        // console.log( speed)
        let finalMsg = `You typed at ${speed} words per minute.`
        console.log(finalMsg);

        if(str2 != disp_Msg.innerText){
                finalMsg += "<br>There were some errors in the wording."
        }
        disp_Msg.innerHTML = finalMsg
    }

    function wordCounter(strWords){
        // let wordCount = inputBox.value;
        let responseWord = strWords.split('').length;   
        // console.log(responseWord)    
        return responseWord
    }


    
 
    function startPlayGame(){
        let ran_quotes = Math.floor(Math.random() * quotes_array.length);
        arrayQuotes.innerText = quotes_array[ran_quotes];
        let dateNow = new Date();
        // console.log(dateNow);
        startTime = dateNow.getTime();   
        
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




// str.split refresher -splits a string object into an array of strings by separating the strings  
// let str = 'The quick brown fox jumps over a lazy fox';  
// let words = str.split(' ')
// console.log(words);  // ['The', 'quick', 'brown', 'fox', 'jumps', 'over', 'a', 'lazy', 'fox']
// console.log(words[5])  //jumps
