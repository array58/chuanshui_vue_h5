//js调用app方法区
import { Dialog } from 'vant';
import store from '@/store/index.js';
store.commit('setUserAgent',navigator.userAgent);
const {isAndroid,isIos,isWeixin,vueAppProjectName} = store.getters;

function reploadLogin() {
    if ( isAndroid ) {
      window[vueAppProjectName].webToLogin();
    } else if ( isIOS ) {
      window.webkit.messageHandlers[vueAppProjectName].postMessage({ method: 'webToLogin' });
    }
}

function loginToast() {
    Dialog.confirm({
      title: '下线通知',
      message: '您的账号已在别处登录，您被迫下线。如果非本人操作，则密码可能 已泄漏，建议您修改密码。',
      cancelButtonText: '取消',
      confirmButtonText: '重新登录',
      className: 'login-toast',
      cancelButtonColor: '#007AFF',
      closeOnClickOverlay: true,
      beforeClose(action) {
        if (action === 'confirm') {
          reploadLogin();
        }
        Dialog.close();
      },
    });
  }

export {
    reploadLogin,
    loginToast
}