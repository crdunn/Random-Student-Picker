var studentArray = function () {
    return ["Place", "Student", "Names", "Here", "As", "Strings", ",", "Each", "In", "A", "New", "Index", "In", "The", "Array"];
}
var hold = [];
var omnious;

function reset() {

    hold = studentArray();

}

document.getElementById("chooseButton").addEventListener("click", function () {

    chooseStudent();

});


function chooseStudent() {

    if (hold.length === 0) {
        reset();
    }

    var num = Math.floor(Math.random() * hold.length);
    var picked = hold[num];

    displayStudent(picked)

    hold.splice(num, 1);

};

function displayStudent(x) {
    var spinArray = studentArray();
    var j = spinArray.length;

    for (var i = spinArray.length - 1; i > 0; i--) {
        var k = Math.floor(Math.random() * (i + 1));
        var temp = spinArray[i];
        spinArray[i] = spinArray[k];
        spinArray[k] = temp;
    }

    clearTimeout(omnious);

    var spin = setInterval(function () {
        if (j > 0) {

            j--
            document.getElementById("student").innerHTML = spinArray[j]
        } else {

            document.getElementById("student").innerHTML = x;
            clearInterval(spin);

        }
    }, 75)

    omnious = setTimeout(function () {
        document.getElementById("student").innerHTML = "Who will be next?";
    }, 20000);

};