/*******************
 * サイコロ振る
 *******************/
let random;

//サイコロの結果が出るマスを作る
for (let i = 0; i < 1; i++) {
    const masu = document.createElement("div");
    masu.textContent = "クリック";
    //クリックする
    masu.addEventListener("click", () => {
        //ランダムな数値が表示される（1-6）
        random = Math.floor(Math.random() * 6) + 1;
        masu.textContent = random;


        //合計値を計算　現在位置＋サイコロの値        
        
        //マスが進む関数
        
    })
    document.querySelector(".ue").appendChild(masu).setAttribute("class", "saikoro");
}

/*******************
 * サイコロの出た値を使ってゲームを進める
 *******************/
//サイコロの値を前回までの値に足す


//マスを配列で管理する
list = [];
//初期位置に駒を置く
// list[0].textContent = "〇";

//すごろくのマスを作る


//クリックしたらマスを進める（上限はサイコロの値）


//マスが進む関数

//サイコロの値+0（初期位置）を配列に反映させる

//サイコロの値+前回までの値分、移動（前の位置情報を消し、新しい場所に移る）


//
//
//
//
//
//
//
//
//
//
//