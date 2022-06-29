<template>
  <a-modal
    :title="order === undefined ? $ta('new|order') : $ta('modify|order')"
    v-model="isVisible"
    width="35%"
    @ok="saveAs"
  >
    <a-form :form="form" layout="horizontal">
      <a-form-item
        :label="$t('type')"
        :labelCol="{span: 3}"
        :wrapperCol="{span: 21}"
      >
        <a-input
          allowClear
          v-decorator="['name', {rules: [{ required: true, message: $ta('input|name'), whitespace: true}]}]"
          :placeholder="$ta('input|name')" 
        />
      </a-form-item>
      <a-form-item
        :label="$ta('name')"
        :labelCol="{span: 3}"
        :wrapperCol="{span: 20}"
      >
        <a-input
          allowClear
          v-decorator="['name', {rules: [{ required: true, message: $ta('input|name'), whitespace: true}]}]"
          :placeholder="$ta('input|name')" 
        />
      </a-form-item>
      <a-form-item
        :label="$ta('amount')"
        :labelCol="{span: 3}"
        :wrapperCol="{span: 20}"
      >
        <a-input
          allowClear
          v-decorator="['amount', {rules: [{ required: true, message: $ta('input|amount'), whitespace: true}]}]"
          :placeholder="$ta('input|amount')" 
        />
      </a-form-item>
      <a-form-item
        :label="$ta('picture')"
        :labelCol="{span: 3}"
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
  name: 'OrderModal',
  i18n: require('./i18n'),
  props: {
    visible: Boolean,
    order: {
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
      if (this.order !== undefined && this.order !== null) {
        this.type = this.order?.type
        this.form.getFieldDecorator('name', { initialValue: this.order?.name })
        this.form.getFieldDecorator('amount', { initialValue: this.order?.amount })
        this.form.getFieldDecorator('picture', { initialValue: this.order?.picture })
        this.form.getFieldDecorator('picture', { initialValue: this.order?.picture })
        this.form.getFieldDecorator('picture', { initialValue: this.order?.picture })
      } else {
        this.form.getFieldDecorator('type', { initialValue: null })
        this.form.getFieldDecorator('name', { initialValue: null })
        this.form.getFieldDecorator('amount', { initialValue: null })
        this.form.getFieldDecorator('picture', { initialValue: null })
        this.form.getFieldDecorator('picture', { initialValue: null })
        this.form.getFieldDecorator('picture', { initialValue: null })
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