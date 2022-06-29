<template>
  <a-modal
    width="40%"
    :title="financial === undefined ? $ta('new') : $ta('modify')"
    v-model="isVisible"
    @ok="saveAs"
  >
    <a-form :form="form" layout="horizontal">
      <a-row>
        <a-col :span="12">
          <a-form-item
            :label="$ta('item|name')"
            :labelCol="{span: 6}"
            :wrapperCol="{span: 18}"
          >
            <a-input
              allowClear
              v-decorator="['name', {rules: [{ required: true, message: $ta('input|item|name'), whitespace: true}]}]"
              :placeholder="$ta('input|item|name')" 
            />
          </a-form-item>
        </a-col>
        <a-col :span="12">
          <a-form-item
            :label="$ta('daily_income_rate')"
            :labelCol="{span: 6}"
            :wrapperCol="{span: 18}"
          >
            <a-input-number
              style="width: 100%"
              v-decorator="['dailyIncomeRate', {rules: [{ required: true}]}]"
              :placeholder="$ta('input|daily_income_rate')"
            />
          </a-form-item>
        </a-col>
      </a-row>
      <a-row>
        <a-col :span="12">
          <a-form-item
            :label="$ta('apply|days')"
            :labelCol="{span: 6}"
            :wrapperCol="{span: 18}"
          >
            <a-input
              allowClear
              v-decorator="['days', {rules: [{ required: true, message: $ta('input|apply|days'), whitespace: true}]}]"
              :placeholder="$ta('input|apply|days')"
            />
          </a-form-item>
        </a-col>
        <a-col :span="12">
          <a-form-item
            :label="$ta('max|buy')"
            :labelCol="{span: 6}"
            :wrapperCol="{span: 18}"
          >
            <a-input
              allowClear
              v-decorator="['maxPurchase', {rules: [{ required: true, message: $ta('input|max|buy'), whitespace: true}]}]"
              :placeholder="$ta('input|max|buy')"
            />
          </a-form-item>
        </a-col>
      </a-row>
      <a-row>
        <a-col :span="12">
          <a-form-item
            :label="$ta('min|buy')"
            :labelCol="{span: 6}"
            :wrapperCol="{span: 18}"
          >
            <a-input
              allowClear
              v-decorator="['minPurchase', {rules: [{ required: true, message: $ta('input|min|buy'), whitespace: true}]}]"
              :placeholder="$ta('input|min|buy')"
            />
          </a-form-item>
        </a-col>
        <a-col :span="12">
          <a-form-item
            :label="$ta('weights')"
            :labelCol="{span: 6}"
            :wrapperCol="{span: 18}"
          >
            <a-input
              allowClear
              v-decorator="['weights', {rules: [{ required: true, message: $ta('input|weights'), whitespace: true}]}]"
              :placeholder="$ta('input|weights')"
            />
          </a-form-item>
        </a-col>
      </a-row>
      <a-row>
        <a-col :span="12">
          <a-form-item
            :label="$ta('income|method')"
            :labelCol="{span: 6}"
            :wrapperCol="{span: 18}"
            has-feedback
            :validate-status="financial && financial.incomeMethod !== null ? 'success': ''"
            >
            <a-select
              v-decorator="['incomeMethod', {rules: [{ required: true, message: $ta('select|income|method')}]}]"
              :placeholder="$ta('select|income|method')"
            >
              <a-select-option v-for="(option, index) in options" v-bind:value="option.value" v-bind:key="index">
                {{ option.text }}
              </a-select-option>
            </a-select>
          </a-form-item>
        </a-col>
        <a-col :span="12">
          <a-form-item
            :label="$ta('purchase_limit')"
            :labelCol="{span: 6}"
            :wrapperCol="{span: 18}"
          >
            <a-input
              allowClear
              v-decorator="['purchaseLimit', {rules: [{ required: true, message: $ta('input|purchase_limit'), whitespace: true}]}]"
              :placeholder="$ta('input|purchase_limit')"
            />
          </a-form-item>
        </a-col>
      </a-row>
      <a-row>
        <a-col :span="12">
          <a-form-item
            :label="$ta('status')"
            :labelCol="{span: 6}"
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
        <a-col :span="12">
          <a-form-item
            :label="$ta('item|picture')"
            :labelCol="{span: 6}"
            :wrapperCol="{span: 18}"
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
        </a-col>
      </a-row>
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
  name: 'FinancialModal',
  i18n: require('./i18n'),
  props: {
    visible: Boolean,
    financial: {
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
    }
  },
  watch: {
    deep: true,
    immediate: true,
    visible() {
      this.isVisible = !this.isVisible
      if (this.financial !== undefined && this.financial !== null) {
        this.imageUrl = this.financial?.picture
        this.form.getFieldDecorator('name', { initialValue: this.financial?.name })
        this.form.getFieldDecorator('dailyIncomeRate', { initialValue: this.financial?.dailyIncomeRate })
        this.form.getFieldDecorator('days', { initialValue: this.financial?.days })
        this.form.getFieldDecorator('maxPurchase', { initialValue: this.financial?.maxPurchase })
        this.form.getFieldDecorator('minPurchase', { initialValue: this.financial?.minPurchase })
        this.form.getFieldDecorator('weights', { initialValue: this.financial?.weights })
        this.form.getFieldDecorator('incomeMethod', { initialValue: this.financial?.incomeMethod })
        this.form.getFieldDecorator('purchaseLimit', { initialValue: this.financial?.purchaseLimit })
        this.form.getFieldDecorator('status', { initialValue: this.financial?.status })
      } else {
        this.imageUrl = ''
        this.form.getFieldDecorator('name', { initialValue: null })
        this.form.getFieldDecorator('dailyIncomeRate', { initialValue: null })
        this.form.getFieldDecorator('days', { initialValue: null })
        this.form.getFieldDecorator('maxPurchase', { initialValue: null })
        this.form.getFieldDecorator('minPurchase', { initialValue: null })
        this.form.getFieldDecorator('weights', { initialValue: null })
        this.form.getFieldDecorator('incomeMethod', { initialValue: null })
        this.form.getFieldDecorator('purchaseLimit', { initialValue: null })
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