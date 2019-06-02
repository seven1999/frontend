<template>
  <div class="container">
    <el-row :gutter="10"
            class="container1">
      <el-col :span="3"
              class="text">测试环境：</el-col>
      <el-col :span="5">
        <el-select id="select"
                   v-model="env"
                   placeholder="请选择">
          <!-- @change="onSelectChange"> -->
          <el-option v-for="item in env_opt"
                     :key="item.value"
                     :label="item.label"
                     :value="item.value">{{item.value}}
          </el-option>
        </el-select>
      </el-col>
      <el-col :span="3"
              class="text">卖家选择：</el-col>
      <el-col :span="5">
        <el-select v-model="seller"
                   placeholder="请选择">
          <el-option v-for="item in seller_opt"
                     :key="item.value"
                     :label="item.label"
                     :value="item.value">
          </el-option>
        </el-select>
      </el-col>
      <el-col :span="3"
              class="text">卖家地址：</el-col>
      <el-col :span="5">
        <el-select v-model="selleraddr"
                   placeholder="请选择">
          <!-- @change="onSelectChange"> -->
          <el-option v-for="item in selleraddr_opt"
                     :key="item.value"
                     :label="item.label"
                     :value="item.value">
          </el-option>
        </el-select>
      </el-col>
    </el-row>
    <el-row :gutter="10"
            class="container1">
      <el-col :span="3"
              class="text">国家：</el-col>
      <el-col :span="5">
        <el-select v-model="country"
                   placeholder="请选择">
          <el-option v-for="item in country_opt"
                     :key="item.value"
                     :label="item.label"
                     :value="item.value">
          </el-option>
        </el-select>
      </el-col>
      <el-col :span="3"
              class="text">商品选择：</el-col>
      <el-col :span="5">
        <el-select v-model="product"
                   placeholder="请选择">
          <el-option v-for="item in product_opt"
                     :key="item.value"
                     :label="item.label"
                     :value="item.value">
          </el-option>
        </el-select>
      </el-col>
      <el-col :span="3"
              class="text">渠道：</el-col>
      <el-col :span="5">
        <el-select v-model="channel"
                   placeholder="请选择">
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
      <el-col :span="3"
              class="text">买家及地址 :</el-col>
      <el-col :span="5">
        <el-select v-model="buyer_addr"
                   placeholder="请选择">
          <el-option v-for="item in buyer_addr_opt"
                     :key="item.value"
                     :label="item.label"
                     :value="item.value">
          </el-option>
        </el-select>
      </el-col>
      <el-col :span="3"
              class="text">付款方式：</el-col>
      <el-col :span="5">
        <el-select v-model="pay_method"
                   placeholder="请选择">
          <el-option v-for="item in pay_method_opt"
                     :key="item.value"
                     :label="item.label"
                     :value="item.value">
          </el-option>
        </el-select>
      </el-col>
    </el-row>
    <el-row :gutter="10"
            class="container1">
      <p class="my-p"> cod:true, wms:true, pickup:False，lane_code: L-TH01 </p>
      <el-row :gutter="10"
              class="container1">
        <el-button class="button">创建order</el-button>
        <el-button class="button">生成请求json</el-button>
      </el-row>
    </el-row>
    <el-row :gutter="10"
            class="container1">
      <el-input type="textarea"
                :rows="5"
                placeholder="请求json框">
      </el-input>
    </el-row>
    <el-row :gutter="10"
            class="container1">
      <el-input type="textarea"
                :rows="5"
                placeholder="创建order结果">
      </el-input>
    </el-row>
    <el-row :gutter="10"
            class="container1">
      <el-button class="button">init pickup</el-button>
      <el-button class="button">init dropoff</el-button>
    </el-row>
    <el-row :gutter="10"
            class="container1">
      <el-input type="textarea"
                :rows="5"
                placeholder="相应的预置init json">
      </el-input>
    </el-row>
    <el-row :gutter="10"
            class="container1">
      <el-input type="textarea"
                :rows="5"
                placeholder="Init Result">
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
        value: '',
        label: ''
      }, {
        value: 'test',
        label: 'Test'
      }, {
        value: 'uat',
        label: 'UAT'
      }, {
        value: 'staging',
        label: 'Staging'
      }],
      env: '',
      seller_opt: [{
        value: 'cb',
        label: 'CrossBorder'
      }, {
        value: 'local',
        label: 'Local'
      }],
      seller: '',
      selleraddr_opt: [{
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
      selleraddr: '',
      country_opt: [{
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
      country: '',
      product_opt: [{
        value: 'tws',
        label: 'TWS'
      }, {
        value: 'wise',
        label: 'Wise'
      }],
      product: '',
      channel_opt: [{
        value: 'net',
        label: 'Net'
      }],
      channel: '',
      buyer_addr_opt: [{
        value: 'net',
        label: 'Net'
      }],
      buyer_addr: '',
      pay_method_opt: [{
        value: 'batch',
        label: 'Batch'
      }, {
        value: 'realtime',
        label: 'Realtime'
      }, {
        value: 'check',
        label: 'Check'
      }],
      pay_method: ''
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

<style scoped>
.container {
  margin: 50px 200px;
}
.button {
  /* padding: 10px 20px; */
  height: 10px;
  width: 100px;
  font-size: 14px;
  float: right;
  margin: 10px; /*设置间距*/
  background-color: rgb(126, 145, 231);
  color: aliceblue;
  /* display: flex;
  justify-content: center;
  align-items: center; 字体居中 */
  /* position: relative; */
  text-align: center;
  padding: 1rem 0 1.8rem;
  font-weight: bold; /*字体设置*/
}
.container1 {
  margin-left: 10px;
  margin-bottom: 2px;
  margin-right: 10px;
  width: 920px;
}
.text {
  /* padding-top: 18px; */
  text-align: center;
  line-height: 38px;
  height: 38px;
  /* background-color: rgb(126, 145, 231); */
}
</style>
