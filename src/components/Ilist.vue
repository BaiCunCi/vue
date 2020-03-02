<template>
  <div id="ilist">
    <div>
      <ul>
        <li v-for="item in personDatas">
          <div class="indexChar">{{item.index}}</div>
          <ul>
            <li @click="liClick(it)" v-for="it in item.group">
              <img :src="it.src" />
<!--              <img src="../assets/A1.jpg">-->
              <div>{{it.name}}</div>
            </li>
          </ul>
        </li>
      </ul>
    </div>

    <div class="indexArray">
      <ul>
        <li v-for="item in indexArrays" @click="clickArrays(item)">{{item}}</li>
      </ul>
    </div>
  </div>
</template>

<script>
  import msgpage from './msgpage';
    export default {
      name: "ilist",
      props:{
        personDatas:{
          type:Array,
          defalut:[]
        },
        indexArrays:{
          type:Array,
          defalut:[]
        }
      },
      methods: {
        clickArrays: function (item) {
          var divs = document.getElementsByClassName("indexChar");
          for(var i=0;i<divs.length;i++){
            if(divs[i].innerText == item){
              var topvalue = divs[i].offsetTop;
              //    兼容浏览器
              document.body.scrollTop=topvalue;
              if(document.body.scrollTop==0){
                document.documentElement.scrollTop=topvalue;
              }

              break;
            }
          }
        },
        liClick: function (it) {
          msgpage({
            name:it.name,
            phonenum:it.phonenum,
            sex:it.sex,
            src:it.src,
            call: function (e) {
              alert("打电话给"+it.name+"\r\n号码是："+it.phonenum);
            },
            canel: function (e) {
              var div=document.getElementById("imsbox");
              document.body.removeChild(div);
//                                this.$refs.imsbox.style.display="none";
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
    /*列表===============================================*/
    #ilist{
      width: 100%;
      position: absolute;
      left: 0px;
      top: 50px;
      z-index: 1;

    }
    /*索引*/
    .indexChar{
      width: 100%;
      height: 30px;
      font-size: 15px;
      line-height: 30px;
      background-color: #e4e4e4;
      text-indent: 10px;

    }
    /*联系人*/
    .indexChar+ul>li{
      width: 100%;
      height: 75px;
      line-height: 75px;
      background-color: #ffffff;
      font-size: 20px;
      border-bottom: 3px solid #efefefad;

    }
    img{
      margin: 10px;
      width: 50px;
      height: 50px;
      border-radius: 15%;
      border: 1px solid #d6d6d6;
      background-size: contain;
      float: left;
    }
    .indexArray{
      position: fixed;
      top: 173px;
      right: 0px;
      width: 17px;
      height: 427px;
      font-size: small;
      color: #b5b5b5;
      background-color: #b4b5b521;
      z-index: 2;
      padding: 1px 2px 5px 3px;
    }

</style>
