let string = "";
let buttons = document.querySelectorAll('.button');         //querySelectorAll selects everything with the same class as mentioned.

Array.from(buttons).forEach((button)=>{
    button.addEventListener('click', (e)=>{
        if(e.target.innerHTML == '='){
            string = eval(string);       // eval() method evaluates or executes an argument.
            document.querySelector('input').value = string;
        }  
        else if(e.target.innerHTML == 'C'){
            string = "";     
            document.querySelector('input').value = string;
        }   
        else if(e.target.innerHTML == '<b>.</b>'){
            string = string + ".";     
            document.querySelector('input').value = string;
        }   
        else {
            console.log(e.target);
        string = string + e.target.innerHTML;
        document.querySelector('input').value = string;
        }       
    })
})