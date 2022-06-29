<template>
  <div>
    <a-row>
      <a-col :md="4" :sm="24">
        <a-input 
          :placeholder="$ta('input|user|phone')"
          v-model="userPhone"
        />
      </a-col>
      <a-col :md="8" :sm="24" :offset="1">
        <a-button @click="showApplicationForm" type="primary">{{$t('generate')}}</a-button>
      </a-col>
    </a-row>
    <a-divider orientation="left"></a-divider>
    <a-row v-if="visible">
      <a-col :span="12">
        <a-card :loading="loading" bordered style="background: rgb(254, 191, 0)">
          <div slot="title">
            <h2 class="container-title-left">Shopee</h2>
          </div>
          <div slot="extra">
            <h2 class="container-title-right">Job application form</h2>
            <a-row class="container-time" :gutter="16">
              <a-col>
                <h3>Registration date:</h3>
              </a-col>
              <a-col>
                <h3>2022-6-22 0:29:33</h3>
              </a-col>
            </a-row>
          </div>
        </a-card>
        <a-card bordered>
          <div class="container-body">
            <div class="container-body-title">
              My basic personal information
            </div>
            <a-descriptions bordered size="middle" :column="2">
              <a-descriptions-item label="Actual Name">
                
              </a-descriptions-item>
              <a-descriptions-item label="Platform Username">
                Acting
              </a-descriptions-item>
              <a-descriptions-item label="Bank">
                Ngan hang TPBank
              </a-descriptions-item>
              <a-descriptions-item label="Telephone Number">
                {{userPhone}}
              </a-descriptions-item>
              <a-descriptions-item label="Bank Card Number">
                123456789
              </a-descriptions-item>
              <a-descriptions-item label="Email">
                12123@qq.com
              </a-descriptions-item>
              <a-descriptions-item label="Family Address">
                
              </a-descriptions-item>
            </a-descriptions>
          </div>
          <div class="container-body">
            <div class="container-body-title">
              Basic information of my work
            </div>
            <a-descriptions bordered size="middle" :column="2">
              <a-descriptions-item label="Job Category">
                Online Work
              </a-descriptions-item>
              <a-descriptions-item label="Profession">
                Staff
              </a-descriptions-item>
              <a-descriptions-item label="Settlement Method">
                Bank Card Payment
              </a-descriptions-item>
              <a-descriptions-item label="Daily Salary">
                800
              </a-descriptions-item>
              <a-descriptions-item label="Precautions">
                1.After completing the test task, we will send you the "Employment Application Form";
                <br />
                2.The personnel department will approve your application after completing the entry assessment task of the personnel department;
                <br />
                3.After becoming a full-time employee, you can earn 800 daily wages per day;
                <br />
                4.Full-time employees do not need to participate in the panic buying every day, but they still have a fixed salary.
              </a-descriptions-item>
            </a-descriptions>
          </div>
        </a-card>
      </a-col>
    </a-row>
  </div>
</template>

<script>

export default {
  name: 'EmployeeApplicationForm',
  i18n: require('./i18n'),
  data () {
    return {
      loading: false,
      visible: false,
      userPhone: '',
    }
  },
  methods: {
    showApplicationForm () {
      if (this.userPhone === '') {
        this.$message.error('The phone field is required');
      } else {
        this.loading = true
        console.log(this.userPhone)
        this.loading = false
        this.visible = true
      }
    },
  }
}
</script>

<style lang="less" scoped>
  .container-title-left {
    color: white;
    border-bottom: solid;
    line-height: 3rem;
    position: absolute;
    right: 80%;
    left: 3%;
    top: 10%;
  }
  .container-title-right {
    color: white;
    border-top: solid;
    line-height: 3rem;
    text-align-last: right;
  }
  .container-time {
    display: flex;
    justify-content: space-around;
    align-items: center;
    font-weight: 700;
  }
  .container-body-title {
    text-align: center;
    font-size: 1rem;
    font-weight: 700;
    margin: 10px 0;
  }
</style>