'use strict'
const getSmallestWord = (sentence) => {
    return sentence.split(' ').sort((a, b) => a.length - b.length).filter(item => item.length > 0)[0].length;
}

console.log(getSmallestWord('qekfqkef jkq   hqkj kj qwfw kfsv'))

const isIsogram = (sentence) => {
    let str = sentence.split('').sort((a, b) => a.localeCompare(b)).filter(item => item.length > 0 && item !== ' ');
    for (let item of str)
        for (let i = str.indexOf(item) + 1; i < str.length; i++)
            if (item === str[i])
                return false;
    return true;
}

console.log(isIsogram('zxcvbn m'))