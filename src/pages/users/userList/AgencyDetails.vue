<template>
  <a-modal
    width="40%"
    :title="$ta('agent|details')"
    v-model="show"
    @ok="confirm"
  >
    <a-card
      :tab-list="tabs"
      :active-tab-key="noTitleKey"
      @tabChange="key => onTabChange(key, 'noTitleKey')"
    >
      <a-range-picker 
        v-model="date"
      />
      <a-descriptions bordered v-if="noTitleKey === 'Level1'" style="margin-top: 10px;">
        <a-descriptions-item label="团队充值总额">
          0
        </a-descriptions-item>
        <a-descriptions-item label="时间段充值总额">
          0
        </a-descriptions-item>
        <a-descriptions-item label="团队提现总额">
          0
        </a-descriptions-item>
        <a-descriptions-item label="时间段提现总额">
          0
        </a-descriptions-item>
        <a-descriptions-item label="团队总人数">
          3
        </a-descriptions-item>
        <a-descriptions-item label="时间段总人数">
          3
        </a-descriptions-item>
        <a-descriptions-item label="团队佣金总额">
          0
        </a-descriptions-item>
        <a-descriptions-item label="时间段佣金总额">
          0
        </a-descriptions-item>
      </a-descriptions>
      <a-descriptions bordered v-else style="margin-top: 10px;">
        <a-descriptions-item label="团队充值总额">
          0
        </a-descriptions-item>
        <a-descriptions-item label="时间段充值总额">
          0
        </a-descriptions-item>
        <a-descriptions-item label="团队提现总额">
          0
        </a-descriptions-item>
        <a-descriptions-item label="时间段提现总额">
          0
        </a-descriptions-item>
        <a-descriptions-item label="团队总人数">
          0
        </a-descriptions-item>
        <a-descriptions-item label="时间段总人数">
          0
        </a-descriptions-item>
        <a-descriptions-item label="团队佣金总额">
          0
        </a-descriptions-item>
        <a-descriptions-item label="时间段佣金总额">
          0
        </a-descriptions-item>
      </a-descriptions>
    </a-card>
  </a-modal>
</template>

<script>

export default {
  name: 'AgencyDetails',
  i18n: require('./i18n'),
  props: {
    visible: Boolean,
    user: {
      type: Object,
    },
  },
  data() {
    return {
      show: false,
      date: '',
      tabs: [
        {
          key: 'Level1',
          tab: 'Level1',
        },
        {
          key: 'Level2',
          tab: 'Level2',
        },
        {
          key: 'Level3',
          tab: 'Level3',
        },
        {
          key: 'Level4',
          tab: 'Level4',
        },
        {
          key: 'Level5',
          tab: 'Level5',
        },
      ],
      noTitleKey: 'Level1',
    };
  },
  watch: {
    deep: true,
    immediate: true,
    visible() {
      this.show = !this.show
    }
  },
  methods: {
    confirm () {
      this.show = !this.show
    },
    onTabChange(key, type) {
      console.log(key, type);
      this[type] = key;
    },
  },
}
</script>