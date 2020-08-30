 <template>
  <div>
    <div class="position">
      <video :src="mvplay" autoplay controls muted></video>
    </div>
    <div class="t_top">
 <div class="title">
      <p class="fontone">{{mvName}}</p>
      <p class="fonttwo">6115次播放</p>
    </div>
    <ul>
      <p class="fontone">相关推荐</p>
     
      <li v-for="(item,index) in mvcontent" :key="index">
        <p class="fontthree">{{item.title}}</p> 
        <p class="fonttwo">{{item.viewer}}</p>
        <span><img :src="item.img" width="125px"  style="float: right;" alt=""></span>
      </li>
    </ul>
    </div>
   
  </div>
</template>
<script>
export default {
  data() {
    return {
      mvplay: this.$route.query.mvplay,
      mvName: this.$route.query.mvName,
      mvcontent: this.$route.query.mvcontent,
    };
  },
  mounted(){
    if(typeof(this.$route.query.mvcontent[0])!='string'){
     
      localStorage.a=JSON.stringify(this.$route.query.mvcontent);
    }else{
      this.mvcontent=JSON.parse(localStorage.a)
    } 
  }
};
</script>
<style scoped>
.position {
  z-index: 100;
  position: fixed;
}
span{
  width: 30%;
  margin-bottom: 1.5%;
  bottom: 0px;
  right: 0px;
  float: right;
  position: absolute;
}
p {
  display: block;
}
ul {
  overflow: hidden;
  margin: 4% 4%;
}
li{
  width: 100%;
  height: 80px;
  position: relative;
  margin-top: 4%;
}
.fonttwo {
  line-height: 25px;
  color: #999;
  font-size: 14px;
}
.fontthree{
  width: 55%;
  overflow: hidden;
  display: block;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
}
video {
  width: 100%;
  height: 50%;
}
.t_top{
  padding-top: 57%;
}
.title {
  position: relative;
  padding: 6% 4%;
  border-bottom: 11px solid #f5f5f5;
}
.fontone {
  line-height: 22px;
  font-size: 18px;
  font-weight: bold;
}
</style>