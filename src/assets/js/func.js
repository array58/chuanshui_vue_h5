//功能函数
function queryString(name){ //获取浏览器地址参数
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)","i");
    var r = window.location.search.substr(1).match(reg); 
　　 if (r!=null) return (r[2]); 
　　 return null; 
}

function setPageTitle(obj = {title:'川水H5'}){//设置document.title
    if(!obj.title) return;
    document.title = obj.title;
}

export {
    queryString,
    setPageTitle
}