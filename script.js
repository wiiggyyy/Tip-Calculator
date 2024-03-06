function select() {
    unTick()
    document.getElementById("labelFive").style.backgroundColor = "hsl(172, 67%, 45%)";
}

function selecttwo() {
    unTick()
    document.getElementById("labelTen").style.backgroundColor = "hsl(172, 67%, 45%)";
}

function selectthree() {
    unTick()
    document.getElementById("labelFifteen").style.backgroundColor = "hsl(172, 67%, 45%)";
}

function selectfour() {
    unTick()
    document.getElementById("labelTwentyFive").style.backgroundColor = "hsl(172, 67%, 45%)";
}

function selectfive() {
    unTick()
    document.getElementById("labelFifty").style.backgroundColor = "hsl(172, 67%, 45%)";
}

function unTick() {
    document.getElementById("labelFive").style.backgroundColor = "hsl(183, 100%, 15%)";
    document.getElementById("labelTwentyFive").style.backgroundColor = "hsl(183, 100%, 15%)";
    document.getElementById("labelTen").style.backgroundColor = "hsl(183, 100%, 15%)";
    document.getElementById("labelFifty").style.backgroundColor = "hsl(183, 100%, 15%)";
    document.getElementById("labelFifteen").style.backgroundColor = "hsl(183, 100%, 15%)";
    document.getElementById("customTip").value = "";
}

function calculation() {
    var discount = 0;
    var bill = document.getElementById("priceInput").value;
    var people = document.getElementById("numOfPeople").value;
    let total = (bill / people);
    if (people < 1) {
        document.getElementById("numOfPeople").style.outline = "2px solid red";
        document.getElementById("errorMsg").style.display = "inline-block";
        pass
    }
    else {
        const newTotal = '$' + Math.round(total * 100) / 100;
        document.getElementById("answerTotal").innerHTML = newTotal;
        document.getElementById("numOfPeople").style.outline = "none";
        document.getElementById("errorMsg").style.display = "none";
        if (window.getComputedStyle(document.getElementById("labelFive")).backgroundColor === 'rgb(38, 192, 171)') {
            discount = 0.05
        }
        else if (window.getComputedStyle(document.getElementById("labelTwentyFive")).backgroundColor === 'rgb(38, 192, 171)') {
            discount = 0.25
        }
        else if (window.getComputedStyle(document.getElementById("labelTen")).backgroundColor === 'rgb(38, 192, 171)') {
            discount = 0.1
        }
        else if (window.getComputedStyle(document.getElementById("labelFifty")).backgroundColor === 'rgb(38, 192, 171)') {
            discount = 0.5
        }
        else if (window.getComputedStyle(document.getElementById("labelFifteen")).backgroundColor === 'rgb(38, 192, 171)') {
            discount = 0.15
        }
    }
    if (discount > 0) {
        var discounted = '$' + Math.round(total * discount * 100) / 100;
        document.getElementById("answerTip").innerHTML = discounted;
    } else {
        let customTip = document.getElementById("customTip").value;
        if (customTip > 0) {
            let tipAmount = total * (customTip / 100);
            let newDiscount = "$" + Math.round(tipAmount * 100) / 100;
            document.getElementById("answerTip").innerHTML = newDiscount;
        } else {
            document.getElementById("answerTip").innerHTML = "$0.00";
        }
    }

}