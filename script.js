function select() {
    unTick()
    document.getElementById("labelFive").style.backgroundColor = "hsl(172, 67%, 45%)";
}

function selecttwo() {
    unTick()
    document.getElementById("labelTwentyFive").style.backgroundColor = "hsl(172, 67%, 45%)";
}

function selectthree() {
    unTick()
    document.getElementById("labelTen").style.backgroundColor = "hsl(172, 67%, 45%)";
}

function selectfour() {
    unTick()
    document.getElementById("labelFifty").style.backgroundColor = "hsl(172, 67%, 45%)";
}

function selectfive() {
    unTick()
    document.getElementById("labelFifteen").style.backgroundColor = "hsl(172, 67%, 45%)";
}

function unTick() {
    if (window.getComputedStyle(document.getElementById("labelFive")).backgroundColor === 'rgb(38, 192, 171)' || window.getComputedStyle(document.getElementById("labelTwentyFive")).backgroundColor === 'rgb(38, 192, 171)' || window.getComputedStyle(document.getElementById("labelTen")).backgroundColor === 'rgb(38, 192, 171)' || window.getComputedStyle(document.getElementById("labelFifty")).backgroundColor === 'rgb(38, 192, 171)' || window.getComputedStyle(document.getElementById("labelFifteen")).backgroundColor === 'rgb(38, 192, 171)') {
        document.getElementById("labelFive").style.backgroundColor = "hsl(183, 100%, 15%)";
        document.getElementById("labelTwentyFive").style.backgroundColor = "hsl(183, 100%, 15%)";
        document.getElementById("labelTen").style.backgroundColor = "hsl(183, 100%, 15%)";
        document.getElementById("labelFifty").style.backgroundColor = "hsl(183, 100%, 15%)";
        document.getElementById("labelFifteen").style.backgroundColor = "hsl(183, 100%, 15%)";
    }
}

function calculation() {
    var discount = 0;
    var bill = document.getElementById("priceInput").value;
    var people = document.getElementById("numOfPeople").value;
    let total = (bill/people);
    const newTotal = '$' + Math.round(total*100)/100;
    document.getElementById("answerTotal").innerHTML = newTotal;
    if (window.getComputedStyle(document.getElementById("labelFive")).backgroundColor === 'rgb(38, 192, 171)') {
        discount = 0.05
    }
    else if (window.getComputedStyle(document.getElementById("labelTwentyFive")).backgroundColor === 'rgb(38, 192, 171)'){
        discount = 0.25
    }
    else if (window.getComputedStyle(document.getElementById("labelTen")).backgroundColor === 'rgb(38, 192, 171)'){
        discount = 0.1
    }
    else if (window.getComputedStyle(document.getElementById("labelFifty")).backgroundColor === 'rgb(38, 192, 171)'){
        discount = 0.5
    }
    else if (window.getComputedStyle(document.getElementById("labelfifteen")).backgroundColor === 'rgb(38, 192, 171)'){
        discount = 0.15
    }
    if (discount > 0) {
        var discounted = '$' + Math.round(total*discount*100)/100;
        document.getElementById("answerTip").innerHTML = discounted;
    }
    else {
        let discount = (bill/document.getElementById("customTip").value)/100;
        let newDiscount = "$" + Math.round(discount*100)/100;
        document.getElementById("answerTip").innerHTML = newDiscount;
    }
    
}