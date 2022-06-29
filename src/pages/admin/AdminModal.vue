<template>
  <a-modal
    :title="admin === undefined ? $ta('new|administrator') : $ta('modify|administrator')"
    v-model="isVisible"
    @ok="saveAs"
  >
    <a-form :form="form" layout="horizontal">
      <a-form-item
        :label="$t('type')"
        :labelCol="{span: 4}"
        :wrapperCol="{span: 18}"
        has-feedback
        :validate-status="admin && admin.associatedRole !== null ? 'success': ''"
      >
        <a-select 
          :placeholder="$ta('select|type')"
          v-decorator="['type', {rules: [{ required: true, message: $ta('select|type'), whitespace: true }]}]"
        >
          <a-select-option value="超级管理员">超级管理员</a-select-option>
          <a-select-option value="财务管理员工">财务管理员工</a-select-option>
          <a-select-option value="演示管理员">演示管理员</a-select-option>
        </a-select>
      </a-form-item>
      <a-form-item
        :label="$t('nickname')"
        :labelCol="{span: 4}"
        :wrapperCol="{span: 18}"
      >
        <a-input
          allowClear
          v-decorator="['nickName', {rules: [{ required: true, message: $ta('input|nickname'), whitespace: true }]}]"
          :placeholder="$ta('input|nickname')" 
        />
      </a-form-item>
      <a-form-item
        :label="$t('username')"
        :labelCol="{span: 4}"
        :wrapperCol="{span: 18}"
      >
        <a-input
          allowClear
          v-decorator="['userName', {rules: [{ required: true, message: $ta('input|username'), whitespace: true }]}]"
          :placeholder="$ta('input|username')" 
        />
      </a-form-item>
      <a-form-item
        :label="$t('password')"
        :labelCol="{span: 4}"
        :wrapperCol="{span: 18}"
      >
        <a-input-password
          v-decorator="['password', {rules: [{ required: true, message: $t('notChangeDefaultPwd'), whitespace: true }]}]"
          :placeholder="$t('notChangeDefaultPwd')" 
        />
      </a-form-item>
    </a-form>
  </a-modal>
</template>

<script>

export default {
  name: 'AdminModal',
  i18n: require('./i18n'),
  props: {
    visible: Boolean,
    admin: Object,
  },
  data() {
    return {
      form: this.$form.createForm(this),
      isVisible: false,
    }
  },
  watch: {
    deep: true,
    immediate: true,
    visible() {
      this.isVisible = !this.isVisible
      if (this.admin !== undefined && this.admin !== null) {
        this.form.getFieldDecorator('type', { initialValue: this.admin?.associatedRole })
        this.form.getFieldDecorator('nickName', { initialValue: this.admin?.nickName })
        this.form.getFieldDecorator('userName', { initialValue: this.admin?.userName })
      } else {
        this.form.getFieldDecorator('type', { initialValue: null })
        this.form.getFieldDecorator('nickName', { initialValue: null })
        this.form.getFieldDecorator('userName', { initialValue: null })
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