module.exports = function toReadable (number) {
  let num19 = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten',
  'eleven','twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
  let tensStr = ['empty', 'empty', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
  let ones = 0, tens = 0, hundreds = 0;
  let resultStr="";

  if (number < 20) {
    return num19[number];
  }
  else {
    ones = number % 10;
    hundreds = Math.trunc(number/100);
    tens = (number - hundreds*100 - ones)/10;
    
    if (tens < 2) {
      resultStr += ((tens*10+ones) > 0) ? num19[tens*10+ones] : "";  
    }
    else {
      resultStr += tensStr[tens] +  ((ones > 0) ? " " + num19[ones] : "");
    }
    
    if (hundreds > 0) {
      if (resultStr.length > 0) {
        resultStr = num19[hundreds] + " hundred " + resultStr;  
      }
      else {
        resultStr = num19[hundreds] + " hundred";
      }
    }
  }
  return resultStr;
}
