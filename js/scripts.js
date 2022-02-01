const robotLanguage = ['Beep', 'Boop', 'Will you be my neighbor?']


var inputAction = function(input) {
  let number = [];
 for (let i = 0; i <= input; i++); {
   number.push(i.toString());
};

if (number.includes("3")) {
  return number = robotLanguage[2];
}else if (number.includes("2")) {
  return number = robotLanguage[1];
}else if (number.includes("1")) {
  return number = robotLanguage[0]
} else {
  return number;
};
};