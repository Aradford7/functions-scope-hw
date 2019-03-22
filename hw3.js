console.log('JS is runnning and running and running')

//1.Verbal questions
//Write answers to the following questions as comments.

//What is the difference between a parameter and an argument?
    //A parameter is a variable in a method defination
    //Parameter is variable in declaration of function. When a method is called
    //the arguments are the data that passes thru the methods' parameters.
    //Arguments is the actual value of this variable that gets passed to function.

//Within a function, what is the difference between return and console.log?
    //console.log is mainly for developers to check to see if script is running.
    //return does not appear in the console and it will end the loop or function

//What are the implications of the ability of a function to return a value?
    //If the return is not in the same block of code it change the value
    //The way it was declared, like var, let , constant can affect

//2.Write a function checkPalindrome that accepts a single argument, a string.
// Yes, you've done it before, but do it again. Later in this assignment
// we're gonna beef up our palindrome function some. See if you can do it
// without looking back at your previous answer. The function should return 
//true if the string is a palindrome, false if not. Make sure your function 
//will give the correct answer for words with capital letters.

//PseudoCode
//declare function checkPalindrome
//make a string words mix 
//split the string
//if function return true == palindrome
//if function return false ==! palindrome
//make function with .Uppercase for capital letters
/*
var str = ["eye", "dad", "bro", "mom"]
function palindrome(str) {
    str = str.toLowerCase().replace(/[\W_]/g, '');
    for(var i = 0, len = str.length - 1; i < len/2; i++) {
      if(str[i] !== str[len-i]) {
        return false;
      }
    }
    return true;
}
palindrom("eye");
palindrom("bro"); */
  
 //3. Digit Sum
 //Write a function sumDigits taht accepts a number and returns the
 //sum of the digits

 //PseudoCode
 //Write a fx called "sumDigits"
 //give a number, "sumDigits = return of all sum of numbers"
//var output = sumDigits(1148)
//console.log(output); //anwser 14

/*function sumDigits(num){
    var numString = num.toString(); // var numstring =1148
    var start = 0;
    var sum = 0;
    if (num < 0){ //if negative
        sum -= Number(numString[1]);
        start += 2;
    }
    for (var i = start; i < numString.length; i++) {
        sum += Number(numString[i]);
    }
    return sum;
}
console.log(sumDigits(1148)); //answer 14  */