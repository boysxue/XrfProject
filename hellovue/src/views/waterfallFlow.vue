<template>
    <div class="v-waterfall-content" id="v-waterfall">
        <div v-for="img in waterfallList"
             class="v-waterfall-item"
             :style="{top:img.top+'px',left:img.left+'px',width:waterfallImgWidth+'px',height:img.height}">
            <img :src="img.src" alt="">
        </div>
        <div class="bottom" style="position: absolute;top:0px;">{{ tTime }}</div>
    </div>
</template>

<script>
    import { getT } from '@/api/index'
    export default {
        name: "v-waterfall",
        data(){
            return {
                waterfallList:[],
                imgArr:[
                    require('../assets/1.jpg'),
                    require('../assets/2.jpg'),
                    require('../assets/3.jpg'),
                    require('../assets/4.jpg'),
                    require('../assets/5.jpg'),
                    require('../assets/6.jpg'),
                    require('../assets/7.jpg'),
                    require('../assets/8.jpg'),
                    require('../assets/9.jpg'),
                    require('../assets/10.jpg'),
                ],
                waterfallImgWidth:250,
                waterfallImgCol:5,
                waterfallImgRight:10,
                waterfallImgBottom:10,
                waterfallDeviationHeight:[],//存放瀑布流各个列的高度
                sTime:''
            }
        },
        computed: {
            tTime() {
                return this.$moment(parseInt(this.sTime)).format('YYYY/MM/DD hh:mm:ss')
            }
        },
        mounted(){
            this.calculationWidth();
            this.getServiceTime()
        },
        methods:{
            getServiceTime() {
                getT({}).then(res => {
                    this.sTime = res.data.data.t
                })
            },
            //计算每个图片的宽度或者是列数
            calculationWidth(){
                let domWidth = document.getElementById("v-waterfall").offsetWidth;
                this.waterfallImgWidth = (domWidth-this.waterfallImgRight*this.waterfallImgCol)/this.waterfallImgCol;
                this.waterfallImgCol = Math.floor(domWidth/(this.waterfallImgWidth+this.waterfallImgRight))
                //初始化偏移高度数组
                this.waterfallDeviationHeight = new Array(this.waterfallImgCol);
                for (let i = 0;i < this.waterfallDeviationHeight.length;i++){
                    this.waterfallDeviationHeight[i] = 0;
                }
                this.imgPreloading()
            },
            //图片预加载
            imgPreloading(){
                for (let i = 0;i < this.imgArr.length;i++){
                    let aImg = new Image();
                    aImg.src = this.imgArr[i];
                    aImg.onload = aImg.onerror = (e)=>{
                        let imgData = {};
                        imgData.height = this.waterfallImgWidth/aImg.width*aImg.height;
                        imgData.src = this.imgArr[i];
                        this.waterfallList.push(imgData);
                        this.rankImg(imgData);
                    }
                }
            },
            //瀑布流布局
            rankImg(imgData){
                let {waterfallImgWidth,waterfallImgRight,waterfallImgBottom,waterfallDeviationHeight,waterfallImgCol} = this;
                //for (let i = 0;i < this.waterfallList.length;i++){
                let minIndex = this.filterMin();
                imgData.top = waterfallDeviationHeight[minIndex];
                imgData.left = minIndex*(waterfallImgRight+waterfallImgWidth);
                waterfallDeviationHeight[minIndex] += imgData.height + waterfallImgBottom;
                //}
                // console.log(imgData);
            },
            /**
             * 找到最短的列并返回下标
             * @returns {number} 下标
             */
            filterMin(){
                const min = Math.min.apply(null, this.waterfallDeviationHeight);
                return this.waterfallDeviationHeight.indexOf(min);
            }
        }
    }
</script>

<style scoped>
.v-waterfall-content{
    width: 100%;
    height: 100%;
    position: relative;
}
.v-waterfall-item{
    float: left;
    position: absolute;
}
.v-waterfall-item img{
    width: 100%;
    height: 100%;
}
</style>
