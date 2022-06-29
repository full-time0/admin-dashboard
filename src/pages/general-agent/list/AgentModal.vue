<template>
  <a-modal
    width="45%"
    :title="agent === undefined ? $ta('new|general|agent') : $ta('modify|general|agent')"
    v-model="isVisible"
    @ok="saveAs"
  >
    <a-form :form="form" layout="horizontal">
      <a-row>
        <a-col :span="12">
          <a-form-item
            :label="$ta('account')"
            :labelCol="{span: 4}"
            :wrapperCol="{span: 18}"
          >
            <a-input
              allowClear
              v-decorator="['account', {rules: [{ required: true, message: $ta('input|account'), whitespace: true}]}]"
              :placeholder="$ta('input|account')" 
            />
          </a-form-item>
        </a-col>
        <a-col :span="12">
          <a-form-item
            :label="$ta('password')"
            :labelCol="{span: 4}"
            :wrapperCol="{span: 18}"
          >
            <a-input-password
              v-decorator="['password', {rules: [{ required: true, message: $ta('input|password'), whitespace: false}]}]"
              :placeholder="$ta('input|password')"
            />
          </a-form-item>
        </a-col>
      </a-row>
      <a-row>
        <a-col :span="12">
          <a-form-item
            :label="$ta('nickname')"
            :labelCol="{span: 4}"
            :wrapperCol="{span: 18}"
          >
            <a-input
              allowClear
              v-decorator="['name', {rules: [{ required: true, message: $ta('input|nickname'), whitespace: true}]}]"
              :placeholder="$ta('input|nickname')"
            />
          </a-form-item>
        </a-col>
        <a-col :span="12">
          <a-form-item
            :label="$ta('remark')"
            :labelCol="{span: 4}"
            :wrapperCol="{span: 18}"
          >
            <a-input
              allowClear
              v-decorator="['remark', {rules: [{ required: true, message: $ta('input|remark'), whitespace: true}]}]"
              :placeholder="$ta('input|remark')"
            />
          </a-form-item>
        </a-col>
      </a-row>
      <a-row>
        <a-col :span="12">
          <a-form-item
            :label="$ta('status')"
            :labelCol="{span: 4}"
            :wrapperCol="{span: 18}"
          >
            <a-radio-group
              v-decorator="['status', {rules: [{ required: true, message: $ta('select')}]}]"
            >
              <a-radio value="启用">{{$t('enable')}}</a-radio>
              <a-radio value="禁用">{{$t('disabled')}}</a-radio>
            </a-radio-group>
          </a-form-item>
        </a-col>
      </a-row>
    </a-form>
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
      options: [
        { text: 'One', value: 'A' },
        { text: 'Two', value: 'B' },
        { text: 'Three', value: 'C' }
      ],
      mockData: [],
      targetKeys: [],
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
      if (this.agent !== undefined && this.agent !== null) {
        this.form.getFieldDecorator('account', { initialValue: this.agent?.account })
        this.form.getFieldDecorator('name', { initialValue: this.agent?.name })
        this.form.getFieldDecorator('remark', { initialValue: this.agent?.remark })
        this.form.getFieldDecorator('status', { initialValue: this.agent?.status })
      } else {
        this.form.getFieldDecorator('account', { initialValue: null })
        this.form.getFieldDecorator('name', { initialValue: null })
        this.form.getFieldDecorator('remark', { initialValue: null })
        this.form.getFieldDecorator('status', { initialValue: null })
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