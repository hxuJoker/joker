<template>
  <div>
    <Input v-model="value14" placeholder="Enter something..." clearable style="width: 200px" />
    <Button type="primary" @click="search">查询</Button>
    <Button type="primary" @click="addPop">新增</Button>
    <Table border :columns="columns12" :data="data6">
      <template slot-scope="{ row }" slot="name">
        <strong>{{ row.name }}</strong>
      </template>
      <template slot-scope="{ row }" slot="action">
        <Button type="primary" size="small" style="margin-right: 5px" @click="show(row)">View</Button>
        <Button type="primary" size="small" style="margin-right: 5px" @click="update(row)">Update</Button>
        <Button type="error" size="small" style="margin-right: 5px" @click="remove(row)">Delete</Button>
      </template>
    </Table>
    <Modal v-model="showAddPop" title="Common Modal dialog box title" @on-ok="handleSubmit('formInline')">
      <Form ref="formInline" :model="formInline" :label-width="80">
        <FormItem prop="user" label="userName">
          <i-input type="text" v-model="formInline.name" placeholder="Username">
            <Icon type="ios-person-outline" slot="prepend"></Icon>
          </i-input>
        </FormItem>
        <FormItem prop="password" label="age">
          <i-input type="text" v-model="formInline.age" placeholder="age">
            <Icon type="ios-lock-outline" slot="prepend"></Icon>
            </i-input>
        </FormItem>
        <FormItem prop="password" label="address">
          <i-input type="text" v-model="formInline.address" placeholder="address">
            <Icon type="ios-lock-outline" slot="prepend"></Icon>
            </i-input>
        </FormItem>
      </Form>
    </Modal>
    <Modal v-model="showAddPop1" title="Common Modal dialog box title" @on-ok="handleSubmit1('formInline')">
      <Form ref="formInline" :model="formInline1" :label-width="80">
        <FormItem prop="user" label="userName">
          <i-input type="text" v-model="formInline1.name" placeholder="Username">
            <Icon type="ios-person-outline" slot="prepend"></Icon>
          </i-input>
        </FormItem>
        <FormItem prop="password" label="age">
          <i-input type="text" v-model="formInline1.age" placeholder="age">
            <Icon type="ios-lock-outline" slot="prepend"></Icon>
            </i-input>
        </FormItem>
        <FormItem prop="password" label="address">
          <i-input type="text" v-model="formInline1.address" placeholder="address">
            <Icon type="ios-lock-outline" slot="prepend"></Icon>
            </i-input>
        </FormItem>
      </Form>
    </Modal>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value14: "",
      formInline:{
        name:'',
        age:'',
        address:''
      },
      formInline1:{
        name:'',
        age:'',
        address:''
      },
      columns12: [
        {
          title: "Name",
          slot: "name"
        },
        {
          title: "Age",
          key: "age"
        },
        {
          title: "Address",
          key: "address"
        },
        {
          title: "Action",
          slot: "action",
          width: 300,
          align: "center"
        }
      ],
      data6: [],
      showAddPop: false,
      showAddPop1: false
    };
  },
  mounted() {
    this.init()
  },
  methods: {
    init(){
      this.$get("/api/getTitleList").then(res => {
        if (res.err_code === 0) {
          this.data6 = res.list;
        }
      });
    },
    show(row) {
      this.$get('/api/getTitleOne',{id:row._id.replace(/"/ig,'')}).then(res=>{
        if(res.err_code === 0){
          this.$Modal.info({
            title: "User Info",
            content: `Name：${res.list.name}<br>Age：${res.list.age}<br>Address：${res.list.address}`
          });
        }
      })
    },
    remove(row) {
      this.$get('/api/deleteTitleOne',{id:row._id.replace(/"/ig,'')}).then(res=>{
        if(res.err_code === 0){
          this.$Message.info(res.message)
          this.init()
        }
      });
    },
    search() {
      if(this.value14){
        this.$get('/api/getTitleOneByName',{name:this.value14}).then(res=>{
          if(res.err_code === 0){
            this.data6 = (res.list)
          }
        });
      } else {
        this.init()
      }
    },
    addPop() {
      this.showAddPop = true;
    },
    handleSubmit() {
      this.$post('/api/saveTitleOne',this.formInline).then(res=>{
        if(res.err_code === 0){
          this.$Message.info(res.message)
          this.init()
        }
      })
    },
    update(row){
      this.showAddPop1 = true
      this.formInline1._id = row._id
      this.$get('/api/getTitleOne',{id:row._id.replace(/"/ig,'')}).then(res=>{
        if(res.err_code === 0){
          this.formInline1 = res.list
        }
      })
    },
    handleSubmit1() {
      this.$post('/api/updateTitleOne',this.formInline1).then(res=>{
        if(res.err_code === 0){
          this.$Message.info(res.message)
          this.init()
        }
      })
    },
  }
};
</script>

<style lang="less" scoped>
</style>