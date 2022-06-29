<template>
  <a-row :gutter="24">
    <a-col :md="12" :sm="24">
      <a-card :title="$ta('system|configure|(|pleaseClickModify|)')" :loading="loading">
        <a-button slot="extra" type="primary" @click="modify">
          {{$t('modify')}}
        </a-button>
        <a-tabs default-active-key="1">
          <a-tab-pane key="1" :tab="$ta('basic|setting')">
            <a-form :form="form1" layout="horizontal">
              <a-row v-for="(group, index) in groups" :key="index">
                <a-col :md="12" :sm="24">
                  <a-form-item
                    :label="group.label[0]"
                    :labelCol="{span: 17}"
                    :wrapperCol="{span: 7}"
                  >
                    <a-radio-group
                      v-decorator="[group.name[0], {rules: [{ required: true, message: $ta('select')}]}]"
                    >
                      <a-radio value="否">{{$t('no')}}</a-radio>
                      <a-radio value="是">{{$t('yes')}}</a-radio>
                    </a-radio-group>
                  </a-form-item>
                </a-col>
                <a-col :md="12" :sm="24">
                  <a-form-item
                    :label="group.label[1]"
                    :labelCol="{span: 17}"
                    :wrapperCol="{span: 7}"
                  >
                    <a-radio-group 
                      v-decorator="[group.name[1], {rules: [{ required: true, message: $ta('select')}]}]"
                    >
                      <a-radio value="否">{{$t('no')}}</a-radio>
                      <a-radio value="是">{{$t('yes')}}</a-radio>
                    </a-radio-group>
                  </a-form-item>
                </a-col>
              </a-row>
              <a-row>
                <a-col :md="12" :sm="24">
                  <a-form-item
                    label="是否显示合作伙伴"
                    :labelCol="{span: 17}"
                    :wrapperCol="{span: 7}"
                  >
                    <a-radio-group 
                      v-decorator="['isShow', {rules: [{ required: true, message: $ta('select')}]}]"
                    >
                      <a-radio value="否">{{$t('no')}}</a-radio>
                      <a-radio value="是">{{$t('yes')}}</a-radio>
                    </a-radio-group>
                  </a-form-item>
                </a-col>
                <a-col :md="12" :sm="24">
                  <a-form-item
                    label="注册[多少天]没充值无法抢单"
                    :labelCol="{span: 14}"
                    :wrapperCol="{span: 10}"
                  >
                    <a-input
                      v-decorator="['regDays', {rules: [{ required: true, message: $ta('input'), whitespace: true}]}]"
                    />
                  </a-form-item>
                </a-col>
              </a-row>
              <a-row>
                <a-col :md="12" :sm="24">
                  <a-form-item
                    label="用户注册[多少]天后"
                    :labelCol="{span: 10}"
                    :wrapperCol="{span: 12}"
                  >
                    <a-input
                      v-decorator="['userRegDays', {rules: [{ required: true, message: $ta('input'), whitespace: true}]}]"
                    />
                  </a-form-item>
                </a-col>
                <a-col :md="12" :sm="24">
                  <a-form-item
                    label="没有升级到V[几] 无法抢单"
                    :labelCol="{span: 12}"
                    :wrapperCol="{span: 12}"
                  >
                    <a-input
                      v-decorator="['upgradeNum', {rules: [{ required: true, message: $ta('input'), whitespace: true}]}]"
                    />
                  </a-form-item>
                </a-col>
              </a-row>
              <a-row>
                <a-col :md="12" :sm="24">
                  <a-form-item
                    label="延迟返本时间"
                    :labelCol="{span: 10}"
                    :wrapperCol="{span: 12}"
                  >
                    <a-input
                      v-decorator="['returnTime', {rules: [{ required: true, message: $ta('input'), whitespace: true}]}]"
                    >
                      <a-tooltip slot="suffix" title="延迟返本时间(秒)">
                        <span style="color: red">S</span>
                      </a-tooltip>
                    </a-input>
                  </a-form-item>
                </a-col>
                <a-col :md="12" :sm="24">
                  <a-form-item
                    label="抢单有效时间"
                    :labelCol="{span: 10}"
                    :wrapperCol="{span: 12}"
                  >
                    <a-input
                      v-decorator="['orderValidTime', {rules: [{ required: true, message: $ta('input'), whitespace: true}]}]"
                    >
                      <a-tooltip slot="suffix" title="延迟返本时间(秒)">
                        <span style="color: red">S</span>
                      </a-tooltip>
                    </a-input>
                  </a-form-item>
                </a-col>
              </a-row>
              <a-row>
                <a-col :md="12" :sm="24">
                  <a-form-item
                    label="注册赠送金额"
                    :labelCol="{span: 10}"
                    :wrapperCol="{span: 12}"
                  >
                    <a-input
                      v-decorator="['regCredit', {rules: [{ required: true, message: $ta('input'), whitespace: true}]}]"
                    />
                  </a-form-item>
                </a-col>
                <a-col :md="12" :sm="24">
                  <a-form-item
                    label="注册默认模式"
                    :labelCol="{span: 10}"
                    :wrapperCol="{span: 12}"
                  >
                    <a-select
                      v-decorator="['regMode', {rules: [{ required: true, message: $ta('select')}]}]"
                      :placeholder="$ta('select')"
                    >
                      <a-select-option v-for="(option, index) in options" v-bind:value="option.value" v-bind:key="index">
                        {{ option.text }}
                      </a-select-option>
                    </a-select>
                  </a-form-item>
                </a-col>
              </a-row>
              <a-row>
                <a-col :md="12" :sm="24">
                  <a-form-item
                    label="订单佣金类型"
                    :labelCol="{span: 10}"
                    :wrapperCol="{span: 12}"
                  >
                    <a-select
                      v-decorator="['commissionType', {rules: [{ required: true, message: $ta('select')}]}]"
                      :placeholder="$ta('select')"
                    >
                      <a-select-option v-for="(option, index) in options" v-bind:value="option.value" v-bind:key="index">
                        {{ option.text }}
                      </a-select-option>
                    </a-select>
                  </a-form-item>
                </a-col>
                <a-col :md="12" :sm="24">
                  <a-form-item
                    label="用户抢单类型"
                    :labelCol="{span: 10}"
                    :wrapperCol="{span: 12}"
                  >
                    <a-select
                      v-decorator="['orderType', {rules: [{ required: true, message: $ta('select')}]}]"
                      :placeholder="$ta('select')"
                    >
                      <a-select-option v-for="(option, index) in options" v-bind:value="option.value" v-bind:key="index">
                        {{ option.text }}
                      </a-select-option>
                    </a-select>
                  </a-form-item>
                </a-col>
              </a-row>
            </a-form>
          </a-tab-pane>
          <a-tab-pane key="2" :tab="$ta('deposit|\|withdrawal')">
            <a-form :form="form2" layout="horizontal">
              <a-row>
                <a-col :md="12" :sm="24">
                  <a-form-item
                    label="未完成任务是否允许提现"
                    :labelCol="{span: 14}"
                    :wrapperCol="{span: 10}"
                  >
                    <a-radio-group
                      v-decorator="['isWithdrawTask', {rules: [{ required: true, message: $ta('select')}]}]"
                    >
                      <a-radio value="不允许">{{$t('deny')}}</a-radio>
                      <a-radio value="允许">{{$t('allow')}}</a-radio>
                    </a-radio-group>
                  </a-form-item>
                </a-col>
                <a-col :md="12" :sm="24">
                  <a-form-item
                    label="是否未充值也可以提现"
                    :labelCol="{span: 14}"
                    :wrapperCol="{span: 10}"
                  >
                    <a-radio-group
                      v-decorator="['isWithdrawMoney', {rules: [{ required: true, message: $ta('select')}]}]"
                    >
                      <a-radio value="不允许">{{$t('deny')}}</a-radio>
                      <a-radio value="允许">{{$t('allow')}}</a-radio>
                    </a-radio-group>
                  </a-form-item>
                </a-col>
              </a-row>
              <a-row>
                <a-col :span="24">
                  <a-form-item
                    label="是否开启完成预设模式才允许提现"
                    :labelCol="{span: 8}"
                    :wrapperCol="{span: 10}"
                  >
                    <a-radio-group
                      v-decorator="['isComplete', {rules: [{ required: true, message: $ta('select')}]}]"
                    >
                      <a-radio value="否">{{$t('no')}}</a-radio>
                      <a-radio value="是">{{$t('yes')}}</a-radio>
                    </a-radio-group>
                  </a-form-item>
                </a-col>
              </a-row>
              <a-row>
                <a-col :md="12" :sm="24">
                  <a-form-item
                    label="提现是否开启总代理审核"
                    :labelCol="{span: 14}"
                    :wrapperCol="{span: 10}"
                  >
                    <a-radio-group
                      v-decorator="['isOpen', {rules: [{ required: true, message: $ta('select')}]}]"
                    >
                      <a-radio value="否">{{$t('no')}}</a-radio>
                      <a-radio value="是">{{$t('yes')}}</a-radio>
                    </a-radio-group>
                  </a-form-item>
                </a-col>
                <a-col :md="12" :sm="24">
                  <a-form-item
                    label="平台是否展示代理未审核的提现"
                    :labelCol="{span: 14}"
                    :wrapperCol="{span: 10}"
                  >
                    <a-radio-group
                      v-decorator="['isShow', {rules: [{ required: true, message: $ta('select')}]}]"
                    >
                      <a-radio value="隐藏">{{$t('hide')}}</a-radio>
                      <a-radio value="显示">{{$t('show')}}</a-radio>
                    </a-radio-group>
                  </a-form-item>
                </a-col>
              </a-row>
              <a-row>
                <a-col :md="12" :sm="24">
                  <a-form-item
                    label="提现手续费率"
                    :labelCol="{span: 8}"
                    :wrapperCol="{span: 15}"
                  >
                    <a-input
                      v-decorator="['withdrawFee', {rules: [{ required: true, message: $ta('input'), whitespace: true}]}]"
                    />
                  </a-form-item>
                </a-col>
                <a-col :md="12" :sm="24">
                  <a-form-item
                    label="首充赠送金额"
                    :labelCol="{span: 8}"
                    :wrapperCol="{span: 15}"
                  >
                    <a-input
                      v-decorator="['firstCharge', {rules: [{ required: true, message: $ta('input'), whitespace: true}]}]"
                    />
                  </a-form-item>
                </a-col>
              </a-row>
              <a-row>
                <a-col :md="12" :sm="24">
                  <a-form-item
                    label="提款额低于"
                    :labelCol="{span: 8}"
                    :wrapperCol="{span: 15}"
                  >
                    <a-input
                      v-decorator="['lessWithdraw', {rules: [{ required: true, message: $ta('input'), whitespace: true}]}]"
                    />
                  </a-form-item>
                </a-col>
                <a-col :md="12" :sm="24">
                  <a-form-item
                    label="固定收"
                    :labelCol="{span: 8}"
                    :wrapperCol="{span: 15}"
                  >
                    <a-input
                      v-decorator="['fixedIncome', {rules: [{ required: true, message: $ta('input'), whitespace: true}]}]"
                    />
                  </a-form-item>
                </a-col>
              </a-row>
              <a-row>
                <a-col :md="12" :sm="24">
                  <a-form-item
                    label="最大提现金额"
                    :labelCol="{span: 8}"
                    :wrapperCol="{span: 15}"
                  >
                    <a-input
                      v-decorator="['maxWithdrawAmount', {rules: [{ required: true, message: $ta('input'), whitespace: true}]}]"
                    />
                  </a-form-item>
                </a-col>
                <a-col :md="12" :sm="24">
                  <a-form-item
                    label="最小提现金额"
                    :labelCol="{span: 8}"
                    :wrapperCol="{span: 15}"
                  >
                    <a-input
                      v-decorator="['minWithdrawAmount', {rules: [{ required: true, message: $ta('input'), whitespace: true}]}]"
                    />
                  </a-form-item>
                </a-col>
              </a-row>
              <a-row>
                <a-col :md="12" :sm="24">
                  <a-form-item
                    label="提现开始时间"
                    :labelCol="{span: 8}"
                    :wrapperCol="{span: 15}"
                  >
                    <a-time-picker 
                      allowClear
                      style="width: 100%"
                      v-decorator="['withdSTime', {rules: [{ required: false, message: $ta('input'), whitespace: true}]}]"
                    >
                      <a-tooltip slot="suffixIcon" title="延迟返本时间(秒)">
                        <a-icon type="info-circle" style="color: rgba(0,0,0,.45)" />
                      </a-tooltip>
                    </a-time-picker>
                  </a-form-item>
                </a-col>
                <a-col :md="12" :sm="24">
                  <a-form-item
                    label="提现结束时间"
                    :labelCol="{span: 8}"
                    :wrapperCol="{span: 15}"
                  >
                    <a-time-picker
                      allowClear
                      style="width: 100%"
                      v-decorator="['withdETime', {rules: [{ required: false, message: $ta('input'), whitespace: true}]}]"
                    >
                      <a-tooltip slot="suffixIcon" title="延迟返本时间(秒)">
                        <a-icon type="info-circle" style="color: rgba(0,0,0,.45)" />
                      </a-tooltip>
                    </a-time-picker>
                  </a-form-item>
                </a-col>
              </a-row>
            </a-form>
          </a-tab-pane>
          <a-tab-pane key="3" :tab="$ta('customService')">
            <a-form :form="form3">
              <a-form-item
                label="客服组群邀请链接"
                :labelCol="{span: 6}"
                :wrapperCol="{span: 15}"
              >
                <a-input
                  v-decorator="['groupInviteLink', {rules: [{ required: false, message: $ta('input'), whitespace: true}]}]"
                />
              </a-form-item>
              <a-form-item
                label="客服邀请聊天链接"
                :labelCol="{span: 6}"
                :wrapperCol="{span: 15}"
              >
                <a-input
                  v-decorator="['inviteChatLink', {rules: [{ required: false, message: $ta('input'), whitespace: true}]}]"
                />
              </a-form-item>
              <a-form-item
                label="是否显示客服"
                :labelCol="{span: 6}"
                :wrapperCol="{span: 15, offset: 1}"
              >
                <a-radio-group 
                  v-decorator="['isCustomService', {rules: [{ required: true, message: $ta('select')}]}]"
                >
                  <a-radio value="否">{{$t('no')}}</a-radio>
                  <a-radio value="是">{{$t('yes')}}</a-radio>
                </a-radio-group>
              </a-form-item>
            </a-form>
          </a-tab-pane>
        </a-tabs>
      </a-card>
    </a-col>
    <google-auth />
  </a-row>
</template>

<script>
import GoogleAuth from '../../components/GoogleAuth'
import { groups } from './data.js'

export default {
  name: 'SystemConfiguration',
  i18n: require('./i18n'),
  components: {GoogleAuth},
  data () {
    return {
      form1: this.$form.createForm(this),
      form2: this.$form.createForm(this),
      form3: this.$form.createForm(this),
      groups: groups,
      loading: false,
      options: [
        { text: 'One', value: 'A' },
        { text: 'Two', value: 'B' },
        { text: 'Three', value: 'C' }
      ],
    }
  },
  methods: {
    modify () {
      this.loading = true
      setTimeout(() => this.loading = false, 3000)
    },
    reset () {
      this.form1.resetFields()
    }
  }
}
</script>