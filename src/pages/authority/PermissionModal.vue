<template>
  <a-modal
    :title="permission === null ? $ta('new|permission') : $ta('modify|permission')"
    v-model="isVisible"
    @ok="saveAs"
  >
    <a-form :form="form" layout="horizontal">
      <a-form-item
        :label="$t('id')"
        :labelCol="{span: 5}"
        :wrapperCol="{span: 18}"
        style="display: none"
      >
        <a-input
          v-decorator="['id', {rules: [{ required: false, message: $ta('input|id'), whitespace: true }]}]"
          :placeholder="$ta('input|id')" 
        />
      </a-form-item>
      <a-form-item
        :label="$t('type')"
        :labelCol="{span: 5}"
        :wrapperCol="{span: 18}"
        has-feedback
        :validate-status="permission && permission.id !== null ? 'success': ''"
      >
        <a-select 
          :placeholder="$ta('select|type')"
          v-decorator="['type', {rules: [{ required: false}]}]"
        >
          <a-select-option v-for="(type, index) in permissionTypes" v-bind:value="type.value" v-bind:key="index">
            {{ type.title }}
          </a-select-option>
        </a-select>
      </a-form-item>
      <a-form-item
        :label="$ta('permission|name')"
        :labelCol="{span: 5}"
        :wrapperCol="{span: 18}"
      >
        <a-input
          allowClear
          v-decorator="['name', {rules: [{ required: true, message: $ta('input|permission|name'), whitespace: true }]}]"
          :placeholder="$ta('input|permission|name')" 
        />
      </a-form-item>
      <a-form-item
        :label="$ta('permission|address')"
        :labelCol="{span: 5}"
        :wrapperCol="{span: 18}"
      >
        <a-input
          allowClear
          v-decorator="['router', {rules: [{ required: true, message: $ta('input|permission|address'), whitespace: true }]}]"
          :placeholder="$ta('input|permission|address')" 
        />
      </a-form-item>
    </a-form>
  </a-modal>
</template>

<script>
import { permissionTypes } from './data.js'

export default {
  name: 'PermissionModal',
  i18n: require('./i18n'),
  props: {
    visible: Boolean,
    permission: Object,
  },
  data() {
    return {
      form: this.$form.createForm(this),
      isVisible: false,
      permissionTypes: permissionTypes,
    }
  },
  watch: {
    deep: true,
    immediate: true,
    visible() {
      this.isVisible = !this.isVisible
      if (this.permission !== undefined && this.permission !== null) {
        this.form.getFieldDecorator('type', { initialValue: this.permission?.id })
        this.form.getFieldDecorator('name', { initialValue: this.permission?.name })
        this.form.getFieldDecorator('router', { initialValue: this.permission?.router })
      } else {
        this.form.getFieldDecorator('type', { initialValue: null })
        this.form.getFieldDecorator('name', { initialValue: null })
        this.form.getFieldDecorator('router', { initialValue: null })
      }
    },
  },
  methods: {
    saveAs(e) {
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