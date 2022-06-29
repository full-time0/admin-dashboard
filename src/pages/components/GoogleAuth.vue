<template>
  <a-col :md="12" :sm="24">
    <a-card :title="$ta('google|verify')">
      <a-card :bordered="false">
        <a-card-meta 
          description="谷歌验证器是一款动态口令工具，工作原理类似短信动态验证。绑定后每30s生成一个动态验证码，验证码可用于登录、提现、修改安全设置等操作的安全验证。"
        >
        </a-card-meta>
      </a-card>
      <a-card :bordered="false">
        <a-card-meta 
          title="下载谷歌验证器APP" 
          description="iOS用户登录App Store搜索“Authenticator”下载。安卓用户登录应用商店或使用手机浏览器搜索“谷歌验证器”下载。 App StoreGoogle Play"
        >
          <a-avatar slot="avatar" style="backgroundColor: #238383" size="small">1</a-avatar>
        </a-card-meta>
        <template slot="actions">
          <a-button type="primary" @click="gotoApp('apple')">App Store</a-button>
          <a-button type="primary" @click="gotoApp('play')">Google Play</a-button>
        </template>
      </a-card>
      <a-card :bordered="false">
        <a-card-meta 
          title="在谷歌验证器中添加密钥并备份" 
          description="打开谷歌验证器，扫描下方二维码或手动输入下述密钥添加验证令牌。"
        >
          <a-avatar slot="avatar" style="backgroundColor: #238383" size="small">2</a-avatar>
        </a-card-meta>
        <a-card style="margin: 5% 7% 0 7%; padding: 0 5%">
          <a-row :gutter="[24, 24]" type="flex" justify="space-between" align="middle">
            <a-col>
              <img alt="Scan me!" src="data:image/png;base64,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">
            </a-col>
            <a-col>
              <a-space direction="vertical">
                <p class="code">{{qrcode}}</p>
                <a-button type="primary" @click="copyCode">复制密匙</a-button>
              </a-space>
            </a-col>
            <a-col :span="24">
              <a-alert message="密钥用于手机更换或遗失找回谷歌验证器，绑定前请务必将上述密钥备份保存。" type="info" />
            </a-col>
          </a-row>
        </a-card>
      </a-card>
      <a-card :bordered="false">
        <a-card-meta 
          title="输入谷歌验证器中6位验证码" 
        >
          <a-avatar slot="avatar" style="backgroundColor: #238383" size="small">3</a-avatar>
        </a-card-meta>
        <a-space direction="vertical" size="middle" style="margin: 5% 0; width: 100%">
          <a-input
            v-decorator="['verifyCode', {rules: [{ required: true, message: $ta('input|google|verify|code'), whitespace: true}]}]"
            :placeholder="$ta('input|google|verify|code')" 
          />
          <a-button type="primary" block @click="copyCode">复制密匙</a-button>
        </a-space>
      </a-card>
    </a-card>
  </a-col>
</template>

<script>
export default {
  name: 'GoogleAuth',
  i18n: require('./i18n'),
  data () {
    return {
      qrcode: 'XVKTBQ4FPPKXXO4O',
    }
  },
  methods: {
    gotoApp (val) {
      if (val === 'apple') {
        window.open("https://apps.apple.com/us/app/google-authenticator/id388497605", '_blank');
      } else {
        window.open("https://play.google.com/store/apps/details?id=com.google.android.apps.authenticator2", '_blank');
      }
    },
    copyCode () {
      this.$message.success('复制成功 ' + this.qrcode);
    },
  }
}
</script>

<style lang="less" scoped>
  .code{
    font-size: 18px;
    font-weight: 700;
  }
</style>
