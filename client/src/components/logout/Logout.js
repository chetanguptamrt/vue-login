import { removeToken } from "../../utils/authentication.util.js"

export default {
    name: 'Logout',
    setup() {
        removeToken()
        window.location.replace('/')
    },
    template: ''
}