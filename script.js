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
