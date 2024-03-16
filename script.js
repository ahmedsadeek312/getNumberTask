var data = [];
var counter = 0;
array_index.innerHTML = `Enter The value of Number${counter + 1} : `;
add_but.onclick = function () {
  for (counter; counter < 10; ) {
    data[counter] = user_input.value;
    counter++;
    array_index.innerHTML = `Enter The value of Number${counter + 1}`;
    user_input.value = "";
    break;
  }
  console.log(data);
};
rest.onclick = function () {
  counter = 0;
  data = [];
  console.log(data);
  array_index.innerHTML = `Enter The value of Number${counter + 1} : `;
  user_input.value = "";
};

find_number.onclick = function () {
  var user_number = input_find.value;
  input_find.value = "";
  for (x = 0; x < data.length; x++) {
    if (user_number == data[x]) {
      console.log(`your Number Found at Number${x + 1}`);
      break;
    } else if (x == data.length - 1 && user_number != data[x]) {
      console.log(`Your Number Not Found`);
    }
  }
};
