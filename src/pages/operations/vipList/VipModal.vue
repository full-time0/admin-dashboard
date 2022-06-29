<template>
  <a-modal
    :title="vip === undefined ? $ta('new|vip') : $ta('modify|vip')"
    v-model="isVisible"
    width="35%"
    @ok="saveAs"
  >
    <a-form :form="form" layout="horizontal">
      <a-row>
        <a-col :span="12">
          <a-form-item
            :label="$ta('commission|type')"
            :labelCol="{span: 10}"
            :wrapperCol="{span: 14}"
            has-feedback
            :validate-status="commission && vip.commissionType !== null ? 'success': ''"
          >
            <a-select
              v-decorator="['commissionType', {rules: [{ required: true, message: $ta('select|commission|type')}]}]"
              :placeholder="$ta('select|commission|type')"
            >
              <a-select-option v-for="(option, index) in options" v-bind:value="option.value" v-bind:key="index">
                {{ option.text }}
              </a-select-option>
            </a-select>
          </a-form-item>
        </a-col>
        <a-col :span="12">
          <a-form-item
            :label="$ta('commission|rate')"
            :labelCol="{span: 10}"
            :wrapperCol="{span: 14}"
            >
            <a-input
              allowClear
              v-decorator="['commissionRate', {rules: [{ required: true, message: $ta('input|commission|rate'), whitespace: true}]}]"
              :placeholder="$ta('input|commission|rate')" 
            />
          </a-form-item>
        </a-col>
      </a-row>
      <a-row>
        <a-col :span="12">
          <a-form-item
            :label="$ta('daily|commission')"
            :labelCol="{span: 10}"
            :wrapperCol="{span: 14}"
          >
            <a-input
              allowClear
              v-decorator="['dailyCommission', {rules: [{ required: true, message: $ta('input|daily|commission'), whitespace: true}]}]"
              :placeholder="$ta('input|daily|commission')" 
            />
          </a-form-item>
        </a-col>
        <a-col :span="12">
          <a-form-item
            :label="$ta('everyday|match|order|num')"
            :labelCol="{span: 10}"
            :wrapperCol="{span: 14}"
            >
            <a-input
              allowClear
              v-decorator="['matchOrders', {rules: [{ required: true, message: $ta('input|everyday|match|order|num'), whitespace: true}]}]"
              :placeholder="$ta('input|everyday|match|order|num')" 
            />
          </a-form-item>
        </a-col>
      </a-row>
      <a-row>
        <a-col :span="12">
          <a-form-item
            :label="$ta('buy|required|amount')"
            :labelCol="{span: 10}"
            :wrapperCol="{span: 14}"
          >
            <a-input
              allowClear
              v-decorator="['purchaseAmount', {rules: [{ required: true, message: $ta('input|buy|required|amount'), whitespace: true}]}]"
              :placeholder="$ta('input|buy|required|amount')" 
            />
          </a-form-item>
        </a-col>
        <a-col :span="12">
          <a-form-item
            :label="$ta('preset|template')"
            :labelCol="{span: 10}"
            :wrapperCol="{span: 14}"
            has-feedback
            :validate-status="vip && vip.payType !== null ? 'success': ''"
          >
            <a-select
              v-decorator="['presetTemp', {rules: [{ required: true, message: $ta('select|preset|template')}]}]"
              :placeholder="$ta('select|preset|template')"
            >
              <a-select-option v-for="(option, index) in options" v-bind:value="option.value" v-bind:key="index">
                {{ option.text }}
              </a-select-option>
            </a-select>
          </a-form-item>
        </a-col>
      </a-row>
      <a-row>
        <a-col :span="12">
          <a-form-item
            :label="$ta('shop|name')"
            :labelCol="{span: 10}"
            :wrapperCol="{span: 14}"
            has-feedback
            :validate-status="vip && vip.payType !== null ? 'success': ''"
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
        </a-col>
        <a-col :span="12">
          <a-form-item
            :label="$ta('status')"
            :labelCol="{span: 10}"
            :wrapperCol="{span: 14}"
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
      <a-form-item
        :label="$ta('product|picture')"
        :labelCol="{span: 5}"
        :wrapperCol="{span: 19}"
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
  name: 'VipModal',
  i18n: require('./i18n'),
  props: {
    visible: Boolean,
    vip: {
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
      if (this.vip !== undefined && this.vip !== null) {
        this.type = this.vip?.type
        this.form.getFieldDecorator('commissionType', { initialValue: this.vip?.commissionType })
        this.form.getFieldDecorator('commissionRate', { initialValue: this.vip?.commissionRate })
        this.form.getFieldDecorator('dailyCommission', { initialValue: this.vip?.dailyCommission })
        this.form.getFieldDecorator('matchOrders', { initialValue: this.vip?.matchOrders })
        this.form.getFieldDecorator('purchaseAmount', { initialValue: this.vip?.purchaseAmount })
        this.form.getFieldDecorator('presetTemp', { initialValue: this.vip?.presetTemp })
        this.form.getFieldDecorator('shopName', { initialValue: this.vip?.shopName })
        this.form.getFieldDecorator('status', { initialValue: this.vip?.status })
        this.form.getFieldDecorator('picture', { initialValue: this.vip?.picture })
      } else {
        this.form.getFieldDecorator('commissionType', { initialValue: null })
        this.form.getFieldDecorator('commissionRate', { initialValue: null })
        this.form.getFieldDecorator('dailyCommission', { initialValue: null })
        this.form.getFieldDecorator('matchOrders', { initialValue: null })
        this.form.getFieldDecorator('purchaseAmount', { initialValue: null })
        this.form.getFieldDecorator('presetTemp', { initialValue: null })
        this.form.getFieldDecorator('shopName', { initialValue: null })
        this.form.getFieldDecorator('status', { initialValue: null })
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