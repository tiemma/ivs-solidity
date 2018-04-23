function getOwner() {
  instance.returnOwner.call().then(function(val) {
    console.log(val);
  });
}

function set(name, address, age) {
  instance.setName.call(name, address, age).then(function(response) {
    console.log(response);
  });
}
