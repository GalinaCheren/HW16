const amountOfElements = +prompt(
  "Write here how many elements be in your array:"
);

let newElement = [];
if (amountOfElements > 0) {
  for (let i = 0; i < amountOfElements; i++) {
    let userArraysElements = prompt("Write your array element:");
    if (userArraysElements) {
      newElement.push(userArraysElements);
    }

    console.log(newElement);
  }
  if (!newElement.some((element) => !isFinite(element))) {
    newElement.forEach((element, index) => {
      newElement[index] = Number(element);
    });
    console.log(newElement, "- Modified to numbers");
    console.log(
      newElement.sort((a, b) => {
        if (a > b) return 1;
        if (a == b) return 0;
        if (a < b) return -1;
      }),
      "- Sorted array"
    );
  } else {
    console.log("Can`t be modified to numbers - sorted as string:");

    console.log(newElement.sort(), "- Sorted array");
  }
  newElement.splice(2, 3);
  console.log(newElement, "- Removed 2-4 items");
} else {
  console.log(newElement);
}
