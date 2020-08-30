 <template>
  <div class="fixed">
    <ul>
      <li v-for="(item,index) in bangs" @click="getbang(item.top)" :key="index">
        <router-link
          :to="{ path: 'content', query: { bangName: item.p, bangImg : item.img, content: item.content, songs: item.songs}}"
        >
          <img :src="item.img" width="79.5%" />
          <img class="imgs" src="../../src/assets/images/index/topLine.png" height="3px" />
          <br />
          <i>{{item.p}}</i>
        </router-link>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      bangs: [
        {
          top: "yinyue",
          img: require("../../src/assets/images/bang/bang1.png"),
          p: "酷我飙升榜",
          content:
            "榜单收录一周内播放次数涨幅最高的TOP200歌曲，权威反应时下最流行音乐动态，精彩一榜打尽。",
          songs: [
            {
              p: "点歌的人",
              pp: "海来阿木 ",
              indexs: 0,
            },
            {
              p: "兄弟想你了",
              pp: "姜鹏 — 江湖大道（完美篇）",
              indexs: 1,
            },
            {
              p: "此情一直在心间",
              pp: "花姐 — 此情一直在心间",
              indexs: 2,
            },
            {
              p: "周大侠",
              pp: "周杰伦 — 2007世界巡回演唱会",
              indexs: 3,
            },
            {
              p: "余香",
              pp: "张小九 — 余香",
              indexs: 4,
            },
            {
              p: "稻香",
              pp: "周杰伦&林俊杰",
              indexs: 5,
            },
            {
              p: "Ke Cap Gap Ba Gia",
              pp: "9妹 — Ke Cap Gap Ba Gia",
              indexs: 6,
            },
            {
              p: "你笑起来真好看",
              pp: "李佳莹 — 你笑起来真好看",
              indexs: 7,
            },
            {
              p: "信仰",
              pp: "张信哲 — 情歌精选",
              indexs: 8,
            },
            {
              p: "情难断",
              pp: "苏谭谭 — 情难断",
              indexs: 9,
            },
            {
              p: "I Want You To Know",
              indexs: 10,
              pp:
                "Zedd&Selena Gomez&Pegato — I Want You To Know (Hella x Pegato Remix)",
            },
            {
              p: "一路向北",
              pp: "周杰伦 — J III MP3 Player",
              indexs: 11,
            },
            {
              p: "колыбельная",
              pp: "Rauf&Faik — колыбельная",
              indexs: 12,
            },
            {
              p: "美人鱼",
              pp: "林俊杰 — 第二天堂",
              indexs: 13,
            },
            {
              p: "点歌的人",
              pp: "海来阿木 ",
              indexs: 0,
            },
            {
              p: "兄弟想你了",
              pp: "姜鹏 — 江湖大道（完美篇）",
              indexs: 1,
            },
            {
              p: "此情一直在心间",
              pp: "花姐 — 此情一直在心间",
              indexs: 2,
            },
            {
              p: "周大侠",
              pp: "周杰伦 — 2007世界巡回演唱会",
            },
            {
              p: "余香",
              pp: "张小九 — 余香",
              indexs: 4,
            },
            {
              p: "稻香",
              pp: "周杰伦&林俊杰",
              indexs: 5,
            },
            {
              p: "Ke Cap Gap Ba Gia",
              pp: "9妹 — Ke Cap Gap Ba Gia",
              indexs: 6,
            },
            {
              p: "你笑起来真好看",
              pp: "李佳莹 — 你笑起来真好看",
              indexs: 7,
            },
            {
              p: "信仰",
              pp: "张信哲 — 情歌精选",
              indexs: 8,
            },
            {
              p: "情难断",
              pp: "苏谭谭 — 情难断",
              indexs: 9,
            },
            {
              p: "I Want You To Know",
              indexs: 10,
              pp:
                "Zedd&Selena Gomez&Pegato — I Want You To Know (Hella x Pegato Remix)",
            },
            {
              p: "一路向北",
              pp: "周杰伦 — J III MP3 Player",
              indexs: 11,
            },
            {
              p: "колыбельная",
              pp: "Rauf&Faik — колыбельная",
              indexs: 12,
            },
            {
              p: "美人鱼",
              pp: "林俊杰 — 第二天堂",
              indexs: 13,
            },
          ],
        },
        {
          top: "yinyue1",
          img: require("../../src/assets/images/bang/bang2.png"),
          p: "酷我热歌榜",
          content: "酷我最权威、播放量最高新歌尽在此榜～",

          songs: [
            {
              p: "点歌的人",
              pp: "海来阿木 — 点歌的人",
              indexs: 0,
            },
            {
              p: "兄弟想你了",
              pp: "姜鹏 — 江湖大道（完美篇）",
              indexs: 1,
            },
            {
              p: "此情一直在心间",
              pp: "花姐 — 此情一直在心间",
              indexs: 2,
            },
            {
              p: "周大侠",
              pp: "周杰伦 — 2007世界巡回演唱会",
              indexs: 3,
            },
            {
              p: "余香",
              pp: "张小九 — 余香",
              indexs: 4,
            },
            {
              p: "稻香",
              pp: "周杰伦&林俊杰",
              indexs: 5,
            },
            {
              p: "Ke Cap Gap Ba Gia",
              pp: "9妹 — Ke Cap Gap Ba Gia",
              indexs: 6,
            },
            {
              p: "你笑起来真好看",
              pp: "李佳莹 — 你笑起来真好看",
              indexs: 7,
            },
            {
              p: "信仰",
              pp: "张信哲 — 情歌精选",
              indexs: 8,
            },
            {
              p: "情难断",
              pp: "苏谭谭 — 情难断",
              indexs: 9,
            },
            {
              p: "I Want You To Know",
              indexs: 10,
              pp:
                "Zedd&Selena Gomez&Pegato — I Want You To Know (Hella x Pegato Remix)",
            },
            {
              p: "一路向北",
              pp: "周杰伦 — J III MP3 Player",
              indexs: 11,
            },
            {
              p: "колыбельная",
              pp: "Rauf&Faik — колыбельная",
              indexs: 12,
            },
            {
              p: "美人鱼",
              pp: "林俊杰 — 第二天堂",
              indexs: 13,
            },
          ],
        },
        {
          top: "yinyue2",
          img: require("../../src/assets/images/bang/bang3.png"),
          p: "酷我热歌榜",
          content: "整合酷我人气最旺好听单曲",

          songs: [
            {
              p: "点歌的人",
              pp: "海来阿木 — 点歌的人",
              indexs: 0,
            },
            {
              p: "兄弟想你了",
              pp: "姜鹏 — 江湖大道（完美篇）",
              indexs: 1,
            },
            {
              p: "此情一直在心间",
              pp: "花姐 — 此情一直在心间",
              indexs: 2,
            },
            {
              p: "周大侠",
              pp: "周杰伦 — 2007世界巡回演唱会",
              indexs: 3,
            },
            {
              p: "余香",
              pp: "张小九 — 余香",
              indexs: 4,
            },
            {
              p: "稻香",
              pp: "周杰伦&林俊杰",
              indexs: 5,
            },
            {
              p: "Ke Cap Gap Ba Gia",
              pp: "9妹 — Ke Cap Gap Ba Gia",
              indexs: 6,
            },
            {
              p: "你笑起来真好看",
              pp: "李佳莹 — 你笑起来真好看",
              indexs: 7,
            },
            {
              p: "信仰",
              pp: "张信哲 — 情歌精选",
              indexs: 8,
            },
            {
              p: "情难断",
              pp: "苏谭谭 — 情难断",
              indexs: 9,
            },
            {
              p: "I Want You To Know",
              indexs: 10,
              pp:
                "Zedd&Selena Gomez&Pegato — I Want You To Know (Hella x Pegato Remix)",
            },
            {
              p: "一路向北",
              pp: "周杰伦 — J III MP3 Player",
              indexs: 11,
            },
            {
              p: "колыбельная",
              pp: "Rauf&Faik — колыбельная",
              indexs: 12,
            },
            {
              p: "美人鱼",
              pp: "林俊杰 — 第二天堂",
              indexs: 13,
            },
          ],
        },
        {
          top: "yinyue3",
          img: require("../../src/assets/images/bang/bang4.png"),
          p: "抖音热歌榜",
          content: "最火最全的抖音热歌均在此榜",

          songs: [
            {
              p: "点歌的人",
              pp: "海来阿木 — 点歌的人",
              indexs: 0,
            },
            {
              p: "兄弟想你了",
              pp: "姜鹏 — 江湖大道（完美篇）",
              indexs: 1,
            },
            {
              p: "此情一直在心间",
              pp: "花姐 — 此情一直在心间",
              indexs: 2,
            },
            {
              p: "周大侠",
              pp: "周杰伦 — 2007世界巡回演唱会",
              indexs: 3,
            },
            {
              p: "余香",
              pp: "张小九 — 余香",
              indexs: 4,
            },
            {
              p: "稻香",
              pp: "周杰伦&林俊杰",
              indexs: 5,
            },
            {
              p: "Ke Cap Gap Ba Gia",
              pp: "9妹 — Ke Cap Gap Ba Gia",
              indexs: 6,
            },
            {
              p: "你笑起来真好看",
              pp: "李佳莹 — 你笑起来真好看",
              indexs: 7,
            },
            {
              p: "信仰",
              pp: "张信哲 — 情歌精选",
              indexs: 8,
            },
            {
              p: "情难断",
              pp: "苏谭谭 — 情难断",
              indexs: 9,
            },
            {
              p: "I Want You To Know",
              indexs: 10,
              pp:
                "Zedd&Selena Gomez&Pegato — I Want You To Know (Hella x Pegato Remix)",
            },
            {
              p: "一路向北",
              pp: "周杰伦 — J III MP3 Player",
              indexs: 11,
            },
            {
              p: "колыбельная",
              pp: "Rauf&Faik — колыбельная",
              indexs: 12,
            },
            {
              p: "美人鱼",
              pp: "林俊杰 — 第二天堂",
              indexs: 13,
            },
          ],
        },
        {
          top: "yinyue4",
          img: require("../../src/assets/images/bang/bang5.png"),
          p: "酷我热评榜",
          content: "  ",

          songs: [
            {
              p: "兄弟想你了",
              pp: "毛小国 — 兄弟想你了（越南语）",
              indexs: 0,
            },
            {
              p: "마리아",
              pp: "华莎 (화사) — María",
              indexs: 1,
            },
            {
              p: "海海海",
              pp: "阿悄 — 陪我去流浪",
              indexs: 2,
            },
            {
              p: "周大侠",
              pp: "周杰伦 — 2007世界巡回演唱会",
              indexs: 3,
            },
            {
              p: "余香",
              pp: "张小九 — 余香",
              indexs: 4,
            },
            {
              p: "稻香",
              pp: "周杰伦&林俊杰",
              indexs: 5,
            },
            {
              p: "Ke Cap Gap Ba Gia",
              pp: "9妹 — Ke Cap Gap Ba Gia",
              indexs: 6,
            },
            {
              p: "你笑起来真好看",
              pp: "李佳莹 — 你笑起来真好看",
              indexs: 7,
            },
            {
              p: "信仰",
              pp: "张信哲 — 情歌精选",
              indexs: 8,
            },
            {
              p: "情难断",
              pp: "苏谭谭 — 情难断",
              indexs: 9,
            },
            {
              p: "I Want You To Know",
              indexs: 10,
              pp:
                "Zedd&Selena Gomez&Pegato — I Want You To Know (Hella x Pegato Remix)",
            },
            {
              p: "一路向北",
              pp: "周杰伦 — J III MP3 Player",
              indexs: 11,
            },
            {
              p: "колыбельная",
              pp: "Rauf&Faik — колыбельная",
              indexs: 12,
            },
            {
              p: "美人鱼",
              pp: "林俊杰 — 第二天堂",
              indexs: 13,
            },
          ],
        },
        {
          top: "yinyue5",
          img: require("../../src/assets/images/bang/bang6.png"),
          p: "ACG新歌榜",
          content: "  ",

          songs: [
            {
              p: "兄弟想你了",
              pp: "毛小国 — 兄弟想你了（越南语）",
              indexs: 0,
            },
            {
              p: "마리아",
              pp: "华莎 (화사) — María",
              indexs: 1,
            },
            {
              p: "海海海",
              pp: "阿悄 — 陪我去流浪",
              indexs: 2,
            },
            {
              p: "周大侠",
              pp: "周杰伦 — 2007世界巡回演唱会",
              indexs: 3,
            },
            {
              p: "余香",
              pp: "张小九 — 余香",
              indexs: 4,
            },
            {
              p: "稻香",
              pp: "周杰伦&林俊杰",
              indexs: 5,
            },
            {
              p: "Ke Cap Gap Ba Gia",
              pp: "9妹 — Ke Cap Gap Ba Gia",
              indexs: 6,
            },
            {
              p: "你笑起来真好看",
              pp: "李佳莹 — 你笑起来真好看",
              indexs: 7,
            },
            {
              p: "信仰",
              pp: "张信哲 — 情歌精选",
              indexs: 8,
            },
            {
              p: "情难断",
              pp: "苏谭谭 — 情难断",
              indexs: 9,
            },
            {
              p: "I Want You To Know",
              indexs: 10,
              pp:
                "Zedd&Selena Gomez&Pegato — I Want You To Know (Hella x Pegato Remix)",
            },
            {
              p: "一路向北",
              pp: "周杰伦 — J III MP3 Player",
              indexs: 11,
            },
            {
              p: "колыбельная",
              pp: "Rauf&Faik — колыбельная",
              indexs: 12,
            },
            {
              p: "美人鱼",
              pp: "林俊杰 — 第二天堂",
              indexs: 13,
            },
          ],
        },
        {
          top: "yinyue6",
          img: require("../../src/assets/images/bang/bang7.png"),
          p: "台湾KKBOX榜",
          content: "  ",

          songs: [
            {
              p: "兄弟想你了",
              pp: "毛小国 — 兄弟想你了（越南语）",
              indexs: 0,
            },
            {
              p: "마리아",
              pp: "华莎 (화사) — María",
              indexs: 1,
            },
            {
              p: "海海海",
              pp: "阿悄 — 陪我去流浪",
              indexs: 2,
            },
            {
              p: "周大侠",
              pp: "周杰伦 — 2007世界巡回演唱会",
              indexs: 3,
            },
            {
              p: "余香",
              pp: "张小九 — 余香",
              indexs: 4,
            },
            {
              p: "稻香",
              pp: "周杰伦&林俊杰",
              indexs: 5,
            },
            {
              p: "Ke Cap Gap Ba Gia",
              pp: "9妹 — Ke Cap Gap Ba Gia",
              indexs: 6,
            },
            {
              p: "你笑起来真好看",
              pp: "李佳莹 — 你笑起来真好看",
              indexs: 7,
            },
            {
              p: "信仰",
              pp: "张信哲 — 情歌精选",
              indexs: 8,
            },
            {
              p: "情难断",
              pp: "苏谭谭 — 情难断",
              indexs: 9,
            },
            {
              p: "I Want You To Know",
              indexs: 10,
              pp:
                "Zedd&Selena Gomez&Pegato — I Want You To Know (Hella x Pegato Remix)",
            },
            {
              p: "一路向北",
              pp: "周杰伦 — J III MP3 Player",
              indexs: 11,
            },
            {
              p: "колыбельная",
              pp: "Rauf&Faik — колыбельная",
              indexs: 12,
            },
            {
              p: "美人鱼",
              pp: "林俊杰 — 第二天堂",
              indexs: 13,
            },
          ],
        },
        {
          top: "yinyue7",
          img: require("../../src/assets/images/bang/bang8.png"),
          p: "夏日节拍榜",
          content: "  ",
          songs: [
            {
              p: "兄弟想你了",
              pp: "毛小国 — 兄弟想你了（越南语）",
              indexs: 0,
            },
            {
              p: "마리아",
              pp: "华莎 (화사) — María",
              indexs: 1,
            },
            {
              p: "海海海",
              pp: "阿悄 — 陪我去流浪",
              indexs: 2,
            },
            {
              p: "周大侠",
              pp: "周杰伦 — 2007世界巡回演唱会",
              indexs: 3,
            },
            {
              p: "余香",
              pp: "张小九 — 余香",
              indexs: 4,
            },
            {
              p: "稻香",
              pp: "周杰伦&林俊杰",
              indexs: 5,
            },
            {
              p: "Ke Cap Gap Ba Gia",
              pp: "9妹 — Ke Cap Gap Ba Gia",
              indexs: 6,
            },
            {
              p: "你笑起来真好看",
              pp: "李佳莹 — 你笑起来真好看",
              indexs: 7,
            },
            {
              p: "信仰",
              pp: "张信哲 — 情歌精选",
              indexs: 8,
            },
            {
              p: "情难断",
              pp: "苏谭谭 — 情难断",
              indexs: 9,
            },
            {
              p: "I Want You To Know",
              indexs: 10,
              pp:
                "Zedd&Selena Gomez&Pegato — I Want You To Know (Hella x Pegato Remix)",
            },
            {
              p: "一路向北",
              pp: "周杰伦 — J III MP3 Player",
              indexs: 11,
            },
            {
              p: "колыбельная",
              pp: "Rauf&Faik — колыбельная",
              indexs: 12,
            },
            {
              p: "美人鱼",
              pp: "林俊杰 — 第二天堂",
              indexs: 13,
            },
          ],
        },
        {
          top: "yinyue8",
          img: require("../../src/assets/images/bang/bang9.png"),
          p: "巴士随身听榜",
          content: "  ",
          songs: [
            {
              p: "兄弟想你了",
              pp: "毛小国 — 兄弟想你了（越南语）",
              indexs: 0,
            },
            {
              p: "마리아",
              pp: "华莎 (화사) — María",
              indexs: 1,
            },
            {
              p: "海海海",
              pp: "阿悄 — 陪我去流浪",
              indexs: 2,
            },
            {
              p: "周大侠",
              pp: "周杰伦 — 2007世界巡回演唱会",
              indexs: 3,
            },
            {
              p: "余香",
              pp: "张小九 — 余香",
              indexs: 4,
            },
            {
              p: "稻香",
              pp: "周杰伦&林俊杰",
              indexs: 5,
            },
            {
              p: "Ke Cap Gap Ba Gia",
              pp: "9妹 — Ke Cap Gap Ba Gia",
              indexs: 6,
            },
            {
              p: "你笑起来真好看",
              pp: "李佳莹 — 你笑起来真好看",
              indexs: 7,
            },
            {
              p: "信仰",
              pp: "张信哲 — 情歌精选",
              indexs: 8,
            },
            {
              p: "情难断",
              pp: "苏谭谭 — 情难断",
              indexs: 9,
            },
            {
              p: "I Want You To Know",
              indexs: 10,
              pp:
                "Zedd&Selena Gomez&Pegato — I Want You To Know (Hella x Pegato Remix)",
            },
            {
              p: "一路向北",
              pp: "周杰伦 — J III MP3 Player",
              indexs: 11,
            },
            {
              p: "колыбельная",
              pp: "Rauf&Faik — колыбельная",
              indexs: 12,
            },
            {
              p: "美人鱼",
              pp: "林俊杰 — 第二天堂",
              indexs: 13,
            },
          ],
        },
        {
          top: "yinyue9",
          img: require("../../src/assets/images/bang/bang10.png"),
          p: "KTV点唱榜",
          content: "  ",

          songs: [
            {
              p: "兄弟想你了",
              pp: "毛小国 — 兄弟想你了（越南语）",
              indexs: 0,
            },
            {
              p: "마리아",
              pp: "华莎 (화사) — María",
              indexs: 1,
            },
            {
              p: "海海海",
              pp: "阿悄 — 陪我去流浪",
              indexs: 2,
            },
            {
              p: "周大侠",
              pp: "周杰伦 — 2007世界巡回演唱会",
              indexs: 3,
            },
            {
              p: "余香",
              pp: "张小九 — 余香",
              indexs: 4,
            },
            {
              p: "稻香",
              pp: "周杰伦&林俊杰",
              indexs: 5,
            },
            {
              p: "Ke Cap Gap Ba Gia",
              pp: "9妹 — Ke Cap Gap Ba Gia",
              indexs: 6,
            },
            {
              p: "你笑起来真好看",
              pp: "李佳莹 — 你笑起来真好看",
              indexs: 7,
            },
            {
              p: "信仰",
              pp: "张信哲 — 情歌精选",
              indexs: 8,
            },
            {
              p: "情难断",
              pp: "苏谭谭 — 情难断",
              indexs: 9,
            },
            {
              p: "I Want You To Know",
              indexs: 10,
              pp:
                "Zedd&Selena Gomez&Pegato — I Want You To Know (Hella x Pegato Remix)",
            },
            {
              p: "一路向北",
              pp: "周杰伦 — J III MP3 Player",
              indexs: 11,
            },
            {
              p: "колыбельная",
              pp: "Rauf&Faik — колыбельная",
              indexs: 12,
            },
            {
              p: "美人鱼",
              pp: "林俊杰 — 第二天堂",
              indexs: 13,
            },
          ],
        },
        {
          top: "yinyue",
          img: require("../../src/assets/images/bang/bang11.png"),
          p: "家务进行曲榜",
          content: "  ",

          songs: [
            {
              p: "兄弟想你了",
              pp: "毛小国 — 兄弟想你了（越南语）",
              indexs: 0,
            },
            {
              p: "마리아",
              pp: "华莎 (화사) — María",
              indexs: 1,
            },
            {
              p: "海海海",
              pp: "阿悄 — 陪我去流浪",
              indexs: 2,
            },
            {
              p: "周大侠",
              pp: "周杰伦 — 2007世界巡回演唱会",
              indexs: 3,
            },
            {
              p: "余香",
              pp: "张小九 — 余香",
              indexs: 4,
            },
            {
              p: "稻香",
              pp: "周杰伦&林俊杰",
              indexs: 5,
            },
            {
              p: "Ke Cap Gap Ba Gia",
              pp: "9妹 — Ke Cap Gap Ba Gia",
              indexs: 6,
            },
            {
              p: "你笑起来真好看",
              pp: "李佳莹 — 你笑起来真好看",
              indexs: 7,
            },
            {
              p: "信仰",
              pp: "张信哲 — 情歌精选",
              indexs: 8,
            },
            {
              p: "情难断",
              pp: "苏谭谭 — 情难断",
              indexs: 9,
            },
            {
              p: "I Want You To Know",
              indexs: 10,
              pp:
                "Zedd&Selena Gomez&Pegato — I Want You To Know (Hella x Pegato Remix)",
            },
            {
              p: "一路向北",
              pp: "周杰伦 — J III MP3 Player",
              indexs: 11,
            },
            {
              p: "колыбельная",
              pp: "Rauf&Faik — колыбельная",
              indexs: 12,
            },
            {
              p: "美人鱼",
              pp: "林俊杰 — 第二天堂",
              indexs: 13,
            },
          ],
        },
        {
          top: "yinyue3",
          img: require("../../src/assets/images/bang/bang12.png"),
          p: "熬夜修仙榜",
          content: "  ",

          songs: [
            {
              p: "兄弟想你了",
              pp: "毛小国 — 兄弟想你了（越南语）",
              indexs: 0,
            },
            {
              p: "마리아",
              pp: "华莎 (화사) — María",
              indexs: 1,
            },
            {
              p: "海海海",
              pp: "阿悄 — 陪我去流浪",
              indexs: 2,
            },
            {
              indexs: 3,
              p: "周大侠",
              pp: "周杰伦 — 2007世界巡回演唱会",
            },
            {
              p: "余香",
              pp: "张小九 — 余香",
              indexs: 4,
            },
            {
              p: "稻香",
              pp: "周杰伦&林俊杰",
              indexs: 5,
            },
            {
              p: "Ke Cap Gap Ba Gia",
              pp: "9妹 — Ke Cap Gap Ba Gia",
              indexs: 6,
            },
            {
              p: "你笑起来真好看",
              pp: "李佳莹 — 你笑起来真好看",
              indexs: 7,
            },
            {
              p: "信仰",
              pp: "张信哲 — 情歌精选",
              indexs: 8,
            },
            {
              p: "情难断",
              pp: "苏谭谭 — 情难断",
              indexs: 9,
            },
            {
              p: "I Want You To Know",
              indexs: 10,
              pp:
                "Zedd&Selena Gomez&Pegato — I Want You To Know (Hella x Pegato Remix)",
            },
            {
              p: "一路向北",
              pp: "周杰伦 — J III MP3 Player",
              indexs: 11,
            },
            {
              p: "колыбельная",
              pp: "Rauf&Faik — колыбельная",
              indexs: 12,
            },
            {
              p: "美人鱼",
              pp: "林俊杰 — 第二天堂",
              indexs: 13,
            },
          ],
        },
        {
          top: "yinyue",
          img: require("../../src/assets/images/bang/bang13.png"),
          p: "枕边轻音乐榜",
          content: "  ",

          songs: [
            {
              p: "兄弟想你了",
              pp: "毛小国 — 兄弟想你了（越南语）",
              indexs: 0,
            },
            {
              p: "마리아",
              pp: "华莎 (화사) — María",
              indexs: 1,
            },
            {
              p: "海海海",
              pp: "阿悄 — 陪我去流浪",
              indexs: 2,
            },
            {
              p: "周大侠",
              pp: "周杰伦 — 2007世界巡回演唱会",
              indexs: 3,
            },
            {
              p: "余香",
              pp: "张小九 — 余香",
              indexs: 4,
            },
            {
              p: "稻香",
              pp: "周杰伦&林俊杰",
              indexs: 5,
            },
            {
              p: "Ke Cap Gap Ba Gia",
              pp: "9妹 — Ke Cap Gap Ba Gia",
              indexs: 6,
            },
            {
              p: "你笑起来真好看",
              pp: "李佳莹 — 你笑起来真好看",
              indexs: 7,
            },
            {
              p: "信仰",
              pp: "张信哲 — 情歌精选",
              indexs: 8,
            },
            {
              p: "情难断",
              pp: "苏谭谭 — 情难断",
              indexs: 9,
            },
            {
              p: "I Want You To Know",
              indexs: 10,
              pp:
                "Zedd&Selena Gomez&Pegato — I Want You To Know (Hella x Pegato Remix)",
            },
            {
              p: "一路向北",
              pp: "周杰伦 — J III MP3 Player",
              indexs: 11,
            },
            {
              p: "колыбельная",
              pp: "Rauf&Faik — колыбельная",
              indexs: 12,
            },
            {
              p: "美人鱼",
              pp: "林俊杰 — 第二天堂",
              indexs: 13,
            },
          ],
        },
        {
          top: "yinyue",
          img: require("../../src/assets/images/bang/bang14.png"),
          p: "古风音乐榜",
          content: "  ",

          songs: [
            {
              p: "兄弟想你了",
              pp: "毛小国 — 兄弟想你了（越南语）",
              indexs: 0,
            },
            {
              p: "마리아",
              pp: "华莎 (화사) — María",
              indexs: 1,
            },
            {
              p: "海海海",
              pp: "阿悄 — 陪我去流浪",
              indexs: 2,
            },
            {
              p: "周大侠",
              pp: "周杰伦 — 2007世界巡回演唱会",
              indexs: 3,
            },
            {
              p: "余香",
              pp: "张小九 — 余香",
              indexs: 4,
            },
            {
              p: "稻香",
              pp: "周杰伦&林俊杰",
              indexs: 5,
            },
            {
              p: "Ke Cap Gap Ba Gia",
              pp: "9妹 — Ke Cap Gap Ba Gia",
              indexs: 6,
            },
            {
              p: "你笑起来真好看",
              pp: "李佳莹 — 你笑起来真好看",
              indexs: 7,
            },
            {
              p: "信仰",
              pp: "张信哲 — 情歌精选",
              indexs: 8,
            },
            {
              p: "情难断",
              pp: "苏谭谭 — 情难断",
              indexs: 9,
            },
            {
              p: "I Want You To Know",
              indexs: 10,
              pp:
                "Zedd&Selena Gomez&Pegato — I Want You To Know (Hella x Pegato Remix)",
            },
            {
              p: "一路向北",
              pp: "周杰伦 — J III MP3 Player",
              indexs: 11,
            },
            {
              p: "колыбельная",
              pp: "Rauf&Faik — колыбельная",
              indexs: 12,
            },
            {
              p: "美人鱼",
              pp: "林俊杰 — 第二天堂",
              indexs: 13,
            },
          ],
        },
        {
          top: "yinyue1",
          img: require("../../src/assets/images/bang/bang15.png"),
          p: "Vlog音乐榜",
          content: "  ",

          songs: [
            {
              indexs: 0,
              p: "兄弟想你了",
              pp: "毛小国 — 兄弟想你了（越南语）",
            },
            {
              p: "마리아",
              indexs: 1,
              pp: "华莎 (화사) — María",
            },
            {
              p: "海海海",
              pp: "阿悄 — 陪我去流浪",
              indexs: 2,
            },
            {
              p: "周大侠",
              pp: "周杰伦 — 2007世界巡回演唱会",
              indexs: 3,
            },
            {
              p: "余香",
              pp: "张小九 — 余香",
              indexs: 4,
            },
            {
              p: "稻香",
              pp: "周杰伦&林俊杰",
              indexs: 5,
            },
            {
              p: "Ke Cap Gap Ba Gia",
              pp: "9妹 — Ke Cap Gap Ba Gia",
              indexs: 6,
            },
            {
              p: "你笑起来真好看",
              pp: "李佳莹 — 你笑起来真好看",
              indexs: 7,
            },
            {
              p: "信仰",
              pp: "张信哲 — 情歌精选",
              indexs: 8,
            },
            {
              p: "情难断",
              pp: "苏谭谭 — 情难断",
              indexs: 9,
            },
            {
              p: "I Want You To Know",
              indexs: 10,
              pp:
                "Zedd&Selena Gomez&Pegato — I Want You To Know (Hella x Pegato Remix)",
            },
            {
              p: "一路向北",
              pp: "周杰伦 — J III MP3 Player",
              indexs: 11,
            },
            {
              p: "колыбельная",
              pp: "Rauf&Faik — колыбельная",
              indexs: 12,
            },
            {
              p: "美人鱼",
              pp: "林俊杰 — 第二天堂",
              indexs: 13,
            },
          ],
        },
      ],
    };
  },
  methods: {
    getbang(z) {
      this.$store.commit("top", z);
    },
  },
};
</script>
<style scoped>
i {
  color: black;
  font-style: normal;
  overflow: hidden;
  display: block;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
}
.imgs {
  width: 80%;
  left: 7%;
  position: absolute;
}
div {
  padding: 0 0.8%;
  overflow: hidden;
}
ul li {
  text-align: center;
  position: relative;
  margin-top: 5%;
  margin-bottom: 1.8%;
  float: left;
  width: 30%;
}
ul li:nth-of-type(3n + 2) {
  text-align: center;
  padding-left: 5.5%;
}
ul li:nth-of-type(3n) {
  float: right;
}
</style>