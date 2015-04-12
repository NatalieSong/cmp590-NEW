//============= 1 =============
function max(a, b){
if (a>b){
    console.log ("a"); 
    }else{
    console.log ("b");
    }
}
max(2, 15);
 

//============= 2 ==============
function maxOfThree(a,b,c){
    var z = Math.max (a, b, c);
    console.log (z);
}
maxOfThree(100, 4, 78);


//============= 3 ==============
var Vowel = function (letter){
var vowels = ["a", "e", "i", "o", "u"];
    if (Vowel in vowels){
         return console.log ("true");   
        } else {
         return console.log ("false");
        }
}
Vowel ("t");

/*
//??????????????? 4 ????????????????
function translate(str){
    var newStr = " ";
    if (var i = 1){
        newStr = str + str[i] + "ay"; 
    }
    return newStr;
}
*/



//============= 5 ==============
function sum(a, b){
     return console.log (a+b);
 }
sum(3, 7);


function multiply(a, b){
     return console.log (a*b);
}
multiply (3, 7);


//============= 6 ================
function reverse(string){
 var newStr = " ";
    for (var i = string.length - 1; i >= 0; i--){
newStr += string [i];
    }
    return console.log (newStr);
}
reverse ("cat");


//?????????????? 7 ????????????????
function findLargestNumber (array){
var largestNumber = array [99]
    for (var i =  
return console.log (maxOfThree); 
}
findLargestNumber (1, 77, 39);


//=============== 8 ==============
function findLongestWord (array){
 var longestWord = array [0];
    for (var i = 1; i < array.length; i++){
     if (longestWord.length < array [i].length){
longestWord = array [i];
     }
    }
    return longestWord.length;    
}



/*
//================== 9 ===============
function filterLongWords (array, i){
    return array.filter(function(elem)){
        if (elem.length > i){
    return elem;    
        }
    }
}
*/



/*
//============== 10 ===================
function charFreq(string) {
 var obj = {};
    for (car i = 0; i <string.length; i++){
if (obj.hasOwnProperty(string[i])){
    obj[string[i]] +=1;   
    } else {
obj[string[i]] = 1;
    }
}
    return obj; 
}
*/