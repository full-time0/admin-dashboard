<template>
  <a-modal
    width="35%"
    :title="agent === undefined ? $ta('new|agent') : $ta('modify|agent')"
    v-model="isVisible"
    @ok="saveAs"
  >
    <a-form :form="form" layout="horizontal">
      <a-form-item
        :label="$t('name')"
        :labelCol="{span: 6}"
        :wrapperCol="{span: 15}"
      >
        <a-input
          allowClear
          v-decorator="['name', {rules: [{ required: true, message: $ta('input|name'), whitespace: true}]}]"
          :placeholder="$ta('input|name')" 
        />
      </a-form-item>
      <a-form-item
        :label="$t('phone')"
        :labelCol="{span: 6}"
        :wrapperCol="{span: 15}"
      >
        <a-input
          allowClear
          v-decorator="['phone', {rules: [{ required: true, message: $ta('input|phone'), whitespace: true}]}]"
          :placeholder="$ta('input|phone')"
        />
      </a-form-item>
      <a-form-item
        :label="$t('password')"
        :labelCol="{span: 6}"
        :wrapperCol="{span: 15}"
      >
        <a-input-password
          v-decorator="['password', {rules: [{ required: false, message: $ta('input|password'), whitespace: true}]}]"
          :placeholder="$ta('input|password')"
        />
      </a-form-item>
      <a-form-item
        :label="$ta('invite|code')"
        :labelCol="{span: 6}"
        :wrapperCol="{span: 15}"
      >
        <a-input
          v-decorator="['code', {rules: [{ required: false, message: $ta('input|invite|code'), whitespace: true}]}]"
          :placeholder="$ta('input|invite|code')"
        />
      </a-form-item>
      <a-form-item
        :label="$ta('invite|link')"
        :labelCol="{span: 6}"
        :wrapperCol="{span: 15}"
      >
        <a-input
          v-decorator="['link', {rules: [{ required: false, message: $ta('input|invite|link'), whitespace: true}]}]"
          :placeholder="$ta('input|invite|link')"
        />
      </a-form-item>
      <a-form-item
        :label="$t('type')"
        :labelCol="{span: 6}"
        :wrapperCol="{span: 15}"
      >
        <a-radio-group
          v-decorator="['type', {rules: [{ required: true, message: $ta('select|type')}]}]"
        >
          <a-radio value="直推">{{$t('pushStraight')}}</a-radio>
          <a-radio value="全线">{{$t('accrossBoard')}}</a-radio>
        </a-radio-group>
      </a-form-item>
      <a-form-item
        :label="$ta('member|giveGift')"
        :labelCol="{span: 6}"
        :wrapperCol="{span: 15}"
      >
        <a-radio-group
          v-decorator="['gift', {rules: [{ required: true, message: $ta('select|member|giveGift')}]}]"
        >
          <a-radio value="否">{{$t('no')}}</a-radio>
          <a-radio value="是">{{$t('yes')}}</a-radio>
        </a-radio-group>
      </a-form-item>
      <a-form-item
        :label="$ta('whatsapp|account')"
        :labelCol="{span: 6}"
        :wrapperCol="{span: 15}"
      >
        <a-textarea 
          v-decorator="['whatsappAcc', {rules: [{ required: false, message: $ta('input|whatsappInputPlaceholder'), whitespace: true}]}]"
          :placeholder="$ta('input|whatsappInputPlaceholder')"
        />
      </a-form-item>
    </a-form>
  </a-modal>
</template>

<script>

export default {
  name: 'AgentModal',
  i18n: require('./i18n'),
  props: {
    visible: Boolean,
    agent: {
      type: Object,
    },
  },
  data() {
    return {
      form: this.$form.createForm(this),
      isVisible: false,
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
      if (this.agent !== undefined && this.agent !== null) {
        this.form.getFieldDecorator('name', { initialValue: this.agent?.name })
        this.form.getFieldDecorator('phone', { initialValue: this.agent?.phone })
        this.form.getFieldDecorator('code', { initialValue: this.agent?.inviteCode })
        this.form.getFieldDecorator('link', { initialValue: this.agent?.inviteLink })
        this.form.getFieldDecorator('type', { initialValue: this.agent?.type })
        this.form.getFieldDecorator('gift', { initialValue: this.agent?.isGiveGift })
        this.form.getFieldDecorator('whatsappAcc', { initialValue: this.agent?.whatsapp })
      } else {
        this.form.getFieldDecorator('name', { initialValue: null })
        this.form.getFieldDecorator('phone', { initialValue: null })
        this.form.getFieldDecorator('code', { initialValue: null })
        this.form.getFieldDecorator('link', { initialValue: null })
        this.form.getFieldDecorator('type', { initialValue: null })
        this.form.getFieldDecorator('gift', { initialValue: null })
        this.form.getFieldDecorator('whatsappAcc', { initialValue: null })
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