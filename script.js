function name_zia() {
  let a = prompt("print your value is odd or even ");
  let b = prompt("print your number ");

  if (b % 2 == 0 && a == "even") {
    for (i = 0; i < b; i++) {
      document.write(`even  ` + `<br>`);
    }
  } else if (a == "odd" && b % 1 == 0) {
    console.log("odd");
  } else {
    console.log("this value is not allow");
  }
}
name_zia();
