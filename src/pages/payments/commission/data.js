export const columns = [
  {
    title: '#',
    dataIndex: 'no',
    align: 'center',
  },
  {
    title: '会员手机号',
    dataIndex: 'memberPhone',
    align: 'center',
  },
  {
    title: '会员名称',
    dataIndex: 'memberName',
    align: 'center',
  },
  {
    title: '下级账号',
    dataIndex: 'lowerLevelAccount',
    align: 'center',
  },
  {
    title: '分佣金额',
    dataIndex: 'commission',
    align: 'center',
    customRender: (value) => parseFloat(value).toFixed(2)
  },
  {
    title: '分佣时间',
    dataIndex: 'commissionTime',
    align: 'center',
  },
  {
    title: '分佣等级',
    dataIndex: 'commissionLevel',
    align: 'center',
  },
]

export const dataSource = []

for (let i = 0; i < 41; i++) {
  dataSource.push({
      key: i,
      no: i,
      memberPhone: '66666666',
      memberName: '代理',
      lowerLevelAccount: '111111',
      commission: '100',
      commissionTime: '2022-06-14',
      commissionLevel: '1',
  })
}
