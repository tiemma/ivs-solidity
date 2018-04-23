function getOwner() {
    instance.getOwnerAddress.call().then(function(val) {
        console.log(val);
    });
}

function getEmail() {
    instance.getEmail.call().then(function (resp){
        console.log(resp);
    })
}

function getAge() {
    instance.getAge.call().then(function (resp){
        console.log(resp);
    })
}

function update(){
    let name = document.querySelector('input[name=name]').value;
    let sex = document.querySelector('input[name=sex]').value;
    let address = document.querySelector('input[name=address]').value;
    let email = document.querySelector('input[name=email]').value;
    let age = document.querySelector('input[name=age]').value;
    set(name, address, age, email, sex);
}

function set(name, address, age, email, sex) {
    instance.setName.call(name).then(function(response) {
        console.log(response);
    });
    instance.setAge.call(age).then(function(response) {
        console.log(response);
    });
    instance.setSex.call(sex).then(function(response) {
        console.log(response);
    });
    instance.setEmail.call(email).then(function(response) {
        console.log(response);
    });
    instance.setAddress.call(address).then(function(response) {
        console.log(response);
    });

    alert("Details set successfully");
}
