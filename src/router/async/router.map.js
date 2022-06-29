// 视图组件
const view = {
  tabs: () => import('@/layouts/tabs'),
  blank: () => import('@/layouts/BlankView'),
  page: () => import('@/layouts/PageView')
}

// 路由组件注册
const routerMap = {
  login: {
    authority: '*',
    path: '/login',
    component: () => import('@/pages/login')
  },
  root: {
    path: '/',
    name: '首页',
    redirect: '/login',
    component: view.tabs
  },
  dashboard: {
    name: '仪表板',
    icon: 'dashboard',
    component: () => import('@/pages/dashboard')
  },
  admin: {
    name: '仪表板',
    icon: 'user',
    component: () => import('@/pages/admin')
  },
  role: {
    name: '仪表板',
    icon: 'usergroup-add',
    component: () => import('@/pages/role')
  },
  authority: {
    name: '仪表板',
    icon: 'cluster',
    component: () => import('@/pages/authority')
  },
  users: {
    name: '用户管理',
    icon: 'user',
    component: view.page
  },
  payments: {
    name: '财务管理',
    icon: 'dollar',
    component: view.page
  },
  reports: {
    name: '统计报表',
    icon: 'area-chart',
    component: view.page
  },
  systems: {
    name: '系统管理',
    icon: 'setting',
    component: view.page
  },
  events: {
    name: '活动管理',
    icon: 'gift',
    component: view.page
  },
  operationss: {
    name: '营运管理',
    icon: 'account-book',
    component: view.page
  },
  shopping: {
    name: '购物管理',
    icon: 'shop',
    component: view.page
  },
  philippines: {
    name: '菲律宾代收付',
    icon: 'money-collect',
    component: view.page
  },
  generalAgent: {
    name: '总代理管理',
    icon: 'solution',
    component: view.page
  },
  investment: {
    name: '投资理财',
    icon: 'wallet',
    component: view.page
  },
  exception: {
    name: '异常页',
    icon: 'warning',
    component: view.blank
  },
  exp403: {
    authority: '*',
    name: 'exp403',
    path: '403',
    component: () => import('@/pages/exception/403')
  },
  exp404: {
    name: 'exp404',
    path: '404',
    component: () => import('@/pages/exception/404')
  },
  exp500: {
    name: 'exp500',
    path: '500',
    component: () => import('@/pages/exception/500')
  },
}
export default routerMap

