export const columns = [
  {
    title: '#',
    dataIndex: 'no',
    align: 'center',
  },
  {
    title: '商品名称',
    dataIndex: 'productName',
    align: 'center',
  },
  {
    title: '商品图片',
    dataIndex: 'picture',
    align: 'center',
    scopedSlots: { customRender: "picture" },
  },
  {
    title: '商品价格',
    dataIndex: 'price',
    align: 'center',
    customRender: (value) => parseFloat(value).toFixed(2)
  },
  {
    title: '店铺名称',
    dataIndex: 'shopName',
    align: 'center',
  },
  {
    title: '操作',
    align: 'center',
    scopedSlots: { customRender: 'action' },
  }
]

export const dataSource = []

for (let i = 0; i < 60; i++) {
  dataSource.push({
      key: i,
      no: i,
      productName: "Sports Men's Printed Regular fit Casual Shirt",
      picture: '/storage/uploads/activity/activity-1.png',
      price: '701',
      shopName: 'SMMALL',
      
  })
}
