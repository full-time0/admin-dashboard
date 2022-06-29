export const columns = [
  {
    title: '#',
    dataIndex: 'no',
    align: 'center',
  },
  {
    title: '昵称',
    dataIndex: 'nickName',
    align: 'center',
  },
  {
    title: '会员手机号',
    dataIndex: 'memberPhone',
    align: 'center',
  },
  {
    title: '用户等级',
    dataIndex: 'userLevel',
    align: 'center',
  },
  {
    title: '可抢任务总数',
    dataIndex: 'availableTasks',
    align: 'center',
  },
  {
    title: '已完成任务数',
    dataIndex: 'completedTasks',
    align: 'center',
  },
  {
    title: '累计完成任务数',
    dataIndex: 'completedTasksAccumulatedNum',
    align: 'center',
  },
  {
    title: '余额',
    dataIndex: 'balance',
    align: 'center',
    customRender: (value) => parseFloat(value).toFixed(2)
  },
  {
    title: '佣金余额',
    dataIndex: 'commissionBalance',
    align: 'center',
    customRender: (value) => parseFloat(value).toFixed(2)
  },
  {
    title: '累计充值',
    dataIndex: 'totalDeposit',
    align: 'center',
    customRender: (value) => parseFloat(value).toFixed(2)
  },
  {
    title: '累计提现',
    dataIndex: 'totalWithdraw',
    align: 'center',
    customRender: (value) => parseFloat(value).toFixed(2)
  },
  {
    title: '累计支付',
    dataIndex: 'totalPayment',
    align: 'center',
    customRender: (value) => parseFloat(value).toFixed(2)
  },
  {
    title: '累计返还',
    dataIndex: 'totalReturn',
    align: 'center',
    customRender: (value) => parseFloat(value).toFixed(2)
  },
  {
    title: '登录状态',
    dataIndex: 'loginStatus',
    align: 'center',
    scopedSlots: { customRender: "loginStatus" },
  },
  {
    title: '账号交易状态',
    dataIndex: 'transactionStatus',
    align: 'center',
    scopedSlots: { customRender: "transactionStatus" },
  },
  {
    title: '是否可充值',
    dataIndex: 'isDeposit',
    align: 'center',
    scopedSlots: { customRender: "isDeposit" },
  },
  {
    title: '是否可提现',
    dataIndex: 'isWithdraw',
    align: 'center',
    scopedSlots: { customRender: "isWithdraw" },
  },
  {
    title: '最近在线时间',
    dataIndex: 'lastLogin',
    align: 'center',
  },
  {
    title: '用户状态',
    dataIndex: 'userStatus',
    align: 'center',
    fixed: 'right',
    scopedSlots: { customRender: "userStatus" },
  },
  {
    title: '分组模式',
    dataIndex: 'groupMode',
    align: 'center',
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

for (let i = 0; i < 41; i++) {
  dataSource.push({
      key: i,
      no: i,
      nickName: 'test member',
      memberPhone: '66666666',
      userLevel: '',
      availableTasks: '6',
      completedTasks: '4',
      completedTasksAccumulatedNum: '4',
      balance: '518.00',
      commissionBalance: '0',
      totalDeposit: '100',
      totalWithdraw: '346',
      totalPayment: '1044.7',
      totalReturn: '1000.7',
      loginStatus: '启用',
      transactionStatus: '允许',
      isDeposit: '是',
      isWithdraw: '是',
      lastLogin: '2022-6-20 18:19:4',
      userStatus: '正常',
      groupMode: 'C',
  })
}
