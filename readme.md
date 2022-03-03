#  Arrays and Loops 

Created by: *Michael Shamrell*

Describe: roboger()

This project showcases my ability to to return an input into an array using numbers. As well as using if and else statements to change the result of certain numbers that are part of the input. It uses JQuery and a form submit to relay the result back to the user.

# Technologies Used:
Git, Github, HTML, CSS, markdown, javasScript, jQuery, and bootstrap. 
# Application setup:
clone to git by clicking the green "Code" button on 
copy the link inside, then go into gitbash and do the command: $git clone (instert url here that you copied). Make sure you create a css and js file,  with bootstrap in css and jQuery in js. After this you are able to access the code by cding into the correct repository and typing code .
# License
MIT
copyright (c) Michael Shamrell

Test: "It should return an array of numbers from 0 to the user's inputted number"

Code: roboger(5);

Expected Output: [0, 1, 2, 3, 4, 5]

Test: "It should return 'Wont you be my neighbor?' if the number[] includes 3"

Code roboger(5)

expected Output: [0, 1, 2, 'Wont you be my neighbor?', 4, 5]

Test:"It should return 'boop' if the number[] includes 2"

Code roboger(5)

expected Output: [0, 1, 'boop', 'Wont you be my neighbor?', 4, 5]

Test: "It should return 'beep' if the number[] includes 1"

Code roboger(5)

expected Output: [0, 'beep', 'boop', 'Wont you be my neighbor?', 4, 5]
