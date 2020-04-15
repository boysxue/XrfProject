export default {
    login(state, payload) {
        state.userInfo = payload
    },
    setMenberInfo(state,v) {
        state.userStatus = v.userStatus
        state.userVipLevel = v.userVipLevel
    }
}