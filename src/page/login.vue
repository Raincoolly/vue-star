<template>
  <mt-loadmore :top-method="loadTop" @top-status-change="handleTopChange">
    <ul>
      <li v-for="item in list" @ckick="aaa">{{ item }}</li>
    </ul>
    <div slot="top" class="mint-loadmore-top">
      <span v-show="topStatus !== 'loading'" :class="{ 'rotate': topStatus === 'drop' }">↓</span>
      <span v-show="topStatus === 'loading'">Loading...</span>
    </div>
  </mt-loadmore>
</template>
<script>
  import { Loadmore } from 'mint-ui';
  export default {

    data() {
      return {
        topStatus: '',
        list:[],
        // ...
      };
    },
    mounted:function(){

    },
    methods: {
      handleTopChange(status) {
        this.topStatus = status;
      },
      loadTop() {
      // 加载更多数据
        this.$refs.loadmore.onTopLoaded();
      },
      aaa(){
        this.$router.push({name:'路由命名',params:{参数名:参数值,参数名:参数值}})
      }
      // ...
    },
    // ...
  };
</script>
