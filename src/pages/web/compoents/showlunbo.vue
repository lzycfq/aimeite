<template>
    <div class="showAdvantageous_estate" v-if="tween.length > 0">
        <div class="tuijianheader"><img class="lunboicon" src="../../../assets/images/iconlp.png">&nbsp;&nbsp;<span>楼盘优势</span>
            <div class="tab">
                <!--	轮播标签-->
                <a id="lunbonav active">
                    楼盘介绍
                </a>
            </div>
        </div>
        <!--	轮播数据tab框-->
        <div class="tabas active">
            <!--下面这个#id=scroll-wrap div别删！-->
            <div id="scroll-wrap" class="container">
                <div class="main">
                    <div id="bookshelf" class="bookshelf">
                        <figure style="display: none;">
                            <div class="book" data-book="book-8"></div>
                            <div class="buttons">
                                <a href="#"></a>
                                <a href="#"></a>
                            </div>
                            <figcaption>
                                <h2><span></span></h2></figcaption>
                            <div class="details"></div>
                        </figure>
                    </div>
                </div>
            </div>
            <!--#id=scroll-wrap div结束！-->
            <!--	轮播数据在这-->
            <div class="bb-custom-wrapper show" id="book-8">
                <div class="bb-bookblock">
                    <div class="bb-item" v-for="(value,key) in tween" :key="key">
                        <div class="bb-custom-side" v-for="(v,k) in value">
                            <div class="bb-custom-side-header">{{v.name}}</div>
                            <div class="gradient"></div>
                            <div class="bb-custom-side-content" v-html="v.content">{{v.content}}</div>
                            <div class="bb-custom-side-content_img">
                                <img :src='v.image'>
                            </div>
                            <!-- 	中间三个书钉 -->
                            <div v-if="k%2 === 0">
                                <img src="../../../assets/images/shuding.png" class="shudingfirst">
                                <img src="../../../assets/images/shuding.png" class="shudingtwo">
                                <img src="../../../assets/images/shuding.png" class="shudingthree">
                            </div>
                            <div v-if="k%2 !== 0">
                                <img src="../../../assets/images/zhejiao.png" class="zhejiao">
                            </div>
                        </div>
                    </div>

                </div>
                <!-- /bb-bookblock -->
                <nav>
                    <a href="#" class="bb-nav-prev">Previous</a>
                    <a href="#" class="bb-nav-next">Next</a>
                    <a href="#" class="bb-nav-close" style="display: none;">Close</a>
                </nav>
            </div>
            <!-- /bb-custom-wrapper -->
            <div>
            </div>
        </div>
    </div>
</template>
<style>
    /*必须每个写一次*/

    .el-header {
        height: 0px !important;
        margin-bottom: 0 !important;
    }
    /*    优势楼盘*/

    .showAdvantageous_estate {
        width: 1200px;
        height: 840px;
        margin: 0 auto;
        overflow: hidden;
        position: relative;
    }

    .showAdvantageous_estate .tuijianheader {
        width: 100%;
        text-align: left;
        height: 70px;
        line-height: 74px;
    }

    .showAdvantageous_estate .tuijianheader span {
        font-size: 20px;
        color: #222222;
        font-weight: 500;
        float: left;
        margin-left: 5px;
    }

    .showAdvantageous_estate .tuijianheader .lunboicon {
        width: 32px;
        height: 33px;
        float: left;
        display: inline-block;
        margin: 1.25% 0 0 0;
        vertical-align: middle
    }

    .showAdvantageous_estate .tuijianheader .tuijianmore {
        float: right;
        color: #777777;
        font-size: 0.6rem;
    }

    .showAdvantageous_estate .tuijianheader .tab {
        float: left;
        color: #777777;
        margin-left: 45px;
        height: 45px;
        margin-top:1px;
    }

    .showAdvantageous_estate .tabas {
        display: none;
        width: 100%;
    }

    .showAdvantageous_estate .tabas .bb-custom-wrapper {
        width: 100%;
        height: 720px;
        overflow: hidden;
        border-radius: 3%;
        top: 90px;
    }

    .showAdvantageous_estate .tabas.active {
        display: block;
    }

    #lunbonav {
        color: #333333;
        padding: 10px 15px;
        margin-left: 15px;
    }

    #lunbonav.active {
        padding: 10px 15px;
        font-weight: bold;
        color:#ff4a59 ;
        border-bottom: 2px #ff4a59 solid;
    }
</style>
<script>
    export default {
        name: 'app',

        data() {
            return {
                id:this.$route.params.id,
                tween:[{},{},{},{}],
                taba: [{
                    title: '交通',
                    isactivea: true
                }
                ],
            }
        },
        created(){
            this.buildingTween();
        },
        methods: {
            //	 		楼盘优势tab切换
            changea(index) {
                this.taba.forEach(function(v) {
                    v.isactivea = false
                });
                this.taba[index].isactivea = true
            },

            //获取推文信息
            buildingTween() {
                this.axios.get('/admin/' + this.id + '/tween').then(res => {
                    this.tween = res.data; //请求出来的楼盘数据
                    console.log(res.data);
                }).catch(function(error) {
                    console.log(error);
                })
            },
        },
    }
</script>