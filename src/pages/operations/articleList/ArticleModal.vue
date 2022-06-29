<template>
  <a-modal
    :title="article === undefined ? $ta('new|article') : $ta('modify|article')"
    v-model="isVisible"
    width="40%"
    @ok="saveAs"
  >
    <a-form :form="form" layout="horizontal">
      <a-form-item
        :label="$t('type')"
        :labelCol="{span: 3}"
        :wrapperCol="{span: 20}"
        has-feedback
        :validate-status="article && article.type !== null ? 'success': ''"
        >
        <a-select
          v-decorator="['type', {rules: [{ required: true, message: $ta('select|type')}]}]"
          :placeholder="$ta('select|type')"
        >
          <a-select-option v-for="(option, index) in options" v-bind:value="option.value" v-bind:key="index">
            {{ option.text }}
          </a-select-option>
        </a-select>
      </a-form-item>
      <a-form-item
        :label="$ta('article|title')"
        :labelCol="{span: 3}"
        :wrapperCol="{span: 20}"
      >
        <a-input
          allowClear
          v-decorator="['title', {rules: [{ required: true, message: $ta('input|article|title'), whitespace: true}]}]"
          :placeholder="$ta('input|article|title')" 
        />
      </a-form-item>
      <a-form-item
        :label="$ta('article|picture')"
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
      <a-row>
        <a-form-item
          :label="$ta('article|content')"
          :labelCol="{span: 3}"
          :wrapperCol="{span: 20}"
        >
          <div style="border: 1px solid #ccc;">
            <Toolbar
              style="border-bottom: 1px solid #ccc"
              :editor="editor"
              :defaultConfig="toolbarConfig"
              :mode="mode"
            />
            <Editor
              style="height: 500px; overflow-y: hidden;"
              v-model="html"
              :defaultConfig="editorConfig"
              :mode="mode"
              @onCreated="onCreated"
            />
          </div>
        </a-form-item>
      </a-row>
    </a-form>
  </a-modal>
</template>

<script>
import '@wangeditor/editor/dist/css/style.css'
import { Editor, Toolbar } from '@wangeditor/editor-for-vue'

function getBase64(img, callback) {
  const reader = new FileReader();
  reader.addEventListener('load', () => callback(reader.result));
  reader.readAsDataURL(img);
}

export default {
  name: 'ArticleModal',
  i18n: require('./i18n'),
  components: { Editor, Toolbar },
  props: {
    visible: Boolean,
    article: {
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
      editor: null,
      html: '',
      toolbarConfig: {
        // toolbarKeys: [
        //   // menu key
        // ],
        excludeKeys: [
          // 'group-more-style' // exclude menu-group
        ]
      },
      editorConfig: { placeholder: '请输入正文...' },
      mode: 'default', // or 'simple'
    }
  },
  watch: {
    deep: true,
    immediate: true,
    visible() {
      this.isVisible = !this.isVisible
      if (this.article !== undefined && this.article !== null) {
        this.form.getFieldDecorator('type', { initialValue: this.article?.type })
        this.form.getFieldDecorator('title', { initialValue: this.article?.title })
        this.form.getFieldDecorator('picture', { initialValue: this.article?.picture })
        this.form.getFieldDecorator('content', { initialValue: this.article?.content })
      } else {
        this.form.getFieldDecorator('type', { initialValue: null })
        this.form.getFieldDecorator('title', { initialValue: null })
        this.form.getFieldDecorator('picture', { initialValue: null })
        this.form.getFieldDecorator('content', { initialValue: null })
      }
    },
  },
  mounted() {
    // 模拟 ajax 请求，异步渲染编辑器
    setTimeout(() => {
      this.html = ''
    }, 1500)
  },
  beforeDestroy() {
    const editor = this.editor
    if (editor == null) return
    editor.destroy() // 组件销毁时，及时销毁 editor ，重要！！！
  },
  methods: {
    onCreated (editor) {
      this.editor = Object.seal(editor) // Use `Object.seal`
    },
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