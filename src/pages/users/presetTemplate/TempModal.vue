<template>
  <a-modal
    :title="template === undefined ? $ta('new|template') : $ta('modify|template')"
    v-model="isVisible"
    @ok="saveAs"
  >
    <div class="flex">
      <a-form-item
        :label="$ta('template|name')"
        :labelCol="{span: 4}"
        :wrapperCol="{span: 18, offset: 1}"
      >
        <a-input
          allowClear
          v-model="templateName"
          :placeholder="$ta('input|template|name')" 
        />
      </a-form-item>
    </div>
    <a-transfer 
      :titles="[$ta('own|template'), $ta('selected|template')]"
      searchPlaceholder="请输入搜索内容"
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
  name: 'TempModal',
  i18n: require('./i18n'),
  props: {
    visible: Boolean,
    template: {
      type: Object,
    },
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
      templateName: '',
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
      if (this.template !== undefined && this.template !== null) {
        this.templateName = this.template.templateName
      } else {
        this.templateName = null
      }
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