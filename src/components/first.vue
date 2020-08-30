 <template>
  <div class='.main'>
    <v-mine></v-mine>
    <main>
      <header>
   <span @click="tomine()" style="position: fixed;" class="left"><img src="../../src/assets/images/index/xiangqing.png" width="45px" height="46px" alt /></span>
        <img src="../../src/assets/images/index/logos.png" width="90px" height="34px" style="margin-top:8px" alt />
        <span class="right"></span>
      </header>
      <ul>
        <li v-for="(item,index) in lists" :key="index" @click="path=item.path" class="li">
          <router-link style="color:white" :to="item.path">{{item.con}}</router-link>
        </li>
      </ul>  
    </main>
    <router-view></router-view>
  </div>
</template>

<script>
import $ from "jquery"
import { Toast } from 'mint-ui';
import mine from './mine.vue'
export default {
  components:{
             'v-mine':mine
                },
  data() {
    return {
      lists: [
        {
          con: "推荐",
          path: "/index",
        },
        {
          con: "排行",
          path: "/bang",
        },
        {
          con: "分类",
          path: "/category",
        },
        {
          con: "歌手",
          path: "/singer",
        },
        {
          con: "MV",
          path: "/mv",
        },
      ],
    };
  },
methods:{
   tomine(){
            $('.mine').eq(0).css('left','0px')
            $('.my').eq(0).css('background','rgba(39, 32, 32, 0.656)');
            $('.my').eq(0).css('z-index','200');
            $('body').eq(0).css('overflow','hidden');
        },
}
  
};
</script>
 