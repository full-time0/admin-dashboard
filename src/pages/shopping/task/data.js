export const columns = [
  {
    title: '#',
    dataIndex: 'no',
    align: 'center',
  },
  {
    title: '会员ID',
    dataIndex: 'memeberID',
    align: 'center',
  },
  {
    title: '订单号',
    dataIndex: 'orderNum',
    align: 'center',
  },
  {
    title: '用户手机号',
    dataIndex: 'userPhone',
    align: 'center',
  },
  {
    title: 'Vip等级',
    dataIndex: 'vipLevel',
    align: 'center',
    scopedSlots: { customRender: "vipLevel" },
  },
  {
    title: '会员昵称',
    dataIndex: 'memberName',
    align: 'center',
  },
  {
    title: '代理名称',
    dataIndex: 'agentName',
    align: 'center',
  },
  {
    title: '备注',
    dataIndex: 'remark',
    align: 'center',
    scopedSlots: { customRender: "remark" },
  },
  {
    title: '商品图片',
    dataIndex: 'picture',
    align: 'center',
    scopedSlots: { customRender: "picture" },
  },
  {
    title: '商品总价格',
    dataIndex: 'totalPrice',
    align: 'center',
    customRender: (value) => parseFloat(value).toFixed(2)
  },
  {
    title: '佣金',
    dataIndex: 'commission',
    align: 'center',
    customRender: (value) => parseFloat(value).toFixed(2)
  },
  {
    title: '创建时间',
    dataIndex: 'createdAt',
    align: 'center',
  },
  {
    title: '是否返本',
    dataIndex: 'isReturn',
    align: 'center',
    scopedSlots: { customRender: "isReturn" },
  },
  {
    title: '是否返佣',
    dataIndex: 'isRebate',
    align: 'center',
    scopedSlots: { customRender: "isRebate" },
  },
  {
    title: '状态',
    dataIndex: 'status',
    align: 'center',
    scopedSlots: { customRender: "status" },
    fixed: 'right',
  },
  {
    title: '操作',
    align: 'center',
    scopedSlots: { customRender: 'action' },
    fixed: 'right',
  }
]

export const dataSource = []

for (let i = 0; i < 2; i++) {
  dataSource.push({
      key: i,
      no: i,
      memeberID: '19',
      orderNum: '202206261742217799433120',
      userPhone: '666666',
      vipLevel: 'V1',
      memberName: 'ceshi',
      agentName: '代理',
      remark: '分组模式设定;按固定金额(1000.00)得到佣金:1000.00',
      picture: '/storage/uploads/activity/activity-1.png',
      totalPrice: '6000',
      commission: '1000',
      createdAt: '2022-6-26 13:42:21',
      isReturn: '是',
      isRebate: '是',
      status: '已派单',
  })
}

export const orderColumns = [
  {
    title: '#',
    dataIndex: 'no',
    align: 'center',
  },
  {
    title: '订单号',
    dataIndex: 'orderNum',
    align: 'center',
  },
  {
    title: '用户手机号',
    dataIndex: 'userPhone',
    align: 'center',
  },
  {
    title: '备注',
    dataIndex: 'remark',
    align: 'center',
    scopedSlots: { customRender: "remark" },
  },
  {
    title: '商品图片',
    dataIndex: 'picture',
    align: 'center',
    scopedSlots: { customRender: "picture" },
  },
  {
    title: '商品单价',
    dataIndex: 'price',
    align: 'center',
  },
  {
    title: '商品总价格',
    dataIndex: 'totalPrice',
    align: 'center',
    customRender: (value) => parseFloat(value).toFixed(2)
  },
  {
    title: '是否返本',
    dataIndex: 'isReturn',
    align: 'center',
    scopedSlots: { customRender: "isReturn" },
  },
  {
    title: '是否返佣',
    dataIndex: 'isRebate',
    align: 'center',
    scopedSlots: { customRender: "isRebate" },
  },
  {
    title: '状态',
    dataIndex: 'status',
    align: 'center',
    scopedSlots: { customRender: "status" },
    fixed: 'right',
  },
  {
    title: '操作',
    align: 'center',
    scopedSlots: { customRender: 'action' },
    fixed: 'right',
  }
]

