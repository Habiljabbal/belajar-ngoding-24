/*(1)let result = 1 + 2; //3
document.writeln("<p>1 + 2 = " + result + "</p>")
let originalresult = result; //3

result = result - 1; //2
document.writeln("<p>" + originalresult + "-1 = " + result + "</p>");
originalresult = result; //2

result = result *2; //4
document.writeln("<p>" + originalresult + "*2 = " + result + "</p>")
originalresult = result;(1)*/


//operator augmented assignments
/*(2)let result = 1 + 2; //3
document.writeln("<p>1 + 2 = " + result + "</p>")
let originalresult = result; //3

result -=1; //2
document.writeln("<p>" + originalresult + "-1 = " + result + "</p>");
originalresult = result; //2

result *=2; //4
document.writeln("<p>" + originalresult + "*2 = " + result + "</p>")
originalresult = result;(2)*/

//operator Unary
let result = +1;
document.writeln("<p>" + result + "</p>")

result--;
document.writeln("<p>" + result + "</p>")

result++;
document.writeln("<p>" + result + "</p>")

result= -result;
document.writeln("<p>" + result + "</p>")