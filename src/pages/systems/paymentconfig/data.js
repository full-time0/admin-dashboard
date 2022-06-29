export const columns = [
    {
      title: '#',
      dataIndex: 'no',
      align: 'center',
    },
    {
      title: '支付公司',
      dataIndex: 'payCompany',
      align: 'center',
    },
    {
      title: '支付别名',
      dataIndex: 'payAlias',
      align: 'center',
    },
    {
      title: '权重',
      dataIndex: 'weights',
      align: 'center',
      scopedSlots: { customRender: "weights" },
    },
    {
      title: '商户ID',
      dataIndex: 'merchantID',
      align: 'center',
    },
    {
      title: '支付网关',
      dataIndex: 'payGateway',
      align: 'center',
    },
    {
      title: '代付网关',
      dataIndex: 'paymentGateway',
      align: 'center',
    },
    {
      title: '商户密钥',
      dataIndex: 'merchantKey',
      align: 'center',
      scopedSlots: { customRender: "merchantKey" },
    },
    {
      title: '代收费率',
      dataIndex: 'collectionRate',
      align: 'center',
      customRender: (value) => parseFloat(value).toFixed(2)
    },
    {
      title: '代付费率',
      dataIndex: 'paymentRate',
      align: 'center',
      customRender: (value) => parseFloat(value).toFixed(2)
    },
    {
      title: '代付密钥',
      dataIndex: 'paymentKey',
      align: 'center',
    },
    {
      title: '最大充值金额',
      dataIndex: 'maxDepositAmount',
      align: 'center',
      customRender: (value) => parseFloat(value).toFixed(2)
    },
    {
      title: '最小充值金额',
      dataIndex: 'minDepositAmount',
      align: 'center',
      customRender: (value) => parseFloat(value).toFixed(2)
    },
    {
      title: '充值金额',
      dataIndex: 'depositAmount',
      align: 'center',
    },
    {
      title: '最大提现金额',
      dataIndex: 'maxWithdrawAmount',
      align: 'center',
      customRender: (value) => parseFloat(value).toFixed(2)
    },
    {
      title: '最小提现金额',
      dataIndex: 'minWithdrawAmount',
      align: 'center',
      customRender: (value) => parseFloat(value).toFixed(2)
    },
    {
      title: '提现金额',
      dataIndex: 'withdrawAmount',
      align: 'center',
    },
    {
      title: '是否启用',
      dataIndex: 'isEnable',
      align: 'center',
      scopedSlots: { customRender: "isEnable" },
      fixed: 'right'
    },
    {
      title: '代收付类型',
      dataIndex: 'paymentType',
      align: 'center',
      scopedSlots: { customRender: "paymentType" },
      fixed: 'right'
    },
    {
      title: '操作',
      align: 'center',
      scopedSlots: { customRender: 'action' },
      fixed: 'right'
    }
]
  
export const dataSource = []
  
for (let i = 0; i < 41; i++) {
    dataSource.push({
        key: i,
        no: i,
        payCompany: 'Cftpay',
        payAlias: '印度支付Cftpay',
        weights: '1',
        merchantID: 'xxx',
        payGateway: 'https://api.cloud-pays.net',
        paymentGateway: 'https://api.cloud-pays.net',
        merchantKey: '63AA230CA37DD76E95E5533ABD3C9A02',
        collectionRate: '0',
        paymentRate: '0',
        paymentKey: '',
        maxDepositAmount: '1000000',
        minDepositAmount: '20',
        depositAmount: '20,50,100,500,1000,5000,10000',
        maxWithdrawAmount: '1000000',
        minWithdrawAmount: '20',
        withdrawAmount: '100,200,300',
        isEnable: '否',
        paymentType: '可充值可提现',
    })
}
