<template>
  <a-modal
    :title="ipData === undefined ? '新增银行卡' : '修改银行卡'"
    v-model="isVisible"
    @ok="addNewBank"
  >
    <a-form :form="form" layout="horizontal">
      <a-form-item
        :label="$t('ipAddr')"
        :labelCol="{span: 6}"
        :wrapperCol="{span: 17}"
      >
        <a-input
          allowClear
          style="width: 100%"
          v-decorator="['ipAddr', {rules: [{ required: true, message: $ta('input|ipAddr'), whitespace: true}]}]"
          :placeholder="$ta('input|ipAddr')"
        />
      </a-form-item>
      <a-form-item
        :label="$t('isBlackList')"
        :labelCol="{span: 6}"
        :wrapperCol="{span: 15}"
      >
        <a-radio-group
          v-decorator="['isBlackList', {rules: [{ required: true, message: $ta('select')}]}]"
        >
          <a-radio value="否">{{$t('no')}}</a-radio>
          <a-radio value="是">{{$t('yes')}}</a-radio>
        </a-radio-group>
      </a-form-item>
    </a-form>
  </a-modal>
</template>

<script>

export default {
  name: 'EditModal',
  i18n: require('./i18n'),
  props: {
    visible: Boolean,
    ipData: {
      type: Object,
    },
  },
  data() {
    return {
      form: this.$form.createForm(this),
      isVisible: false,
      options: [
        { text: '否', value: 'no' },
        { text: '是', value: 'yes' },
      ]
    }
  },
  watch: {
    deep: true,
    immediate: true,
    visible() {
      this.isVisible = !this.isVisible
      if (this.ipData !== undefined && this.ipData !== null) {
        this.form.getFieldDecorator('ipAddr', { initialValue: this.ipData?.userLoginIP })
        this.form.getFieldDecorator('isBlackList', { initialValue: this.ipData?.isBlackList })
      } else {
        this.form.getFieldDecorator('ipAddr', { initialValue: null })
        this.form.getFieldDecorator('isBlackList', { initialValue: null })
      }
    },
  },
  methods: {
    addNewBank (e) {
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