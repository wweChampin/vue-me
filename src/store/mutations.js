export default {
    changeLocal(state, local){
        localStorage.local = local
        state.local = local
        console.log('什么情况', local)

    }
}