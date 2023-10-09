var scrn = document.getElementById("output-box")
var prev = document.getElementById("prev-box")
var last_element
console.log(scrn)



function isStringNumber(str) {
    return !isNaN(Number(str));
}

function containsOperators(inputString) {
    
    const operators = ['+', '-', '*', '/'];
    const operatorPattern = new RegExp(`[${operators.map(op => '\\' + op).join('')}]`);
    return operatorPattern.test(inputString);
  }

function input(x){
    last_element = scrn.value.slice(-1)
    if(last_element == ')'){
        if(isStringNumber(x)){
            new_value = `*${x}`
            scrn.value = scrn.value + new_value
            return
        }
      
    }
    if(x=='('){
        if (last_element == ''||last_element == '+'||last_element == '-'||last_element == '*'||last_element == '/'){
            scrn.value = scrn.value + x
            return
        }
        if (isStringNumber(last_element)){
            new_value = `*${x}`
            console.log(new_value, typeof(new_value))
            scrn.value = scrn.value + new_value
            return
        }
    }
    else{
        scrn.value = scrn.value + x
    }
}


function allClear(){
    scrn.value = ''
    prev.value = ''
}

function del(){
    scrn.value = scrn.value.slice(0,-1)
}

function calc(){
    try{
        if(!containsOperators(scrn.value)){
            return
        }       
        prev.value = scrn.value + " ="
        scrn.value = eval(scrn.value)
    }


    catch{
        scrn.value = 'ERROR'
        prev.value = ''
    }
    
}