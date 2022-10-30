// challene 16 - Create an interactive typing test for web users with javascript code with the features below

/*
Random Prases for typing test
Counts start and end time
Checks for errors count errors in words
Show result
*/ 

const phrase =  `Africa will be great again!`
const inputBox =  document.getElementById('textBox');
const btnType = document.getElementById('btnType');
const disp_Msg = document.querySelector('.disp_Msg');
const doneBtn = document.getElementById('done');
const arrayQuotes = document.querySelector('.arrayQuotes')

doneBtn.style.display = 'none'


btnType.addEventListener('click', function(){
    let val = inputBox.value
    console.log(val.length)
    // disp_Msg.innerHTML = `You typed a total of ${val.length} words per minute`
    btnType.style.display = 'none'
    doneBtn.style.display = 'block'
    let quotes_array = [
        "Push yourself, because no one else is going to do it for you.",
        "Failure is the condiment that gives success its flavor.",
        "Wake up with determination. Go to bed with satisfaction.",
        "It's going to be hard, but hard does not mean impossible.",
        "Learning never exhausts the mind.",
        "The only way to do great work is to love what you do."
        ];

    let ran_quotes = Math.floor(Math.random() * quotes_array.length);
    function showRanQuotes(){
        arrayQuotes.innerHTML = quotes_array[ran_quotes];

    }
    showRanQuotes();
    
})




