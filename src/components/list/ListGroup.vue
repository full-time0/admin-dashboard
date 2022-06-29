<template>
  <div class="list-group">
    <draggable :options="dragOptions">
      <slot></slot>
    </draggable>
  </div>
</template>

<script>
import Draggable from 'vuedraggable'

const dragOptions = {
  sort: true,
  scroll: true,
  scrollSpeed: 2,
  animation: 150,
  ghostClass: 'dragable-ghost',
  chosenClass: 'dragable-chose',
  dragClass: 'dragable-drag'
}


export default {
  name: 'ListGroup',
  i18n: require('./i18n'),
  components: {Draggable},
  props: ['group'],
  data () {
    return {
      dragOptions: {...dragOptions, group: this.group}
    }
  },
  computed: {
    count () {
      return this.$slots.default.length
    }
  }
}
</script>

<style lang="less">
  .list-group{
    background-color: @background-color-light;
  }
</style>