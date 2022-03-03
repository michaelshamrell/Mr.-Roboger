Describe: roboger()

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
