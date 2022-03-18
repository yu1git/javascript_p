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
        const sum=0+random;
        console.log(sum);
        //マスが進む関数
        susumu(sum);
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
for (let i = 0; i < 10; i++) {
    const sugorokuMasu = document.createElement("div");

    document.querySelector(".sugoroku").appendChild(sugorokuMasu).setAttribute("class", "sugorokuMasu");

    // List.push(sugorokuMasu);

}

//クリックしたらマスを進める（上限はサイコロの値）
function susumu(sum) {
    document.getElementById(click).addEventListener("click", function () {
        for(let i=0;i<sum;i++){
            this.setAttribute("class", "ima");
            this.textContent = "正解！";
        }
    })
}
//通り過ぎた道の背景色を変える
// const ato=document.querySelector(".sugorokuMasu").setAttribute("class","ato");

//マスが進む関数
function susumu(sum) {
//サイコロの値+0（初期位置）を配列に反映させる
for(let i=0;i<sum;i++){
list.push(i);}
console.log(list)
//サイコロの値+前回までの値分、移動（前の位置情報を消し、新しい場所に移る）

}
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