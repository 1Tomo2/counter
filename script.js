// Selecting Elements
let h2 = document.querySelector('.num');
let btns = document.querySelectorAll('button')
// Decrease BTN event
let count = 0
btns.forEach(btn =>{
    btn.addEventListener('click',(e)=>{ 
        let styles = e.currentTarget.classList; // Selecing btns classes
        if(styles.contains('dec')){
            count --
        }else if(styles.contains('inc')){
            count ++
        }else{
            count = 0
        }
        if(count < 0 ){
            h2.style.color = 'red'
        }else if(count > 0){
            h2.style.color = 'green'
        }else{
            h2.style.color = 'white'
        }
      
       
        h2.textContent = count
    })
})


