<template>
  <div>
    <a-card>
      <div :class="advanced ? 'search' : null">
        <a-form :form="form" layout="horizontal">
          <div :class="advanced ? null: 'fold'">
            <a-row>
              <a-col :md="8" :sm="24">
                <a-form-item
                  :label="$ta('product|name')"
                  :labelCol="{span: 5}"
                  :wrapperCol="{span: 16, offset: 1}"
                >
                  <a-input 
                    style="width: 100%" 
                    :placeholder="$ta('input|product|name')"
                    v-decorator="['productName', {rules: [{ required: false}]}]"
                  />
                </a-form-item>
              </a-col>
              <a-col :md="8" :sm="24">
                <a-form-item
                  :label="$ta('product|lowest|price')"
                  :labelCol="{span: 5}"
                  :wrapperCol="{span: 16, offset: 1}"
                >
                  <a-input 
                    style="width: 100%" 
                    :placeholder="$ta('input|product|lowest|price')"
                    v-decorator="['lowestPrice', {rules: [{ required: false}]}]"
                  />
                </a-form-item>
              </a-col>
              <a-col :md="8" :sm="24">
                <a-form-item
                  :label="$ta('product|highest|price')"
                  :labelCol="{span: 5}"
                  :wrapperCol="{span: 16, offset: 1}"
                >
                  <a-input 
                    style="width: 100%" 
                    :placeholder="$ta('input|product|highest|price')" 
                    v-decorator="['highestPrice', {rules: [{ required: false}]}]"
                  />
                </a-form-item>
              </a-col>
            </a-row>
          </div>
          <span style="float: right; margin-top: 3px;">
            <a-button type="primary">{{$t('inquire')}}</a-button>
            <a-button @click="reset" style="margin-left: 8px">{{$t('reset')}}</a-button>
            <a @click="toggleAdvanced" style="margin-left: 8px">
              {{advanced ? '收起' : '展开'}}
              <a-icon :type="advanced ? 'up' : 'down'" />
            </a>
          </span>
        </a-form>
      </div>
      <div>
        <a-space class="operator">
          <a-button @click="showProductModal()" type="dashed"><a-icon type="plus" />{{$t('new')}}</a-button>
        </a-space>
        <standard-table
          :scroll="{ x: true }"
          :bordered="true"
          :columns="columns"
          :dataSource="dataSource"
          :selectedRows.sync="selectedRows"
          :pagination="{showSizeChanger: true, pageSize: 10}"
          @clear="onClear"
          @selectedRowChange="onSelectChange"
        >
          <!-- <div slot="picture" slot-scope="{text}"> -->
          <div slot="picture">
            <a type="primary" @click="showImg(text)">
              <img src="@/storage/uploads/activity/activity-1.png" style="width: 40px">
            </a>
          </div>
          <div slot="action" slot-scope="{record}">
            <a @click="showProductModal(record)">
              <a-icon type="edit"/>{{$t('modify')}}
            </a>
          </div>
        </standard-table>
      </div>
    </a-card>
    <a-modal v-model="show" :footer="null" :centered="true" width="30%">
      <img src="@/storage/uploads/activity/activity-1.png" style="width: 100%">
    </a-modal>
    <product-modal :visible="visible" :product="product"></product-modal>
  </div>
</template>

<script>
import StandardTable from '@/components/table/StandardTable'
import ProductModal from './ProductModal'
import { columns, dataSource } from './data.js'

export default {
  name: 'ProductList',
  i18n: require('./i18n'),
  components: {StandardTable, ProductModal},
  data () {
    return {
      form: this.$form.createForm(this),
      visible: false,
      show: false,
      product: {},
      advanced: false,
      columns: columns,
      dataSource: dataSource,
      selectedRows: [],
      img: '',
    }
  },
  methods: {
    showImg (img) {
      this.img = img
      this.show = !this.show;
    },
    toggleAdvanced () {
      this.advanced = !this.advanced
    },
    onClear() {
      this.$message.info('您清空了勾选的所有行')
    },
    onSelectChange() {
      this.$message.info('选中行改变了')
    },
    showProductModal (product) {
      this.product = product
      this.visible = !this.visible
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
  .operator{
    margin-bottom: 18px;
  }
  @media screen and (max-width: 900px) {
    .fold {
      width: 100%;
    }
  }
</style>
