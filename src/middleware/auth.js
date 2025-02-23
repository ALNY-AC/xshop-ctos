import Http from '../plugins/Http'

export default function (context) {
    if (typeof localStorage.jwt == 'undefined') {
        // 未登录
        if (context.route.name != 'login') {
            localStorage.clear();
            context.app.router.replace('/login');
        }

    } else {

        return new Promise(async (next) => {
            try {
                next();
            } catch (e) {
                console.warn(e);
                console.warn('验证失败！');
                context.app.router.replace('/login');
            }
        });


    }
}