function IfElseStatements(num) {
    if (num < 5) {
        return "Tiny";
    } else if (num < 10) {
        return "Small";
    } else if (num < 15) {
        return "Medium";
    }else if (num < 20) {
        return "Large";
    } else {
        return "Huge";
    };
    
}
console.log(IfElseStatements(30));
  
function switchStatement(val) {
   answer = "";

    switch(val) {
        
        case "bob":
            answer = "Marley";
            break;
        case 42:
            answer = "The Answer";
            break;
        case 1:
            answer = "There is no no 1";
            break;
        case 99: 
            answer = "Missed me by this much";
            break;
    }
    return answer;
}
console.log(switchStatement(99));