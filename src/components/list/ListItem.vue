<template>
  <div class="list-group-item">
    <ul 
      class="flex mode-list"  
      style="list-style: none;"
    >
      <li 
        v-for="(value, key, index) in item" 
        :key="index"
      >
        <span v-if="valueData.includes(value)">
          {{$t(key)}}: 
          <a-tag :color="valueData.includes(value) ? 'green' : 'volcano'">
            {{value}}
          </a-tag>
        </span>
        <span v-else>
          {{key}}: {{value}}
        </span>
      </li>
    </ul>
  </div>
</template>

<script>
// const keyData = ['已使用并完成', '是'];
const valueData = ['已使用并完成', '是'];

export default {
  name: 'ListItem',
  props: ['item'],
  data () {
    return {
      valueData
    }
  },
}
</script>

<style lang="less" scoped>
  .list-group-item{
    display: flex;
    box-shadow: 0 1px 1px @shadow-color;
    & :hover{
      cursor: move;
      box-shadow: 0 1px 2px @shadow-color;
    }
  }
  .mode-list {
    margin-bottom: 5px
  }
  .flex {
    display: flex;
    width: 100%;
    justify-content: space-between;
    padding: 5px 14px;
    border: 1px solid #e8e8e8;
}
</style>
