"use strict";
const robotLanguage = ['Beep', 'Boop', 'Will you be my neighbor?']
//FOR EACH LOOP
const numberInput = function(input) {
  let numbers = [];
 for (let i = 0; i <= input; i++); {
   numbers.push(i.toString());
   console.log(input)
   console.log(numbers)
};
//IF STATEMENT FOR RETURN
const robotLanguages = number.map(function(number) {
  if (numbers.includes("3")) {
    return numbers = robotLanguage[2];
  }else if (numbers.includes("2")) {
    return numbers = robotLanguage[1];
  }else if (numbers.includes("1")) {
    return numbers = robotLanguage[0];
  } else {
    return numbers;
      };
    });
    return robotLanguages;
  };
  $(document).ready(function() {
    $("form#number").submit(function(event) {
      const input = parseInt($("number#input").val());
      // const result = numberInput(input);
      // $("#result").text(number);
      // $("#result").show();
      event.preventDefault();
      console.log(numberInput)
      console.log(input)
  });
});




