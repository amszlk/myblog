<template>
  <div id="app">

    <el-card :body-style="{ padding: '10px', width: '100%', height:'6vh'}">
      <el-row>
        <el-col :span='3'>
          <div style='color:#fff;'>aaa</div>
        </el-col>
        <el-col :span='3'>
          <div id='logo'>
            <img id="headpic" src='./assets/image/logo.jpg' />
            <span class="nickname">轩轩吖的博客</span>
          </div>
        </el-col>
        <el-col :span='11'>
          <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect"
            text-color="#909399" active-text-color="#409EFF">
            <el-menu-item index="1" class="menu_item">首页</el-menu-item>
            <el-menu-item index="2" class="menu_item">两个小时摆脱Java小白</el-menu-item>
            <el-menu-item index="3" class="menu_item">Android适配</el-menu-item>
            <el-menu-item index="4" class="menu_item">Flutter</el-menu-item>
            <el-menu-item index="5" class="menu_item">Kotlin</el-menu-item>
            <el-menu-item index="6" class="menu_item">归档</el-menu-item>
          </el-menu>

        </el-col>
        <el-col :span='3'>
          <div id='search'>
            <el-input v-model="searchcontent" placeholder="请输入内容" style="float:right"></el-input>
          </div>
        </el-col>
        <el-col :span='2'>
          <div id='search'>
            <el-button type="primary" icon="el-icon-search">搜索</el-button>

          </div>
        </el-col>
        <el-col :span='2'>


          <div style='color:#fff;'>aaa</div>
        </el-col>
      </el-row>
    </el-card>
    <div style="margin-top:2vh;">
      <el-row>
        <el-col :span='3'>
          <div style='color:#fff;'>aaa</div>
        </el-col>

        <el-col :span='3'>

          <el-card :body-style="{padding: '10px', width: '100%', height:'75vh'}">
            <div>
              <img id="opencode" src='./assets/image/opencode.jpg' />
              <div style="margin-top:2vh;">
                <el-link :underline="false" type="info">轩轩吖的公众号</el-link>
                <div style="margin-top:2vh;">
                  <el-button type="primary">扫面二维码关注我哦</el-button>
                </div>

              </div>
              <img id="wechatcode" src='./assets/image/wechatcode.png' />
              <el-link :underline="false" type="info">加入我们的小圈子一起学习！</el-link>
            </div>

          </el-card>

        </el-col>
        <el-col :span='10'>
          <div style="margin-left: 1vw;">
            <router-view />
          </div>
        </el-col>
        <el-col :span='5'>
          <el-card class='myinfo'>
            <p>
              近期文章
            </p>
            <div>

              <el-tag>标签一</el-tag>
              <el-tag type="success">标签二</el-tag>
              <el-tag type="info">标签三</el-tag>
              <el-tag type="warning">标签四</el-tag>
              <el-tag type="danger">标签五</el-tag>
              <el-tag>标签一</el-tag>
              <el-tag type="success">标签二</el-tag>
              <el-tag type="info">标签三</el-tag>
              <el-tag type="warning">标签四</el-tag>
              <el-tag type="danger">标签五</el-tag>
              <el-tag>标签一</el-tag>
              <el-tag type="success">标签二</el-tag>

            </div>
          </el-card>
            <el-card class="mylink">
              <table style="width=100%">
                <tr>
                  <th > <a href="https://me.csdn.net/hgj0202"><i class="icon iconfont icon-csdn" aria-hidden="true"></i></a></th>
                 <th > <a href="https://juejin.im/user/5cd10cf451882535aa5ca7f5"><i  class="icon iconfont icon-juejin1" aria-hidden="true"></i></a></th>
                  <th > <a href="https://juejin.im/user/5cd10cf451882535aa5ca7f5"><i class="icon iconfont icon-git" aria-hidden="true"></i></a></th>
                </tr>

              </table>
            </el-card>
           <music></music>


        </el-col>

        <el-col :span='2'>
          <div style='color:#fff;'>aaa</div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
  var songNames = ['缘分', '女人花', '梦醒时分', '挪威的森林', '喜欢你', '海阔天空', '大海', '下一站美好', '恋曲1990']
  var singerNames = ['陈瑞', '梅艳芳', '伍佰', '伍佰', 'Beyond', 'Beyond', '张雨生', '许鹤缤', '罗大佑']
  var songurl = [
    'http://m10.music.126.net/20191207225605/1f23a01dc0312239e67faad744da886d/ymusic/87ce/e3a3/f8f3/f1ae90ca31cf5c1ac1cd7ed9f9ffafcc.mp3',
    'http://m10.music.126.net/20191207225416/2a2187f6ec3cdfb8005c1b89e1e5d728/ymusic/b489/e92d/6eac/870d26c98965928e7ab30671f20f8a51.mp3',
    'http://m10.music.126.net/20191207225726/e4f972c4da3334c7fadb40e78ded05fa/ymusic/767c/af5d/bfd3/d160bb7154c25a2467e8949306ac7628.mp3',
    'http://m10.music.126.net/20191207225801/071e6fd6e16a15c87f791266352e3e20/ymusic/525b/525e/0e58/e14ac6b79fe4436c5b4192b58cc720bc.mp3',
    'http://m10.music.126.net/20191207225840/4ceea97dec744ada8680ab23eca9a785/ymusic/efb8/9e3e/5151/ceb3e57b6812c3167751add1977cd6dc.mp3',
    'http://m10.music.126.net/20191207225911/d2f7e4db749296fa5ecba91e05ce2628/ymusic/b1c4/b5de/74d0/9158ae4873e10b743790320db9ef9b29.mp3',
    'http://m10.music.126.net/20191207225934/3c17e58333be6c8487ec19644b795582/ymusic/525c/0253/5509/e6ba5bb1ac5937edcc8dbccd1c9761cf.mp3',
    'http://m10.music.126.net/20191207230000/a83629e0f63a94c96fe4572dcf0a1814/ymusic/6e56/bb14/6773/b8d2756ea15a831170bf4bbcd3c9c783.mp3',
    'http://m10.music.126.net/20191207230106/7d154cd20b2bf0f47d7ae5624a755f21/ymusic/530b/0758/530c/da46adb83702d763454fdf4643dca4bb.mp3'
  ]
  var albumpic_small = ['', '', '', '', '', '', '', '', '', '', '', '']

  // var songNames=['缘分','女人花','梦醒时分','挪威的森林','喜欢你','海阔天空','大海','下一站美好','恋曲1990']
  // var singerNames=['陈瑞','梅艳芳','伍佰','伍佰','Beyond','Beyond','张雨生','许鹤缤','罗大佑']
  // var songurl=['http://m10.music.126.net/20191207225605/1f23a01dc0312239e67faad744da886d/ymusic/87ce/e3a3/f8f3/f1ae90ca31cf5c1ac1cd7ed9f9ffafcc.mp3',
  // 'http://m10.music.126.net/20191207225416/2a2187f6ec3cdfb8005c1b89e1e5d728/ymusic/b489/e92d/6eac/870d26c98965928e7ab30671f20f8a51.mp3',
  // 'http://m10.music.126.net/20191207225726/e4f972c4da3334c7fadb40e78ded05fa/ymusic/767c/af5d/bfd3/d160bb7154c25a2467e8949306ac7628.mp3',
  // 'http://m10.music.126.net/20191207225801/071e6fd6e16a15c87f791266352e3e20/ymusic/525b/525e/0e58/e14ac6b79fe4436c5b4192b58cc720bc.mp3',
  // 'http://m10.music.126.net/20191207225840/4ceea97dec744ada8680ab23eca9a785/ymusic/efb8/9e3e/5151/ceb3e57b6812c3167751add1977cd6dc.mp3',
  // 'http://m10.music.126.net/20191207225911/d2f7e4db749296fa5ecba91e05ce2628/ymusic/b1c4/b5de/74d0/9158ae4873e10b743790320db9ef9b29.mp3',
  // 'http://m10.music.126.net/20191207225934/3c17e58333be6c8487ec19644b795582/ymusic/525c/0253/5509/e6ba5bb1ac5937edcc8dbccd1c9761cf.mp3',
  // 'http://m10.music.126.net/20191207230000/a83629e0f63a94c96fe4572dcf0a1814/ymusic/6e56/bb14/6773/b8d2756ea15a831170bf4bbcd3c9c783.mp3',
  // 'http://m10.music.126.net/20191207230106/7d154cd20b2bf0f47d7ae5624a755f21/ymusic/530b/0758/530c/da46adb83702d763454fdf4643dca4bb.mp3'
  // ]
  import music from '@/components/MyMusic'
  export default {
    name: 'App',
    components:{
      music
    },
    data() {
      return {
        showlrc: '3',
        flag: false,
        searchcontent: '',
        activeIndex: '1',
        songUrl: './assets/audios/缘分.mp3',
        songIndex: '0',
        headpicurl: './assets/image/logo.jpg',
        mypicurl: 'http://b265.photo.store.qq.com/psb?/V13yXPZ83zk9sL/Kav9IG0thEvsaQrslIhRQMTKIxnCF8rrmEmji4KVWlA!/b/dAkBAAAAAAAA&bo=4AG0AQAAAAAFB3A!&rf=viewer_4',
        srcList: [
          'http://b265.photo.store.qq.com/psb?/V13yXPZ83zk9sL/Kav9IG0thEvsaQrslIhRQMTKIxnCF8rrmEmji4KVWlA!/b/dAkBAAAAAAAA&bo=4AG0AQAAAAAFB3A!&rf=viewer_4'
        ],
        musicList: '',
        songList: [],
        songNames: ['缘分', '女人花', '梦醒时分', '挪威森林', '喜欢你', '海阔天空', '大海', '下一站美好', '恋曲1990'],
        singerNames: ['陈瑞', '梅艳芳', '伍佰', '伍佰', 'Beyond', 'Beyond', '张雨生', '许鹤缤', '罗大佑'],
        
        songUrls: ['./assets/audios/缘分.mp3',
          './assets/audios/女人花.mp3',
          './assets/audios/梦醒时分.mp3',
          './assets/audios/挪威森林.mp3',
          './assets/audios/喜欢你.mp3',
          './assets/audios/海阔天空.mp3',
          './assets/audios/大海.mp3',
          './assets/audios/下一站美好.mp3',
          './assets/audios/恋曲1990.mp3',
        ]
      }
    },
    mounted() {
      //异步加载，先加载出player再使用
      this.initMusic();
      // let aplayer = this.$refs.player.control;
      // aplayer.play();
    },

    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      },

      initMusic() {

        //以下就是这边对请求的一个处理，看接口了


        for (let i = 0; i < 8; i++) {

          let obj = {};
          //url=>歌曲地址 title=>头部 author=>歌手 pic=>写真图片 lrc=>歌词
          //其中url必须有，其他的都是非必须
          obj.title = this.songNames[i]
          obj.author = this.singerNames[i];
          obj.url = this.songUrls[i];
          // obj.pic = this.musicList[i].albumpic_small;
          // obj.lrc = this.musicList[i].irl;
          //把数据一个个push到songList数组中，在a-player标签中使用 :music="songList" 就OK了
          this.songList.push(obj);
        }

        //因为是异步请求，所以一开始播放器中是没有歌曲的，所有给了个v-if不然会插件默认会先生成播放器，导致报错(这个很重要)
        this.flag = true;

      }
}
}
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;

  }

  #my_headcard {
    width: 100%;
    height: 5vh;
    margin: 0px;
    padding: 0px;

  }

  #logo {
    line-height: 5vh;
  }

  #headpic {
    float: left;
    float: clear;
    margin: 3px;
    width: 50px;
    height: 50px;
    border: 1px solid #ccffee;
  }

  .nickname:hover {
    vertical-align: middle;
    color: #A0522D;

    vertical-align: middle;
    text-align: center;

  }

  .nickname {
    height: 5vh;
    color: #000;
    font-weight: bold;
    font-size: 17px;
    margin-top: 1vh;
    margin-left: 3px;
    float: left;
    text-align: center;

  }

  .menu_item {
    font-size: 17px;

  }

  #search {
    height: 5vh;
    float: left;
    text-align: center;
    margin-top: 1vh
  }

  #opencode {
    width: 10vw;
    height: 10vw;
    margin-top: 20px;

    border: 1px solid #ccffee;
  }

  #wechatcode {
    width: 10vw;
    height: 13vw;
    border: 1px solid #ccffee;
    margin-top: 2vh;

  }

  .myinfo {
    margin-left: 1vw;
  }

  .myinfo p {
    text-align: left;
  }

  .mymusic{
    margin-left: 1vw;

  }
  .mylink{
      margin-left: 1vw;
  }
  .wrap{
      width: 300px;
      margin: 50px auto 0;
  }
  button{
  	font-size: 25px;
  }
  #btnNext{
  	float: right;
  }
  #mlist{
  	width: 300px;
  	background: #ccc;
  	border: 1px solid #666;
  	border-radius: 10px;
  	overflow: hidden;
  	margin-top: 10px;
  }
  #mlist li{
  	font-size: 24px;
  	color: blue;
  	line-height: 40px;
  	border-bottom: 1px solid #666;
  	padding-left: 5px;
  }
  #mlist li:last-child{
  	border-bottom: none;
  }
  #mlist li:hover{
  	color: red;
  }
  #mlist .play{
  	background: pink;
  }
</style>
