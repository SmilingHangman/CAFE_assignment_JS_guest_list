let guest = document.getElementById("guestName");
let guestArr = [];

document.getElementById("addListEnd").addEventListener("click", (event) => {
        document.getElementById("guestListDisplay").innerHTML = null;
        guestArr.push(" " + guest.value);
        let guestDisplay = document.createElement("div");
        guestDisplay.textContent = guestArr;
        document.getElementById("guestListDisplay").appendChild(guestDisplay);
        // guestName.value = null;
});

document.getElementById("addListStart").addEventListener("click", (event) => {
        document.getElementById("guestListDisplay").innerHTML = null;
        guestArr.unshift(guest.value);
        let guestDisplay = document.createElement("div");
        guestDisplay.textContent = guestArr;
        document.getElementById("guestListDisplay").appendChild(guestDisplay);
        // guestName.value = null;
});

document.getElementById("removeFirst").addEventListener("click", (event) => {
        document.getElementById("guestListDisplay").innerHTML = null;
        guestArr.shift(guest.value);
        let guestDisplay = document.createElement("div");
        guestDisplay.textContent = guestArr;
        document.getElementById("guestListDisplay").appendChild(guestDisplay);
        // guestName.value = null;
});

document.getElementById("removeLast").addEventListener("click", (event) => {
        document.getElementById("guestListDisplay").innerHTML = null;
        guestArr.pop(guest.value);
        let guestDisplay = document.createElement("div");
        guestDisplay.textContent = guestArr;
        document.getElementById("guestListDisplay").appendChild(guestDisplay);
        // guestName.value = null;
});

document.getElementById("reverseList").addEventListener("click", (event) => {
        document.getElementById("guestListDisplay").innerHTML = null;
        guestArr.reverse(guest.value);
        let guestDisplay = document.createElement("div");
        guestDisplay.textContent = guestArr;
        document.getElementById("guestListDisplay").appendChild(guestDisplay);
        // guestName.value = null;
});

document.getElementById("sortAZ").addEventListener("click", (event) => {
        document.getElementById("guestListDisplay").innerHTML = null;
        guestArr.sort();
        let guestDisplay = document.createElement("div");
        guestDisplay.textContent = guestArr;
        document.getElementById("guestListDisplay").appendChild(guestDisplay);
        // guestName.value = null;
});

document.getElementById("sortZA").addEventListener("click", (event) => {
        document.getElementById("guestListDisplay").innerHTML = null;
        guestArr.sort(function(a, b){return b - a}); //compare locale
        let guestDisplay = document.createElement("div");
        guestDisplay.textContent = guestArr;
        document.getElementById("guestListDisplay").appendChild(guestDisplay);
        // guestName.value = null;
});

// let i;
// for (i = 0; i < guestArr.length; i++) {
//         guestDisplay += guestArr[i] + "<br>";
// }