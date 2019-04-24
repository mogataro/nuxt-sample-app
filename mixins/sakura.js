var canvas = document.getElementById("cvs");
var ctx = canvas.getContext("2d");
var imgCnt = 25; // 描画する画像の数
var aryImg = []; // 画像の情報を格納
var cvsw = 680; // canvasタグに指定したwidth
var cvsh = 500; // canvasタグに指定したheight
var imgBaseSizeW = 15; // 画像の基本サイズ横幅
var imgBaseSizeH = 18.5; // 画像の基本サイズ立幅

// 画像の読み込み
var img = new Image();
img.src = "http://www.otwo.jp/blog/demo/canvas/images/sakura.png";
img.onload = flow_start;

// 画像のパラメーターを設定
function setImagas() {
  for (var i = 0; i < imgCnt; i++) {
    aryImg.push({
      posx: Math.random() * cvsw, // 初期表示位置x
      posy: Math.random() * cvsh, // 初期表示位置y
      sizew: imgBaseSizeW, // 画像の幅
      sizeh: imgBaseSizeH // 画像の高さ
    });
  }
}

// 描画、パラメーターの更新
var idx = 0;
function flow() {
  ctx.clearRect(0, 0, cvsw, cvsh);
  for (idx = 0; idx < imgCnt; idx++) {
    aryImg[idx].posy += 1;
    ctx.drawImage(
      img,
      aryImg[idx].posx,
      aryImg[idx].posy,
      aryImg[idx].sizew,
      aryImg[idx].sizeh
    );
    // 範囲外に描画された画像を上に戻す
    if (aryImg[idx].posy >= cvsh) {
      aryImg[idx].posy = 0 - aryImg[idx].sizeh;
    }
  }
}

function flow_start() {
  setImagas();
  setInterval(flow, 10);
}
