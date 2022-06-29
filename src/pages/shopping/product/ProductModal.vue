<template>
  <a-modal
    :title="product === undefined ? $ta('new|product') : $ta('modify|product')"
    v-model="isVisible"
    @ok="saveAs"
  >
    <a-form :form="form" layout="horizontal">
      <a-form-item
        :label="$ta('product|name')"
        :labelCol="{span: 4}"
        :wrapperCol="{span: 20}"
      >
        <a-input
          allowClear
          v-decorator="['productName', {rules: [{ required: true, message: $ta('input|product|name'), whitespace: true}]}]"
          :placeholder="$ta('input|product|name')" 
        />
      </a-form-item>
      <a-form-item
        :label="$ta('product|picture')"
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
      <a-form-item
        :label="$ta('product|price')"
        :labelCol="{span: 4}"
        :wrapperCol="{span: 20}"
      >
        <a-input
          allowClear
          v-decorator="['price', {rules: [{ required: true, message: $ta('input|product|price'), whitespace: true}]}]"
          :placeholder="$ta('input|product|price')" 
        />
      </a-form-item>
      <a-form-item
        :label="$ta('shop|name')"
        :labelCol="{span: 4}"
        :wrapperCol="{span: 20}"
        has-feedback
        :validate-status="product && product.shopName !== null ? 'success': ''"
        >
        <a-select
          v-decorator="['shopName', {rules: [{ required: true, message: $ta('select|shop|name')}]}]"
          :placeholder="$ta('select|shop|name')"
        >
          <a-select-option v-for="(option, index) in options" v-bind:value="option.value" v-bind:key="index">
            {{ option.text }}
          </a-select-option>
        </a-select>
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
  name: 'ProductModal',
  i18n: require('./i18n'),
  props: {
    visible: Boolean,
    product: {
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
    }
  },
  watch: {
    deep: true,
    immediate: true,
    visible() {
      this.isVisible = !this.isVisible
      if (this.product !== undefined && this.product !== null) {
        this.type = this.product?.type
        this.form.getFieldDecorator('productName', { initialValue: this.product?.productName })
        this.form.getFieldDecorator('picture', { initialValue: this.product?.picture })
        this.form.getFieldDecorator('price', { initialValue: this.product?.price })
        this.form.getFieldDecorator('shopName', { initialValue: this.product?.shopName })
      } else {
        this.form.getFieldDecorator('productName', { initialValue: null })
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