<template>
  <div class="home">
    <h4>demo</h4>
    <h5 ref="h5"></h5>
    <h2 ref="message">{{ mge }}</h2>
    <div>
      ##在下次 DOM
      更新循环结束之后执行延迟回调。在修改数据之后立即使用这个方法，获取更新后的
      DOM。##
    </div>
    <button @click="click()">修改数据</button>
  </div>
</template>

<script>
export default {
  name: "Home",
  components: {},
  computed: {
    mge() {
      if (this.state) {
        return "我是之前的数据";
      } else {
        return "我改变了";
      }
    },
  },
  data() {
    return {
      state: false,
    };
  },
  created() {
    console.log("vue创建实例");
    this.$nextTick(() => {
      this.$refs.h5.innerHTML = '在Vue什么周期created中操作DOM'
    });
  },
  mounted() {
    console.log("DOM挂载完毕");
  },
  methods: {
    click() {
      this.state = !this.state;
      this.$nextTick(() => {
        console.log(this.$refs.message.innerHTML);
        alert(this.$refs.message.innerHTML);
      });
    },
  },
};
</script>
