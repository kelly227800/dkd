import router from './router'
import store from './store'
router.beforeEach((to, from, next) => {
    const token = store.state.user.token
    const whiteList = ['/404','/login']
    // 登录状态
    if(token) {
        if (to.path === '/login') {
            next('/')
        } else {
            next()
        }
    } else {
        // 未登录状态
        if (whiteList.includes(to.path)) {
            next()
        } else {
            next('/login')
        }
    }
})

// router.afterEach(() => {
//   // finish progress bar
//   NProgress.done()
// })
