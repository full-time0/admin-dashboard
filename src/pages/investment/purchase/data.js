export const columns = [
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
    title: '购买项目名称',
    dataIndex: 'itemName',
    align: 'center',
  },
  {
    title: '用户昵称',
    dataIndex: 'nickName',
    align: 'center',
  },
  {
    title: '用户名',
    dataIndex: 'userName',
    align: 'center',
  },
  {
    title: '代理',
    dataIndex: 'agent',
    align: 'center',
  },
  {
    title: '购买金额',
    dataIndex: 'price',
    align: 'center',
    customRender: (value) => parseFloat(value).toFixed(2)
  },
  {
    title: '购买时间',
    dataIndex: 'purchaseTime',
    align: 'center',
  },
  {
    title: '总分红数',
    dataIndex: 'totalDividend',
    align: 'center',
  },
  {
    title: '已分红数',
    dataIndex: 'paidDividend',
    align: 'center',
  },
  {
    title: '日收益率',
    dataIndex: 'dailyReturn',
    align: 'center',
    customRender: (value) => parseFloat(value).toFixed(2)
  },
  {
    title: '收入方式',
    dataIndex: 'incomeMethod',
    align: 'center',
    scopedSlots: { customRender: "incomeMethod" },
  },
  {
    title: '是否返本',
    dataIndex: 'isReturn',
    align: 'center',
    scopedSlots: { customRender: "isReturn" },
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
    fixed: 'right',
  }
]

export const dataSource = []

for (let i = 0; i < 19; i++) {
  dataSource.push({
      key: i,
      no: i,
      orderNum: 'LC2022040810210199',
      itemName: '',
      nickName: 'ceshi',
      userName: '666666',
      agent: '888888',
      price: '20',
      purchaseTime: '2022-6-26 13:42:21',
      totalDividend: '1',
      paidDividend: '0',
      dailyReturn: '0.1',
      incomeMethod: '到期还本还息',
      isReturn: '否',
      status: '分红中',
  })
}

export const purchaseColumns = [
  {
    title: '#',
    dataIndex: 'no',
    align: 'center',
  },
  {
    title: '购买金额',
    dataIndex: 'price',
    align: 'center',
    customRender: (value) => parseFloat(value).toFixed(2)
  },
  {
    title: '分红金额',
    dataIndex: 'dividendAmount',
    align: 'center',
    customRender: (value) => parseFloat(value).toFixed(2)
  },
  {
    title: '分红比例',
    dataIndex: 'dividendRate',
    align: 'center',
    customRender: (value) => parseFloat(value).toFixed(3)
  },
  {
    title: '是否已分红',
    dataIndex: 'isDividend',
    align: 'center',
    scopedSlots: { customRender: "isDividend" },
  },
  {
    title: '分红时间',
    dataIndex: 'dividendTime',
    align: 'center',
  },
  {
    title: '类型',
    dataIndex: 'type',
    align: 'center',
    scopedSlots: { customRender: "type" },
  },
  {
    title: '用户购买订单号',
    dataIndex: 'purchaseOrderNum',
    align: 'center',
  }
]

