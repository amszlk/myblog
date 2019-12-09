<template>
  <div>
    <div class="music-title">
      <h3>轩轩吖的歌单</h3>
    </div>
    <div class="music-opr">
      <div class="music-songinfo">
        <i class="icon iconfont icon-liushengji"></i>
        <p>{{songName}}-{{singerName}}</p>


      </div>

      <div class="progress-div">
<p style=" color: #82848A;text-align: right; font-size: 8px;">{{currentTime}}/{{duration}}</p>
        <div style="width: 100%;">
        <el-progress  :percentage="percent" :format="format" :show-text="isShowText"></el-progress>

      </div>
        <audio ref="audio" :src="msg" autoplay="true" id="aud" @canplay="readyPlay" @loadeddata="getDuration" @error="errorMsg" @timeupdate="updateTime"></audio>
      </div>
      <div>
        <i class="icon iconfont icon-shangyishou" @click="btnLast()"></i>
        <i class="icon iconfont icon-bofang1" @click="play()"></i>
        <i class="icon iconfont icon-xiayishou" @click="btnNext()" ></i>
      </div>
      <div style="display: flex;">
        <el-tabs :value="activeIndex+''" :tab-position="tabPosition" @tab-click="onTabSelected"   >
            <el-tab-pane v-for="(item,index) in songNames" :key="item" :name="index+''" :label="index+1+'、'+item" class="songName" ></el-tab-pane>
          </el-tabs>
      </div>

    </div>

  </div>
</template>

<script>
  export default {
    name: 'MyMusic',
    data() {
      return {
        tabPosition:'right',
        songNames :['缘分', '女人花', '梦醒时分', '挪威的森林', '喜欢你', '海阔天空', '大海', '下一站美好', '恋曲1990'],
        singerNames :['陈瑞', '梅艳芳', '伍佰', '伍佰', 'Beyond', 'Beyond', '张雨生', '许鹤缤', '罗大佑'],
        songUrls: [require("@/assets/audios/缘分.mp3"),
          require("@/assets/audios/女人花.mp3"),
         require("@/assets/audios/梦醒时分.mp3"),
          require("@/assets/audios/挪威森林.mp3"),
          require("@/assets/audios/喜欢你.mp3"),
          require("@/assets/audios/海阔天空.mp3"),
       require("@/assets/audios/大海.mp3"),
          require("@/assets/audios/下一站美好.mp3"),
         require("@/assets/audios/恋曲1990.mp3"),
        ],
        msg: require("@/assets/audios/缘分.mp3"),
        isShowText: false,
        songName: "缘分",
        singerName:'陈瑞',
        currentTime: 0,
        duration: 0,
        percent:0,
        currenttime:0,
        totaltime:0,
        activeIndex:0
      }
    },
    methods: {
      btnLast(){
        if(this.activeIndex==0){
         this.activeIndex=this.songNames.length-1
        }else{
           this.activeIndex--
        }

 this.$refs.audio.pause()
 this.msg=this.songUrls[this.activeIndex]
 this.songName=this.songNames[this.activeIndex]
 this.singerName=this.singerNames[this.activeIndex]
 this.$refs.audio.play()
      },
      btnNext(){
        if(this.activeIndex==this.songNames.length-1){
         this.activeIndex=0
        }else{
           this.activeIndex++
        }

        this.$refs.audio.pause()
        this.msg=this.songUrls[this.activeIndex]
        this.songName=this.songNames[this.activeIndex]
        this.singerName=this.singerNames[this.activeIndex]
        this.$refs.audio.play()
      },
      play(){
         this.$refs.audio.play()
      },
         readyPlay(){

         },
      getDuration() {

      //此时可以获取到duration
        this.totaltime=this.$refs.audio.duration
        this.duration =this.s2mands(this.$refs.audio.duration)
         this.$refs.audio.play()
      },
      updateTime(e) {
        this.currenttime=e.target.currentTime
        this.currentTime =this.s2mands( e.target.currentTime)//获取audio当前播放时间
        this.percent=this.currenttime/this.totaltime*100
      },
      errorMsg() {
        alert("Error! 出错了");
      },
      onTabSelected(tab,envent){
          this.$refs.audio.pause()
          this.msg=this.songUrls[tab.index]
          this.songName=this.songNames[tab.index]
          this.singerName=this.singerNames[tab.index]
          this.$refs.audio.play()
      },
      s2mands(time){
       var s= parseInt(time)
       var result=""
          if(s<60){
            return "0:"+s
          }else {
            return parseInt(s/60)+":"+s%60
          }
      },
      format(percentage) {
              return this.currentTime+"/"+this.duration ;
            },
    },


  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  .wrap {
    width: 300px;
    margin: 50px auto 0;
  }

  button {
    font-size: 25px;
  }

  #btnNext {
    float: right;
  }

  #mlist {
    width: 300px;
    background: #ccc;
    border: 1px solid #666;
    border-radius: 10px;
    overflow: hidden;
    margin-top: 10px;
  }

  #mlist li {
    font-size: 24px;
    color: blue;
    line-height: 40px;
    border-bottom: 1px solid #666;
    padding-left: 5px;
  }

  #mlist li:last-child {
    border-bottom: none;
  }

  #mlist li:hover {
    color: red;
  }

  #mlist .play {
    background: pink;
  }

  .music-title {
    padding-left: 1vw;
    color: #04bbfb;
    display: flex;
  }

  .music-title h3 {
    color: #04bbfb;
    display: inline-block;
  }

  .music-title i {
    color: #04bbfb;
    width: 30px;
    height: 30px;

    vertical-align: middle;
  }

  .music-opr {}

  .music-opr i {
    font-size: 3.125rem;

    color: #04bbfb;

  }

  .music-songinfo {
    display: flex;
    padding-left: 1vw;

  }
  .el-tabs__item{
    text-align: left;
  }

  .music-songinfo p {

    vertical-align: middle;

  }

  .music-songinfo i {

    vertical-align: middle;
  }

  .progress-div {
   width: 100%;

    padding-left: 1vw;
    padding-right: 1vw;
  }

</style>
