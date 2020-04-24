export default {
    install(Vue) {
        Vue.prototype.$message = function (text) {
            window.M.toast({html: text})
        }

        Vue.prototype.$error = function (text) {
            window.M.toast({html: `[Error]: ${text}`})
        }
    }
}