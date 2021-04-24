function myResult(jankenUser) {
    // 0以上3未満の乱数
    var jankenComp = Math.floor(Math.random() * 3);

    var jankenName = ["グー", "チョキ", "バー"];
    var strMsg1 = "あいこ";
    var strMsg2 = "あなたの勝ち！";
    var strMsg3 = "あなたの負け";
    var strMsg = "相手は" + jankenName[jankenComp] + "、";

    if (jankenComp == jankenUser) {
        document.getElementById("win").style.display = "none";
        document.getElementById("lose").style.display = "none";
        document.getElementById("aiko").style.display = "block";
        return strMsg + strMsg1;
    } else if ((jankenComp + 2) % 3 == jankenUser) {
        // document.write('<img src="C:/xampp/htdocs/jsbook/img/pose_win_girl.png" alt="">');
        document.getElementById("lose").style.display = "none";
        document.getElementById("aiko").style.display = "none";
        document.getElementById("win").style.display = "block";
        // document.getElementById(g);
        // location.reload();
        return strMsg + strMsg2;
    } else {
        // document.write('<img src="C:/xampp/htdocs/jsbook/img/pose_lose_boy.png" alt="">');
        // location.reload();
        document.getElementById("win").style.display = "none";
        document.getElementById("aiko").style.display = "none";
        document.getElementById("lose").style.display = "block";
        return strMsg + strMsg3;
    }
}