<template>
  <a-drawer
    placement="right"
    width="400"
    :title="$ta('user|details')"
    :visible="isVisible"
    @close="onClose"
  >
    <a-descriptions bordered :column="1">
      <a-descriptions-item :label="$ta('user|name')">
        {{ user.memberName }}
      </a-descriptions-item>
      <a-descriptions-item :label="$ta('user|balance')">
       {{ user.balance }}
      </a-descriptions-item>
      <a-descriptions-item :label="$ta('user|phone')">
        {{ user.memberPhone }}
      </a-descriptions-item>
      <a-descriptions-item :label="$ta('register|time')">
        {{ user.arrTime }}
      </a-descriptions-item>
      <a-descriptions-item :label="$ta('invite|code')">
        {{ user.payMethod }}
      </a-descriptions-item>
    </a-descriptions>
  </a-drawer>
</template>

<script>

export default {
  name: 'DetailDrawer',
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
    }
  },
  watch: {
    deep: true,
    immediate: true,
    visible() {
      console.log(this.user)
      this.isVisible = !this.isVisible
    },
  },
  methods: {
    onClose() {
      this.isVisible = !this.isVisible;
    },
  }
}
</script>