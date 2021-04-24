function myResult(jankenUser) {
    // 0,1,2の乱数
    var jankenComp = Math.floor(Math.random() * 3);

    //じゃんけん配列
    var jankenName = ["グー", "チョキ", "バー"];

    //じゃんけんメッセージ
    var strMsg1 = "あいこ";
    var strMsg2 = "あなたの勝ち！";
    var strMsg3 = "あなたの負け";

    //"ＰＣは〇〇、”
    var strMsg = "ＰＣは" + jankenName[jankenComp] + "、";

    //勝敗処理部分
    if (jankenComp == jankenUser) {
        //あいこ
        return strMsg + strMsg1;
    } else if ((jankenComp + 2) % 3 == jankenUser) {
        //ユーザーの負け
        return strMsg + strMsg2;
    } else {
        //ＰＣの勝ち
        return strMsg + strMsg3;
    }
}