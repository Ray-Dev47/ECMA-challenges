// challenge 8 -try to code the URL below and encode/decode with all encode/decode url method
// let url2 = 'https://wwww.discoveryvip.com/?id=user-id&more=hello world';
// console.log(decodeURI(url2));
// console.log(decodeURIComponent(url2)); 




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




let xhrChuck = new XMLHttpRequest();
const chuckUrl = "https://api.chucknorris.io/jokes/random"
xhrChuck.onreadystatechange = function(){
	console.log(xhrChuck.readyState);
	if(this.readyState == 4 && this.status == 200){
		console.log(xhrChuck.response);
       // the API is in JSON format so we will need to convert it to javascript object
		let chuckJoke = JSON.parse(xhrChuck.response)
		console.log(chuckJoke.id)// shows the id associated with a joke
		console.log(chuckJoke.value); // shows the actual joke
		// document.write(chuckJoke.value)

	}
}
xhrChuck.open('GET', chuckUrl);
xhrChuck.send()



// random joke api -- https://official-joke-api.appspot.com/random_joke
let xhrRanJoke = new XMLHttpRequest();
const ranJokeUrl = "https://official-joke-api.appspot.com/random_joke"
console.log(xhrRanJoke)
xhrRanJoke.onreadystatechange = function(){
    if(this.readyState == 4 && this.status == 200){
        console.log(xhrRanJoke.response);
        let parsedJoke = JSON.parse(xhrRanJoke.response)
        console.log(parsedJoke.setup)
        console.log(parsedJoke.punchline)
    }
}
xhrRanJoke.open('GET',ranJokeUrl)
xhrRanJoke.send()


// 
let fakeApi = document.getElementById('fakeApi')
let fakeUrl = 'https://jsonplaceholder.typicode.com/users/'
let el4 = document.createElement('input')
el4.setAttribute('type','number');
el4.setAttribute('value','5');
document.body.appendChild(el4);

fakeApi.addEventListener('click', getFakeList)
     function getFakeList(){
          let inputUrl = fakeUrl + '?_limit=' + el4.value
    fetch(inputUrl)
    .then(function(response){
        return response.json()
    })
    .then(function(data){
        console.log(data)
    })
    // console.log('ray')

     }

// challenge - get data https://jsonplaceholder.typicode.com/todos, create elements that are green for completed  and red for not completed items in the list. populate the page div

const todoUrl = 'https://jsonplaceholder.typicode.com/todos'
const mainUL = document.createElement('ol')
let showOnDiv = document.getElementById('todo')
loadJSON()
function loadJSON(){
    fetch(todoUrl)
    .then(function(resp){
        return resp.json()
    })
    .then(function(data){
        console.log(data)
        for(let i = 0; i < data.length; i++){
            let LI = document.createElement('li');         
           LI.innerHTML = data[i].title;
           mainUL.appendChild(LI)
           
        //    if(data[i].completed === false){
        //     LI.style.color = 'red'
        // } else{
        //     LI.style.color = 'blue'
        // } 
        // alterative to if else---- tenary operator
        LI.style.color = data[i].completed === false ? "green" : "red"
        }
    })

    // document.body.appendChild(mainUL);
}

//  Challenge 11 - TIP Calculator - Use Math to calculate a value. Get an input from the user and use it in the calculation. 
// Update the HTML to show the final value.
const btn = document.getElementById('addTip');
const showTip = document.getElementById('showTip')
const tipInput = document.createElement('input');
tipInput.setAttribute('type','number');
// tipInput.setAttribute('value', "")
document.body.appendChild(tipInput)

btn.addEventListener('click', function(){
    const cost = tipInput.value
    let tipCost = (0.15 * cost).toFixed(2)
    showTip.textContent = `You should tip $${tipCost} on $${cost} Bill`
})


// challenge 12 - Customized JavaScript Messages
// Get input value and output to the screen a welcome message to the users name that is entered into the input field
const showMsg = document.querySelector('.showMsg');
const msgInput = document.getElementById('msgInput');
const btn2 = document.getElementById('custom')

btn2.addEventListener('click', func)
function func(){
    let inputMsg = msgInput.value
    let customMsg = `Hello, Welcome ${inputMsg}!`
    showMsg.textContent = customMsg
}


// challemge 13 - Customized message using javascript depending on time of the day
let dayMsg = document.getElementById('dayMsg');
let outputMsg = document.querySelector('.output')

dayMsg.addEventListener('click', function(){
    let d = new Date()
    let timeMsg = d.getHours();
    outputMsg.style.backgroundColor = 'blue'
    outputMsg.style.color = 'white'
    outputMsg.style.padding = '40px'
    outputMsg.style.fontSize = '50px'
    if(timeMsg < 12){
        outputMsg.innerHTML = 'Its Morning!'
    } 
    if(timeMsg > 17){
        outputMsg.innerHTML = 'Its evening!'
    } 
    if(timeMsg == 12 ){
        outputMsg.innerHTML = 'Its afternoon!'
    } 

})

// challenge 14- Create a coin toss application that tells if its a head or a tail, Note: the game will be you vs computer

let tossMsg = document.querySelector('.message')
const playerBtns = document.querySelectorAll('.btns')
const tossArray = ["head", "tail"];
let score = [0,0]

for(let i = 0; i < playerBtns.length; i++){ 
    playerBtns[i].addEventListener('click', tossCoin)
}
        function tossCoin(e){
            let playerGuess = e.target.innerText
            let computerToss = Math.floor(Math.random() * tossArray.length)
            let computerGuess = tossArray[computerToss]
            tossMsg.innerHTML = 'Computer Selected:    ' + computerGuess + '<br>';
            let output;
            if(playerGuess === computerGuess){
                output = 'Player Wins '
                score[0]++
            } else{
                output = 'Computer Wins'
                score[1]++
            }
            tossMsg.innerHTML = tossMsg.innerHTML + output +  "<br> Player " + score[0] + "  Computer " + score[1] 
        }
    

// challenge 15 - rock paper scissors Game
// player choice
let playerChoice = prompt('Please enter between: rock, paper or scissors?')
 
let computerChoice = Math.floor(Math.random() * 3)