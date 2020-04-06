// // business logic

var outPut = [];

function myFunc(inputNumber) {
  // var roman = ["I","V","X","L","C"]; //array
  var numberArray = inputNumber.split("").map(function (number) {
    return parseInt(number);
  });
  let mutatedArray = numberArray.reverse().map((number) => {
    if (number === numberArray[numberArray.length -1]) {
      if (number === 1) {
        return "I";
      } else if (number === 2) {
        return "II";
      } else if (number === 3) {
        return "III";
      } else if (number === 4) {
        return "IV";
      } else if (number === 5) {
        return "V";
      } else if (number === 6) {
        return "VI";
      } else if (number === 7) {
        return "VII";
      } else if (number === 8) {
        return "VIII";
      } else if (number === 9) {
        return "IX";
      } else return "";
    } else if (number === numberArray[numberArray.length -2]){
      if (number === 1){return "X"
  } else if (number === 2){return "XX"
  } else if (number === 3){return "XXX"
  } else if (number === 4){return "IX"
  } else if (number === 5){return "L"
  } else if (number === 6){return "LX"
  } else if (number === 7){return "LXX"
	} else if (number === 8){return "LXXX"
  } else if (number === 9){return "XC"
  } else return ""
    }
  });

  console.log(mutatedArray);

  // if (numberArray % 100 == 0) {
  //     numberArray.join("");
  //     outPut.push(roman[4]);

  // }else if (numberArray % 50 == 0 ) {
  //   outPut.push(roman[3]);
  // }else if (numberArray % 10 == 0) {
  //   console.log(`${numberArray} % 10`);

  //   outPut.push(roman[2]);
  // }else if (numberArray % 5 == 0 ){
  //   console.log(`${numberArray} % 5`);
  //   outPut.push(roman[1]);
  // }else if(numberArray % 1 == 0) {
  //   console.log(`${numberArray} % 1`);

  //   outPut.push(roman[0]);
  // }
}

// I = 1
// V = 5
// X = 10
// L = 50
// C = 100
// D = 5000

// 1   "I"  -add
// 2   "II" -add
// 3   "III"-add
// 4   "IV" -subtract from new symbol
// 5   "V"  -a new symbol

// 6   "VI" -add
// 7   "VII" -add
// 8   "VIII" -add
// 9   "IX" -subtract from new symbol
// 10  "X"  -a new symbol

// user interface logic
$(document).ready(function () {
  $("form").submit(function (event) {
    event.preventDefault();
    let number = $("#input-1").val();
    myFunc(number);
  });
});
