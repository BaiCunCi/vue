<template>
  <div id="app">
    <iheader :data-vue="dataVue"></iheader>
    <ilist :person-datas="personDatas"  :index-arrays="indexArrays" ></ilist>
    <!--<imsbox></imsbox>-->
  </div>
</template>

<script>

  // <-- 数据-->
  var dataOut = {
    titleName:"通讯录页"
  };

  var persons = [
    {
      index:"A",
      group:[
        { name:"爱我不许走", phonenum:"15727741096",src:"static/14.jpg"}
      ]
    },
    {
      index:"B",
      group:[
        { name:"抱过后分开", phonenum:"15627741092",src:"static/3.jpg"}
      ]
    },
    {
      index:"D",
      group:[
        { name:"多余的解释", phonenum:"15727741084",src:"static/18.jpg"}
      ]
    },

    {
      index:"H",
      group:[
        { name:"黄昏等日出", phonenum:"15727741097",src:"static/17.jpg"},
        { name:"回忆狠留念", phonenum:"17525255858",src:"static/20.jpg"}
      ]
    },
    {
      index:"K",
      group:[
        { name:"空虚寂寞冷", phonenum:"15727851099",src:"static/12.jpg"}
      ]
    },
    {
      index:"L",
      group:[
        { name:"凉城已无爱", phonenum:"15727741782",src:"static/8.jpg"},
        { name:"泪要自己尝", phonenum:"15727741095",src:"static/6.jpg"},
        { name:"乱一世狂傲", phonenum:"17872525252",src:"static/22.jpg"}
      ]
    },

    {
      index:"M",
      group:[
        { name:"梦里清欢长", phonenum:"15727745092",src:"static/4.jpg"}
      ]
    },
    {
      index:"N",
      group:[
        { name:"念屿北诗彡", phonenum:"15727451092",src:"static/11.jpg"},
        { name:"你若一直在", phonenum:"15727741065",src:"static/7.jpg"}
      ]
    },
    {
      index:"Q",
      group:[
        { name:"浅浅的微笑", phonenum:"15727741099",src:"static/13.jpg"}
      ]
    },
    {
      index:"S",
      group:[
        { name:"宿命的武装", phonenum:"15727745052",src:"static/5.jpg"},
        { name:"岁月你别催", phonenum:"15727784292",src:"static/10.jpg"}
      ]
    },
    {
      index:"W",
      group:[
        { name:"我陪你无奈", phonenum:"15727741053",src:"static/15.jpg"},
        { name:"望断江南岸", phonenum:"15727485232",src:"static/16.jpg"},
        { name:"温柔都给你", phonenum:"15627341092",src:"static/2.jpg"}

      ]
    },
    {
      index:"X",
      group:[
        { name:"相忘于江湖", phonenum:"15727741092",src:"static/9.jpg"}
      ]
    },
    {
      index:"Z",
      group:[
        { name:"做你怀中猫", phonenum:"15775754142",src:"static/21.jpg"},
        { name:"专属的甜蜜", phonenum:"17444558256",src:"static/19.jpg"},
        { name:"只留在昨天", phonenum:"15622341092",src:"static/1.jpg"}
      ]
    },
  ];

  var arrays = ["A","B","C","D","E","F","G","H","I","K","L","M","N","O",
    "P","Q","R","S","T","U","V","W","X","Y","Z"];

//  导出
export default {
  name: 'App',
  data: function () {
    return {
      dataVue:dataOut,
      personDatas:persons,
      indexArrays:arrays
    }
  },
}
</script>

<style>
  * {
    margin: 0px;
    padding: 0px;
  }
  body{
    height: 2000px;
  }
  #app{
    position: relative;
  }
  ul{
    list-style: none;
  }
</style>
