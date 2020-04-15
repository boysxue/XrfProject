export default {
    menberInfo(state) {
        switch (state.userStatus) {
            case 1:
                return '普通会员'
                break;
            case 2:
                return 'vip会员'
                break
            case 3:
                return `高级V${state.userVipLevel}会员`
            default:
                return '普通会员'
                break;
        }
    }
}