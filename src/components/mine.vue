<template>
  <div style="z-index: 0;" class="my">
    <div class="wu" @click="huiqu()"></div>
    <div class="mine">
      <div class="tou">
        <div class="touxiang">
          <img
            src="../../src/assets/images/music/music1.jpg"
            width="25%"
            style="border-radius: 50%; "
            alt
          />
          <p class="shezhi">mingzi</p>
          <span class="qiandao">签到</span>
        </div>
      </div>
      <div class="zhong">
        <ol>
           <li>
            <ul>
              <li>我的消息</li>
              <li>会员中心</li>
              <li>商城</li>
              <li>在线听歌免流量</li>
            </ul>
          </li>
          <li>
            <ul>
              <li>我的好友</li>
              <li>附近的人</li>
      
            </ul>
          </li>
          <li>
            <ul>
              <li>个性换肤</li>
              <li>听歌识曲</li>
              <li>定时停止播放</li>
              <li>扫一扫</li>
              <li>音乐闹钟</li>
              <li>驾驶模式</li>
              <li>音乐云盘</li>
            </ul>
          </li>
            <li>
            <ul>
              <li>个性换肤</li>
              <li>听歌识曲</li>
              <li>定时停止播放</li>
              <li>扫一扫</li>
              <li>音乐闹钟</li>
              <li>驾驶模式</li>
              <li>音乐云盘</li>
            </ul>
          </li>
            
        </ol>
      </div>
      <div class="dibu">
      <h5><img src="../../src/assets/images/index/yejian.png"  alt="">夜间模式</h5>
      <p><img src="../../src/assets/images/index/shezhi.png" alt="">设置</p>
       <router-link to="/login">
                     <p><img src="../../src/assets/images/index/tuichu.png" alt="">退出</p>
            </router-link>
      </div>
    </div>
  </div>
</template>
<script>
import $ from "jquery";
export default {
  data() {
    return {};
  },
  methods: {
    huiqu() {
       $('.mine').eq(0).css('left','-85vw')
       $('.my').eq(0).css('background','rgba(39, 32, 32, 0)')
       $('.my').eq(0).css('z-index','0');
       $('body').eq(0).css('overflow-y','auto');
    },
  },
};
</script>
<style scoped>
.dibu h5{
  width: 30%;
  float: left;
  margin-right: 4px;
}
.dibu p{
  margin-left: 10vw;
  float: left;
  width: 20%;
}
.dibu img{
  float: left;
  margin-bottom: -3px;
  width: 6vw;
  margin-right: 2px;
}
ol{
  margin-left: 3%;
  overflow-y: auto;
 position: absolute;
 width: 90%;
 height: 100vh;

}
ol>li{
  border-bottom:3px solid rgba(128, 128, 128, 0.178);
}
li{
  margin-left: 3vw;
  width: 100%;
  line-height: 7vh;
}
.zhong {
  background: white;
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
}
.dibu {
  width: 100%;
  padding: 3%;
  text-align: center;
  overflow: hidden;
  border-top: 1px solid rgba(128, 128, 128, 0.329);
  left: 0px;
  bottom: 0px;
  background: white;
  position: absolute;
}
.shezhi {
  line-height: 35px;
  margin-left: 5%;
  color: white;
}
.qiandao {
  padding: 3px;
  margin-right: 10%;
  margin-bottom: 10%;
  bottom: 0%;
  right: 0%;
  position: absolute;
  float: right;
  border: 2px solid white;
  color: white;
  border-radius: 10px;
}
.touxiang {
  position: relative;
  padding: 13% 7% 7% 6%;
}
.tou {
  overflow: hidden;
  width: 100%;
  height: 24%;
  background: url(../../src/assets/images/music/music1.jpg) no-repeat;
  background-size: 100%;
}
.wu {
  width: 15vw;
  height: 100vh;
  float: right;
}
.my {
  background: rgba(39, 32, 32, 0);
  overflow: hidden;
  top: 0px;
  left: 0px;
  width: 100vw;
  height: 100vh;
  position: fixed;
  z-index: 10;
  transition: all 1s;
}
.mine {
  z-index: 200;
  transition: all 1s;
  left: -85vw;
  font-size: 4vw;
  overflow: hidden;
  position: relative;
  width: 85vw;
  height: 100vh;
  z-index: 200;
  background: orangered;
}
</style>