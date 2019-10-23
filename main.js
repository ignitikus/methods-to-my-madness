function slice(string, start = 0, end = string.length) {
  let newString = '';
  for (let i = start; i<end; i++){
    newString += string[i];
  } return newString;
}

function repeat(str, repetitions) {
  let newStr = '';
  for (let i = 0; i < repetitions; i++){
    newStr += str;
  } return newStr;
}

function startsWith(string, substring) {
  for (let i = 0; i < substring.length; i++){
    return string[i] === substring[i] ? true : false 
  }
}

function endsWith(str, substring) {
  for (let i = 0; i < substring.length; i++){
    return str[str.length - 1] === substring[substring.length - 1] ? true : false 
  }
}

function includes(arr, item) {
  for (let i = 0; i < arr.length; i++){
    if (arr[i] === item){
      return true
    } 
  }
  return false
}

function join(arr, separator = '') {
  let arrToString = '';
  for (let i = 0; i < arr.length; i++){
    arrToString += i < arr.length - 1 ? arr[i] + separator : arr[i];
  }return arrToString;
}


function split(str, separator) {
  let strToArr = [];
  for (let i = 0; i < str.length; i++){
    let emptyStr = '';
    if (i === 0 || str[i]!== separator){
      emptyStr += str[i];
    }
    strToArr.push(emptyStr)
  } return strToArr;
}

function trimStart(str) {
  let newStr = '';
  for (let i = 0; i < str.length; i++){
    if (str[i] === ' '){
      newStr += '';
    }
    else {
      newStr += str[i];
    }
  }return newStr
}

function trimEnd(str) {
}


module.exports = {
  slice,
  repeat,
  startsWith,
  endsWith,
  includes,
  join,
  split,
  trimStart,
  trimEnd,
}
