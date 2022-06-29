export const columns = [
    {
      title: '#',
      dataIndex: 'no',
      align: 'center',
    },
    {
      title: 'VIP级别名称',
      dataIndex: 'vipLevelName',
      align: 'center',
    },
    {
      title: '一天最多匹配订单数',
      dataIndex: 'matchOrders',
      align: 'center',
    },
    {
      title: '佣金类型',
      dataIndex: 'commissionType',
      align: 'center',
      scopedSlots: { customRender: "commissionType" },
    },
    {
      title: '每日佣金',
      dataIndex: 'dailyCommission',
      align: 'center',
      customRender: (value) => parseFloat(value).toFixed(2)
    },
    {
      title: '佣金比例',
      dataIndex: 'commissionRate',
      align: 'center',
      customRender: (value) => parseFloat(value).toFixed(2)
    },
    {
      title: '固定金额',
      dataIndex: 'fixedAmount',
      align: 'center',
      customRender: (value) => parseFloat(value).toFixed(2)
    },
    {
      title: '购买VIP所需金额',
      dataIndex: 'purchaseAmount',
      align: 'center',
      customRender: (value) => parseFloat(value).toFixed(2)
    },
    {
      title: 'VIP图片',
      dataIndex: 'picture',
      align: 'center',
      scopedSlots: { customRender: "picture" },
    },
    {
      title: '预设模板',
      dataIndex: 'presetTemp',
      align: 'center',
    },
    {
      title: '店铺名称',
      dataIndex: 'shopName',
      align: 'center',
    },
    {
      title: '状态',
      dataIndex: 'status',
      align: 'center',
      scopedSlots: { customRender: "status" },
    },
    {
      title: '操作',
      align: 'center',
      scopedSlots: { customRender: 'action' },
    }
]
  
export const dataSource = []
  
for (let i = 0; i < 2; i++) {
    dataSource.push({
        key: i,
        no: i,
        vipLevelName: 'v1',
        matchOrders: '3',
        commissionType: '按比例',
        dailyCommission: '1',
        commissionRate: '0.2',
        fixedAmount: '0',
        purchaseAmount: '10',
        picture: '/storage/uploads/activity/activity-1.png',
        presetTemp: 'vip1模版',
        shopName: 'Falabella',
        status: '启用',
    })
}
