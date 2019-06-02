<template>
  <div class="container">
    <el-row :gutter="10"
            class="container1">
      <el-col :span="4"
              class="text">测试环境</el-col>
      <el-col :span="8">
        <el-select v-model="env"
                   placeholder="请选择">
          <!-- @change="onSelectChange"> -->
          <el-option v-for="item in env_opt"
                     :key="item.value"
                     :label="item.label"
                     :value="item.value">
          </el-option>
        </el-select>
      </el-col>
    </el-row>
    <el-row :gutter="10"
            class="container1">
      <el-col :span="4"
              class="text">业务类型</el-col>
      <el-col :span="8">
        <el-select v-model="business"
                   placeholder="请选择">
          <el-option v-for="item in business_opt"
                     :key="item.value"
                     :label="item.label"
                     :value="item.value">
          </el-option>
        </el-select>
      </el-col>
    </el-row>
    <el-row :gutter="10"
            class="container1">
      <el-col :span="4"
              class="text">发货国家</el-col>
      <el-col :span="8">
        <el-select v-model="from_country"
                   placeholder="请选择">
          <el-option v-for="item in from_country_opt"
                     :key="item.value"
                     :label="item.label"
                     :value="item.value">
          </el-option>
        </el-select>
      </el-col>
      <el-col :span="4"
              class="text">目的国家</el-col>
      <el-col :span="8">
        <el-select v-model="to_country"
                   placeholder="请选择">
          <el-option v-for="item in to_country_opt"
                     :key="item.value"
                     :label="item.label"
                     :value="item.value">
          </el-option>
        </el-select>
      </el-col>
    </el-row>
    <el-row :gutter="10"
            class="container1">
      <el-col :span="4"
              class="text">仓库代码</el-col>
      <el-col :span="8">
        <el-select v-model="warehouse"
                   placeholder="请选择">
          <el-option v-for="item in warehouse_opt"
                     :key="item.value"
                     :label="item.label"
                     :value="item.value">
          </el-option>
        </el-select>
      </el-col>
      <el-col :span="4"
              class="text">渠道</el-col>
      <el-col :span="8">
        <el-select v-model="channel"
                   placeholder="请选择"
                   :change="onSelectChange">
          <el-option v-for="item in channel_opt"
                     :key="item.value"
                     :label="item.label"
                     :value="item.value">
          </el-option>
        </el-select>
      </el-col>
    </el-row>
    <el-row :gutter="10"
            class="container1">
      <el-input type="textarea"
                :rows="6"
                placeholder="Json area">
      </el-input>
    </el-row>
    <el-row :gutter="10"
            class="container1">
      <el-button class="button">生成Json</el-button>
      <el-button class="button">Mock状态</el-button>
    </el-row>
    <el-row :gutter="10"
            class="container1">
      <el-input type="textarea"
                :rows="6"
                placeholder="Log area">
      </el-input>
    </el-row>
  </div>
</template>

<script>
import ElCol from 'element-ui/packages/col/src/col'
export default {
  components: { ElCol },
  data () {
    return {
      env_opt: [{
        value: 'test',
        label: 'Test'
      }, {
        value: 'uat',
        label: 'UAT'
      }, {
        value: 'staging',
        label: 'Staging'
      }],
      env: 'test',
      business_opt: [{
        value: 'cb',
        label: 'CrossBorder'
      }, {
        value: 'local',
        label: 'Local'
      }],
      business: 'cb',
      from_country_opt: [{
        value: 'cn',
        label: 'CN'
      }, {
        value: 'hk',
        label: 'HK'
      }, {
        value: 'id',
        label: 'ID'
      }, {
        value: 'vn',
        label: 'VN'
      }, {
        value: 'th',
        label: 'TH'
      }, {
        value: 'my',
        label: 'MY'
      }, {
        value: 'sg',
        label: 'SG'
      }, {
        value: 'ph',
        label: 'PH'
      }, {
        value: 'tw',
        label: 'TW'
      }],
      from_country: '',
      to_country_opt: [{
        value: 'id',
        label: 'ID'
      }, {
        value: 'vn',
        label: 'VN'
      }, {
        value: 'th',
        label: 'TH'
      }, {
        value: 'my',
        label: 'MY'
      }, {
        value: 'sg',
        label: 'SG'
      }, {
        value: 'ph',
        label: 'PH'
      }, {
        value: 'tw',
        label: 'TW'
      }],
      to_country: 'id',
      warehouse_opt: [{
        value: 'tws',
        label: 'TWS'
      }, {
        value: 'wise',
        label: 'Wise'
      }],
      warehouse: 'tws',
      channel_opt: [{
      }],
      channel: ''
    }
  },

  methods: {
    onSelect () {
      this.$router.push({ path: '/service/backend/planList' })
    },
    onSelectChange (val) {
      console.log('changing', val)
      this.env_opt.push({
        value: 'new ' + val,
        label: 'new ' + val
      })
    }
  }
}
</script>

<style>
.container {
  margin: 50px 200px;
}
.button {
  height: 60px;
  width: 120px;
  font-size: 16px;
}
.container1 {
  margin-left: 10px;
  margin-bottom: 10px;
  margin-right: 10px;
  width: 820px;
}
.text {
  padding-top: 10px;
}
</style>
