const robotLanguage = ['Beep', 'Boop', 'Will you be my neighbor?']


var inputAction = function(input) {
  let numbers = [];
 for (let i = 0; i <= input; i++); {
   numbers.push(i.toString());
};

const inputActions = numbers(function(number) {
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
    return inputActions;
  };

$(document).ready(function() {
  $("form#number").submit(function(event) {
    const inputAction = parseInt($("input#input").val());
    const result = inputActions(input);
    $("#results").text(result);
    $(".output").show();
    event.preventDefault();
  })
});


