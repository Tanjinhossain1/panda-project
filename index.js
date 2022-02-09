const allH3Color = document.querySelectorAll('h3')
for(const colord of allH3Color){
  colord.style.color= 'lightblue'
} 
document.getElementById('background-colors').style.backgroundColor = 'tomato';
document.getElementById('background-colors').style.paddingRight = '10px'
document.getElementById('background-colors').style.margin = '20px'
document.getElementById('background-colors').style.padding = '10px'

var radius = document.getElementsByClassName('card');
for(const round of radius){
  round.style.borderRadius = '30px'
}


var close = document.getElementsByClassName('removed');
for(const remove of close){
    remove.addEventListener('click',function(){
        this.style.display = 'none'
        close.style.marginTop = '20px'
    })
    }

    // input type 
    document.getElementById('inputs').addEventListener('keyup',function(event){
        const submits = document.getElementById('submits');
        if(event.target.value == 'email'){
        submits.removeAttribute('disabled')
        }
        else{
          submits.setAttribute('disabled',true)
        }
      })
      // 2nd
      document.getElementById('inputs').addEventListener('focus',function(){
      
        document.body.style.backgroundColor = 'tomato'
      })
      // 3rd
      document.getElementById('inputs').addEventListener('blur',function(){
        document.body.style.backgroundColor = 'white'
      })
      document.getElementById('inputs').addEventListener('change',function(){
      })


      
      function myFunction(){
        console.log('how')
      }
      




      const colorsInbackground = document.getElementById('color-back');
      colorsInbackground.style.backgroundColor = '#03c6fc'
    document.getElementById('color-back').addEventListener('dblclick',function(){
      colorsInbackground.style.backgroundColor = '#fc036b'
    })