<template>
  <div id="map" style="width: 600px;height:400px;">
      疫情地图
  </div>
</template>

<script>
import "echarts/map/js/china"
// 指定图表的配置项和数据
var option = {
    title: {
        text: 'Vue实现地图展示',
    },
    visualMap: {
        type:'piecewise',
        min: 0,
        max: 50000,
        inRange: {
            color: ['lightskyblue', 'yellow', 'orangered']
        },
        // pieces: [
        //     {min: 1500}, // 不指定 max，表示 max 为无限大（Infinity）。
        //     {min: 900, max: 1500},
        //     {min: 310, max: 1000},
        //     {min: 200, max: 300},
        //     {min: 10, max: 200, label: '10 到 200（自定义label）'},
        //     {value: 123, label: '123（自定义特殊颜色）', color: 'grey'}, // 表示 value 等于 123 的情况。
        //     {max: 5}     // 不指定 min，表示 min 为无限大（-Infinity）。
        // ]
    },
    
    series: [
        {
            name: '香港18区人口密度',
            type: 'map',
            map: 'china',
            label: {
                show: true
            },
            data: [
                {name: '北京', value: 100},
                {name: '重庆', value: 200},
                {name: '湖北', value: 20000},
                {name: '广东', value: 6000},
            ],
        }
    ]
};
export default {
    data () {
        return {
            
        }
    },
    mounted () {
        // 基于准备好的dom，初始化echarts实例
        var myChart = this.$echarts.init(document.getElementById('map'));
        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
    }
}
</script>

<style>

</style>