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
      title: '账号登录状态',
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
      title: '提现流水',
      dataIndex: 'cashFlow',
      align: 'center',
      customRender: (value) => parseFloat(value).toFixed(2)
    },
    {
      title: '备注',
      dataIndex: 'remark',
      align: 'center',
    },
    {
      title: '操作',
      align: 'center',
      scopedSlots: { customRender: 'action' },
      fixed: 'right',
    }
]
  
export const dataSource = []
  
for (let i = 0; i < 3; i++) {
    dataSource.push({
        key: i,
        no: i,
        nickName: 'test member',
        memberPhone: '66666666',
        totalDeposit: '100',
        totalWithdraw: '346',
        balance: '518',
        commissionBalance: '0',
        agentMobile: '888888',
        firstReferrals: '0',
        firstCommission: '0',
        secondReferrals: '0',
        secondCommission: '0',
        cumulativeCommission: '0',
        firstRecommender: '',
        secondRecommender: '',
        createdAt: '2018-07-26',
        loginStatus: '启用',
        transactionStatus: '允许',
        isDeposit: '是',
        isWithdraw: '是',
        withdrawLimitAmount: '101',
        cashFlow: '0',
        remark: '',
    })
}
