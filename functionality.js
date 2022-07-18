var total = "";
var expression = document.getElementById('expression');
var result = document.getElementById('result');

function show(value){
    total += value;
    console.log(total);
    expression.value = total;
}

function calc(){
    if(total.length == 0 || total == '0'){
        alert('Enter correct equation');
        return;
    }

    try{
        result.value = eval(total);
    }catch(e){
        alert('Invalid equation or input')
    }
}

function backspace(){
    total = total.slice(0, -1);
    expression.value = total;
}

function clearAll(){
    expression.value = '';
    result.value = '';
    total = "";
}