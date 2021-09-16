// クリックされた数字を表示する
function pass(clickevent){
    let num = clickevent.target.id;

    // let num1 = document.getElementById('num1');

    for (let i = 1; i < 6; i++) {
        eval("let num" + i + "= document.getElementById('num" + i + "');");//varにするとグローバルになってしまうのでlet
    }


    if (num1.textContent == "*") {
        num1.innerHTML = num;
        num1.style.color = "black";
    }else if(num2.textContent == "*"){
        num2.innerHTML = num;
        num2.style.color = "black";
    }else if(num3.textContent == "*"){
        num3.innerHTML = num;
        num3.style.color = "black";
    }else if(num4.textContent == "*"){
        num4.innerHTML = num;
        num4.style.color = "black";
    }else if(num5.textContent == "*"){
        num5.innerHTML = num;
        num5.style.color = "black";
    }
    // <input type="text" value="1">innerHTML</>
}

// 削除ボタンが押されたときに一文字削除する
function del(clickevent) {
    for (let i = 1; i < 6; i++) {
        eval("let num" + i + "= document.getElementById('num" + i + "');");//varにするとグローバルになってしまうのでlet
    }

    if (num5.style.color == "black") {
        num5.innerHTML = "*";
        num5.style.color = "#b7b9c0f5";
    }else if(num4.style.color == "black"){
        num4.innerHTML = "*";
        num4.style.color = "#b7b9c0f5";
    }else if(num3.style.color == "black"){
        num3.innerHTML = "*";
        num3.style.color = "#b7b9c0f5";
    }else if(num2.style.color == "black"){
        num2.innerHTML = "*";
        num2.style.color = "#b7b9c0f5";
    }else if(num1.style.color == "black"){
        num1.innerHTML = "*";
        num1.style.color = "#b7b9c0f5";
    }
}

// ログインボタンが押されたときにデータベースを呼ぶ
function login() {
    for (let i = 1; i < 6; i++) {
        eval("let num" + i + "= document.getElementById('num" + i + "');");//varにするとグローバルになってしまうのでlet
    }

    // 5桁目に数字が入っていない場合エラー表示
    if (num5.innerHTML == "*") {
        if (document.getElementById("pass").innerHTML == "パスワードがあってないよ") {
            document.getElementById("pass").innerHTML = "";
        }
        document.getElementById('err').innerHTML = "５桁の数字を入力してね";
    // ５桁目に数字が入っていた場合データベースのパスワードと比較
    }else{
        document.getElementById('err').innerHTML = "";

        // 入力してもらった数字を5桁の文字列にする
        let pass = "" + num1.innerHTML + num2.innerHTML + num3.innerHTML + num4.innerHTML + num5.innerHTML ;        
        // データベースを呼ぶ
        var ajax = new XMLHttpRequest;
        ajax.open("get","./text.txt");
        ajax.send(); //ここで通信させる
        ajax.addEventListener("load", function(){ //loadイベントを登録　でこの中にとってきたデータの処理を書く
            if (this.response == pass) {
                document.getElementById("pass").innerHTML = "パスワードがあってるよ";
                // ここにログイン成功後のurl書く感じ
            }else{
                if (document.getElementById('err').innerHTML == "５桁の数字を入力してね") {
                    document.getElementById('err').innerHTML = "";
                }
                document.getElementById("pass").innerHTML = "パスワードがあってないよ";
            }
        }, false);


    }


}