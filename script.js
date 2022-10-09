// challenge 2 - Update the body of the page to have a random background  color
const colorBtn = document.getElementById('colorBtn');

// colorBtn.addEventListener('click', function(){
//     let CSS_COLORS = ['aliceblue', 'antiquewhite', 'aqua', 'aquamarine', 'azure', 'beige', 'bisque', 'black', 'blanchedalmond', 'blue', 'blueviolet', 'brown', 'burlywood', 'cadetblue', 'chartreuse', 'chocolate', 'coral', 'cornflowerblue', 'cornsilk', 'crimson', 'cyan', 'darkblue', 'darkcyan', 'darkgoldenrod', 'darkgray', 'darkgrey', 'darkgreen', 'darkkhaki', 'darkmagenta', 'darkolivegreen', 'darkorange', 'darkorchid', 'darkred', 'darksalmon', 'darkseagreen', 'darkslateblue', 'darkslategray', 'darkslategrey', 'darkturquoise', 'darkviolet', 'deeppink', 'deepskyblue', 'dimgray', 'dimgrey', 'dodgerblue', 'firebrick', 'floralwhite', 'forestgreen', 'fuchsia', 'gainsboro', 'ghostwhite', 'gold', 'goldenrod', 'gray', 'grey', 'green', 'greenyellow', 'honeydew', 'hotpink', 'indianred', 'indigo', 'ivory', 'khaki', 'lavender', 'lavenderblush', 'lawngreen', 'lemonchiffon', 'lightblue', 'lightcoral', 'lightcyan', 'lightgoldenrodyellow', 'lightgray', 'lightgrey', 'lightgreen', 'lightpink', 'lightsalmon', 'lightseagreen', 'lightskyblue', 'lightslategray', 'lightslategrey', 'lightsteelblue', 'lightyellow', 'lime', 'limegreen', 'linen', 'magenta', 'maroon', 'mediumaquamarine', 'mediumblue', 'mediumorchid', 'mediumpurple', 'mediumseagreen', 'mediumslateblue', 'mediumspringgreen', 'mediumturquoise', 'mediumvioletred', 'midnightblue', 'mintcream', 'mistyrose', 'moccasin', 'navajowhite', 'navy', 'oldlace', 'olive', 'olivedrab', 'orange', 'orangered', 'orchid', 'palegoldenrod', 'palegreen', 'paleturquoise', 'palevioletred', 'papayawhip', 'peachpuff', 'peru', 'pink', 'plum', 'powderblue', 'purple', 'red', 'rosybrown', 'royalblue', 'saddlebrown', 'salmon', 'sandybrown', 'seagreen', 'seashell', 'sienna', 'silver', 'skyblue', 'slateblue', 'slategray', 'slategrey', 'snow', 'springgreen', 'steelblue', 'tan', 'teal', 'thistle', 'tomato', 'turquoise', 'violet', 'wheat', 'white', 'whitesmoke', 'yellow', 'yellowgreen'];

//     let randomColor = Math.floor(Math.random() * CSS_COLORS.length)

//     function randomizeColors(){
//         document.body.style.backgroundColor = CSS_COLORS[randomColor]
//         document.getElementById('colorName').innerHTML = CSS_COLORS[randomColor]
//     }

//     randomizeColors()
// })
// challenge  3- Using only JavaScript create an element that moves with key presses. Create the element when DOM content loaded.
// const el = document.querySelector('.main')
const player = {
    // el: document.querySelector('.main'),
    x: 200,
    y: 150,
    speed: 2

}
document.addEventListener('DOMContentLoaded', build)
document.addEventListener('keydown', function(e){
   
    if(e.keyCode === 37){player.x -= player.speed;}
    if(e.keyCode === 39){player.x += player.speed;}
    if(e.keyCode === 40){player.x += player.speed;}
    if(e.keyCode === 38){player.x -= player.speed;}
    console.log(e.keyCode)
    
    player.el.style.left = player.y + "px";
    player.el.style.top = player.x + "px";
})
function build(){
    player.el = document.createElement('div')
    player.el.style.position = 'absolute'
    player.x = 100
    player.y = 100
    player.el.style.width = '100px'
    player.el.style.height = '100px'
    player.el.style.backgroundColor = 'yellow'
    
    document.body.appendChild(player.el)
}


 // Live Clock JavaScript
const clockSpan = document.querySelector('.clockSpan')

function getTime(){
	let myDay = new Date();
	let mySecs = myDay.getSeconds();
	let myHour = myDay.getHours();
	let myMins = myDay.getMinutes();
	
	clockSpan.textContent = ("0" + myHour).substr(-2) + ":" + ("0" + myMins).substr(-2) + ":" + ("0" + mySecs).substr(-2);
}
// getTime()
setInterval(getTime, 1000);



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


Alternate method
const myObj = {name: 'RayDue', last: 'Idengeli'}

if(localStorage.getItem('num')){
    let cnt = localStorage.getItem('num')
    cnt = Number(cnt)
    cnt++;
    localStorage.setItem('num',cnt)
} else{
    localStorage.setItem('num',1)
}
console.log(localStorage.getItem('num'))