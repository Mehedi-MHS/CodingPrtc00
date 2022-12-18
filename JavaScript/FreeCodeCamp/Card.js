let count = 0;

function cc(card) {
  // Only change code below this line
  const plusNum = [2, 3, 4, 5, 6],
    zrNum = [7, 8, 9],
    negNum = [10, "J", "Q", "K", "A"];

  let generateStr = (c) => {
    return c + " " + (c > 0 ? "Bet" : "Hold");
  };
  if (plusNum.includes(card)) {
    count++;
  } else if (zrNum.includes(card)) {
    count += 0;
  } else if (negNum.includes(card)) {
    count--;
  }

  return console.log(generateStr(count));
  // Only change code above this line
}

cc(2);
cc(3);
cc(7);
cc("K");
cc("A");
