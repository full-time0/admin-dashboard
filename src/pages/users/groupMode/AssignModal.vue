<template>
  <a-modal
    :title="'分配用户'"
    v-model="isVisible"
    width="55%"
    @ok="confirm"
  >
    <custom-transfer 
      :titles="transferTitles"
      :searchPlaceholder="searchPlaceholder"
      :dataSource="mockData" 
      :targetKeys="targetKeys"
      :columns="columns"
      :onChange="onChange"
      
    />
  </a-modal>
</template>

<script>
import CustomTransfer from '@/components/transfer/CustomTransfer'

const columns = [{
  title: 'ID',
  dataIndex: 'key',
}, {
  title: '手机号',
  dataIndex: 'title',
}];

const transferTitles = ['所有用户', '已分配用户']
const searchPlaceholder = '请输入搜索内容'

export default {
  name: 'AssignModal',
  i18n: require('./i18n'),
  components: {CustomTransfer},
  props: {
    visible: Boolean,
  },
  data() {
    return {
      isVisible: false,
      mockData: [],
      targetKeys: [],
      columns,
      transferTitles,
      searchPlaceholder,
    }
  },
  mounted() {
    this.getMock()
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
    getMock() {
      const targetKeys = [];
      const mockData = [];
      for (let i = 1; i < 76; i++) {
        const data = {
          key: i.toString(),
          title: `${i}`,
          description: `${Math.random() * 100}`,
          chosen: Math.random() * 2 > 1,
        };
        if (data.chosen) {
          targetKeys.push(data.key);
        }
        mockData.push(data);
      }
      this.mockData = mockData
      this.targetKeys = targetKeys
    },
    onChange(targetKeys, direction, moveKeys) {
      console.log(targetKeys, direction, moveKeys);
      this.targetKeys = targetKeys
    },
  }
}
</script>