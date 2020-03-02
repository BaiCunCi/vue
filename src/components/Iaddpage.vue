<template>
  <div id="imsbox" ref="imsbox" >
    <div class="content">
      <div>联系人详情</div>
      <div>
        <div ><img class="imge" :src="src" /></div>
        <div>
          {{name}}<br/>
          {{phonenum}}
        </div>
      </div>
      <div>
        <button @click="call">呼叫</button>
        <button @click="canel">取消</button>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Iaddpage"
  }
</script>

<style>
  * {
    margin: 0px;
    padding: 0px;
  }
  /*消息框*/
  #imsbox{
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0px;
    left: 0px;
    background-color: rgba(30, 33, 30, 0.7);
    z-index: 4;
  }
  .content{
    width: 80%;
    height: 452px;
    background-color: white;
    /*border-radius: 20px;*/
    margin: 100px auto;


  }
  .content>div:nth-of-type(1){
    width:100%;
    height: 35px;
    line-height: 35px;
    text-align: center;
    font-size: 20px;
    border: 1px solid #b6bbb12e;
    color: #3b463f;
  }
  .content>div:nth-of-type(2){
    width:100%;
    height: 373px;

    color: #3b463f;
    text-align: center;
    font-size: 20px;
    border: 1px solid #b6bbb12e;
  }
  .content>div:nth-of-type(3){
    width:100%;

    font-size: 20px;

  }
  .content>div button{
    width: 49%;
    color: #3b463f;
    border: none;
    font-size: 16px;
    background-color: #d0d0d038;
    text-align: center;
    padding: 10px 0px 10px 0px;
  }
  .imge{

    width: 100px;
    height: 100px;
    margin: 50px 112px;
    border-radius: 50%;
    animation:imgerote 10s linear infinite;

  }
  @keyframes imgerote {
    0%{
      transform: rotate(0deg);
    }
    100%{
      transform: rotate(360deg);
    }
  }
</style>

