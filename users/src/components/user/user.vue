<template>
<div class="user">
  <el-table  :fit="true"  :height="170" :data="datas.filter(data=>!search || data.name.toLowerCase().includes(search.toLowerCase()))" border stripe>
    <el-table-column prop="index"label="序号"></el-table-column>
    <el-table-column prop="name" label="姓名"></el-table-column>
    <el-table-column prop="bir"  label="生日"></el-table-column>
    <el-table-column prop="sex"  label="性别"></el-table-column>
    <el-table-column prop="addr" label="地址"></el-table-column>
    <el-table-column align="right">
      <template slot="header" slot-scope="scope">
        <el-input v-model="search" size="mini" placeholder="请输入关键字搜索"></el-input>
      </template>
      <template slot-scope="scope">
        <el-button size="mini" @click="edit(scope.$index,scope.row)" type="success">编辑</el-button>
        <el-popconfirm
          icon="el-icon-info"
          iconColor="red"
          cancelButtonText="取消"
          confirmButtonText="确认"
          title="确认要删除当前记录吗?"
          @onConfirm="del(scope.$index,scope.row)">
          <el-button size="mini" slot="reference"  type="danger">删除</el-button>
        </el-popconfirm>

      </template>
    </el-table-column>
  </el-table>
  <el-button type="success" @click="addUser" size="mini" style="margin:10px 0;">添加</el-button>
  <el-button type="warning"  @click="loopFun" size="mini" style="margin:10px 0;">刷新</el-button>
  <transition name="el-zoom-in-center">
    <div v-show="show" >
    <el-form hide-required-asterisk :rules="rules" ref="form" :model="form" label-suffix=":" label-width="80px">
      <el-form-item label="姓名" prop="name">
        <el-input  v-model="form.name" ></el-input>
      </el-form-item>
      <el-form-item label="生日">
        <el-date-picker type="date" v-model="form.bir" placeholder="选择日期"></el-date-picker>
      </el-form-item>
      <el-form-item label="性别">
        <el-radio-group v-model="form.sex">
          <el-radio label="男"></el-radio>
          <el-radio label="女"></el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="地址">
        <el-input type="textarea" v-model="form.addr"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="success" @click="submits" size="mini">保存信息</el-button>
        <el-button size="mini" @click="cancel">取消</el-button>
      </el-form-item>
    </el-form>
    </div>
  </transition>



</div>
</template>

<script>
    export default {
        name: "user",
      data(){
          return {
            search: null,
            show: false,
            rules:{
              name:[
                {required:true,message:"请输入用户名...",trigger:"blur"},
              ]
            },
            form: {
              name: null,
              sex: '男',
              bir: null,
              addr: null
            },
            datas: [
              {id: 1,name: '王小虎',sex: '男',address: '上海市金沙江区15号'},
              {id: 2,name: '张晓晓',sex: '女',address: '上海市金沙江区15号'},
              {id: 3,name: '刘亦菲',sex: '女',address: '上海市金沙江区15号'},
              {id: 4,name: '周杰伦',sex: '男',address: '上海市金沙江区15号'}
            ]
          }
      },
      methods:{
        addUser:function () {
            this.show=!this.show;
            this.form={sex:'男'};
          },
        edit:function(index,row){
            console.log(index,row);
            //显示弹窗
            this.show = true;
            this.form= row;
          },
        del:function (index,row) {
            // console.log(index,row);
            var users = [];
            users.push(this.datas[index]);
            console.log(users);
            this.$http.post("http://localhost:8985/user/remove",users).then(
              res=>{
                this.$message.success(res.data.msg);
                if(res.data.status){
                  //调用刷新数据的方法
                  this.loopFun();
                }
              }
            )
          },
        delMoreUser:function (index,row) {

        },
        cancel:function(){
          //隐藏弹窗
          this.show=false;
          //重置弹窗内容
          this.form={sex:'男'};
        },
        submits:function(){
            //ajax post请求
            this.$http.post("http://localhost:8985/user/saveOrUpdate",this.form).then(res=>{
              console.log(res.data);
              if(res.data.status){
                this.$message.success("恭喜你,"+res.data.msg);
                //清空表单信息
                this.form={sex:'男'};
                //隐藏表单
                this.show = false;
                //调用刷新数据的方法
                this.loopFun();
              }else{
                this.$message.error("系统错误!"+res.data.msg);
              }
            })
          },
          loopFun: function () {
            var url = 'http://localhost:8985/user/findAll';
              // url = 'https://www.baidu.com'
              this.$http.get(url).then(res=>{
                console.log(res.data);
                this.datas = res.data;
                for(var i =0;i<this.datas.length;i++){
                  this.datas[i].index=(i+1);
                }

            })
          }
      },
      created(){
          this.loopFun();
          // var o = setInterval(this.loopFun,2000);
      }
    }
</script>

<style scoped>

</style>
