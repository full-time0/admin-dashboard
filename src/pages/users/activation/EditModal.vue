<template>
  <a-modal
    :title="user === undefined ? '新增会员' : '修改会员'"
    v-model="isVisible"
    @ok="addNewUser"
  >
    <a-form :form="form" layout="horizontal">
      <a-form-item
        :label="$t('userId')"
        :labelCol="{span: 4}"
        :wrapperCol="{span: 18}"
      >
        <a-input
          allowClear
          v-decorator="['userId', {rules: [{ required: true, message: $ta('input|userId'), whitespace: true}]}]"
          :placeholder="$ta('input|userId')" 
        />
      </a-form-item>
      <a-form-item
        :label="$t('username')"
        :labelCol="{span: 4}"
        :wrapperCol="{span: 18}"
      >
        <a-input
          allowClear
          v-decorator="['username', {rules: [{ required: true, message: $ta('input|username'), whitespace: true}]}]"
          :placeholder="$ta('input|username')"
        />
      </a-form-item>
      <a-form-item
        :label="$t('phone')"
        :labelCol="{span: 4}"
        :wrapperCol="{span: 18}"
      >
        <a-input
          allowClear
          v-decorator="['phone', {rules: [{ required: true, message: $ta('input|phone'), whitespace: true}]}]"
          :placeholder="$ta('input|phone')"
        />
      </a-form-item>
      <a-form-item
        :label="$t('state')"
        :labelCol="{span: 4}"
        :wrapperCol="{span: 18}"
        has-feedback
        :validate-status="user && user.state !== null ? 'success': ''"
        >
        <a-select
          v-decorator="['state', {rules: [{ required: true, message: $ta('select|state')}]}]"
          :placeholder="$ta('select|state')"
        >
          <a-select-option v-for="(option, index) in options" v-bind:value="option.value" v-bind:key="index">
            {{ option.text }}
          </a-select-option>
        </a-select>
      </a-form-item>
      <!-- <a-form-item
        :label="$t('remark')"
        :labelCol="{span: 4}"
        :wrapperCol="{span: 18}"
      >
        <a-textarea 
          rows="3" 
          v-decorator="['remark', {rules: [{ required: false, message: $ta('input|remark'), whitespace: true}]}]"
          :placeholder="$ta('input|remark')"
        />
      </a-form-item> -->
    </a-form>
  </a-modal>
</template>

<script>

export default {
  name: 'EditModal',
  i18n: require('./i18n'),
  props: {
    visible: Boolean,
    user: {
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
      ]
    }
  },
  watch: {
    deep: true,
    immediate: true,
    visible() {
      this.isVisible = !this.isVisible
      if (this.user !== undefined && this.user !== null) {
        this.form.getFieldDecorator('userId', { initialValue: this.user?.userId })
        this.form.getFieldDecorator('username', { initialValue: this.user?.username })
        this.form.getFieldDecorator('phone', { initialValue: this.user?.memberPhone })
        this.form.getFieldDecorator('state', { initialValue: this.user?.state })
      } else {
        this.form.getFieldDecorator('userId', { initialValue: null })
        this.form.getFieldDecorator('username', { initialValue: null })
        this.form.getFieldDecorator('phone', { initialValue: null })
        this.form.getFieldDecorator('state', { initialValue: null })
      }
    },
  },
  methods: {
    addNewUser (e) {
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