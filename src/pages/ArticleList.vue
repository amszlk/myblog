<template >

<table><tr v-for="(artcleitem,index) in articleDatas" :key="artcleitem.id">
  <el-card >
    <article class="post reveal " data-sr-id="0" style="visibility: visible; opacity: 1; transition: all 0.25s ease 0s, opacity 0.6s cubic-bezier(0.5, 0, 0, 1) 0s;">
      <section class="meta">
        <div  class="meta" id="header-meta">
          <h3 class="title" v-text='artcleitem.title'>{{artcleitem.title}}

          </h3>

          <div class="new-meta-box">
            <div class="new-meta-item author">
                <img src="../assets/image/logo.jpg">
                <p v-text='artcleitem.shareUser'>轩轩吖</p>
            </div>
            <div class="new-meta-item date">

                <i class="icon iconfont icon-riqi" aria-hidden="true"></i>

                <p v-text="timestampToTime(artcleitem.shareDate)">2019-11-30</p>


            </div>
          </div>
          <hr>
        </div>
      </section>


      <section class="article typo">
          <h3  class="abstract">摘要</h3>
        <div class="article-entry">
          素描是一种唯美的艺术创作，可以用单色线条来表现事物。那么 KUOKUO 今天为大家带来的就是 CocosCreator 的素描化 Effect。
          </div>

        </div>

      </section>
    </article>

  </el-card>
</tr></table>
</template>

<script>
  import axios from 'axios'
  axios.defaults.baseURL = '/api'
  export default {
    name: 'ArticlList',
    data() {
      return {

         articleDatas:[]
      }

    },
    methods:{
//用element table组件中的formatter属性，传入一个函数
      timestampToTime (cjsj) {
              var date = new Date(cjsj) //时间戳为10位需*1000，时间戳为13位的话不需乘1000
              var Y = date.getFullYear() + '-'
              var M = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1) + '-'
              var D = date.getDate() + ' '
              var h = date.getHours() + ':'
              var m = date.getMinutes() + ':'
              var s = date.getSeconds()
              return Y+M+D+h+m+s
              console.log(timestampToTime (1533293827000))
          },

    },
    created () {


     },
     mounted:function()  {
    var that =this;
           // Code that will run only after the
           // entire view has been rendered
           axios.get('article/list/0/json')
                 .then(response=>{
                   that.articleDatas=response.data.data.datas;

                 })
                 .catch(error=>{
                     console.log(error);
                     alert('网络错误，不能访问');
                 })



     }

  }
</script>

<style>
  a {
    color: #888888;
    text-decoration:none;
  }
  a:hover{
     color: #ff5722;
  }

/* 标题 */
.title{
  height: 1vh;
   display: flex;
    color: #333333;

}
.title:hover{

  color: #ff5722;
}

.new-meta-box {
 display: flex;
 margin-top: 30px;
}
.new-meta-item {
margin-right: 1.25rem;

}
.new-meta-item img{
  vertical-align: middle;
  width: 1.25rem;
  height:1.25rem;
}
.new-meta-item p{
  margin-left: 2px;
  display: inline-block;
  font-size: 14px;
   color: #888888;
}
/* 摘要 */
.abstract{

   display:flex;
  color:#04bbfb;
}
.post{

  padding-left: 5px;
  padding-right: 5px;
}
.article{
  text-align:left;
}
.article-entry {

}
.article-entry i{
vertical-align: middle;
  width: 1.25rem;
  height:1.25rem;
}
.article-entry p{
 margin-left: 2px;
  display: inline-block;
  font-size: 14px;
   color: #888888;
}


</style>
