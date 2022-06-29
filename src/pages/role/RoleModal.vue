<template>
  <a-modal
    :title="role === undefined ? $ta('new|role|--|add|needLoginAgain') : $ta('modify|role|--|modify|needLoginAgain')"
    v-model="isVisible"
    @ok="saveAs"
  >
    <a-form :form="form" layout="horizontal">
      <a-form-item
        :label="$t('id')"
        :labelCol="{span: 4}"
        :wrapperCol="{span: 18}"
        style="display: none"
      >
        <a-input
          v-decorator="['id', {rules: [{ required: false, message: $ta('input|id'), whitespace: true }]}]"
          :placeholder="$ta('input|id')" 
        />
      </a-form-item>
      <a-form-item
        :label="$ta('role|name')"
        :labelCol="{span: 4}"
        :wrapperCol="{span: 18}"
      >
        <a-input
          allowClear
          v-decorator="['roleName', {rules: [{ required: true, message: $ta('input|role|name'), whitespace: true }]}]"
          :placeholder="$ta('input|role|name')" 
        />
      </a-form-item>
      <a-form-item
        :label="$ta('permission')"
        :labelCol="{span: 4}"
        :wrapperCol="{span: 18}"
      >
        <a-tree
          v-model="checkedKeys"
          checkable
          :selectable="false"
          :checkStrictly="true"
          :expanded-keys="expandedKeys"
          :auto-expand-parent="autoExpandParent"
          :tree-data="permissionData"
          @expand="onExpand"
          @check="onCheck"
        />
      </a-form-item>
    </a-form>
  </a-modal>
</template>

<script>
import { permissionData } from './data.js'

export default {
  name: 'RoleModal',
  i18n: require('./i18n'),
  props: {
    visible: Boolean,
    role: Object,
  },
  data() {
    return {
      form: this.$form.createForm(this),
      isVisible: false,
      expandedKeys: [],
      autoExpandParent: false,
      checkedKeys: [],
      permissionData: permissionData,
    }
  },
  watch: {
    deep: true,
    immediate: true,
    visible() {
      this.isVisible = !this.isVisible
      let data = []
      if (this.role !== undefined && this.role !== null) {
        this.form.getFieldDecorator('roleName', { initialValue: this.role?.roleName })
        data = this.permissionData.filter(item => { return this.role.permission.includes(item.title) })
        if (data.length > 0) {
          this.checkedKeys = data.map(e => { return e.key })
          this.expandedKeys = data.filter(item => item.children?.length > 0).map(e => { return e.key })
          data = data.filter(
            item => item.children?.filter(
              e => { return this.role.permission.includes(e.title) }
            )).map(
              item => { return item.children.map(el => { return el.key })
            }).forEach(e => { this.checkedKeys.push(...e) })
        }
        console.log(data)
        console.log(this.checkedKeys)
        this.autoExpandParent = true
      } else {
        this.form.getFieldDecorator('roleName', { initialValue: null })
      }
    },
  },
  methods: {
    onExpand(expandedKeys) {
      console.log('onExpand', expandedKeys);
      // if not set autoExpandParent to false, if children expanded, parent can not collapse.
      // or, you can remove all expanded children keys.
      this.expandedKeys = expandedKeys;
      this.autoExpandParent = false;
    },
    onCheck(checkedKeys) {
      console.log('onCheck', checkedKeys);
      this.checkedKeys = checkedKeys;
    },
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