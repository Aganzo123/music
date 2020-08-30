 <template>
  <div class="fixed">
    <ol>
      <li>
        <ul>
          <li>我的消息 <span></span> </li>
          <li>会员中心<span></span></li>
          <li>商城<span></span></li>
          <li>在线听歌免流量<span></span></li>
        </ul>
      </li>
      <li>
        <ul>
          <li>我的好友<span></span></li>
          <li>附近的人<span></span></li>
        </ul>
      </li>
      <li>
        <ul>
          <li>个性换肤<span></span></li>
          <li>听歌识曲<span></span></li>
          <li>定时停止播放<span></span></li>
          <li>扫一扫<span></span></li>
          <li>音乐闹钟<span></span></li>
          <li>驾驶模式<span></span></li>
          <li>音乐云盘<span></span></li>
        </ul>
      </li>
    </ol>
  </div>
</template>
    <style scoped>
ol {
  
  overflow-y: auto;
}
ol > li {
  border-bottom: 9px solid rgba(128, 128, 128, 0.178);
}
li {
  width: 100%;
  line-height: 6vh;
  overflow: hidden;
}
span{
    transform: scale(0.8);
    width: 25px;
    height: 37px;
  background: url(../../src/assets/images/index/arrow_r.png) no-repeat;

    float: right;
}
</style>