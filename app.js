    var num = 40;
    if (num > 0) {
        var temp = num;
        var text = "";
        while (temp) {
            if (!(num % temp)) {
                text += "Дільник: " + temp + "; частка: " + (num / temp) + "\r\n";
            }
            temp--;
        }
        console.log(text);
    } else {
        console.log("Неправильне значення числа!")
    }