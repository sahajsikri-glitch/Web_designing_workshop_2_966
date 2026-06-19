function checkArmstrong() {
  let n = document.getElementById("num").value;
  let num = parseInt(n);
  let temp = num;
  let sum = 0;
  let digitSum = 0;
  let digits = n.length;

  while (temp > 0) {
    let rem = temp % 10;
    sum += Math.pow(rem, digits);   // Armstrong calculation
    digitSum += rem;                // Sum of digits
    temp = Math.floor(temp / 10);
  }

  let message = "";
  if (sum === num) {
    message += num + " is an Armstrong number.<br>";
  } else {
    message += num + " is NOT an Armstrong number.<br>";
  }

  message += "Sum of digits = " + digitSum;

  document.getElementById("result").innerHTML = message;
}
