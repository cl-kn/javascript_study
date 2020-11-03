//コールバック関数を受け取って実行する
function callback(func) {
    func();
}

function proc() {
    var dog = "コーギー";
    callback(function() {
        console.log(dog + "ちゃん");
    });

}

//通常の関数
function nomal_func() {
    console.log("通常の関数です。");
}

//無名関数（関数名を省略）
let anonymous_func = function() {
    console.log("無名関数です。");
};

//即時関数 （関数定義＋関数呼び出し）
//使い捨て関数として
//呼び出し側の関数名を、関数定義で置き換えるイメージ
//呼び出しも同時に行う
//※最初に呼び出される？？
(function tsukaisute() {
    console.log("使い捨て関数");
})();