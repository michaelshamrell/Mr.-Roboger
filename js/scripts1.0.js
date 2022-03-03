const robotLanguage = ['Beep' , 'Boop' , 'Will you be my neighbor? ']

function roboger (inputArray) {
  var numbers = []
  for (let i = 0; i <= inputArray; i += 1) {
    var roboReturn = i.toString();
      if (roboReturn.includes(3)) {
        numbers.push(robotLanguage[2]);
      } else if (roboReturn.includes(2)) {
        numbers.push(robotLanguage[1]);
      } else if (roboReturn.includes(1)) {
        numbers.push(robotLanguage[0]);
      } else {
        numbers.push(roboReturn);
      };
  };
    return numbers;
}
$(document).ready(function() {
  $("form#roboger").submit(function(event) {
  event.preventDefault();
  var inputArray = ($("input#input").val()); 
  var result = roboger(inputArray);
    $("#result").text(result);
   
  });
  
});

