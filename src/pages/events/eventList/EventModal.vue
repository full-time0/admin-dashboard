<template>
  <a-modal
    :title="event === undefined ? $ta('new|weights') : $ta('modify|weights')"
    v-model="isVisible"
    @ok="saveAs"
  >
    <a-form :form="form" layout="horizontal">
      <a-form-item
        :label="$ta('weights')"
        :labelCol="{span: 4}"
        :wrapperCol="{span: 18}"
      >
        <a-input
          allowClear
          v-decorator="['weights', {rules: [{ required: true, message: $ta('input|weights'), whitespace: true}]}]"
          :placeholder="$ta('input|weights')" 
        />
      </a-form-item>
    </a-form>
  </a-modal>
</template>

<script>

const transferTitles = ['银行卡', '已添加银行卡']
const searchPlaceholder = '请输入搜索内容'

export default {
  name: 'EventModal',
  i18n: require('./i18n'),
  props: {
    visible: Boolean,
    event: {
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
      transferTitles,
      searchPlaceholder,
      loading: false,
    }
  },
  mounted() {
    // this.getMock()
  },
  watch: {
    deep: true,
    immediate: true,
    visible() {
      this.isVisible = !this.isVisible
      console.log(this.event)
      if (this.event !== undefined && this.event !== null) {
        this.form.getFieldDecorator('weights', { initialValue: this.event?.weights })
      } else {
        this.form.getFieldDecorator('weights', { initialValue: null })
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
  }
}
</script>