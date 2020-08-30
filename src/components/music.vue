<template>
  <div class="music">
    <span @click="backbang()" class="zuo">
    <img class="zuo" src="../../src/assets/images/music/huiq.png" alt="">
    </span>
    <img class="you" src="../../src/assets/images/music/share1.png" alt="">
    <div class="cont">
      <p class="font1">{{this.$store.state.str}}</p>
      <p class="font2">{{singer}}</p>
      <div>
        <div :class="['play','turns']">
          <img :src="imgs" width="50%" style=" border-radius: 50%;" alt />
        </div>
        <ul>
          <li v-for="(item,index) in jsons.yinyue" :key="index">
            <p>{{item.songs}}</p>
          </li>
        </ul>
      </div>
      <div class="audio">
        <audio @pause="ends()" @play="starts()" :src="acc" autoplay controls muted></audio>
      </div>
      <div class="bottom">
        <span>
          <img src="../../src/assets/images/music/liebiao1.png" width="60%" alt />
        </span>
        <span>
          <img  @click="pried()" src="../../src/assets/images/music/shang1.png" width="65%" alt />
        </span>
        <span @click="turns()">
          <img v-show="this.$store.state.shows" src="../../src/assets/images/music/continue.png" width="70%" alt />
          <img v-show="!this.$store.state.shows" src="../../src/assets/images/music/pause.png" width="70%"  alt />
        </span>
        <span>
          <img @click="next()" src="../../src/assets/images/music/xia1.png" width="65%" alt />
        </span>
        <span>
          <img src="../../src/assets/images/music/bofang1.png" width="60%" alt />
        </span>
      </div>
    </div>
  </div>
</template>
<script>
import $ from "jquery";
export default {
  props: ["ind", "sing", "singer"],
  data() {
    return {
      nums: this.ind,
      sin: " ",
      rangeValue: " ",
      imgs: " ",
      acc: require("../../src/assets/images/music/mp4/douyin1.mp3"),
      jsons: " ",
      sings: " ",
      songs: " ",
      xian: true,
      time: " ",
    };
  },
  watch: {
    ind(){
      if (this.$store.state.shows) {
        this.acc=this.sings[this.ind].mp3;
        this.imgs=this.sings[this.ind].img;      
      } else {
        this.acc=this.sings[this.ind].mp3;
        this.imgs=this.sings[this.ind].img;
        $("audio")[0].play();      
      }
    },
  },
  mounted() {
    this.$http.get("./src/assets/data/music.json").then((response) => {
        this.jsons = response.data;
        this.sings = this.jsons.yinyue;
      })
      .catch(function (error) {
        console.log(error);
      })
      .then(function () {
      });
  },
  methods: {
    pried(){
     if(!this.$store.state.shows){
       $("audio")[0].pause();
      this.$store.commit("jian",this.$store.state.num);
      this.acc=this.sings[this.$store.state.num].mp3;
      this.imgs=this.sings[this.$store.state.num].img;
      this.$store.commit("qucan",this.sings[this.$store.state.num].singName);
        $("audio")[0].play();
      }else{
      this.$store.commit("jian",this.$store.state.num);
      this.acc=this.sings[this.$store.state.num].mp3;
      this.imgs=this.sings[this.$store.state.num].img;
      this.$store.commit("qucan",this.sings[this.$store.state.num].singName);

        $("audio")[0].play();
      }
    },
    next(){
  if(!this.$store.state.shows){
       $("audio")[0].pause();
      this.$store.commit("jia");
      this.acc=this.sings[this.$store.state.num].mp3;
      this.imgs=this.sings[this.$store.state.num].img;
      this.$store.commit("qucan",this.sings[this.$store.state.num].singName);
        $("audio")[0].play();
      }else{
      this.$store.commit("jia");
      this.acc=this.sings[this.$store.state.num].mp3;
      this.imgs=this.sings[this.$store.state.num].img;
      this.$store.commit("qucan",this.sings[this.$store.state.num].singName);
        $("audio")[0].play();
      }
    },
     
           
    backbang() {
      this.$store.commit("changes");
      $(".h1").eq(0).fadeIn(1000);
      $(".music").eq(0).css("margin-bottom", "-100vh");
    },
    turns() {
      if (this.$store.state.shows) {
        $("audio")[0].play();
      } else {
        $("audio")[0].pause();
      }
    },

    starts() {
      // this.time = setTimeout({
      //   ind= this.ind+1
      // },1000)
      $(".turns").eq(0).removeClass("play");
      this.$store.commit("ups");
    },
    ends() {
      // clearTimeout(this.time);
      $(".turns").eq(0).addClass("play");
      this.$store.commit("up");
    },
  },
};
</script>
<style scoped>
.audio {
  margin-top: 4%;
}
.bottom {
  margin-top: 10%;
  width: 100vw;
  height: 100px;
}
.bottom span {
  float: left;
  width: 20%;
}
.mt-range-thumb {
  transform: scale(0.1);
  width: 10px;
  height: 10px;
}
.turns {
  margin-top: 7%;
  margin-left: auto;
  margin-right: auto;
  animation: move 6s infinite linear;
}
.play {
  animation-play-state: paused;
}
ul {
  margin-top: 5%;
  height: 80px;
}
ul p {
  font-size: 4.267vw;
  line-height: 40px;
  width: 80%;
  margin: 0 auto;
  font-weight: 400;
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
}
@keyframes move {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.zuo {
  position: absolute;
  left: 2%;
  top: 0%;
  float: left;
  width: 40px;

}
.you {
  margin-right: 3vw;
  margin-top: 3vw;
  width: 35px;
  position: absolute;
  right: 0%;
  top: 0%;
  float: right;
}
.font1 {
  width: 93.333vw;
  margin: 0 auto 0.667vw;
  line-height: 7.467vw;
  font-size: 5.333vw;
  font-weight: 600;
}
.font2 {
  line-height: 30px;
  font-size: 3.2vw;
  width: 50%;
  margin: 0 auto;
  font-weight: 400;
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
}
.music {
  color: white;
  text-align: center;
  background: url(../../src/assets/images/music/music1.jpg) no-repeat;
  background-size: 100vh;
  width: 100vw;
  height: 100vh;
  display: inline-block;
  position: fixed;
  left: 0px;
  bottom: 0%;
  margin-bottom: -100vh;
  transition: all 1s;
}
.cont {
  padding-top: 21%;
  width: 100vw;
  height: 100vh;
  background-color: #252a40e0;
}
</style>