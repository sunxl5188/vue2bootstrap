<template>
    <div class="container">
        <button type="button" class="btn btn-default" @click="btn">（默认样式）Default</button>

    </div>
</template>

<script>
  export default {
    name: "Home",
    data () {
      return {
        message: "传入的值"
      }
    },
    mounted () {

    },
    methods: {
      btn () {
        this.layer.alert(res.msg, {
          type: 0, //0（信息框，默认）1（页面层）2（iframe层）3（加载层）4（tips层）
          title: '信息',
          content: '',
          area: 'auto',
          offset: 'auto',
          icon: -1,
          btn: '确定',
          time: 0,
          shade: true,//是否显示遮罩
          yes: '',
          cancel: '',
          tips: [0, {}],//支持上右下左四个方向，通过1-4进行方向设定,可以设定tips: [1, '#c00']
          tipsMore: false,//是否允许多个tips
          shadeClose: false,//点击遮罩是否关闭
        })
      }
    },
    components: {}
  }
</script>

