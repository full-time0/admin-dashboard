<template>
  <div>
    <a-card>
      <a-space class="operator">
        <a-button @click="showPermissionModal()" type="primary"><a-icon type="plus" /> {{$ta('new')}}</a-button>
      </a-space>
      <a-tree
        style="marginTop: 20px"
        :checkable="false"
        :tree-data="permissionData"
        @expand="onExpand"
        @select="onSelect"
        @rightClick="onRightClick"
      />
    </a-card>
    <permission-modal :visible="show" :permission="permission"></permission-modal>
  </div>
</template>

<script>
import PermissionModal from './PermissionModal'
import { permissionData } from './data.js'

export default {
  name: 'PermissionManagement',
  i18n: require('./i18n'),
  components: {PermissionModal},
  data () {
    return {
      show: false,
      visible: false,
      permission: {},
      permissionData: permissionData,
    }
  },
  methods: {
    onExpand(expandedKeys) {
      console.log('onExpand', expandedKeys);
      // if not set autoExpandParent to false, if children expanded, parent can not collapse.
      // or, you can remove all expanded children keys.
    },
    onSelect(selectedKeys) {
      console.log('onSelect', selectedKeys);
      this.showPermissionModal(selectedKeys[0]);
    },
    onRightClick(event, node) {
      console.log('onRightClick', event);
      console.log('onRightClick', node);
    },
    deletePopup() {
      this.visible = !this.visible
    },
    deletePermission(key) {
      console.log(key)
    },
    showPermissionModal(key) {
      if (key) {
        this.permission = {id:0,name:"角色管理",router:"/role/findAll",parent_id:0}
      }
      this.show = !this.show
    },
  }
}
</script>