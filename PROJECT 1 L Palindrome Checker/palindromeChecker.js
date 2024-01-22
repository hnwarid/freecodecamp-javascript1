function palindrome(str) {
    // 1 lowercase the string 
    str = str.toLowerCase()
    // console.log(str);
  
    // 2 use regex to extract alphanumeric chars
    // let pattern = /\w+/g; // doesn't pass "_eye" and "0_0 (: /-\ :) 0-0"
    let pattern = /[a-z0-9]/g;
    let newStr = str.match(pattern).join("");
    // console.log(newStr);
  
    // 3 create reverse string
    let reverseStr = newStr.split("").reverse().join("");
    // console.log(reverseStr);
  
    // 4 compare 
    return newStr === reverseStr
  }
  

console.log("This should be true =>", palindrome("eyE"));
console.log("This should be false =>", palindrome("not a palindrome"))
console.log("This should be true =>", palindrome("Race CAR"))
console.log("This should be true =>", palindrome("_eye"))
console.log("This should be true =>", palindrome("A man, a plan, a canal. Panama"))
console.log("This should be true =>", palindrome("never odd or even"))
console.log("This should be false =>", palindrome("nope"))
console.log("This should be false =>", palindrome("almostomla"))
console.log("This should be true =>", palindrome("My age is 0, 0 si ega ym."))
console.log("This should be false =>", palindrome("1 eye for of 1 eye."))
console.log("This should be true =>", palindrome("0_0 (: /-\ :) 0-0"))
console.log("This should be false =>", palindrome("five|\_/|four"))