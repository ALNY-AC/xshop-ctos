console.warn(new Date().getDate());

export default {
    title: {
        text: '本月用户统计',
        subtext: '展示本月每日的用户注册情况',
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        // data: new Array(new Date().getDate()).fill('').map((e, i) => (i + 1))
        data: []
    },
    yAxis: {
        type: 'value'
    },
    series: [{
        // data: new Array(new Date().getDate()).fill('').map((e, i) => parseInt(Math.random() * 1000)),
        data: [],
        type: 'line',
        label: {
            normal: {
                show: true,
                position: 'top'
            }
        },
    }]
};;