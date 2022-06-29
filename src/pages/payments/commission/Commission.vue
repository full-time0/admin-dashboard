<template>
  <div>
    <a-card>
      <div :class="advanced ? 'search' : null">
        <a-form :form="form" layout="horizontal">
          <div :class="advanced ? null: 'fold'">
            <a-row>
              <a-col :md="8" :sm="24">
                <a-form-item
                  :label="$ta('member|phone')"
                  :labelCol="{span: 5}"
                  :wrapperCol="{span: 18, offset: 1}"
                >
                  <a-input 
                    style="width: 100%" 
                    :placeholder="$ta('input|member|phone')"
                    v-decorator="['phone', {rules: [{ required: false}]}]"
                  />
                </a-form-item>
              </a-col>
              <a-col :md="8" :sm="24">
                <a-form-item
                  :label="$ta('commission|time')"
                  :labelCol="{span: 5}"
                  :wrapperCol="{span: 18, offset: 1}"
                >
                  <a-range-picker 
                    style="width: 100%"
                    v-decorator="['commissionTime', {rules: [{ required: false}]}]"
                  />
                </a-form-item>
              </a-col>
              <a-col :md="8" :sm="24">
                <a-form-item
                  :label="$ta('member|phone')"
                  :labelCol="{span: 5}"
                  :wrapperCol="{span: 18, offset: 1}"
                >
                  <a-input 
                    style="width: 100%" 
                    :placeholder="$ta('input|member|phone')"
                    v-decorator="['phone', {rules: [{ required: false}]}]"
                  />
                </a-form-item>
              </a-col>
            </a-row>
            <a-row v-if="advanced">
              <a-col :md="8" :sm="24">
                <a-form-item
                  :label="$ta('commission|level')"
                  :labelCol="{span: 5}"
                  :wrapperCol="{span: 18, offset: 1}"
                >
                  <a-select 
                    :placeholder="$ta('select|commission|level')"
                    v-decorator="['commissionLevel', {rules: [{ required: false}]}]"
                  >
                    <a-select-option value="普通H5注册">普通H5注册</a-select-option>
                    <a-select-option value="网站测试会员">网站测试会员</a-select-option>
                  </a-select>
                </a-form-item>
              </a-col>
            </a-row>
          </div>
          <span style="float: right; margin-top: 3px;">
            <a-button type="primary">查询</a-button>
            <a-button @click="reset" style="margin-left: 8px">重置</a-button>
            <a @click="toggleAdvanced" style="margin-left: 8px">
              {{advanced ? '收起' : '展开'}}
              <a-icon :type="advanced ? 'up' : 'down'" />
            </a>
          </span>
        </a-form>
      </div>
      <standard-table
        :scroll="{ x: true }"
        :bordered="true"
        :columns="columns"
        :dataSource="dataSource"
        :pagination="{showSizeChanger: true, pageSize: 10}"
      >
        <div slot="title">
          <a-button type="link" style="color: brown; font-weight: bold">
            {{$ta('commission|total')}}: {{parseFloat(2748014.03).toFixed(2)}}
          </a-button>
        </div>
        <!-- <div slot="action" slot-scope="{record}">
          <a @click="showDetailModal(record)" style="margin-right: 8px">
            {{$ta('user|details')}}
          </a>
          <a v-if="record.status === '等待支付'" @click="showManualModal(record)">
            {{$ta('manual|replenish')}}
          </a>
        </div> -->
      </standard-table>
    </a-card>
  </div>
</template>

<script>
import StandardTable from '@/components/table/StandardTable'
import { columns, dataSource } from './data.js'

export default {
  name: 'Commission',
  i18n: require('./i18n'),
  components: {StandardTable},
  data () {
    return {
      form: this.$form.createForm(this),
      advanced: false,
      columns: columns,
      dataSource: dataSource,
      visible: false,
      user: {},
    }
  },
  methods: {
    toggleAdvanced () {
      this.advanced = !this.advanced
    },
    showManualModal (data) {
      console.log(data)
      this.$confirm({
        title: '手动补单',
        content: (<div style="color: red">你确定要进行手动补单操作吗？？</div>),
        okText: '确 定',
        cancelText: '取 消',
        async onOk() {
          try {
            return new Promise((resolve, reject) => {
              setTimeout(Math.random()>0.5? resolve:reject, 1000)
            })
          } catch(e) {
            return console.log('Oops errors!')
          }
        },
        onCancel() {},
      });
    },
    handleMenuClick (e) {
      console.log(e.key)
    },
    reset () {
      this.form.resetFields()
    }
  }
}
</script>

<style lang="less" scoped>
  .search{
    margin-bottom: 54px;
  }
  .fold{
    width: calc(100% - 216px);
    display: inline-block
  }
  @media screen and (max-width: 900px) {
    .fold {
      width: 100%;
    }
  }
</style>
