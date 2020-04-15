<template>
  <div class="index">
      <div class="title">你好</div>
      <div class="remark">尊敬的<span>{{ this.$store.getters.menberInfo }}</span>，欢迎来到英雄联盟！</div>
      <div class="content">
        <van-row v-for="(item,index) in contentArr" :key="index">
            <van-col span="10"><img :src="item.url" style="width:100%;height:80px;"/></van-col>
            <van-col span="14">
                <div>{{ item.textone }}</div>
                <div>{{ item.texttwo }}</div>
                <div>{{ item.textthree }}</div>
            </van-col>
        </van-row>
      </div>
      <router-link to="/userCenter"><van-button type="info" style="width:100%;">充值</van-button></router-link>
  </div>
</template>

<script>
export default {
    name:'Index',
    data() {
        return {
            contentArr: [
                {
                    url:require('@/assets/img-login-bgc.png'),
                    textone:'学习vuex',
                    texttwo:'23312',
                    textthree:'免费课程',
                },
                {
                    url:require('@/assets/img-login-bgc.png'),
                    textone:'实战课程',
                    texttwo:'23312',
                    textthree:'实战课程',
                },
                {
                    url:require('@/assets/img-login-bgc.png'),
                    textone:'V12会员专享课程',
                    texttwo:'23312',
                    textthree:'V12会员专享课程',
                },
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
    .index {
        .title {
            height: 10rem;
            font-size: 2rem;
            font-weight: 600;
            text-align: left;
            line-height: 16rem;
            padding-left: 1rem;
        }
        .remark {
            padding-left: 1rem;
            text-align: left;
            span {
                color: red;
            }
        }
        .content {
            padding: 0.5rem 0 0 0;
            div {
                text-align: left;
                line-height: 1.6rem;
                padding-left: 1rem;
            }
        }
    }
</style>