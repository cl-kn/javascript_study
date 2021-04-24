//スコープについて

function showNum() {
    num = 1;
}

function showVarNum() {
    var varNum = 2; //関数内でvar宣言した変数はローカル変数
    // 関数内部でのみ使用できる
}

function showLetNum() {
    let letNum = 44;
}

function scope() {
    var x = 0;
    console.log(x); //０が出力

    var x = 1;
    console.log(x); //1

    x = 2;
    console.log(); //2

    if (true) {
        console.log(x); //2
        x = 3;
        var y = "a";
    }

    console.log(x); //3 ※グローバル変数
    console.log(y); //a ※varはブロックを通り抜けるので
}

function hoge() {
    console.log(x); // error x is not defined
}

var xx = 0;
let yy = 100;

function var_makiage() {
    console.log("グローバルスコープ" + xx); //undefined
    var xx = 1; //初期化されるので、上のコードは undefined になる
    console.log("varは再定義、再代入できる：" + xx);
    xx = 11; //再代入
    console.log(xx);
}

function let_makiage() {
    console.log("グローバルスコープ" + yy); //undefined
    // let yy = 250; // Uncaught ReferenceError
    yy = 200; //初期化されるので、上のコードは undefined になる
    console.log("letは再代入のみ：" + yy);
}