//全局函数
import { mapGetters } from 'vuex';
export default {
    computed:{
        ...mapGetters([
            'isAndroid',
            'isIos',
            'isWeixin'
        ])
    }
}