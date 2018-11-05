export default {
    changeLocalDelayFiveSeconds(context,local) {
        setTimeout(() => {
            context.commit('changeLocal',local)
            console.log("异步vuex")
        },5000)
    }
}