import echarts from 'echarts'
import map from './map'

export default {
    name: 'dashboard',
    data() {
        return {
            chartSettings: {
                // stack: { '用户': ['访问用户', '下单用户'] },
                area: true,
                seriesMap: [
                    {
                        label: {
                            formatter: '{value} a'
                        }
                    }
                ]

            },
            extend: {
                series: {
                    label: {
                        normal: {
                            show: true
                        }
                    }
                }
            },
            chartData: {
                columns: [
                    // '日期',
                    // '访问用户',
                    // '下单用户',
                    // '下单率'
                ],
                rows: [
                    // { '日期': '1/1', '访问用户': 1393, '下单用户': 1093, '下单率': 0.32 },
                    // { '日期': '1/2', '访问用户': 3530, '下单用户': 3230, '下单率': 0.26 },
                    // { '日期': '1/3', '访问用户': 2923, '下单用户': 2623, '下单率': 0.76 },
                    // { '日期': '1/4', '访问用户': 1723, '下单用户': 1423, '下单率': 0.49 },
                    // { '日期': '1/5', '访问用户': 3792, '下单用户': 3492, '下单率': 0.323 },
                    // { '日期': '1/6', '访问用户': 4593, '下单用户': 4293, '下单率': 0.78 }
                ]
            },
            loading: false,
        };
    },
    methods: {
        // 用于初始化一些数据
        init() {
            this.update();
        },
        // 用于更新一些数据
        async update() {
            this.initUser()
        },
        async initUser() {
            this.loading = true;
            const res = await this.$http.post('/data/info', {});
            this.chartData.columns = res.columns;
            this.chartData.rows = res.rows;
            this.loading = false;
        }
    },

    // 计算属性
    computed: {},
    // 包含 Vue 实例可用过滤器的哈希表。
    filters: {},
    // 在实例创建完成后被立即调用
    created() { },
    // 在挂载开始之前被调用：相关的 render 函数首次被调用。
    beforeMount() { },
    // el 被新创建的 vm.el 替换，并挂载到实例上去之后调用该钩子。
    async mounted() {
        await this.$nextTick(() => { });
        setTimeout(() => {
            this.init();
        }, 1000);
    },
    // 数据更新时调用，发生在虚拟 DOM 打补丁之前。
    beforeUpdate() { },
    // keep-alive 组件激活时调用。
    activated() { },
    // keep-alive 组件停用时调用。
    deactivated() { },
    // 实例销毁之前调用。在这一步，实例仍然完全可用。
    beforeDestroy() { },
    //Vue 实例销毁后调用。
    destroyed() { },
    // 当捕获一个来自子孙组件的错误时被调用。
    errorCaptured() { },
    // 包含 Vue 实例可用指令的哈希表。
    directives: {},
    // 一个对象，键是需要观察的表达式，值是对应回调函数。
    watch: {},
    // 组件列表
    components: {},
};