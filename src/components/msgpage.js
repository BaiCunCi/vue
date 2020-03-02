import Vue from 'vue'
import Imsbox from "./Imsbox";

//    js组件
var msgpage = (function () {
  var MyVue=Vue.extend(Imsbox);
  return function (params) {
    var divNew = document.createElement("div");
    document.body.appendChild(divNew);
    var msgVue = new MyVue({
      el:divNew,
      data: function () {
        return{
          name:params.name,
          phonenum:params.phonenum,
          sex:params.sex,
          src:params.src,
          call:params.call,
          canel:params.canel
        }
      }

    });
  }
})();
//导出组件
export default msgpage
