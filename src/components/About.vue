<template>
  <div class="container">
    <el-row :gutter="10"
            class="container1">
      <el-col :span="3"
              class="text">测试环境：</el-col>
      <el-col :span="5">
        <el-select id="select"
                   v-model="env"
                   @change="getChannelAndSeller"
                   placeholder="请选择">
          <!-- @change="onSelectChange"> -->
          <el-option v-for="item in env_opt"
                     :key="item.value"
                     :label="item.label"
                     :value="item.value">{{item.value}}</el-option>
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
                     :value="item.value"></el-option>
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
                     :value="item.value"></el-option>
        </el-select>
      </el-col>
    </el-row>
    <el-row :gutter="10"
            class="container1">
      <el-col :span="3"
              class="text">国家：</el-col>
      <el-col :span="5">
        <el-select v-model="country"
                   @change="getChannelAndSeller"
                   placeholder="请选择">
          <el-option v-for="item in country_opt"
                     :key="item.value"
                     :label="item.label"
                     :value="item.value"></el-option>
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
                     :value="item.value"></el-option>
        </el-select>
      </el-col>
      <el-col :span="3"
              class="text">买家及地址 :</el-col>
      <el-col :span="5">
        <el-select v-model="buyer_addr"
                   placeholder="请选择">
          <el-option v-for="item in buyer_addr_opt"
                     :key="item.value"
                     :label="item.label"
                     :value="item.value"></el-option>
        </el-select>
      </el-col>
    </el-row>
    <el-row :gutter="10"
            class="container1">
      <el-col :span="3"
              class="text">渠道：</el-col>
      <el-col :span="5">
        <el-select v-model="channel"
                   placeholder="请选择">
          <el-option v-for="item in channel_opt"
                     :key="item.value"
                     :label="item.label"
                     :value="item.value"></el-option>
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
                     :value="item.value"></el-option>
        </el-select>
      </el-col>
    </el-row>
    <el-row :gutter="10"
            class="container1">
      <p class="my-p">cod:true, wms:true, pickup:False，lane_code: L-TH01</p>
      <p class="my-AppChannels">{{AppChannels}}</p>
      <el-row :gutter="10"
              class="container1">
        <el-button class="button"
                   @click="getOrder">创建order</el-button>
        <el-button class="button"
                   @click="getJson">生成请求json</el-button>
      </el-row>
    </el-row>
    <el-row :gutter="10"
            class="container1">
      <el-input id="jsonInput"
                v-model="AppJson"
                type="textarea"
                :rows="5"
                placeholder="请求json框"></el-input>
    </el-row>
    <!-- <p>{{ AppOrder }}</p> -->
    <el-row :gutter="10"
            class="container1">
      <el-input id="orderInput"
                v-model="AppOrder"
                type="textarea"
                :rows="5"
                placeholder="创建order结果"></el-input>
    </el-row>
    <el-row :gutter="10"
            class="container1">
      <el-button class="button"
                 @click="initPickup">init pickup</el-button>
      <el-button class="button"
                 @click="initDropoff">init dropoff</el-button>
    </el-row>
    <el-row :gutter="10"
            class="container1">
      <el-input id="initDropoff"
                v-model="AppInitDropoff"
                type="textarea"
                :rows="5"
                placeholder="相应的预置init json"></el-input>
    </el-row>
    <el-row :gutter="10"
            class="container1">
      <el-input id="initPickup"
                v-model="AppInitPickup"
                type="textarea"
                :rows="5"
                placeholder="Init Result"></el-input>
    </el-row>
  </div>
</template>

<script>
import ElCol from 'element-ui/packages/col/src/col'
// import request from '@/api/request'
export default {
  components: { ElCol },
  data () {
    return {
      env_opt: [
        {
          value: '',
          label: ''
        },
        {
          value: 'test',
          label: 'Test'
        },
        {
          value: 'uat',
          label: 'UAT'
        },
        {
          value: 'staging',
          label: 'Staging'
        }
      ],
      env: '',
      seller_opt: [],
      seller: '',
      selleraddr_opt: [
        {
          value: 'cn',
          label: 'CN'
        },
        {
          value: 'hk',
          label: 'HK'
        }
      ],
      selleraddr: '',
      country_opt: [
        {
          value: 'id',
          label: 'ID'
        },
        {
          value: 'vn',
          label: 'VN'
        },
        {
          value: 'th',
          label: 'TH'
        },
        {
          value: 'my',
          label: 'MY'
        },
        {
          value: 'sg',
          label: 'SG'
        },
        {
          value: 'ph',
          label: 'PH'
        },
        {
          value: 'tw',
          label: 'TW'
        }
      ],
      country: '',
      product_opt: [
        {
          value: 'tws',
          label: 'TWS'
        },
        {
          value: 'wise',
          label: 'Wise'
        }
      ],
      product: '',
      channel_opt: [],
      channel: '',
      buyer_addr_opt: [
        {
          value: 'net',
          label: 'Net'
        }
      ],
      buyer_addr: '',
      pay_method_opt: [
        {
          value: 'batch',
          label: 'Batch'
        },
        {
          value: 'realtime',
          label: 'Realtime'
        },
        {
          value: 'check',
          label: 'Check'
        }
      ],
      pay_method: '',
      AppOrder: '',
      AppJson: '',
      AppInitPickup: '',
      AppInitDropoff: '',
      AppChannels: ''
    }
  },
  watch: {
    env (val, old) {
      this.channel = '' // 清空选项
      this.seller = ''
      console.log('val:' + val + ';old:' + old)
    },
    country (val, old) {
      this.channel = '' // 清空选项
      this.seller = ''
      console.log('val:' + val + ';old:' + old)
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
    },
    getOrder () {
      const path = '/order_flow/api/getenum'
      var dat = { 'env': this.env, 'country': this.country }
      this.AppOrder = ''
      this.$request
        .post(path, dat)
        .then(response => {
          this.AppOrder = JSON.stringify(response.data.res_data)
        })
        .catch(error => {
          console.log(error)
        })
    },
    getJson () {
      const path = '/order_flow/api/getenum'
      var dat = { 'env': this.env, 'country': this.country, 'seller': this.seller, 'selleraddr': this.selleraddr, 'product': this.product, 'buyer_addr': this.country, 'channel': this.channel, 'pay_method': this.pay_method }
      // var dat = { 'env': this.env, 'country': this.country }
      console.log(dat)
      this.$request
        .post(path, dat)
        .then(response => {
          this.AppJson = JSON.stringify(response.data)
        })
        .catch(error => {
          console.log(error)
        })
    },
    initPickup () {
      const path = '/api/enum_map'
      // this.$axios.get(this.BASE_API + path)
      this.$axios
        .get(this.BaseUrl + path)
        .then(response => {
          this.AppInitPickup = JSON.stringify(response.data)
        })
        .catch(error => {
          console.log(error)
        })
    },
    initDropoff () {
      // const path = '/api/enum_map'
      const path = '/vue_demo/api/random'
      // this.$axios.get(this.BASE_API + path)
      this.$request
        .get(path)
        .then(response => {
          this.AppInitDropoff = JSON.stringify(response.data)
        })
        .catch(error => {
          console.log(error)
        })
    },
    // getChannel () {
    //   const path = '/order_flow/api/getchnel'
    //   var dat = { 'env': this.env, 'country': this.country }
    //   if (this.env !== '' && this.country !== '') {
    //     this.channel_opt = [] // 清空channel_opt
    //     console.log(dat)
    //     this.$request
    //       .post(path, dat)
    //       .then(response => {
    //         this.AppChannels = JSON.stringify(response.data)
    //         const channelOptData = response.data.res_data
    //         console.log(channelOptData)
    //         for (var item in channelOptData) {
    //           this.channel_opt.push({ id: item, value: channelOptData[item] })
    //         }
    //       })
    //       .catch(error => {
    //         console.log(error)
    //       })
    //   }
    // }

    getChannelAndSeller () {
      // var this01 = this
      const path = '/order_flow/api/getchnel'
      const path01 = '/order_flow/api/getseller'
      var dat = { 'env': this.env, 'country': this.country }
      if (this.env !== '' && this.country !== '') {
        this.channel_opt = [] // 清空channel_opt
        this.seller_opt = [] // seller_opt
        console.log(dat)
        this.$axios.all([
          this.$axios.post(this.BaseUrl + path, dat),
          this.$axios.post(this.BaseUrl + path01, dat)
        ]).then(this.$axios.spread((channelResp, sellerResp) => { // 不适用箭头函数则为：.then(this.$request.spread(function (channelResp, sellerResp){ PS：此时函数里的this为undefined，需要重新定义一个var this01 = this引用
          console.log(channelResp.data)
          this.AppChannels = JSON.stringify(channelResp.data)
          const channelOptData = channelResp.data.res_data
          console.log(channelOptData)
          for (var item in channelOptData) {
            this.channel_opt.push({ id: item, value: channelOptData[item] })
          }
          this.AppSellers = JSON.stringify(sellerResp.data)
          const sellerOptData = sellerResp.data.res_data
          console.log(sellerOptData)
          for (var item01 in sellerOptData) {
            this.seller_opt.push({ id: item01, value: sellerOptData[item01] })
          }
        }))
      }
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
