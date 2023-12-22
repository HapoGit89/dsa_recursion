/** product: calculate the product of an array of numbers. */

function product(nums) {
  if(nums.length == 0) return 1
  return nums[0] * product(nums.splice(1))
}


/** longest: return the length of the longest word in an array of words. */

function longest(words) {
  console.log(words)
  if(words.length === 1) return words[0].length
if (words[0].length<words[1].length){
    words.splice(0,1)
    return longest(words)}
else {
  words.splice(1,1)
  return longest(words)}
}

/** everyOther: return a string with every other letter. */

function everyOther(str) {
  if (str.length<1)return ""
  return str[0] += everyOther(str.slice(2))
}

/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str) {
  if(str.length<2)return true
  if(str[0] === str[str.length-1]){
    return isPalindrome(str.substring(1, str.length-1))
  }
  else return false
}

/** findIndex: return the index of val in arr (or -1 if val is not present). */


function findIndex(arr, val, idx =0) {
  if(idx == arr.length)return -1
  if (arr[idx]==val){return idx}
  else {return findIndex(arr,val, idx+1)}
}



/** revString: return a copy of a string, but in reverse. */

function revString(str) {
  if (str.length == 1) return str[0]
  return str[str.length-1] += revString(str.substring(0, str.length-1))

}

/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj) {
  let stringArr = [];
  for (let key in obj) {
    console.log(key)
    if (typeof obj[key] === "string") stringArr.push(obj[key]);
    if (typeof obj[key] === "object") stringArr.push(...gatherStrings(obj[key]));
  }
  return stringArr;
}




/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearch(arr, val, idx=0) {
  let middleidx = Math.floor((arr.length-1)/2)
  if(arr.length==1 && arr[0]!= val)return -1
  if (arr[middleidx]==val) return middleidx + idx
  if(arr[middleidx]<val){
    return binarySearch(arr.splice(middleidx+1),val, middleidx+1+idx)
  }
  else{return binarySearch(arr.splice(0, middleidx),val, idx )
  }
}


module.exports = {
  product,
  longest,
  everyOther,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
  binarySearch
};
