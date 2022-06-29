export const columns = [
  {
    title: '#',
    dataIndex: 'no',
    align: 'center',
  },
  {
    title: '用户昵称',
    dataIndex: 'nickName',
    align: 'center',
  },
  {
    title: '用户手机号',
    dataIndex: 'memberPhone',
    align: 'center',
  },
  {
    title: '代理昵称',
    dataIndex: 'agentNickName',
    align: 'center',
  },
  {
    title: '购买商品总金额',
    dataIndex: 'totalPurchasedAmount',
    align: 'center',
    customRender: (value) => parseFloat(value).toFixed(2)
  },
  {
    title: '购买商品总数',
    dataIndex: 'totalPurchasedNum',
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
    title: '持有佣金',
    dataIndex: 'holdCommisson',
    align: 'center',
    customRender: (value) => parseFloat(value).toFixed(2)

  }
]

export const dataSource = []

for (let i = 1; i < 3; i++) {
  dataSource.push({
      key: i,
      no: i,
      nickName: 'test member',
      memberPhone: '66666666',
      agentNickName: '测试员工代理	',
      totalPurchasedAmount: '1044.7',
      totalPurchasedNum: '10',
      totalDeposit: '100',
      totalWithdraw: '346',
      balance: '108',
      holdCommisson: '0'
  })
}
