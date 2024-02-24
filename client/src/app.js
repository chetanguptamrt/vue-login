import appTemplate from "./app.template.js";
import TheHeader from './components/common/header/TheHeader.js';
import InfiniteScroll from "./components/common/infinite-scroll/InfiniteScroll.js";
import Loader from "./components/common/loader/Loader.js";
import TheNavbar from "./components/common/navbar/TheNavbar.js";
import routes from './routes.js';
import store from './store.js';
import { getAuthHeader, isUserLogin, removeToken } from "./utils/authentication.util.js";

// reload dashboard
// page loader
// css, js
// product loader

const app = Vue
    .createApp({
        name: 'app',
        components: {
            TheHeader,
            TheNavbar,
        },
        setup() {
            const getSessionInformation = async () => {
                try {
                    if (isUserLogin()) {
                        const res = await axios({
                            url: "/api/session",
                            method: 'POST',
                            headers: getAuthHeader(),
                        })
                        store.user = res.data.user
                    }
                } catch (err) {
                    console.error(err)
                }
            }

            Vue.onMounted(() => {
                getSessionInformation()
            })

            return {
                store,
                getSessionInformation,
            }
        },
        template: appTemplate
    })

app.directive('infinite-scroll', InfiniteScroll)
app.directive('loader', Loader)

const router = VueRouter.createRouter({
    history: VueRouter.createWebHistory(),
    routes: routes,
})
router.beforeEach((to, from) => {
    if (to.fullPath === '/' && isUserLogin()) {
        return {
            path: '/dashboard',
        }
    }
    if (to.meta.requiredAuth && !isUserLogin()) {
        return {
            path: '/login',
            query: { redirect: to.fullPath },
        }
    }
})

axios.interceptors.response.use(
    response => response,
    async (error) => {
        if (error?.response?.config?.url !== '/api/notifications/token') {
            if (error?.response?.status === 401 && error?.response?.data?.status === "TERMINATE" && isUserLogin()) {
                removeToken()
                return window.location.replace("/");
            }

            return Promise.reject(error);
        }
    }
);

app.use(router)
app.provide('store', store);

app.config.errorHandler = (error, instance, info) => {
    console.error("Global error:", error);
    console.log("Vue instance:", instance);
    console.log("Error info:", info);
}

app.mount('#app')