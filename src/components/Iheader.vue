<template>
  <div id="iheader">
    <button @click="delList">编辑</button>
    {{dataVue.titleName}}
    <button @click="addList">+</button>
  </div>
</template>

<script>
  import addpage from "./addpage";

    export default {
      name: "iheader",
      props:{
        dataVue:{
          type:Object,
          defalut:null
        }
      },
      methods:{
        delList:function () {
          alert("shanchu")

        },
        addList:function () {
          alert("jiaru");
          addpage({
            name:it.name,
            phonenum:it.phonenum,
            sex:it.sex,
            src:it.src,
            call: function (e) {
              alert("打电话给"+it.name+"\r\n号码是："+it.phonenum);
            },
            canel: function (e) {
              var div=document.getElementById("");
              document.body.removeChild(div);

            }
          });
        }
      }
    }
</script>

<style>
    * {
      margin: 0px;
      padding: 0px;
    }
    /*头部===============================================*/
    #iheader{
      width: 100%;
      height: 50px;
      color: white;
      background-color: #566f516b;
      font-size: 17px;
      text-align: center;
      line-height: 50px;

      position: fixed;
      left: 0px;
      top: 0px;
      z-index: 3;
    }
    #iheader>button:nth-of-type(1){
      height: 100%;
      padding: 7px 33px 7px 38px;
      font-size: 16px;
      float: left;
      color: white;
      background-color: #4ade0938;
    }
    #iheader>button:nth-of-type(2){
      height: 100%;
      padding: 7px 33px 7px 38px;
      font-size: 30px;
      float: right;
      color: white;
      background-color: #4ade0938;
    }
</style>
