export default {
    name: 'liuyan',
    data() {
        return {
            list: [],
            total: 0,
            query: {
                page_size: 10,
                page: 1,
                is_up: '',
                content: '',
            },
        };
    },
    methods: {
        // 用于初始化一些数据
        init() {
            this.update();
        },
        // 用于更新一些数据
        async update() {
            const res = await this.$http.post('/feedback/list', this.query);
            if (res.code >= 1) {
                this.total = res.data.total;
                this.list = res.data.list
            }
        },
        async del(id) {
            try {
                await this.$confirm('确认删除？', '提示');
            } catch (error) {
                return false;
            }

            const res = await this.$http.post('/feedback/del', {
                id: id
            });
            if (res.code >= 0) {
                this.$message.success('操作成功！');
            } else {
                this.$message.error('操作失败！');
            }
            this.update();
        },
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
    mounted() {
        this.init();
        this.$nextTick(() => { });
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
    watch: {
        'query.page'() {
            this.update();
        },
        'query.page_size'() {
            this.update();
        }
    },
    // 组件列表
    components: {},
};