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
      title: '会员类型',
      dataIndex: 'membershipType',
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
      title: '是否为代理',
      dataIndex: 'isAgent',
      align: 'center',
      scopedSlots: { customRender: "isAgent" },
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
      title: '代理昵称',
      dataIndex: 'agentNickName',
      align: 'center',
    },
    {
      title: '代理手机号',
      dataIndex: 'agentMobile',
      align: 'center',
    },
    {
      title: '一级推荐人数',
      dataIndex: 'firstReferrals',
      align: 'center',
    },
    {
      title: '一级累计佣金',
      dataIndex: 'firstCommission',
      align: 'center',
      customRender: (value) => parseFloat(value).toFixed(2)
    },
    {
      title: 'Vip等级',
      dataIndex: 'vipLevel',
      align: 'center',
    },
    {
      title: '购买商品总额',
      dataIndex: 'totalPurchases',
      align: 'center',
      customRender: (value) => parseFloat(value).toFixed(2)
    },
    {
      title: '二级推荐人数',
      dataIndex: 'secondReferrals',
      align: 'center',
    },
    {
      title: '二级累计佣金',
      dataIndex: 'secondCommission',
      align: 'center',
      customRender: (value) => parseFloat(value).toFixed(2)
    },
    {
      title: '累计提佣',
      dataIndex: 'cumulativeCommission',
      align: 'center',
      customRender: (value) => parseFloat(value).toFixed(2)
    },
    {
      title: '累计佣金',
      dataIndex: 'accumulatedCommission',
      align: 'center',
      customRender: (value) => parseFloat(value).toFixed(2)
    },
    {
      title: '一级推荐人',
      dataIndex: 'firstRecommender',
      align: 'center',
    },
    {
      title: '二级推荐人',
      dataIndex: 'secondRecommender',
      align: 'center',
    },
    {
      title: '注册时间',
      dataIndex: 'createdAt',
      align: 'center',
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
      title: '提现限制金额',
      dataIndex: 'withdrawLimitAmount',
      align: 'center',
      customRender: (value) => parseFloat(value).toFixed(2)
    },
    {
      title: '备注',
      dataIndex: 'remark',
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
        membershipType: '测试会员',
        availableTasks: '6',
        completedTasks: '4',
        completedTasksAccumulatedNum: '4',
        isAgent: '否',
        totalDeposit: '100',
        totalWithdraw: '346',
        totalPayment: '1044.7',
        balance: '518.00',
        commissionBalance: '0',
        agentNickName: 'test staff agent',
        agentMobile: '888888',
        firstReferrals: '0',
        vipLevel: '',
        totalPurchases: '',
        firstCommission: '0',
        secondReferrals: '',
        secondCommission: '0',
        cumulativeCommission: '0',
        accumulatedCommission: '4',
        firstRecommender: '',
        secondRecommender: '888888',
        createdAt: '2018-07-26',
        loginStatus: '启用',
        transactionStatus: '允许',
        isDeposit: '是',
        isWithdraw: '是',
        withdrawLimitAmount: '101',
        remark: '',
        userStatus: '正常',
        groupMode: 'C',
    })
}
