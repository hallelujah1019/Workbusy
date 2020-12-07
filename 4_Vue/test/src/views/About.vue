<template>
  <div class="about">
    <strong>
      keep-alive 是 Vue
      的内置组件，当它包裹动态组件时，会缓存不活动的组件实例，而不是销毁它们。和
      transition 相似，keep-alive 是一个抽象组件：它自身不会渲染成一个 DOM
      元素，也不会出现在父组件链中。
    </strong>
  </div>
</template>
<script>
export default {
  name:'alalal',
  data() {
    return {
      state: false,
    };
  },
  created() {
    console.log("11111");
  },
  activated() {
    console.log("缓存功能的生命周期");
  },
  deactivated() {
    console.log("缓存功能关闭");
  }
};
</script>
