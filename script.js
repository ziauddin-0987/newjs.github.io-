function name_zia() {
  let a = prompt("print your value is odd or even ");
  let b = prompt("print your number ");

  if (b % 2 == 0 && a == "even") {
    for (i = 0; i < b; i++) {
      document.write(` this is number even  ${i + i}` + `<br>`);
    }
  } else if (b % 2 ==! 0 && a == "odd") {
    for (i = 0; i < b; i++) {
      document.write(`this is number odd ${i}`);
    }
  } else {
    console.log("this value is not allow");
  }
}
name_zia();
