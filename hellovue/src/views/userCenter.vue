<template>
  <div class="usercenter">
      <div class="title">
          用户中心
      </div>
      <div class="user">
          <div style="text-align:left;padding-left:1rem;">账号：{{ userInfo.username }}</div>
          <div style="text-align:left;padding-left:1rem;">身份：{{ menberInfo }}</div>
      </div>
      <div class="content">
          <ul>
              <li v-for="(item,index) in menberArr" :key="index">
                <van-row>
                    <van-col span="24" style="text-align:left;">{{ item.name }}</van-col>
                </van-row>
                <van-row>
                    <van-col span="12" style="text-align:left;">{{ item.desc }}</van-col>
                    <van-col span="12" style="text-align:right;" @click="Buy(item)">购买</van-col>
                </van-row>
              </li>
          </ul>
      </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { mapState } from 'vuex'
export default {
    data() {
        return {
            menberArr:[
                {
                    name:'vip会员',
                    desc:'10.00元/30天',
                    userStatus:2,
                    userVipLevel:1
                },
                {
                    name:'高级会员',
                    desc:'10.00元/30天',
                    userStatus:3,
                    userVipLevel:11
                }
            ]
        }
    },
    computed: {
        ...mapGetters(['menberInfo']),
        ...mapState(['userInfo'])
    },
    methods: {
        Buy(val) {
            this.$store.dispatch('buyMenber',val)
        }
    },
}
</script>

<style lang="scss" scoped>
    .title {
        height: 12rem;
        line-height: 12rem;
        font-size: 2rem;
        font-weight: 600;
    }
    .content {
        ul {
            width: 100%;
            li {
                width: 90%;
                height: 4rem;
                line-height: 2rem;
                margin: 1rem auto;
                background-color: violet;
            }
        }
    }
</style>