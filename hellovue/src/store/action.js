export default {
    buyMenber({commit},v) {
        console.log(commit)
        console.log(v)
        commit('setMenberInfo',v)
    }
}