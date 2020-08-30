<template>
  <div style="position: relative;">
    <div class="bang_content">
      <div class="h1">
        <h1 @click="back()">
          <img class="left" src="../../src/assets/images/music/back.png" width="50px" alt />
        </h1>
        <b>{{bangName}}</b>
        <i class="right"></i>
      </div>
      <div class="h2">
        <img class="spa" :src="bangImg" alt />
        <div class="h2_one">
          <img :src="bangImg" width="90px" style="margin-left:7px; float:left; " alt />
          <h2 class="sty">{{content}}</h2>
          <s></s>
        </div>
      </div>
      <ul>
        <li v-for="(item,index) in songs" :key="index">
          <p class="page" @click="tomusic(item.p,item.pp,item.indexs)">
            <span :class="{qian:index==Idd}"></span>
            {{item.p}}
            <span class="h_hou"></span>
            <span class="hou"></span>
          </p>
          <u class="content" @click="tomusic(item.p,item.pp,item.indexs)">{{item.pp}}</u>
          <img src="../../src/assets/images/music/singDom.png" width="20px" />
          <img src="../../src/assets/images/music/singMv.png" width="20px" style="margin-right:17px" />
        </li>
      </ul>
    </div>
    <v-music :ind="Idd" :sing="singName" :singer="singerName"></v-music>
    <v-bottom :sing="singName"></v-bottom>

  </div>
</template>
<script>
import music from "./music.vue";
import musicplay from "./bottom.vue";
import $ from "jquery";
export default {
  data() {
    return {
      Idd : -1,
      singName: " ",
      singerName: " ",
      bangName: this.$route.query.bangName,
      bangImg: this.$route.query.bangImg,
      content: this.$route.query.content,
      songs: this.$route.query.songs, //此数组包含歌手和歌名
    };
  },
  mounted() {
       $("audio")[0].pause();
      this.$store.commit("up");
        this.$http.get("./src/assets/data/music.json").then((response) => {
        this.jsons = response.data;  
        this.sings = this.jsons.yinyue;     
      })
    if (typeof this.$route.query.songs[0] != "string") {
      localStorage.a = JSON.stringify(this.$route.query.songs);
    } else {
      this.songs = JSON.parse(localStorage.a);
    }
  },
  components: {
    "v-music": music,
    "v-bottom":musicplay
  },
  methods: {
    tomusic(sing, singer, Ids) {
      if(this.$store.state.shows){
          $("audio")[0].pause();
        $("audio")[0].play();
      }else{
        $("audio")[0].play();
      }
      $(".h1").eq(0).fadeOut(1000);
      $(".music").eq(0).css("margin-bottom", "0vh");
      this.singName = sing;
      this.singerName = singer;  
      this.Idd = Ids;
      this.$store.commit('down');
      this.$store.commit("fuzhi",Ids);
      this.$store.commit("qucan",sing);
    },
    back() {
      this.$router.go(-1);
    },
  },
};
</script>
<style scoped>
.bang_content {
  display: inline-block;
}
.qian {
  margin: 0px -4px -7px -5px;
  transform: scale(0.7);
  width: 22px;
  height: 26px;
  background: url(../../src/assets/images/music/singDt.png) no-repeat;
}
.hou {
  margin-left: 5px;
  margin: 0px 0px -10px -10px;
  transform: scale(0.63);
  width: 48px;
  height: 29px;
  background: url(../../src/assets/images/music/WS.png) no-repeat;
}
.h_hou {
  margin: 0px 0px -10px -10px;
  transform: scale(0.63);
  width: 48px;
  height: 29px;
  background: url(../../src/assets/images/music/HQ.png) no-repeat;
}
.content {
  width: 70%;
  text-decoration: none;
  color: #636363;
  line-height: 20px;
  font-size: 12px;
  font-family: "微软雅黑";
  float: left;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  overflow: hidden;
  -webkit-line-clamp: 1;
}
.page {
  width: 70%;
  overflow: hidden;
  display: block;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
}
span {
  display: inline-block;
}
li img {
  margin-top: -10px;
  float: right;
}
s {
  position: absolute;
  bottom: -3px;
  right: 50px;
  transform: scale(0.58);
  width: 60px;
  height: 60px;
  float: left;
  background: url(../../src/assets/images/music/play.png) no-repeat;
}
b {
  line-height: 49px;
}
ul {
  margin: 0 4%;
}
li {
  padding: 3%;
  overflow: hidden;
  border-bottom: 1px solid #dfdfdf;
}
.h1 {
  width: 100%;
  position: fixed;
  height: 50px;
  background: #ededed;
  z-index: 100;
}
.h2 {
  overflow: hidden;
  padding-top: 50px;
  height: 130px;
  position: relative;
}
.spa {
  filter: blur(10px);
  width: 100%;
  height: 130px;
  position: absolute;
}
.h2_one {
  overflow: hidden;
  position: absolute;
  opacity: 1;
  width: calc(100vw - 40px);
  padding: 20px;
  height: 90px;
  background-color: rgba(0, 0, 0, 0.6);
}
.sty {
  margin-top: 2px;
  font-size: 14px;
  font-family: "微软雅黑";
  margin-left: 10px;
  float: left;
  color: white;
  width: 60%;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  overflow: hidden;
  -webkit-line-clamp: 3;
}
</style>