<template>
  <el-card class='myinfo'>
  <div >

    <el-image style="width: 100px; height: 90.83px;border-radius: 50%;" :src="mypicurl" :preview-src-list="srcList">
    </el-image>
      <h2>轩轩吖</h2>
      <p>姓名：赵兰凯</p>
      <p>出生年月：1998</p>
      <p>性别：男</p>
      <p>所在地：北京朝阳</p>
      <p>QQ：2987880371</p>
      <p>技术群：679293162</p>
      <p>微信公众号：轩轩吖</p>
      <p>简介：</p>
      <p> AndroidCoder，喜欢分享知识，分享技术！</p>
  </div>
  </el-card>
</template>

<script>
  export default {
    name: 'MyInfo',
    data() {
      return {

        mypicurl: 'http://b265.photo.store.qq.com/psb?/V13yXPZ83zk9sL/Kav9IG0thEvsaQrslIhRQMTKIxnCF8rrmEmji4KVWlA!/b/dAkBAAAAAAAA&bo=4AG0AQAAAAAFB3A!&rf=viewer_4',
        srcList:[
          'http://b265.photo.store.qq.com/psb?/V13yXPZ83zk9sL/Kav9IG0thEvsaQrslIhRQMTKIxnCF8rrmEmji4KVWlA!/b/dAkBAAAAAAAA&bo=4AG0AQAAAAAFB3A!&rf=viewer_4'
        ]
      }
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>

<style>
</style>
