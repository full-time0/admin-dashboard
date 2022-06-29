<template>
  <div>
    <a-card>
      <a-form :form="form" layout="horizontal">
        <a-row :gutter="24">
          <a-col :md="6" :sm="24">
            <a-form-item
              :label="$ta('template|name')"
              :labelCol="{span: 4}"
              :wrapperCol="{span: 18, offset: 1}"
            >
              <a-input 
                :placeholder="$ta('input|template|name')"
                v-decorator="['templateName', {rules: [{ required: false}]}]"
              />
            </a-form-item>
          </a-col>
          <a-col :md="6" :sm="24">
            <a-form-item>
              <a-space size="large">
                <a-button type="primary">查询</a-button>
                <a-button @click="reset">重置</a-button>
                <a-button @click="showTemplateModal()" type="primary"><a-icon type="plus" />{{$t('new')}}</a-button>
              </a-space>
            </a-form-item>
          </a-col>
        </a-row>
      </a-form>
      <standard-table
        :scroll="{ x: true }"
        :bordered="true"
        :columns="columns"
        :dataSource="dataSource"
        :selectedRows.sync="selectedRows"
        :pagination="{showSizeChanger: true, pageSize: 10}"
      >
        <div slot="weights" slot-scope="{text}">
          <span v-if="!isWeight">{{text}}</span>
            <a-input v-else
              style="width: 100%" 
              :placeholder="$ta('input|weights')"
              :defaultValue="text"
              v-model="weights"
            />
        </div>
        <div slot="action" slot-scope="{record}">
          <a @click="showTemplateModal(record)" style="margin-right: 8px">
            <a-icon type="edit"/>{{$t('modify')}}
          </a>
          <a v-if="!isWeight" @click="editWeights(record)" style="margin-right: 8px">权重</a>
          <a v-if="isWeight" @click="updateWeights(record.key)" style="margin-right: 8px">确认</a>
          <a-popconfirm title="你确定要取消吗?" cancelText="取 消" okText="确 定">
            <a v-if="isWeight" href="#" style="margin-right: 8px">{{$t('cancel')}}</a>
          </a-popconfirm>
          <a-popconfirm title="你确定要删除吗?" cancelText="取 消" okText="确 定">
            <a href="#" style="margin-right: 8px"><a-icon type="delete"/>{{$t('delete')}}</a>
          </a-popconfirm>
          <router-link :to="`/users/preset-template/details/${record.key}`" >{{$ta('template|details')}}</router-link>
        </div>
      </standard-table>
    </a-card>
    <temp-modal :visible="visible" :template="template"></temp-modal>
  </div>
</template>

<script>
import StandardTable from '@/components/table/StandardTable'
import TempModal from './TempModal'
import { columns, dataSource } from './data.js'

export default {
  name: 'PresetTemplate',
  i18n: require('./i18n'),
  components: {StandardTable, TempModal},
  data () {
    return {
      form: this.$form.createForm(this),
      visible: false,
      isWeight: false,
      template: {},
      columns: columns,
      dataSource: dataSource,
      selectedRows: [],
      weights: '',
    }
  },
  methods: {
    editWeights (record) {
      console.log(record)
      this.weights = record.weights
      this.isWeight = true
    },
    updateWeights (key) {
      console.log(key)
      console.log(this.weights)
      if (this.weights) {
        this.isWeight = false
      }
    },
    showTemplateModal (data) {
      this.template = data
      this.visible = !this.visible
    },
    reset () {
      this.form.resetFields()
    }
  }
}
</script>