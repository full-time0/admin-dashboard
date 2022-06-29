<template>
  <a-row :gutter="24">
    <a-col :md="12" :sm="24" :loading="loading">
      <a-card :title="$ta('invite|rebate')">
        <a-form :form="form">
          <a-form-item
            label="一级推荐人分佣点"
            :labelCol="{span: 6}"
            :wrapperCol="{span: 15}"
          >
            <a-input
              allowClear
              v-decorator="['firstPoint', {rules: [{ required: false, message: $ta('input'), whitespace: true}]}]"
            />
          </a-form-item>
          <a-form-item
            label="二级推荐人分佣点"
            :labelCol="{span: 6}"
            :wrapperCol="{span: 15}"
          >
            <a-input
              allowClear
              v-decorator="['secondPoint', {rules: [{ required: false, message: $ta('input'), whitespace: true}]}]"
            />
          </a-form-item>
          <a-form-item
            label="三级推荐人分佣点"
            :labelCol="{span: 6}"
            :wrapperCol="{span: 15}"
          >
            <a-input
              allowClear
              v-decorator="['thirdPoint', {rules: [{ required: false, message: $ta('input'), whitespace: true}]}]"
            />
          </a-form-item>
          <a-form-item
            label="四级推荐人分佣点"
            :labelCol="{span: 6}"
            :wrapperCol="{span: 15}"
          >
            <a-input
              allowClear
              v-decorator="['fourthPoint', {rules: [{ required: false, message: $ta('input'), whitespace: true}]}]"
            />
          </a-form-item>
          <a-form-item
            label="五级推荐人分佣点"
            :labelCol="{span: 6}"
            :wrapperCol="{span: 15}"
          >
            <a-input
              allowClear
              v-decorator="['fifthPoint', {rules: [{ required: false, message: $ta('input'), whitespace: true}]}]"
            />
          </a-form-item>
          <a-form-item
            label="佣金比例"
            :labelCol="{span: 6}"
            :wrapperCol="{span: 15}"
          >
            <a-input
              allowClear
              v-decorator="['commissionRate', {rules: [{ required: false, message: $ta('input'), whitespace: true}]}]"
            />
          </a-form-item>
          <a-form-item
            label="推荐等级"
            :labelCol="{span: 6}"
            :wrapperCol="{span: 15}"
          >
            <a-input-number
              style="width: 100%"
              :min="1"
              v-decorator="['recommendRate']"
            />
          </a-form-item>
          <a-form-item
            :label="$t('operate')"
            :labelCol="{span: 6}"
            :wrapperCol="{span: 15}"
          >
            <a-button type="primary" @click="modify" block>
              {{$t('modify')}}
            </a-button>
          </a-form-item>
        </a-form>
      </a-card>
    </a-col>
  </a-row>
</template>

<script>

export default {
  name: 'InvitationRebate',
  i18n: require('./i18n'),
  data () {
    return {
      form: this.$form.createForm(this),
      loading: false,
    }
  },
  methods: {
    modify (e) {
      e.preventDefault()
      this.form.validateFields((err, values) => {
        if (!err) {
          console.log('Received values of form: ', values)
        }
      })
    },
  }
}
</script>