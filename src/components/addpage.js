import Vue from 'vue'
import Iaddpage from "./Iaddpage";

//    js组件
var addpage = (function () {
  var MyVue=Vue.extend(Iaddpage);
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
export default addpage
