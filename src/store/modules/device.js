const deviceInfo = {
    state:{
        userAgent:'',//navigation.userAgent
    },
    getters:{
        isAndroid(state){
            return /(Android)/i.test(state.userAgent);
        },
        isIos(state){
            return /(iPhone|iPad|iPod|iOS)/i.test(state.userAgent);
        },
        isWeixin(state){
            return /MicroMessenger/i.test(state.userAgent);
        },
        vueAppProjectName(state){
            return 'chuanshuiapp'
        }
    },
    mutations:{
        setUserAgent(state,val){
            state.userAgent = val
        }
    }
}

export default deviceInfo;