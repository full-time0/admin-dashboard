<template>
  <a-modal
    width="50%"
    :title="$ta('agent|details')"
    v-model="isVisible"
    @close="onClose"
  >
    <a-tabs default-active-key="1">
      <a-tab-pane key="1" :tab="$ta('agent|relation|chart')">
        <org-chart :datasource="ds" />
      </a-tab-pane>
      <a-tab-pane key="2" :tab="$ta('details|chart')">
        <a-tree show-line>
          <a-icon slot="switcherIcon" type="down" />
          <a-tree-node key="0-0-0" title="parent 1-0">
            <a-tree-node key="0-0-0-0" title="leaf" />
            <a-tree-node key="0-0-0-1" title="leaf" />
            <a-tree-node key="0-0-0-2" title="leaf" />
          </a-tree-node>
          <a-tree-node key="0-0-1" title="parent 1-1">
            <a-tree-node key="0-0-1-0" title="leaf" />
          </a-tree-node>
          <a-tree-node key="0-0-2" title="parent 1-2">
            <a-tree-node key="0-0-2-0" title="leaf" />
            <a-tree-node key="0-0-2-1" title="leaf" />
          </a-tree-node>
        </a-tree>
      </a-tab-pane>
    </a-tabs>
  </a-modal>
</template>

<script>
import OrgChart from "vue-organization-chart";
import "vue-organization-chart/dist/orgchart.css";

export default {
  name: 'AgencyDetail',
  i18n: require('./i18n'),
  components: {
    OrgChart
  },
  props: {
    visible: Boolean,
    info: {
      type: Object,
    },
  },
  data() {
    return {
      form: this.$form.createForm(this),
      isVisible: false,
      ds: {
        id: "1",
        name: "Lao Lao",
        title: "general manager",
        children: [
          { id: "2", name: "Bo Miao", title: "department manager" },
          {
            id: "3",
            name: "Su Miao",
            title: "department manager",
            children: [
              { id: "4", name: "Tie Hua", title: "senior engineer" },
              {
                id: "5",
                name: "Hei Hei",
                title: "senior engineer",
                children: [
                  { id: "6", name: "Pang Pang", title: "engineer" },
                  { id: "7", name: "Xiang Xiang", title: "UE engineer" }
                ]
              }
            ]
          },
          { id: "8", name: "Hong Miao", title: "department manager" },
          { id: "9", name: "Chun Miao", title: "department manager" }
        ]
      },
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
    onClose() {
      this.isVisible = !this.isVisible;
    },
  }
}
</script>