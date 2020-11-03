function numPrint(num) {
    document.write("引数の値：" + num);
}

function applePen(str) {
    if (str == "apple") {
        document.write(str + "Pen<br>");
    } else {
        document.write("appleではありません。<br>");
    }
}

function switchNum(num) {
    switch (num) {
        case 0:
            document.write("１等が当選<br>");
            break;
        case 1:
            document.write("２等が当選<br>");
            break;
        case 2:
            document.write("３等が当選<br>");
            break;
        default:
            break;
    }
}

function arrayNum(arrayNum) {
    arrayNum[0] = 'ポチくん';
}

function ataiWatashi(num1) {
    return num1 + 1;
}

function sansyoWatashi(array) {
    array[0] = 1; //これだけだと、値渡し後の値 arrayNum2[0]：undefined
    return array[0];
}