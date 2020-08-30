 <template>
  <div v-show="this.$store.state.xians" class="bottom">
    <img src="../../src/assets/images/music/music1.jpg" width="12%" style="float:left; border-radius: 50%;"  @click="chulai()" alt/>
    <p  @click="chulai()">{{sing}}</p>
    <img src="../../src/assets/images/music/bofang1.png" alt />
    <div @click="bian()" class="bians">
      <img :class="{yin:this.$store.state.shows}" src="../../src/assets/images/music/stop.png" alt />
      <img :class="{yin:!this.$store.state.shows}" src="../../src/assets/images/music/play.png" alt />
    </div>
  </div>
</template>
<script>
import $ from "jquery";
export default {
  props: ["sing"],
  data() {
    return {
    };
  },
  methods: {
      chulai(){
      $(".h1").eq(0).fadeOut(1000);
      $(".music").eq(0).css("margin-bottom", "0vh");
      this.$store.commit('changes');
      },
    bian() {
       if (this.$store.state.shows) {
           $("audio")[0].play();
      } else {
         $("audio")[0].pause();
      }
    },
  },
};
</script>
<style scoped>
.bians {
  width: 100%;
}
.yin {
  display: none;
}
.bottom img {
  margin-right: 6vw;
  width: 10%;
  float: right;
}
.bottom p {
  color: white;
  width: 10%;
  float: left;
  font-size: 4.267vw;
  line-height: 40px;
  width: 40%;
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
}
.bottom {
  position: fixed;
  left: 0px;
  bottom: 0px;
  width: 100vw;
  height: 6vh;
  background: #46b4e6;
  transition: all 1s;
  padding: 10px 10px;
}
</style>