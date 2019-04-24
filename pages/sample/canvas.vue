<template lang="pug">
section.canvas
  canvas#cvs(
    :width="`${cvsw}px`"
    :height="`${cvsh}px`"
  )
</template>
<script>
export default {
  name: "Canvas",
  data() {
    return {
      cvsw: 800,
      cvsh: 450
    };
  },
  mounted() {
    this.drawCreative();
  },
  methods: {
    drawCreative() {
      let canvas = document.getElementById("cvs");
      let ctx = canvas.getContext("2d");
      let imgCnt = 30; // 描画する画像の数
      let aryImg = []; // 画像の情報を格納
      let cvsw = this.cvsw; // canvasタグに指定したwidth
      let cvsh = this.cvsh; // canvasタグに指定したheight
      let imgBaseSizeW = 34; // 画像の基本サイズ横幅
      let imgBaseSizeH = 16; // 画像の基本サイズ立幅
      let aspectMax = 1.5; // アスペクト比計算時の最大値
      let aspectMin = 0.5; // アスペクト比計算時の最小値
      let speedMax = 2; // 落下速度の最大値
      let speedMin = 0.5; // 落下速度の最小値
      let angleAdd = 4; // 画像角度への加算値

      // 画像の読み込み
      let img = new Image();
      img.src = require("@/assets/img/bill.png");
      img.onload = flow_start;

      // 画像のパラメーターを設定
      function setImagas() {
        let aspect = 0;
        for (let i = 0; i < imgCnt; i++) {
          // 画像サイズに掛けるアスペクト比を0.5~1.5倍でランダムで生成
          aspect = Math.random() * (aspectMax - aspectMin) + aspectMin;
          aryImg.push({
            posx: Math.random() * cvsw, // 初期表示位置x
            posy: Math.random() * cvsh, // 初期表示位置y
            sizew: imgBaseSizeW * aspect, // 画像の横幅
            sizeh: imgBaseSizeH * aspect, // 画像の縦幅
            speedy: Math.random() * (speedMax - speedMin) + speedMin, // 画像が落ちていく速度
            angle: Math.random() * 360 // 角度
          });
        }
      }

      // 描画、パラメーターの更新
      let idx = 0;
      let cos = 0;
      let sin = 0;
      let rad = Math.PI / 180;
      function flow() {
        ctx.clearRect(0, 0, cvsw, cvsh);
        for (idx = 0; idx < imgCnt; idx++) {
          aryImg[idx].posy += aryImg[idx].speedy;
          aryImg[idx].angle += Math.random() * angleAdd;
          cos = Math.cos(aryImg[idx].angle * rad);
          sin = Math.sin(aryImg[idx].angle * rad);
          ctx.setTransform(
            cos,
            sin,
            sin,
            cos,
            aryImg[idx].posx,
            aryImg[idx].posy
          );
          ctx.drawImage(img, 0, 0, aryImg[idx].sizew, aryImg[idx].sizeh);
          ctx.setTransform(1, 0, 0, 1, 0, 0);
          // 範囲外に描画された画像を上に戻す
          if (aryImg[idx].posy >= cvsh) {
            aryImg[idx].posy = -aryImg[idx].sizeh;
          }
        }
      }

      function flow_start() {
        setImagas();
        setInterval(flow, 10);
      }
    }
  }
};
</script>
<style lang="sass" scoped>
.canvas
  text-align: center
  margin-top: calc((100vh - 60px)/ 2 - 225px)
#cvs
  background-color: #000
  background-image: url("../../assets/img/yozora.jpg")
</style>
