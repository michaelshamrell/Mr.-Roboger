$(document).ready(function() {
  $("form#number").submit(function(event) {
    const numberInput = parseInt($("number#input").val());
    const result = numberInput(input);
    $("#result").text(number);
    $("#result").show();
    event.preventDefault();
  });
});
const robotLanguage = ['Beep', 'Boop', 'Will you be my neighbor?']

const numberInput = function(input) {
  let number = [];
 for (let i = 0; i <= input; i++); {
   number.push(i.toString());
};

const numberInput = number.map(function(number) {
  if (number.includes("3")) {
    return number = robotLanguage[2];
  }else if (number.includes("2")) {
    return number = robotLanguage[1];
  }else if (number.includes("1")) {
    return number = robotLanguage[0];
  } else {
    return number;
      };
    });
    return numberInput;
  };




