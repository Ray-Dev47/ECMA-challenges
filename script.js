// challene 16 - Create an interactive typing test for web users with javascript code with the features below

/*
Random Prases for typing test
Counts start and end time
Checks for errors count errors in words
Show result
*/ 

let quotes_array = [
    "hello",
    "god"
    ]; 
let startTime;
let endTime; 
const disp_Msg = document.querySelector('.disp_Msg');
const inputBox =  document.getElementById('textBox');
const btnType = document.getElementById('btnType');
const arrayQuotes = document.querySelector('.arrayQuotes');
// let quotes_array = [
//     "Push yourself, because no one else is going to do it for you.",
//     "Failure is the condiment that gives success its flavor.",
//     "Wake up with determination. Go to bed with satisfaction.",
//     "It's going to be hard, but hard does not mean impossible.",
//     "Learning never exhausts the mind.",
//     "The only way to do great work is to love what you do."
//     ];
btnType.addEventListener('click', function(){
    if(btnType.innerText == 'Start'){
        inputBox.disabled = false
        btnType.innerText == 'Done'
        startPlayGame();
    } else if(btnType.innerText == 'Done'){  
        inputBox.disabled = true;
        btnType.innerText == 'Start'
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
        let finalMsg = `You typed a total of ${str2.length} words at ${speed} words per minute.`
        // console.log(finalMsg);

        if(str2 != disp_Msg.innerText){
              finalMsg = finalMsg + "<br> There were some errors in the wording."
        } else{
            finalMsg
        }
        disp_Msg.innerHTML = finalMsg
    }

    function wordCounter(strWords){
        let responseWord = strWords.split("").length;   
        console.log(responseWord)    
        return responseWord
    }

    function startPlayGame(){
        let ran_quotes = Math.floor(Math.random() * quotes_array.length);
        arrayQuotes.innerText = quotes_array[ran_quotes];
        let dateNow = new Date();
        // console.log(dateNow);
        startTime = dateNow.getTime();   
        btnType.innerText = 'Done'
    }
    
    
})




// str.split refresher -splits a string object into an array of strings by separating the strings  
// let str = 'The quick brown fox jumps over a lazy fox';  
// let words = str.split(' ')
// console.log(words);  // ['The', 'quick', 'brown', 'fox', 'jumps', 'over', 'a', 'lazy', 'fox']
// console.log(words[5])  //jumps
