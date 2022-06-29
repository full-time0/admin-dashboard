<template>
  <a-card :body-style="{padding: '20px 24px 8px'}" :bordered="true">
    <a-transfer
      :titles="titles"
      :searchPlaceholder="searchPlaceholder"
      :dataSource="dataSource"
      :filterOption="(inputValue, item) => item.description.indexOf(inputValue) !== -1"
      :targetKeys="targetKeys"
      showSearch
      @change="onChange"
    >
      <template
        slot="children"
        slot-scope="{
          props: { filteredItems, selectedKeys },
          on: { itemSelectAll, itemSelect },
        }"
      >
        <a-table
          :rowSelection="getRowSelection({ selectedKeys, itemSelectAll, itemSelect })"
          :columns="columns"
          :dataSource="filteredItems"
          size="small"
          :customRow="
            (key) => ({
              on: {
                click: () => {
                  itemSelect(key, !selectedKeys.includes(key));
                },
              },
            })
          "
        />
      </template>
    </a-transfer>
  </a-card>
</template>

<script>
import difference from 'lodash/difference';

export default {
  name: 'CustomTransfer',
  props: ['titles', 'searchPlaceholder', 'dataSource', 'targetKeys', 'columns', 'onChange'],
  methods: {
    getRowSelection({ selectedKeys, itemSelectAll, itemSelect }) {
      return {
        onSelectAll(selected, selectedRows) {
          const treeSelectedKeys = selectedRows.map(({ key }) => key);
          const diffKeys = selected
            ? difference(treeSelectedKeys, selectedKeys)
            : difference(selectedKeys, treeSelectedKeys);
          itemSelectAll(diffKeys, selected);
        },
        onSelect({ key }, selected) {
          itemSelect(key, selected);
        },
        selectedRowKeys: selectedKeys,
      };
    },
  },
};
</script>