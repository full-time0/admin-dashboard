<template>
  <a-modal
    width="35%"
    :title="account === undefined ? $ta('new|account') : $ta('modify|account')"
    v-model="isVisible"
    @ok="saveAs"
  >
    <a-form :form="form" layout="horizontal">
      <a-form-item
        :label="$ta('receipt|type')"
        :labelCol="{span: 4}"
        :wrapperCol="{span: 18}"
        has-feedback
        :validate-status="account && account.type !== null ? 'success': ''"
        >
        <a-select
          v-decorator="['type', {rules: [{ required: true, message: $ta('select|receipt|type')}]}]"
          :placeholder="$ta('select|receipt|type')"
        >
          <a-select-option v-for="(option, index) in options" v-bind:value="option.value" v-bind:key="index">
            {{ option.text }}
          </a-select-option>
        </a-select>
      </a-form-item>
      <a-form-item
        :label="$ta('account|name')"
        :labelCol="{span: 4}"
        :wrapperCol="{span: 18}"
      >
        <a-input
          allowClear
          v-decorator="['accountName', {rules: [{ required: true, message: $ta('input|account|name'), whitespace: true}]}]"
          :placeholder="$ta('input|account|name')" 
        />
      </a-form-item>
      <a-form-item
        :label="$ta('receipt|account')"
        :labelCol="{span: 4}"
        :wrapperCol="{span: 18}"
      >
        <a-input
          allowClear
          v-decorator="['receiptAccount', {rules: [{ required: true, message: $ta('input|receipt|account'), whitespace: true}]}]"
          :placeholder="$ta('input|receipt|account')" 
        />
      </a-form-item>
      <a-form-item
        :label="$ta('receipt|account')"
        :labelCol="{span: 4}"
        :wrapperCol="{span: 18}"
      >
        <a-transfer 
          :titles="[$ta('own|agent'), $ta('selected|agent')]"
          searchPlaceholder="请输入搜索内容"
          :dataSource="mockData" 
          :targetKeys="targetKeys"
          :render="item => item.title"
          :onChange="onChange"
          :listStyle="{width: '45%', height: '300px'}"
          showSearch
        />
      </a-form-item>
      <a-form-item
        :label="$ta('receipt|qrcode')"
        :labelCol="{span: 4}"
        :wrapperCol="{span: 20}"
      >
        <a-upload
          name="picture"
          list-type="picture-card"
          class="avatar-uploader"
          :show-upload-list="false"
          action="https://v4.admin.global-demo.net/admin/upload"
          @change="handleChange"
        >
          <img v-if="imageUrl" :src="imageUrl" alt="picture" />
          <div v-else>
            <a-icon :type="loading ? 'loading' : 'plus'" />
            <div class="ant-upload-text">
              Upload
            </div>
          </div>
        </a-upload>
      </a-form-item>
    </a-form>
  </a-modal>
</template>

<script>

function getBase64(img, callback) {
  const reader = new FileReader();
  reader.addEventListener('load', () => callback(reader.result));
  reader.readAsDataURL(img);
}

export default {
  name: 'AccountModal',
  i18n: require('./i18n'),
  props: {
    visible: Boolean,
    account: {
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
      loading: false,
      imageUrl: '',
      type: '',
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
      if (this.account !== undefined && this.account !== null) {
        this.type = this.account?.type
        this.form.getFieldDecorator('accountName', { initialValue: this.account?.accountName })
        this.form.getFieldDecorator('picture', { initialValue: this.account?.picture })
        this.form.getFieldDecorator('price', { initialValue: this.account?.price })
        this.form.getFieldDecorator('shopName', { initialValue: this.account?.shopName })
      } else {
        this.form.getFieldDecorator('accountName', { initialValue: null })
        this.form.getFieldDecorator('picture', { initialValue: null })
        this.form.getFieldDecorator('price', { initialValue: null })
        this.form.getFieldDecorator('shopName', { initialValue: null })
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
    handleChange(info) {
      if (info.file.status === 'uploading') {
        this.loading = true;
        return;
      }
      if (info.file.status === 'done') {
        // Get this url from response in real world.
        getBase64(info.file.originFileObj, imageUrl => {
          this.imageUrl = imageUrl;
          this.loading = false;
        });
      }
    },
  }
}
</script>

<style>
  .avatar-uploader > .ant-upload {
    width: 128px;
    height: 128px;
  }
  .ant-upload-select-picture-card i {
    font-size: 32px;
    color: #999;
  }

  .ant-upload-select-picture-card .ant-upload-text {
    margin-top: 8px;
    color: #666;
  }
</style>