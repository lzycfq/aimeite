<template>
  <div style="overflow: hidden;">
    <el-col :span="24">
      <el-header>
        <app-header></app-header>
      </el-header>

      <el-col :span="24" class="m_nav">
        <router-link to="/Product"><img src="http://www.airmate-china.com/uploadfiles/image/icon/wap_iocn1.png" /><span>电风扇</span></router-link>
        <router-link to="/Product"><img src="http://www.airmate-china.com/uploadfiles/image/icon/wap_iocn2.png" /><span>电暖气</span></router-link>
        <router-link to="/Product"><img src="http://www.airmate-china.com/uploadfiles/image/icon/wap_iocn4.png" /><span>空气净化器</span></router-link>
        <router-link to="/Product"><img src="http://www.airmate-china.com/uploadfiles/image/icon/wap_iocn5.png" /><span>除湿器</span></router-link>
        <router-link to="/Product"><img src="http://www.airmate-china.com/uploadfiles/image/icon/wap_iocn6.png" /><span>加湿器</span></router-link>
        <router-link to="/Product"><img src="http://www.airmate-china.com/uploadfiles/image/icon/wap_iocn3.png" /><span>新风系统</span></router-link>
      </el-col>
      <el-col :span="24"><img src="http://www.airmate-china.com/uploadfiles/image/wap_Home_img1.jpg" width="100%"></el-col>
      <el-col :span='24' class="Home Home2">
        <ul class="ul clearfix">

          <li>
            <router-link to="/Product_list">
              <figure><img src="http://www.airmate-china.com/uploadfiles/2019/07/201907181554515451.jpg"></figure>
              <p class="dot">FB2319DR</p>
            </router-link>
          </li>

          <li>
            <router-link to="/Product_list">
              <figure><img src="http://www.airmate-china.com/uploadfiles/2019/07/201907181539553955.jpg"></figure>
              <p class="dot">CA23-RD7</p>
            </router-link>
          </li>

          <li>
            <router-link to="/Product_list">
              <figure><img src="http://www.airmate-china.com/uploadfiles/2019/01/201901101542514251.jpg"></figure>
              <p class="dot">HGY905P</p>
            </router-link>
          </li>

          <li>
            <router-link to="/Product_list">
              <figure><img src="http://www.airmate-china.com/uploadfiles/2019/01/201901101540354035.jpg"></figure>
              <p class="dot">HGY1009P-W</p>
            </router-link>
          </li>

        </ul>
      </el-col>
      <div style="clear: both;"></div>
    </el-col>
  </div>
</template>
<style scoped>
  .el-header {
    padding: 0 !important;
  }

  .el-main {
    display: block;
    -webkit-box-flex: 1;
    -ms-flex: 1;
    flex: 1;
    flex-basis: auto;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    padding: 0px !important;
  }

  .el-aside,
  .el-main {
    overflow: hidden;
    width: 100%;
    -webkit-box-sizing: border-box;
  }

  .el-footer {
    padding: 0px;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    -ms-flex-negative: 0;
    flex-shrink: 0;
  }

  .swiperOptionFexid {
    position: relative;

    overflow: hidden;
  }

  .m_nav {
    margin: 1% 0;
    overflow: hidden;
  }

  .m_nav a {

    float: left;
    width: 33%;
    border-top: 1px solid #d6d6d6;
    border-right: 1px solid #d6d6d6;
    text-align: center;
    padding: 5% 0 0;
    margin-top: -1px;
    display: inline-block;

  }

  .m_nav a img {
    max-width: 50%;
    max-height: 82px;
  }

  .m_nav a span {
    display: block;
    color: #333333;
    margin-bottom: 16px;
  }
  .Home ul {
      margin: 1% 0;
      list-style: none;
          margin: 0;
      overflow: hidden;}
      .Home2 li {
          float: left;
          width: 49.7%;
          border-top: 1px solid #d6d6d6;
          border-right: 1px solid #d6d6d6;
          text-align: center;
          padding: 6% 0;
          margin-top: -1px;
      }
      .Home2 li figure {
          width: 100%;
          margin: 0 auto;
          position: relative;
          padding-top: 53.3%;
          overflow: hidden;
      }
      .Home2 li figure img {
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-50%,-50%);
          max-height: 100%;
          max-width: 100%;
      }
      .Home2 li p {
          margin: 3% 2%;
          line-height: 24px;
          height: 24px;
          color:#333333;
          overflow: hidden;
      }
</style>
<script>
  const Header = () => import('../mobile/components/header');


  import 'swiper/dist/css/swiper.css';
  import {
    swiper,
    swiperSlide
  } from 'vue-awesome-swiper';


  export default {
    name: 'index',
    filters: {
      // 			    indexellipsis(value) {
      // 			      if (!value) return ''
      // 			      if (value.length > 5) {
      // 			        return value.slice(0,5) + '...'
      // 			      }
      // 			      return value
      // 			    }

      indexellipsis(value) {
        let screenWidth = document.body.clientWidth;
        if (screenWidth <= '375') {
          if (!value) return ''
          if (value.length > 5) {
            return value.slice(0, 5) + '...'
          }
          return value
        } else if (screenWidth <= '414') {
          if (!value) return ''
          if (value.length > 6) {
            return value.slice(0, 6) + '...'
          }
          return value
        } else if (screenWidth <= '520') {
          if (!value) return ''
          if (value.length > 7) {
            return value.slice(0, 7) + '...'
          }
          return value
        } else if (screenWidth <= '620') {
          if (!value) return ''
          if (value.length > 8) {
            return value.slice(0, 8) + '...'
          }
          return value
        } else if (screenWidth <= '768') {
          if (!value) return ''
          if (value.length > 9) {
            return value.slice(0, 9) + '...'
          }
          return value
        } else if (screenWidth <= '1920') {
          if (!value) return ''
          if (value.length > 12) {
            return value.slice(0, 12) + '...'
          }
          return value
        }

        return {

        }
      }
    },
    data() {
      return {
        hotbtn1: false,
        hotbtn2: false,
        hotbtn3: false,
        youxuanbtn1: false,
        youxuanbtn2: false,
        youxuanbtn3: false,
        bannerList: [],
        hot_list: [],
        preferential_list: [],
        //轮播js
      }
    },
    //跳转到对应详情页面
    created() {
      this.hotList();
      this.preferentialList();

    },
    methods: {
      hotList() { //正确
        this.axios.get('/admin/hot').then(res => {
          this.hot_list = res.data //请求出来的推荐楼盘数据

        }).catch(function(error) {
          console.log(error);
        })
      },
      preferentialList() { //正确
        this.axios.get('/admin/preferential').then(res => {
          this.preferential_list = res.data //请求出来的优选房源数据
        }).catch(function(error) {
          console.log(error);
        })
      },

    },
    computed: {
      tagChoose() {
        return function(key) {
          if (key === 0) {
            return 'red';
          } else if (key === 1) {
            return 'green';
          } else {
            return 'yellow';
          }
        }
      },





    },
    components: {

      'app-header': Header,

      swiper,
      swiperSlide,

    },

    //		控制头尾部分是否显示
    beforeCreate: function() {
      this.$emit('public_footer', false);
    },
  }
</script>
