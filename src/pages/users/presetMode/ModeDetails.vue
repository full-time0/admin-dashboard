<template>
  <a-card :loading="loading">
    <a-page-header
      style="border: 1px solid rgb(235, 237, 240)"
      :title="$t('details')"
      :sub-title="$t('modeDetailsAndModifySorting') + ' (' + $t('dragListDataToSort') + ')'"
      @back="() => $router.go(-1)"
    >
      <template slot="extra">
        <a-button @click="confirm" type="primary">
          {{$ta('confirm|modify')}}
        </a-button>
      </template>
    </a-page-header>
    <list-group group="mode">
      <list-item :key="index" v-for="(item, index) in data" :item="item" />
    </list-group>
  </a-card>
</template>

<script>
const data = [
  {模式名称: 'test1', 创建时间: '2022-6-16 12:20:5', 修改时间: '2022-6-16 12:20:5', 状态: '已使用并完成'},
  {模式名称: 'test2', 创建时间: '2022-6-16 12:20:5', 修改时间: '2022-6-16 12:20:5', 状态: '已使用并完成'},
  {模式名称: 'test3', 创建时间: '2022-6-16 12:20:5', 修改时间: '2022-6-16 12:20:5', 状态: '已使用并完成'},
  {模式名称: 'test4', 创建时间: '2022-6-16 12:20:5', 修改时间: '2022-6-16 12:20:5', 状态: '已使用并完成'},
  {模式名称: 'test5', 创建时间: '2022-6-16 12:20:5', 修改时间: '2022-6-16 12:20:5', 状态: '已使用并完成'},
  {模式名称: 'test6', 创建时间: '2022-6-16 12:20:5', 修改时间: '2022-6-16 12:20:5', 状态: '已使用并完成'},
  {模式名称: 'test7', 创建时间: '2022-6-16 12:20:5', 修改时间: '2022-6-16 12:20:5', 状态: '已使用并完成'},
  {模式名称: 'test8', 创建时间: '2022-6-16 12:20:5', 修改时间: '2022-6-16 12:20:5', 状态: '已使用并完成'},
  {模式名称: 'test9', 创建时间: '2022-6-16 12:20:5', 修改时间: '2022-6-16 12:20:5', 状态: '已使用并完成'},
  {模式名称: 'test10', 创建时间: '2022-6-16 12:20:5', 修改时间: '2022-6-16 12:20:5', 状态: '已使用并完成'},
  {模式名称: 'test11', 创建时间: '2022-6-16 12:20:5', 修改时间: '2022-6-16 12:20:5', 状态: '已使用并完成'},
  {模式名称: 'test12', 创建时间: '2022-6-16 12:20:5', 修改时间: '2022-6-16 12:20:5', 状态: '已使用并完成'},
  {模式名称: 'test13', 创建时间: '2022-6-16 12:20:5', 修改时间: '2022-6-16 12:20:5', 状态: '已使用并完成'},
  {模式名称: 'test14', 创建时间: '2022-6-16 12:20:5', 修改时间: '2022-6-16 12:20:5', 状态: '已使用并完成'},
];

import ListGroup from '../../../components/list/ListGroup'
import ListItem from '../../../components/list/ListItem'

export default {
  name: 'ModeDetails',
  i18n: require('./i18n'),
  props: {
    visible: Boolean,
  },
  components: {ListItem, ListGroup},
  data() {
    return {
      loading: false,
      data
    }
  },
  mounted() {
  },
  watch: {
    deep: true,
    immediate: true,
    visible() {
      this.isVisible = !this.isVisible
    },
  },
  methods: {
    confirm (e) {
      e.preventDefault()
      this.isVisible = !this.isVisible
    },
  }
}
</script>

<style lang="less" scoped>
  .dragable-ghost{
    border: 1px dashed red;
    opacity: 1;
  }
  .dragable-chose{
    border: 1px dashed red;
    opacity: 0.8;
  }
  .dragable-drag{
    border: 1px dashed red;
    opacity: 1;
  }
</style>