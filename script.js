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