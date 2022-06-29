<template>
  <a-modal
    :title="$t('lock')"
    v-model="isVisible"
    @ok="saveAs"
  >
    <a-input
      allowClear
      v-decorator="['remark', {rules: [{ required: false, message: $ta('input|remark'), whitespace: true}]}]"
      :placeholder="$ta('input|remark')" 
    />
  </a-modal>
</template>

<script>

export default {
  name: 'LockModal',
  i18n: require('./i18n'),
  props: {
    visible: Boolean,
    user: {
      type: Object,
    },
  },
  data() {
    return {
      isVisible: false,
      options: [
        { text: 'One', value: 'A' },
        { text: 'Two', value: 'B' },
        { text: 'Three', value: 'C' }
      ]
    }
  },
  watch: {
    deep: true,
    immediate: true,
    visible() {
      this.isVisible = !this.isVisible
    },
  },
  methods: {
    saveAs (e) {
      e.preventDefault()
    },
  }
}
</script>