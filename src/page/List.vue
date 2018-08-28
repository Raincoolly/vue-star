<template>
  <mt-loadmore :top-method="loadTop" @top-status-change="handleTopChange"  ref="loadmore">
    <ul>
      <li v-for="item in list">
        <router-link :to="{path:'/info',query:{uid: item.userid,clienttype:item.clienttype,uclienttype:0}}">
          <div class='user'>
            <div class='inner'>
              <div class='item'>
                <img v-if="item.logo&&item.logo!='http://s.gongren.com/None'" v-bind:src="item.logo" class='avtor'/>
                <img class="avtor" v-else src="../assets/male.jpg"/>
                <div class='item_c'>
                  <h3>{{item.user_name}}<b></b></h3>
                </div>
              </div>
            </div>
          </div>
        </router-link>
      </li>

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
    name:'list',
    data() {
      return {
        topStatus: '',
        list:[{clienttype: "1",user_name:"toonYY知我者谓我心忧",userid:"17094",user_name:"白敬亭"}],

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
      }
    },

  };
</script>
<style scoped lang="less">
.user{
  position: relative;
  margin-bottom: 0.3rem;
  box-shadow: 0px 2px 8px -1px rgba(0,0,0,0.2);
  background: #fff;
  .inner{
    -webkit-box-flex: 1;
    -webkit-flex: 1;
    padding:0 0.4rem;
    .item{
      display: -webkit-box;
      display: -webkit-flex;
      -webkit-box-align:center;
      -webkit-align-items:center;
      color: #333;
      padding:0.4rem 0;
      .avtor{
        display: block;
        width:1.8rem;
        height:1.8rem;
        border-radius: 50%;
        }
      .item_c{
        display: block;
        -webkit-box-flex: 1;
        -webkit-flex: 1;
        width: 100%;
        overflow: hidden;
        line-height:0.4rem;
        margin: 0 0.4rem;
        text-align: left;
        h3{
          display: block;
          -webkit-box-flex: 1;
          -webkit-flex: 1;
          width: 100%;
          height: 0.8rem;
          overflow: hidden;
          line-height: 0.8rem;
          font-size: 0.56rem;
          color:#333;
          b{
            width: 0.48rem;
            height:100%;
            margin-left: 0.3rem;
          }
        }
      }
    }
  }
}

</style>
