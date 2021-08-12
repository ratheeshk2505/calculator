function displayValue(num){
    calcinput.value+=num;
}
function clearBox(){
    calcinput.value="";
}
function evaluateExp(){
    let result=eval(calcinput.value);
    calcinput.value=result;
}
function backSpace(){
    let temp=calcinput.value.slice(0,-1);
    calcinput.value=temp;
}