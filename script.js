document.getElementById('checkBtn').addEventListener('click', palindromeChecker);



function isPalindrome(word){
    const cleanStr = word.toLowerCase().replace(/[^a-z0-9]/g,'');
    const reversedstr = cleanStr.split('').reverse().join('');
    return cleanStr === reversedstr;
}
function palindromeChecker(){
    const str = document.getElementById('textInput');
    const result = document.getElementById('result');
    if(isPalindrome(str.value)){
        result.textContent =  `${str.value} is a palindrome`;
    }
    else{
    result.textContent =  `${str.value} is  not a palindrome`;
    }
    result.classList.add('fadeIn');
    str.value = "";
}
