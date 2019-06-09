<template>
  <div title="practice">
    <h2>{{msg}}</h2>
    <h2>{{this.$store.state.count}}</h2>
    <h2>{{this.$store.getters.getStateCount}}</h2>
    <button class="button1"
            @click="getEnum">get_Enum</button>
    <input type="textarea"
           v-model="enumresult"
           placeholder=0 />
    <button class='button'
            @click="addFun">+</button>
    <br>
    <br>
    <input v-model="beginTime"
           placeholder="edit me beginTime">
    <input v-model="endTime"
           placeholder="edit me endTime">
    <input v-model="selectContent"
           placeholder="edit me selectContent">
    <button @click="gettest">New random number</button>
    <button @click="get_id"
            id='is_id'>get_id</button>
  </div>
</template>
<script>
export default {
  // name: 'hello world',
  data () {
    return {
      msg: 'welcome to my world',
      enumresult: '',
      'id': '100010',
      'beginTime': '',
      'endTime': '',
      'selectContent': ''
    }
  },
  methods: {
    addFun () {
      this.$store.dispatch('addFun')
    },
    getEnum () {
      this.$request
        // .get('/api/enum_map')
        .get('/vue_demo/api/random')
        .then(response => {
          this.enumresult = JSON.stringify(response.data)
          console.log('enumresult:' + this.enumresult)
        })
    },
    getHsonLength (json) {
      var jsonLength = 0
      for (var i in json) {
        jsonLength++
        var t
        t = i
        i = t
      }
      return jsonLength
    },
    gettest () {
      if (this.beginTime === '' || this.endTime === '' || this.selectContent === '') {
        alert('请将选项补全')
      } else {
        const path = '/order_flow/test'
        var dat = { 'id': this.id, 'beginTime': this.beginTime, 'endTime': this.endTime, 'selectContent': this.selectContent }
        this.$request.post(path, dat, {
          headers: { 'Content-Type': 'application/json' }
        })
          .then(res => {
            alert(res.data.res_data[0].num)
          })
          .catch(error => {
            alert(error)
          })
      }
    },
    get_id (event) {
      alert(event.currentTarget.id)
      alert(event.currentTarget.innerText)
    }
  },
  created () {
    this.getRandom()
  }
}
</script>
<style>
.button {
  color: rgb(27, 172, 87);
  background-color: rgb(67, 97, 230);
  font-weight: bold; /*字体设置*/
}
</style>
