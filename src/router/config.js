import TabsView from '@/layouts/tabs/TabsView'
import PageView from '@/layouts/PageView'
import BlankView from '@/layouts/BlankView'

// 路由配置
const options = {
  routes: [
    {
      path: '/login',
      name: '登录页',
      component: () => import('@/pages/login')
    },
    {
      path: '*',
      name: '404',
      component: () => import('@/pages/exception/404'),
    },
    {
      path: '/403',
      name: '403',
      component: () => import('@/pages/exception/403'),
    },
    {
      path: '/',
      name: '首页',
      component: TabsView,
      redirect: '/login',
      children: [
        {
          path: 'dashboard',
          name: '仪表板',
          meta: {
            icon: 'dashboard'
          },
          component: () => import('@/pages/dashboard'),
        },
        {
          path: 'admin',
          name: '管理员管理',
          meta: {
            icon: 'user'
          },
          component: () => import('@/pages/admin'),
        },
        {
          path: 'role',
          name: '角色管理',
          meta: {
            icon: 'usergroup-add'
          },
          component: () => import('@/pages/role'),
        },
        {
          path: 'authority',
          name: '权限管理',
          meta: {
            icon: 'cluster'
          },
          component: () => import('@/pages/authority'),
        },
        {
          path: 'users',
          name: '用户管理',
          meta: {
            icon: 'user',
            page: {
              cacheAble: false
            }
          },
          component: PageView,
          children: [
            {
              path: 'list',
              name: '用户列表',
              component: () => import('@/pages/users/userList'),
            },
            {
              path: 'list/details/:id',
              name: '资金详情',
              meta: {
                highlight: '/users/list',
                invisible: true
              },
              component: () => import('@/pages/users/userList/FundingDetails'),
            },
            {
              path: 'first-charge',
              name: '首充列表',
              component: () => import('@/pages/users/firstCharge'),
            },
            {
              path: 'order-statistics',
              name: '会员订单统计',
              component: () => import('@/pages/users/orderStatistics'),
            },
            {
              path: 'bankcard',
              name: '银行卡列表',
              component: () => import('@/pages/users/bankCards'),
            },
            {
              path: 'ip-list',
              name: '会员IP检测',
              component: () => import('@/pages/users/memberIPList'),
            },
            {
              path: 'updown',
              name: '用户上下分',
              component: () => import('@/pages/users/upDown'),
            },
            {
              path: 'code-restrict',
              name: '用户打码限制',
              component: () => import('@/pages/users/codingRestrictions'),
            },
            {
              path: 'group-mode',
              name: '分组模式',
              component: () => import('@/pages/users/groupMode'),
            },
            {
              path: 'activation',
              name: '用户激活',
              component: () => import('@/pages/users/activation'),
            },
            {
              path: 'preset-template',
              name: '预设模板',
              component: () => import('@/pages/users/presetTemplate'),
            },
            {
              path: 'preset-template/details/:id',
              name: '预设模板详情',
              meta: {
                highlight: '/users/preset-template',
                invisible: true
              },
              component: () => import('@/pages/users/presetTemplate/TemplateDetails'),
            },
            {
              path: 'preset-mode',
              name: '用户预设模式',
              component: () => import('@/pages/users/presetMode'),
            },
            {
              path: 'preset-mode/details/:id',
              name: '模式详情',
              meta: {
                highlight: '/users/preset-mode',
                invisible: true
              },
              component: () => import('@/pages/users/presetMode/ModeDetails'),
            },
            {
              path: 'employee-form',
              name: '员工申请表',
              component: () => import('@/pages/users/employeeForm/EmployeeApplicationForm'),
            },
          ]
        },
        {
          path: 'payments',
          name: '财务管理',
          meta: {
            icon: 'dollar',
            page: {
              cacheAble: false
            }
          },
          component: PageView,
          children: [
            {
              path: 'deposit',
              name: '充值列表',
              component: () => import('@/pages/payments/deposit'),
            },
            {
              path: 'withdrawal',
              name: '提现列表',
              component: () => import('@/pages/payments/withdrawal'),
            },
            {
              path: 'commission',
              name: '分佣列表',
              component: () => import('@/pages/payments/commission'),
            },
            {
              path: 'vip-purchase',
              name: 'VIP购买记录',
              component: () => import('@/pages/payments/vipPurchase'),
            }
          ]
        },
        {
          path: 'reports',
          name: '统计报表',
          meta: {
            icon: 'area-chart',
            page: {
              cacheAble: false
            }
          },
          component: PageView,
          children: [
            {
              path: 'agency',
              name: '代理业绩报表',
              component: () => import('@/pages/reports/agency'),
            },
            {
              path: 'payment-channel',
              name: '支付渠道统计',
              component: () => import('@/pages/reports/paymentChannel'),
            },
          ]
        },
        {
          path: 'systems',
          name: '系统管理',
          meta: {
            icon: 'setting',
            page: {
              cacheAble: false
            }
          },
          component: PageView,
          children: [
            {
              path: 'agent-account',
              name: '代理账号管理',
              component: () => import('@/pages/systems/agent'),
            },
            {
              path: 'config',
              name: '系统配置',
              component: () => import('@/pages/systems/config'),
            },
            {
              path: 'ip-whitelist',
              name: 'IP白名单',
              component: () => import('@/pages/systems/whitelist'),
            },
            {
              path: 'payment-config',
              name: '支付配置',
              component: () => import('@/pages/systems/paymentconfig'),
            },
            {
              path: 'bankcard-type',
              name: '银行卡类型',
              component: () => import('@/pages/systems/cardtype'),
            },
            {
              path: 'admin-logs',
              name: '管理员日志',
              component: () => import('@/pages/systems/logs'),
            },
          ]
        },
        {
          path: 'events',
          name: '活动管理',
          meta: {
            icon: 'gift',
            page: {
              cacheAble: false
            }
          },
          component: PageView,
          children: [
            {
              path: 'list',
              name: '活动列表',
              component: () => import('@/pages/events/eventList'),
            },
            {
              path: 'recharge-gift',
              name: '充值赠送',
              component: () => import('@/pages/events/rechargeGift'),
            },
            {
              path: 'signin-gift',
              name: '签到礼包活动',
              component: () => import('@/pages/events/signGift'),
            },
            {
              path: 'invite-rebate',
              name: '邀请返佣',
              component: () => import('@/pages/events/inviteRebate'),
            },
          ]
        },
        {
          path: 'operationss',
          name: '营运管理',
          meta: {
            icon: 'account-book',
            page: {
              cacheAble: false
            }
          },
          component: PageView,
          children: [
            {
              path: 'article-list',
              name: '文章列表',
              component: () => import('@/pages/operations/articleList'),
            },
            {
              path: 'article-type',
              name: '文章类型',
              component: () => import('@/pages/operations/articleType'),
            },
            {
              path: 'carousel',
              name: '轮播图列表',
              component: () => import('@/pages/operations/carousel'),
            },
            {
              path: 'vip-list',
              name: 'VIP列表',
              component: () => import('@/pages/operations/vipList'),
            },
          ]
        },
        {
          path: 'shopping',
          name: '购物管理',
          meta: {
            icon: 'shop',
            page: {
              cacheAble: false
            }
          },
          component: PageView,
          children: [
            {
              path: 'product-list',
              name: '商品列表',
              component: () => import('@/pages/shopping/product'),
            },
            {
              path: 'order-list',
              name: '订单列表',
              component: () => import('@/pages/shopping/order'),
            },
            {
              path: 'task-list',
              name: '任务列表',
              component: () => import('@/pages/shopping/task'),
            },
          ]
        },
        {
          path: 'philippines',
          name: '菲律宾代收付',
          meta: {
            icon: 'money-collect',
            page: {
              cacheAble: false
            }
          },
          component: PageView,
          children: [
            {
              path: 'account',
              name: '代收账号列表',
              component: () => import('@/pages/philippines/account'),
            },
            {
              path: 'collect-order',
              name: '代收订单列表',
              component: () => import('@/pages/philippines/collectionOrder'),
            },
            {
              path: 'paid-order',
              name: '代付订单列表',
              component: () => import('@/pages/philippines/paidOrder'),
            },
          ]
        },
        {
          path: 'general-agent',
          name: '总代理管理',
          meta: {
            icon: 'solution',
            page: {
              cacheAble: false
            }
          },
          component: PageView,
          children: [
            {
              path: 'list',
              name: '总代理列表',
              component: () => import('@/pages/general-agent/list'),
            },
          ]
        },
        {
          path: 'investment',
          name: '投资理财',
          meta: {
            icon: 'wallet',
            page: {
              cacheAble: false
            }
          },
          component: PageView,
          children: [
            {
              path: 'financial',
              name: '理财列表',
              component: () => import('@/pages/investment/financial'),
            },
            {
              path: 'purchase',
              name: '购买记录',
              component: () => import('@/pages/investment/purchase'),
            },
            {
              path: 'dividend',
              name: '分红记录',
              component: BlankView,
              // component: () => import('@/pages/investment/dividend'),
            },
          ]
        },
      ]
    },
  ]
}

export default options
