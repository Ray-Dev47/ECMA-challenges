// challenge - Create an array and randomly on page load output an item from the array on the screen.
const ArrMsgBtn = document.getElementById('ArrMsgBtn');

ArrMsgBtn.addEventListener('click', function(){
      let msg = ['Hello', 'Good Morning', 'Good Afternoon', 'Good Evening', 'Merry Christmas', 'How far', 'happy Val'];
      let myrandom = Math.floor(Math.random() * msg.length)
    //   console.log(myrandom)

      function showMsgOnHTML(){
         document.getElementById('arrMsg').innerHTML = msg[myrandom]
      }
      
      showMsgOnHTML()
})