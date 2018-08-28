<template>
  <div id="app">
      <!--我要打分：<input v-model.number="starnumber">-->
      <!--星星总数：<input v-model.number="stars">-->
      <!--<span v-model.number="starnumber" v-show="false"></span>-->
      <!--<span v-model.number="stars" v-show="false"></span>-->
      <span v-model.number="stars" v-show="false"></span>
      <star :starnum='starnum' :stars='stars' @input='changenum'></star>
    </div>
</template>

<script>
  import star from '../components/star.vue'

  export default {
    name: 'MyStar',
    data() {
      return {
        /*星级组件*/
        starnumber: 5,
        stars: 5,
        /*星级组件*/
      }
    },
    components: {
      star: star,
    },
    computed: {
      starnum: function () {
        if (this.starnumber > this.stars) {
          return this.stars
        } else {
          return this.starnumber
        }
      }
    },
    methods: {
      //点击的星星，改变数字传递给星星组件
      changenum: function (n) {
        this.starnumber = n
      },

    },
  }

</script>

