 <template>
  <div class="fixed">
    <div class="rotation">
      <mt-swipe :auto="4000">
        <mt-swipe-item v-for="(item,index) in lists" :key="index">
          <img :src="item.img" alt />
        </mt-swipe-item>
      </mt-swipe>
    </div>
    <ol>
      <li>
        <p>每日新歌</p>
        <ul>
          <li v-for="(item,index) in one" :key="index">
            <img style="margin-top: -6%;" class="img" src="../../src/assets/images/index/imgBg.png" width="83%" />
            <img :src="item.img" width="71%" />
            <img class="imgs" :src="imgs" height="3px" />
          </li>
        </ul>
      </li>
      <li>
        <p>歌单推荐</p>
        <ul>
          <li v-for="(item,index) in two" :key="index">
            <img :src="item.img" width="74%" />
            <img class="imgs" :src="imgs" height="3px" />
            <br />
            <span>{{item.span}}</span>
          </li>
        </ul>
      </li>
      <li>
        <p>精彩节目</p>
        <ul>
          <li v-for="(item,index) in three" :key="index">
            <img :src="item.img" width="74%" />
            <img class="imgs" :src="imgs" height="3px" />
            <br />
            <span>{{item.span}}</span>
          </li>
        </ul>
      </li>
      <li>
        <p>推荐主播</p>
        <ul>
          <li v-for="(item,index) in four" :key="index">
            <img :src="item.img" width="74%" />
            <img class="imgs" :src="imgs" height="3px" />
            <br />
            <span>{{item.span}}</span>
          </li>
        </ul>
      </li>
      <li>
        <p>热门分类</p>
        <ul>
          <li class="lis" v-for="(item,index) in five" :key="index">
            <a href="#">{{item.a}}</a>
          </li>
        </ul>
      </li>
      <li>
        <p>最新MV</p>
        <ul>
          <li class="mv" v-for="(item,index) in six" :key="index">
            <router-link :to="{ path: 'indexmv', query: { mvName: item.span, mvplay :item.mv, mvcontent:item.mvcontent}}">
              <img  class="img" :src="item.img" alt />
              <video :src="item.mv" @pause="end(index)" @play="start(index)"></video>
            </router-link>
            <br />
            <i>{{item.span}}</i>
            <b @click="play(index)" class="button"></b>
            <u @click="unplay(index)" class="buttons"></u>
          </li>
        </ul>
      </li>
    </ol>
  </div>
</template>

<script>
import $ from "jquery";
export default {
  data() {
    return {
      imgs:require('../../src/assets/images/index/topLine.png'),
      msg: "ture",
      lists: [
        {
          img: require("../../src/assets/images/index/top1.jpg"),
        },
        {
          img: require("../../src/assets/images/index/top2.jpg"),
        },
        {
          img: require("../../src/assets/images/index/top3.jpg"),
        },
        {
          img: require("../../src/assets/images/index/top4.jpg"),
        },
      ],
      one: [
        {
          img: require("../../src/assets/images/index/main1.jpg"),
        },
        {
          img: require("../../src/assets/images/index/main2.jpg"),
        },
        {
          img: require("../../src/assets/images/index/main3.jpg"),
        },
      ],
      two: [
        {
          img: require("../../src/assets/images/index/main4.jpg"),
          span: "经典老歌大放送！一人一首代表作！",
        },
        {
          img: require("../../src/assets/images/index/main5.jpg"),
          span: "失恋听情歌｜不眠夜里的孤单心事",
        },
        {
          img: require("../../src/assets/images/index/main6.jpg"),
          span: "抖音热门歌曲 : 都给我听它",
        },
        {
          img: require("../../src/assets/images/index/main7.jpg"),
          span: "【放松轻音】舒缓小调，治愈心灵港湾",
        },
        {
          img: require("../../src/assets/images/index/main8.jpg"),
          span: "热歌速递！蹦迪首选 DJ舞曲",
        },
        {
          img: require("../../src/assets/images/index/main9.jpg"),
          span: "国风精选篇：赠君一场千年梦",
        },
      ],
      three: [
        {
          img: require("../../src/assets/images/index/main10.jpg"),
          span: "酷我音乐调频",
        },
        {
          img: require("../../src/assets/images/index/main11.jpg"),
          span: "吐小曹扒新闻",
        },
        {
          img: require("../../src/assets/images/index/main12.jpg"),
          span: "《莫萱日记》音乐小品",
        },
      ],
      four: [
        {
          img: require("../../src/assets/images/index/main13.jpg"),
          span: "SR-青儿fighting.",
        },
        {
          img: require("../../src/assets/images/index/main14.jpg"),
          span: "创星Bi❤ng饼弟",
        },
        {
          img: require("../../src/assets/images/index/main15.jpg"),
          span: "安小七哈哈",
        },
      ],
      five: [
        {
          a: "甜蜜",
        },
        {
          a: "流行",
        },
        {
          a: "网络",
        },
        {
          a: "影视",
        },
        {
          a: "DJ",
        },
        {
          a: "经典",
        },
      ],
      six: [
        {
          mv: require("../../src/assets/images/mv/mv1.mp4"),
          img: require("../../src/assets/images/index/mv1.png"),
          span: "回忆的沙漏 (10周年版)",
          mvcontent: [
            {
              title:
                "京剧魅力四射 爆红中国好声音 羽泉张惠妹大呼 样板戏如此惊艳",
              viewer: "28388次播放",
              img: require("../../src/assets/images/mv/photo/photo1.jpg"),
            },
            {
              title: "本山传媒刘老根大舞台演员二丫王悦演唱励志歌曲《放手一搏》",
              viewer: "11769次播放",
              img: require("../../src/assets/images/mv/photo/photo2.jpg"),
            },
            {
              title: "我爱你VS嫁给我，如果是你的话，你会选？",
              viewer: "48194次播放",
              img: require("../../src/assets/images/mv/photo/photo3.jpg"),
            },
            {
              title: "《跟着感觉走》演唱：田丹",
              viewer: "12285次播放",
              img: require("../../src/assets/images/mv/photo/photo4.jpg"),
            },
            {
              title: "本山传媒刘老根大舞台演员二丫王悦演唱励志歌曲《放手一搏》",
              viewer: "11769次播放",
              img: require("../../src/assets/images/mv/photo/photo2.jpg"),
            },
            {
              title: "我爱你VS嫁给我，如果是你的话，你会选？",
              viewer: "48194次播放",
              img: require("../../src/assets/images/mv/photo/photo3.jpg"),
            },
            {
              title: "《跟着感觉走》演唱：田丹",
              viewer: "12285次播放",
              img: require("../../src/assets/images/mv/photo/photo4.jpg"),
            },
          ],
        },
        {
          mv: require("../../src/assets/images/mv/mv2.mp4"),
          img: require("../../src/assets/images/index/mv2.png"),
          span: "悟",
          mvcontent: [
            {
              title:
                "京剧魅力四射 爆红中国好声音 羽泉张惠妹大呼 样板戏如此惊艳",
              viewer: "8388次播放",
              img: require("../../src/assets/images/mv/photo/photo1.jpg"),
            },
            {
              title: "本山传媒刘老根大舞台演员二丫王悦演唱励志歌曲《放手一搏》",
              viewer: "11769次播放",
              img: require("../../src/assets/images/mv/photo/photo2.jpg"),
            },
            {
              title: "我爱你VS嫁给我，如果是你的话，你会选？",
              viewer: "48194次播放",
              img: require("../../src/assets/images/mv/photo/photo3.jpg"),
            },
            {
              title: "《跟着感觉走》演唱：田丹",
              viewer: "12285次播放",
              img: require("../../src/assets/images/mv/photo/photo4.jpg"),
            },
            {
              title: "本山传媒刘老根大舞台演员二丫王悦演唱励志歌曲《放手一搏》",
              viewer: "11769次播放",
              img: require("../../src/assets/images/mv/photo/photo2.jpg"),
            },
            {
              title: "我爱你VS嫁给我，如果是你的话，你会选？",
              viewer: "48194次播放",
              img: require("../../src/assets/images/mv/photo/photo3.jpg"),
            },
            {
              title: "《跟着感觉走》演唱：田丹",
              viewer: "12285次播放",
              img: require("../../src/assets/images/mv/photo/photo4.jpg"),
            },
          ],
        },
        {
          mv: require("../../src/assets/images/mv/mv3.mp4"),
          img: require("../../src/assets/images/index/mv2.png"),

          span: "一念永恒",
          mvcontent: [
            {
              title:
                "京剧魅力四射 爆红中国好声音 羽泉张惠妹大呼 样板戏如此惊艳",
              viewer: "18388次播放",
              img: require("../../src/assets/images/mv/photo/photo1.jpg"),
            },
            {
              title: "本山传媒刘老根大舞台演员二丫王悦演唱励志歌曲《放手一搏》",
              viewer: "11769次播放",
              img: require("../../src/assets/images/mv/photo/photo2.jpg"),
            },
            {
              title: "我爱你VS嫁给我，如果是你的话，你会选？",
              viewer: "48194次播放",
              img: require("../../src/assets/images/mv/photo/photo3.jpg"),
            },
            {
              title: "《跟着感觉走》演唱：田丹",
              viewer: "12285次播放",
              img: require("../../src/assets/images/mv/photo/photo4.jpg"),
            },
            {
              title: "本山传媒刘老根大舞台演员二丫王悦演唱励志歌曲《放手一搏》",
              viewer: "11769次播放",
              img: require("../../src/assets/images/mv/photo/photo2.jpg"),
            },
            {
              title: "我爱你VS嫁给我，如果是你的话，你会选？",
              viewer: "48194次播放",
              img: require("../../src/assets/images/mv/photo/photo3.jpg"),
            },
            {
              title: "《跟着感觉走》演唱：田丹",
              viewer: "12285次播放",
              img: require("../../src/assets/images/mv/photo/photo4.jpg"),
            },
          ],
        },
      ],
    };
  },
  methods: {
    play(p) {
      $("video")[p].play();
    },
    unplay(p) {
      $("video")[p].pause();
      $(".mv img").eq(p).css("display", "none");
    },
    start(s) {
      $(".mv img").eq(s).css("display", "none");
      $("b").eq(s).attr("class", " ");
      $("u").eq(s).css("display", "inline-block");
      this.msg = $("b")[s].classList.contains("button");
      for (var i = 0; i < $("video").length; i++) {
        if (s != i) {
          $("video")[i].pause();
        }
      }
    },
    end(e) {
      $("u").eq(e).css("display", "none");
      $("b").eq(e).attr("class", "button");
    },
  },
};
</script>

<style scoped>
video {
  width: 85%;
}
.mv {
  width: 100%;
  font-size: 15px;
}
.img {
  display: inline-block;
  width: 85%;
  left: 0px;
  top: 0px;
  margin-left: 7%;
  position: absolute;
}
.imgs {
  width: 80%;
  left: 9%;
  position: absolute;
}
.singger {
  width: 80%;
  left: 9%;
  position: absolute;
  margin-top: 0%;
  margin-bottom: 0%;
}
.lis {
  line-height: 30px;
  width: 27%;
  margin-left: 2%;
  background-color: white;
  border: 1px solid #d0e3ee;
  position: relative;
}
.lis:nth-of-type(4),
.lis:nth-of-type(5),
.lis:nth-of-type(6) {
  margin-top: 2%;
}
.lis:nth-of-type(3n),
.lis:nth-of-type(2),
.lis:nth-of-type(5) {
  margin-left: 5%;
}
ol {
  margin-bottom: 25%;
}
ol > li {
  overflow: hidden;
  text-align: center;
  margin-top: 1.4%;
  margin-bottom: 2%;
}
li img {
  position: relative;
}
li a {
  color: black;
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
  overflow: hidden;
}
ul > li {
  position: relative;
  margin-top: 3%;
  line-height: 20px;
  margin-bottom: 3%;
  display: inline-block;

  width: 32.33%;
}
ul > li:nth-of-type(3n + 2) {
  margin-left: 2%;
}
ul > li:nth-of-type(3n) {
  margin-left: 1%;
}
i {
  font-style: normal;
}
p {
  margin-left: -77%;
  color: #46b4e6;
}
.button {
  position: absolute;
  width: 70px;
  height: 70px;
  transform: scale(0.6);
  top: 32%;
  left: 46%;
  margin: -13px 0 0 -13px;
  background: url(../../src/assets/images/music/play.png) no-repeat;
}
.buttons {
  display: none;
  position: absolute;
  width: 70px;
  height: 70px;
  transform: scale(0.6);
  top: 32%;
  left: 46%;
  margin: -13px 0 0 -13px;
  background: url(../../src/assets/images/music/stop.png) no-repeat;
}
.rotation img {
  width: 100%;
}
</style>
