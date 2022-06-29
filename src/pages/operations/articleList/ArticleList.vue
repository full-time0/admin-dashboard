<template>
  <div>
    <a-card>
      <div>
        <a-form :form="form" layout="horizontal">
          <div>
            <a-row>
              <a-col :md="8" :sm="24">
                <a-form-item
                  :label="$ta('article|title')"
                  :labelCol="{span: 5}"
                  :wrapperCol="{span: 18, offset: 1}"
                >
                  <a-input 
                    style="width: 100%" 
                    :placeholder="$ta('input|article|title')"
                    v-decorator="['title', {rules: [{ required: false}]}]"
                  />
                </a-form-item>
              </a-col>
              <a-col :md="8" :sm="24">
                <a-form-item
                  :label="$ta('type')"
                  :labelCol="{span: 5}"
                  :wrapperCol="{span: 18, offset: 1}"
                >
                  <a-select 
                    :placeholder="$ta('input|type')"
                    v-decorator="['type', {rules: [{ required: false}]}]"
                  >
                    <a-select-option value="启用">启用</a-select-option>
                    <a-select-option value="禁用">禁用</a-select-option>
                  </a-select>
                </a-form-item>
              </a-col>
              <a-col :md="8" :sm="24">
                <a-form-item
                  :label="$ta('time')"
                  :labelCol="{span: 5}"
                  :wrapperCol="{span: 18, offset: 1}"
                >
                  <a-range-picker 
                    style="width: 100%"
                    v-decorator="['createdAt', {rules: [{ required: false}]}]"
                  />
                </a-form-item>
              </a-col>
            </a-row>
          </div>
          <span style="float: right; margin-top: 3px;">
            <a-button type="primary">{{$t('inquire')}}</a-button>
            <a-button @click="reset" style="margin-left: 8px">{{$t('reset')}}</a-button>
          </span>
        </a-form>
      </div>
      <div>
        <a-space class="operator">
          <a-button @click="showArticleModal()" type="primary"><a-icon type="plus" />{{$ta('new')}}</a-button>
        </a-space>
        <standard-table
          :scroll="{ x: true }"
          :bordered="true"
          :columns="columns"
          :dataSource="dataSource"
          :pagination="{showSizeChanger: true, pageSize: 10}"
        >
          <!-- <div slot="picture" slot-scope="{text}"> -->
          <div slot="picture">
            <a type="primary" @click="showImg(text)">
              <img src="@/storage/uploads/activity/activity-1.png" style="width: 30px">
            </a>
            
          </div>
          <div slot="gameStatus" slot-scope="{text}">
            <a-tag :color="text === '正常' ? 'green' : 'volcano'">
              {{text}}
            </a-tag>
          </div>
          <div slot="action" slot-scope="{record}">
            <a @click="showArticleModal(record)" style="margin-right: 8px">
              <a-icon type="edit"/>{{$t('edit')}}
            </a>
            <a-popconfirm title="你确定要删除吗?" cancelText="取 消" okText="确 定">
              <a href="#">
                <a-icon type="delete"/>{{$t('delete')}}
              </a>
            </a-popconfirm>
          </div>
        </standard-table>
      </div>
    </a-card>
    <a-modal v-model="show" :footer="null" :centered="true" width="30%">
      <img src="@/storage/uploads/activity/activity-1.png" style="width: 100%">
    </a-modal>
    <article-modal :visible="visible" :article="article"></article-modal>
  </div>
</template>

<script>
import StandardTable from '@/components/table/StandardTable'
import ArticleModal from './ArticleModal'
import { columns, dataSource } from './data.js'

export default {
  name: 'ArticleList',
  i18n: require('./i18n'),
  components: {StandardTable, ArticleModal},
  data () {
    return {
      form: this.$form.createForm(this),
      visible: false,
      show: false,
      article: {},
      advanced: false,
      columns: columns,
      dataSource: dataSource,
      img: '',
    }
  },
  methods: {
    showImg (img) {
      this.img = img
      this.show = !this.show;
    },
    showArticleModal (article) {
      this.article = article
      this.visible = !this.visible
    },
    reset () {
      this.form.resetFields()
    }
  }
}
</script>

<style lang="less" scoped>
  .operator{
    margin-bottom: 18px;
  }
</style>
