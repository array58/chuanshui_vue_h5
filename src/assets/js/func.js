function queryString(name){ //获取浏览器地址参数
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)","i");
    var r = window.location.search.substr(1).match(reg); 
　　 if (r!=null) return (r[2]); 
　　 return null; 
}
export {
    queryString
}