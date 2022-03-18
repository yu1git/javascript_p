// //マスを作る関数
// const makeMasu = () => {
//     const masu = document.createElement("div");
//     masu.textContent = 1
//     document.querySelector(".bingocard").appendChild(masu)
// }
// //マスを作る関数を25回呼び出す
// for (let i = 0; i < 25; i++) {
//     makeMasu();
// }

// //上を改良。マスにランダムな数字が入るように変更。
// //マスを作る関数
// const makeMasu = () => {
//     const masu = document.createElement("div");
//     masu.textContent = Math.floor(Math.random()*100)
//     document.querySelector(".bingocard").appendChild(masu)
// }
// //マスを作る関数を25回呼び出す
// for (let i = 0; i < 25; i++) {
//     makeMasu();
// }

// //上を改良。マスをクリックすると〇が表示される
// //マスを作る関数
// const makeMasu = () => {
//     const masu = document.createElement("div");
//     masu.textContent = Math.floor(Math.random()*100)
//     masu.addEventListener("click",(evt)=>{//("click",function(){)
//         evt.target.textContent = "◯";//this.textContent="〇"
//     })
//     document.querySelector(".bingocard").appendChild(masu)
// }
// //マスを作る関数を25回呼び出す
// for (let i = 0; i < 25; i++) {
//     makeMasu();
// }

// //上を改良
// //空の配列
// checkList = [];
// //マスを作る関数
// const makeMasu = () => {
//     const masu = document.createElement("div");
//ランダムな値を配列に追加して覚えさせる
//     const randomNumber = Math.floor(Math.random()*100);
//     checkList.push(randomNumber);
//     masu.textContent =randomNumber;

//     masu.addEventListener("click",(evt)=>{
//         evt.target.textContent = "◯";
//     })
//     document.querySelector(".bingocard").appendChild(masu);
// }
// //マスを作る関数を25回呼び出す
// for (let i = 0; i < 25; i++) {
//     makeMasu();
// }

// //上を改良
// //空の配列
// checkList = [];
// //マスを作る関数
// const makeMasu = (i) => {//forループからiを引数として受け取る＝マスをクリックしたときに対応している配列の要素を変更できるように
//     const masu = document.createElement("div");
//     //ランダムな値を配列に追加して覚えさせる
//     const randomNumber = Math.floor(Math.random()*100);
//     checkList.push(randomNumber);
//     masu.textContent =randomNumber;

//     masu.addEventListener("click",(evt)=>{
//         evt.target.textContent = "◯";
//         checkList[i] = "◯"
//         // 期待通りにcheckListが動いているか確認
//         console.log(checkList)
//     })
//     document.querySelector(".bingocard").appendChild(masu);
// }
// //マスを作る関数を25回呼び出す
// for (let i = 0; i < 25; i++) {
//     makeMasu(i);
// }

// //別解
// checkList = new Array(25).fill(0)

// const makeMasu = (i) => {
//     const masu = document.createElement("div");

//     const randomNumber = Math.floor(Math.random()*100);
//     checkList[i] = randomNumber;
//     masu.textContent =randomNumber;

//     // (以下略)
// }

//二つ上を改良
//一列目は1-15、二列目16-30、三列目31-45、四列目46-60、五列目61-75
checkList = []
//マスを作る関数
const makeMasu = (i) => {
    const masu = document.createElement("div");

    // コマの番号を５で割った余りからどの列かを出す
    const col = i % 5;//一列目は0、二列目1、三列目2、四列目3、五列目4
    const randomNumber = Math.floor(Math.random() * 15/*範囲（最小値から+15までの値をランダムにする）*/ + col * 15 + 1/*最小値 一列目は1、二列目16、三列目31、四列目46、五列目61*/);

    //ランダムな値を配列に追加して覚えさせる

    checkList.push(randomNumber);
    masu.textContent = randomNumber;


    //クリックすると数値→〇
    masu.addEventListener("click", (evt) => {
        evt.target.textContent = "◯";
        checkList[i] = "◯"
        // 期待通りにcheckListが動いているか確認
        console.log(checkList)
    })
    document.querySelector(".bingocard").appendChild(masu);
}
//マスを作る関数を25回呼び出す
for (let i = 0; i < 25; i++) {
    makeMasu(i);
}

// ここから条件判定

document.body.addEventListener("click", () => {
    //横方向
    checkRow0 = [checkList[0], checkList[1], checkList[2], checkList[3], checkList[4]]
    //.sliceで短く
    checkRow1 = checkList.slice(5, 10);
    checkRow2 = checkList.slice(10, 15);
    checkRow3 = checkList.slice(15, 20);
    checkRow4 = checkList.slice(20, 25);
    //確認
    console.log(checkRow0);
    console.log(checkRow1);
    console.log(checkRow2);
    console.log(checkRow3);
    console.log(checkRow4);

    // 縦方向
    checkCol0 = [checkList[0], checkList[5], checkList[10], checkList[15], checkList[20]]
    checkCol1 = checkList.flat().filter((n, i) => i % 5 === 1);
    checkCol2 = checkList.filter((n, i) => i % 5 === 2);
    checkCol3 = checkList.filter((n, i) => i % 5 === 3);
    checkCol4 = checkList.filter((n, i) => i % 5 === 4);
    // 確認
    console.log(checkCol0);
    console.log(checkCol1);

    //斜め
    checkDia1 = [checkList[0], checkList[6], checkList[12], checkList[18], checkList[24],]
    checkDia2 = [checkList[4], checkList[8], checkList[12], checkList[16], checkList[20],]

    //
    const checkArray = (array) => {
        return array.every(n => n === "◯")
        //const result=array.every(n => n === "◯")
        //return result;
    }

    if (
        checkArray(checkRow0) ||
        checkArray(checkRow1) ||
        checkArray(checkRow2) ||
        checkArray(checkRow3) ||
        checkArray(checkRow4) ||
        checkArray(checkCol0) ||
        checkArray(checkCol1) ||
        checkArray(checkCol2) ||
        checkArray(checkCol3) ||
        checkArray(checkCol4) ||
        checkArray(checkDia1) ||
        checkArray(checkDia2) 
    ) {
        console.log("Bingo!")
        const text=document.createElement("div");
        text.setAttribute("class", "hantei");
        text.textContent = "Bingo!";
        document.body.appendChild(text);
    }


})