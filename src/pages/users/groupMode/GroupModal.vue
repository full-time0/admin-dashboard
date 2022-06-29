<template>
  <a-modal
    :title="user === undefined ? '新增分组' : '分配用户'"
    v-model="isVisible"
    width="55%"
    @ok="saveAs"
  >
    <a-form :form="form" layout="horizontal">
      <a-row>
        <a-col :span="12">
          <a-form-item
            :label="$ta('mode|name')"
            :labelCol="{span: 6}"
            :wrapperCol="{span: 18}"
          >
            <a-input
              allowClear
              v-decorator="['modeName', {rules: [{ required: true, message: $ta('input|mode|name'), whitespace: true}]}]"
              :placeholder="$ta('input|mode|name')" 
            />
          </a-form-item>
        </a-col>
        <a-col :span="12">
          <a-form-item
            :label="$ta('mode|type')"
            :labelCol="{span: 6}"
            :wrapperCol="{span: 18}"
            has-feedback
            :validate-status="user && user.modeType !== null ? 'success': ''"
            >
            <a-select
              v-decorator="['modeType', {rules: [{ required: true, message: $ta('select|mode|type')}]}]"
              :placeholder="$ta('select|mode|type')"
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
            :label="$ta('commission|type')"
            :labelCol="{span: 6}"
            :wrapperCol="{span: 18}"
            has-feedback
            :validate-status="user && user.commissionType !== null ? 'success': ''"
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
            :label="$ta('fixed|amount')"
            :labelCol="{span: 6}"
            :wrapperCol="{span: 18}"
          >
            <a-input
              allowClear
              v-decorator="['fixedAmount', {rules: [{ required: true, message: $ta('input|fixed|amount'), whitespace: true}]}]"
              :placeholder="$ta('input|fixed|amount')"
            />
          </a-form-item>
        </a-col>
      </a-row>
      <a-row>
        <a-col :span="12">
          <a-form-item
            :label="$ta('complete|reward|amount')"
            :labelCol="{span: 6}"
            :wrapperCol="{span: 18}"
          >
            <a-input
              allowClear
              v-decorator="['rewardAmount', {rules: [{ required: true, message: $ta('input|complete|reward|amount'), whitespace: true}]}]"
              :placeholder="$ta('input|complete|reward|amount')" 
            />
          </a-form-item>
        </a-col>
      </a-row>
      <a-row v-if="fetch">
        <a-col :span="12">
          <a-form-item
            :label="$ta('start|amount')"
            :labelCol="{span: 6}"
            :wrapperCol="{span: 18}"
          >
            <a-input
              allowClear
              v-decorator="['startAmount', {rules: [{ required: true, message: $ta('input|start|amount'), whitespace: true}]}]"
              :placeholder="$ta('input|start|amount')" 
            />
          </a-form-item>
        </a-col>
        <a-col :span="12">
          <a-form-item
            :label="$t('activity|range')"
            :labelCol="{span: 6}"
            :wrapperCol="{span: 18}"
          >
            <a-input
              allowClear
              v-decorator="['activityRange', {rules: [{ required: true, message: $ta('input|activity|range'), whitespace: true}]}]"
              :placeholder="$ta('input|activity|range')" 
            />
          </a-form-item>
        </a-col>
      </a-row>
      <a-row v-if="fetch">
        <a-col :span="12">
          <a-form-item
            :label="$t('orderNum')"
            :labelCol="{span: 6}"
            :wrapperCol="{span: 18}"
          >
            <a-input
              allowClear
              v-decorator="['orderNum', {rules: [{ required: true, message: $ta('input|orderNum'), whitespace: true}]}]"
              :placeholder="$ta('input|orderNum')" 
            />
          </a-form-item>
        </a-col>
        <a-col :span="12">
          <a-form-item
            :label="$t('multiplier')"
            :labelCol="{span: 6}"
            :wrapperCol="{span: 18}"
          >
            <a-input
              allowClear
              v-decorator="['multiplier', {rules: [{ required: true, message: $ta('input|multiplier'), whitespace: true}]}]"
              :placeholder="$ta('input|multiplier')"
            />
          </a-form-item>
        </a-col>
      </a-row>
      <a-row v-if="fetch">
        <a-col :span="12">
          <a-form-item>
            <a-space class="detect">
            <a-button @click="getListData" type="primary">{{$t('detect')}}</a-button>
          </a-space>
          </a-form-item>
        </a-col>
      </a-row>
    </a-form>
    <custom-transfer 
      :titles="transferTitles"
      :searchPlaceholder="searchPlaceholder"
      :dataSource="mockData" 
      :targetKeys="targetKeys"
      :columns="columns"
      :onChange="onChange"
      
    />
    <list-group 
      v-if="listData.length > 0"
      :data="listData"
      :loading="loading"
    />
  </a-modal>
</template>

<script>
import CustomTransfer from '@/components/transfer/CustomTransfer'
import ListGroup from '@/components/list/ListGroup'

const columns = [{
  title: 'ID',
  dataIndex: 'key',
}, {
  title: '名称',
  dataIndex: 'title',
}];

const transferTitles = ['所有商品', '已分配商品']
const searchPlaceholder = '请输入搜索内容'

export default {
  name: 'GroupModal',
  i18n: require('./i18n'),
  components: {CustomTransfer, ListGroup},
  props: {
    visible: Boolean,
    fetch: Boolean,
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
      ],
      mockData: [],
      targetKeys: [],
      columns,
      transferTitles,
      searchPlaceholder,
      loading: false,
      listData: [],
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
      if (this.user !== undefined && this.user !== null) {
        this.form.getFieldDecorator('modeName', { initialValue: this.user?.modeName })
        this.form.getFieldDecorator('modeType', { initialValue: this.user?.modeType })
        this.form.getFieldDecorator('commissionType', { initialValue: this.user?.commissionType })
        this.form.getFieldDecorator('fixedAmount', { initialValue: this.user?.fixedAmount })
        this.form.getFieldDecorator('rewardAmount', { initialValue: this.user?.rewardAmount })
        this.form.getFieldDecorator('startAmount', { initialValue: this.user?.startAmount })
        this.form.getFieldDecorator('activityRange', { initialValue: this.user?.activityRange })
        this.form.getFieldDecorator('orderNum', { initialValue: this.user?.orderNum })
        this.form.getFieldDecorator('multiplier', { initialValue: this.user?.multiplier })
      } else {
        this.form.getFieldDecorator('modeName', { initialValue: null })
        this.form.getFieldDecorator('modeType', { initialValue: null })
        this.form.getFieldDecorator('commissionType', { initialValue: null })
        this.form.getFieldDecorator('fixedAmount', { initialValue: null })
        this.form.getFieldDecorator('rewardAmount', { initialValue: null })
        this.form.getFieldDecorator('startAmount', { initialValue: null })
        this.form.getFieldDecorator('activityRange', { initialValue: null })
        this.form.getFieldDecorator('orderNum', { initialValue: null })
        this.form.getFieldDecorator('multiplier', { initialValue: null })
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
    getListData() {
      this.loading = true
      this.listData = [
        [596, 500, '是'],
        [500, 500, '是'],
        [500, 500, '是'],
        [500, 500, '是'],
        [500, 500, '是'],
        [500, 500, '是'],
        [500, 500, '是'],
        [500, 500, '是'],
        [500, 500, '是'],
        [500, 500, '是'],
      ]
      this.loading = false
    }
  }
}
</script>