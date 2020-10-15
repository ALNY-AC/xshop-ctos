import Vue from 'vue'
Vue.filter('arrToStr', function (value) {
    if (!value) return '';
    return value.join(',');
})
Vue.filter('userType', function (t) {
    if (t == 0) {
        return '管理员';
    }
    if (t == 1) {
        return '用户';
    }
    if (t == 2) {
        return '商户';
    }
    if (t == 3) {
        return '员工';
    }

    return `未知(${t})`
})