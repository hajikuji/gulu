<template>
  <button class="g-button" :class="{ [`icon-${iconPosition}`]: true }">
    <Icon class="icon" v-if="icon" :name="icon"></Icon>
    <div class="content">
      <slot />
    </div>
  </button>
</template>

<script>
import Icon from "./icon.vue";
export default {
  props: {
    icon: {
      type: String,
      default: "",
    },
    iconPosition: {
      type: String,
      default: "left",
      validator: (val) => {
        return val === "left" || val === "right";
      },
    },
  },
  components: {
    Icon,
  },
};
</script>

<style lang="scss">
.g-button {
  font-size: var(--font-size);
  height: var(--button-height);
  padding: 0 1em;
  border-radius: var(--border-radius);
  border: 1px solid var(--border-color);
  background: var(--button-bg);
  display: inline-flex;
  vertical-align: middle;
  align-items: center;
  justify-content: center;
  line-height: 1;

  &:hover {
    border-color: var(--border-color-hover);
  }
  &:active {
    background-color: var(--button-active-bg);
  }

  &:focus {
    outline: none;
  }

  .icon {
    order: 1;
    margin-right: 0.1em;
  }
  .content {
    order: 2;
  }
  &.icon-right {
    > .icon {
      order: 2;
      margin-right: 0;
      margin-left: 0.1em;
    }
    > .content {
      order: 1;
    }
  }
}
</style>