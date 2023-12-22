
let display = document.querySelector('#display');
function show(input) {
   while(input!=='='){
        if (input === 'C') {
            display.value = '';
        }else if (input==='+'||input==='-'||input==='*'||input==='/'){
            display.value = '';
            show(input);
        }}
        else{
            
        }
    
}
