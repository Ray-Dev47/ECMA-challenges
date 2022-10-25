// Create an interactive typing test for web users with javascript code with the features below

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

btnType.addEventListener('click', function(){
    let val = inputBox.value
    console.log(val.length)
    let timer = null
    disp_Msg.innerHTML = `You typed a total of ${val.length} words  <br> with test correct out of test words`

})

