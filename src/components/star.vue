<template id="star">
  <div class='star-box'>
    <!--<p>满意度：{{starnum|percent(stars)}}</p>-->
    <div v-for='n in stars' class='star starcount' @mousedown='mousedown(n)'></div>
    <div class='star-div'>
      <div  v-for="n in format" :style='n==format?stylelist:repstyle' class='star starbg' @mousedown='mousedown(n)' ></div>
    </div>
  </div>
</template>
<script>
  export default{
    name:'star',
    data:function(){
      return {
        isdown:false,
        downnum:0,
      }
    },
    props:['stars','starnum'],
    computed:{
      format:function(){
        return Math.ceil(this.starnum)
      },
      stylelist:function(){
        return {
          width:50*(1-this.format + this.starnum)+'px',
        }
      },
      repstyle:function(){
        return {
          width:50+'px',
        }
      },
      // filters:{
      //   width:function(v){
      //     return v + 'px'
      //   },
      //   percent:function(v,n){
      //     var per = v / n
      //     if(per>=1){
      //       return '非常满意'
      //     }else if(per>=0.75){
      //       return '还不错'
      //     }else if(per>=0.5){
      //       return '一般'
      //     }else if(per>=0.25){
      //       return '有点差'
      //     }else{
      //       return '非常差'
      //     }
      //   }
      // },

    },
    methods:{
      mousedown(n){
        if((n-0.5)>this.starnum){
          n=n-0.5
        }else if((n-0.5)==this.starnum){
          n=n
        }else{
          n = n - 1
        }
        this.$emit('input',n)
      }
    }
  }
</script>
<style scoped="scoped">
  .star-div{
    /*float: left;*/
    position: absolute;
  }
  .star{
    width: 50px;
    height: 50px;
    background-size: 50px 50px;
    background-repeat: no-repeat;
    float: left;
  }
  .starcount{
    background-image: url(../assets/star/star24_off@2x.png);
  }
  .starbg{
    background-image: url(../assets/star/star24_on@2x.png);

  }
</style>
