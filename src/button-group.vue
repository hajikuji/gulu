<template>
  <div class="g-button-group">
    <slot />
  </div>
</template>

<script>
export default {
    mounted(){
        for (const node of this.$el.children) {
            let nodeName = node.nodeName.toLowerCase()
            if(nodeName !== 'button'){
                console.warn(`g-button-group的子元素应该是 g-button,你写的是 ${nodeName}`);
            }
            
        }
    }
};
</script>

<style lang="scss" scoped>
.g-button-group {
  display: flex;
  vertical-align: middle;

  > .g-button {
    border-radius: 0;
    &:not(:first-child) {
        margin-left: -1px;
    }
    &:first-child {
      border-top-left-radius: var(--border-radius);
      border-bottom-left-radius: var(--border-radius);
    }
    &:last-child {
      border-top-right-radius: var(--border-radius);
      border-bottom-right-radius: var(--border-radius);
    }
    &:hover {
      border: 1px solid var(--button-hover-color);
      position: relative;
      z-index: 1;
    }
  }
}
</style>