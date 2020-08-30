 <template>
  <div class="fixed">
    <ul>
      <li v-for="(item,index) in two" :key="index">
        <img :src="item.img" width="74%" />
        <br />
        <span>{{item.span}}</span>
      </li>
    </ul>
  </div>
</template>
    <script>
import $ from "jquery";
export default {
  data() {
    return {
        two: [
        {
          img: "../../src/assets/images/index/main4.jpg",
          span: "经典老歌大放送！一人一首代表作！",
        },
        {
          img: "../../src/assets/images/index/main5.jpg",
          span: "失恋听情歌｜不眠夜里的孤单心事",
        },
        {
          img: "../../src/assets/images/index/main6.jpg",
          span: "抖音热门歌曲 : 都给我听它",
        },
        {
          img: "../../src/assets/images/index/main7.jpg",
          span: "【放松轻音】舒缓小调，治愈心灵港湾",
        },
        {
          img: "../../src/assets/images/index/main8.jpg",
          span: "热歌速递！蹦迪首选 DJ舞曲",
        },
        {
          img: "../../src/assets/images/index/main9.jpg",
          span: "国风精选篇：赠君一场千年梦",
        },
        {
          img: "../../src/assets/images/index/main4.jpg",
          span: "经典老歌大放送！一人一首代表作！",
        },
        {
          img: "../../src/assets/images/index/main5.jpg",
          span: "失恋听情歌｜不眠夜里的孤单心事",
        },
        {
          img: "../../src/assets/images/index/main6.jpg",
          span: "抖音热门歌曲 : 都给我听它",
        },
        {
          img: "../../src/assets/images/index/main7.jpg",
          span: "【放松轻音】舒缓小调，治愈心灵港湾",
        },
        {
          img: "../../src/assets/images/index/main8.jpg",
          span: "热歌速递！蹦迪首选 DJ舞曲",
        },
        {
          img: "../../src/assets/images/index/main9.jpg",
          span: "国风精选篇：赠君一场千年梦",
        },
        {
          img: "../../src/assets/images/index/main4.jpg",
          span: "经典老歌大放送！一人一首代表作！",
        },
        {
          img: "../../src/assets/images/index/main5.jpg",
          span: "失恋听情歌｜不眠夜里的孤单心事",
        },
        {
          img: "../../src/assets/images/index/main6.jpg",
          span: "抖音热门歌曲 : 都给我听它",
        },
        {
          img: "../../src/assets/images/index/main7.jpg",
          span: "【放松轻音】舒缓小调，治愈心灵港湾",
        },
        {
          img: "../../src/assets/images/index/main8.jpg",
          span: "热歌速递！蹦迪首选 DJ舞曲",
        },
        {
          img: "../../src/assets/images/index/main9.jpg",
          span: "国风精选篇：赠君一场千年梦",
        },
      ],
    };
  },
};
</script>
<style scoped>
.imgs {
  width: 80%;
  left: 9%;
  position: absolute;
}
span {
  height: 40px;
  width: 81%;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  overflow: hidden;
  -webkit-line-clamp: 2;
  margin-left: 8%;
}
ul {
    text-align: center;
  overflow: hidden;
}
ul > li {
  position: relative;
  margin-top: 3%;
  line-height: 20px;
  margin-bottom: 2.4%;
  display: inline-block;

  width: 32.33%;
}
ul > li:nth-of-type(3n + 2) {
  margin-left: 2%;
}
ul > li:nth-of-type(3n) {
  margin-left: 1%;
}
</style>