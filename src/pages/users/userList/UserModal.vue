<template>
  <a-modal
    :title="user === undefined ? '新增会员' : '修改会员'"
    v-model="isVisible"
    @ok="addNewUser"
  >
    <a-form :form="form" layout="horizontal">
      <a-form-item
        :label="$t('name')"
        :labelCol="{span: 4}"
        :wrapperCol="{span: 18}"
      >
        <a-input
          allowClear
          v-decorator="['name', {rules: [{ required: true, message: $ta('input|name'), whitespace: true}]}]"
          :placeholder="$ta('input|name')" 
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
        :label="$t('password')"
        :labelCol="{span: 4}"
        :wrapperCol="{span: 18}"
      >
        <a-input-password
          v-decorator="['password', {rules: [{ required: true, message: $ta('input|password'), whitespace: true}]}]"
          :placeholder="$ta('input|password')"
        />
      </a-form-item>
      <a-form-item
        :label="$t('group')"
        :labelCol="{span: 4}"
        :wrapperCol="{span: 18}"
        has-feedback
        :validate-status="user && user.groupMode !== null ? 'success': ''"
        >
        <a-select
          v-decorator="['group', {rules: [{ required: true, message: $ta('select|group')}]}]"
          :placeholder="$ta('select|group')"
        >
          <a-select-option v-for="(option, index) in options" v-bind:value="option.value" v-bind:key="index">
            {{ option.text }}
          </a-select-option>
        </a-select>
      </a-form-item>
      <a-row>
        <a-col :md="12" :sm="24" >
          <a-form-item
            :label="$t('isLogin')"
            :labelCol="{span: 8}"
            :wrapperCol="{span: 16}"
          >
            <a-radio-group
              v-decorator="['isLogin', {rules: [{ required: true, message: $ta('select')}]}]"
            >
              <a-radio value="禁用">{{$t('no')}}</a-radio>
              <a-radio value="启用">{{$t('yes')}}</a-radio>
            </a-radio-group>
          </a-form-item>
        </a-col>
        <a-col :md="12" :sm="24" >
          <a-form-item
            :label="$t('isTransaction')"
            :labelCol="{span: 8}"
            :wrapperCol="{span: 16}"
          >
            <a-radio-group
              v-decorator="['isTransaction', {rules: [{ required: true, message: $ta('select')}]}]"
            >
              <a-radio value="否定">{{$t('no')}}</a-radio>
              <a-radio value="允许">{{$t('yes')}}</a-radio>
            </a-radio-group>
          </a-form-item>
        </a-col>
      </a-row>
      <a-row>
        <a-col :md="12" :sm="24" >
          <a-form-item
            :label="$t('isDeposit')"
            :labelCol="{span: 8}"
            :wrapperCol="{span: 16}"
          >
            <a-radio-group
              v-decorator="['isDeposit', {rules: [{ required: true, message: $ta('select')}]}]"
            >
              <a-radio value="否">{{$t('no')}}</a-radio>
              <a-radio value="是">{{$t('yes')}}</a-radio>
            </a-radio-group>
          </a-form-item>
        </a-col>
        <a-col :md="12" :sm="24" >
          <a-form-item
            :label="$t('isWithdraw')"
            :labelCol="{span: 8}"
            :wrapperCol="{span: 16}"
          >
            <a-radio-group
              v-decorator="['isWithdraw', {rules: [{ required: true, message: $ta('select')}]}]"
            >
              <a-radio value="否">{{$t('no')}}</a-radio>
              <a-radio value="是">{{$t('yes')}}</a-radio>
            </a-radio-group>
          </a-form-item>
        </a-col>
      </a-row>
      <a-row>
        <a-col :md="12" :sm="24" >
          <a-form-item
            :label="$t('isOrderGrabbing')"
            :labelCol="{span: 8}"
            :wrapperCol="{span: 16}"
          >
            <a-radio-group>
              <a-radio value="禁用">{{$t('no')}}</a-radio>
              <a-radio value="启用">{{$t('yes')}}</a-radio>
            </a-radio-group>
          </a-form-item>
        </a-col>
      </a-row>
      <a-form-item
        :label="$t('remark')"
        :labelCol="{span: 4}"
        :wrapperCol="{span: 18}"
      >
        <a-textarea 
          rows="3" 
          v-decorator="['remark', {rules: [{ required: false, message: $ta('input|remark'), whitespace: true}]}]"
          :placeholder="$ta('input|remark')"
        />
      </a-form-item>
    </a-form>
  </a-modal>
</template>

<script>

export default {
  name: 'UserModal',
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
        this.form.getFieldDecorator('name', { initialValue: this.user?.nickName })
        this.form.getFieldDecorator('phone', { initialValue: this.user?.memberPhone })
        this.form.getFieldDecorator('group', { initialValue: this.user?.groupMode })
        this.form.getFieldDecorator('isLogin', { initialValue: this.user?.loginStatus })
        this.form.getFieldDecorator('isTransaction', { initialValue: this.user?.transactionStatus })
        this.form.getFieldDecorator('isDeposit', { initialValue: this.user?.isDeposit })
        this.form.getFieldDecorator('isWithdraw', { initialValue: this.user?.isWithdraw })
      } else {
        this.form.getFieldDecorator('name', { initialValue: null })
        this.form.getFieldDecorator('phone', { initialValue: null })
        this.form.getFieldDecorator('group', { initialValue: null })
        this.form.getFieldDecorator('isLogin', { initialValue: null })
        this.form.getFieldDecorator('isTransaction', { initialValue: null })
        this.form.getFieldDecorator('isDeposit', { initialValue: null })
        this.form.getFieldDecorator('isWithdraw', { initialValue: null })
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