<template>
  <a-modal
    :title="isMode ? $ta('assign|mode') : $ta('assign|template')"
    v-model="isVisible"
    @ok="saveAs"
  >
    <a-transfer 
      :titles="isMode ? [$ta('own|mode'), $ta('selected|mode')] : [$ta('own|template'), $ta('selected|template')]"
      :searchPlaceholder="$ta('input|search|content')"
      :dataSource="mockData" 
      :targetKeys="targetKeys"
      :render="item => item.title"
      :onChange="onChange"
      :listStyle="{width: '45%', height: '300px'}"
      showSearch
    />
  </a-modal>
</template>

<script>
export default {
  name: 'ModeModal',
  i18n: require('./i18n'),
  props: {
    visible: Boolean,
    data: {
      type: Object,
    },
    isMode: Boolean,
  },
  data() {
    return {
      form: this.$form.createForm(this),
      isVisible: false,
      options: [
        { text: 'One', value: 'A' },
        { text: 'Two', value: 'B' },
        { text: 'Three', value: 'C' }
      ],
      mockData: [],
      targetKeys: [],
      transferTitles: [],
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
    saveAs (e) {
      e.preventDefault()
      this.form.validateFields((err, values) => {
        if (!err) {
          this.isVisible = !this.isVisible
          console.log('Received values of form: ', values)
        }
      })
    },
    getMock() {
      const targetKeys = [];
      const mockData = [];
      for (let i = 10; i < 700; i++) {
        const data = {
          key: i.toString(),
          title: `${i}`,
          description: `${i} -- ${i.toFixed(2)}`,
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