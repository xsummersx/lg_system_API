<template>
  <div class="indexBox" v-bind:style="height">
    <div class="editBox">
      <el-form class="form" ref="form" :model="form" label-width="80px">
        <el-form-item label="接口类型">
          <el-radio-group v-model="form.type">
            <el-radio label="get"></el-radio>
            <el-radio label="post"></el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="接口名称">
          <el-input v-model="form.name" placeholder="1-1 W_GetPaper" style></el-input>
        </el-form-item>
        <el-form-item label="接口描述">
          <el-input v-model="form.bak"></el-input>
        </el-form-item>
        <el-divider class="line" content-position="left">a.输入</el-divider>
        <el-form-item label="参数录入">
          <el-button type="primary" style="margin-bottom:10px" @click="addParms(1)">增加参数</el-button>
          <template>
            <el-table :data="csData" border stripe style="width: 100%" row-key="name" default-expand-all
              :tree-props="{children: 'children', hasChildren: 'hasChildren'}">
              <el-table-column prop="name" label="参数" width="200">
              </el-table-column>
              <el-table-column prop="bak" label="备注">
              </el-table-column>
              <el-table-column prop="type" label="数据类型" width="80">
              </el-table-column>
              <el-table-column prop="isNull" label="是否可传空" width="100">
              </el-table-column>
            </el-table>
          </template>
        </el-form-item>
        <el-divider class="line" content-position="left">b.输出</el-divider>
        <el-form-item label="报错录入">
          <el-button type="primary" style="margin-bottom:10px" @click="addParms(2)">增加报错信息</el-button>
          <template>
            <el-table :data="errorData" border stripe style="width: 100%" row-key="name" default-expand-all
              :tree-props="{children: 'children', hasChildren: 'hasChildren'}">
              <el-table-column prop="code" label="code" width="200">
              </el-table-column>
              <el-table-column prop="msg" label="msg">
              </el-table-column>
            </el-table>
          </template>
        </el-form-item>
        <el-form-item label="返回成功">
          <el-button type="primary" style="margin-bottom:10px" @click="addParms(3)">增加返回数据结构</el-button>
          <template>
            <el-table :data="successData" border stripe style="width: 100%" row-key="name" default-expand-all
              :tree-props="{children: 'children', hasChildren: 'hasChildren'}">
              <el-table-column prop="code" label="参数" width="200">
              </el-table-column>
              <el-table-column prop="msg" label="描述">
              </el-table-column>
            </el-table>
          </template>
        </el-form-item>
      </el-form>
    </div>
    <!-- 参数录入 -->
    <Modal class="modal" v-on:close="closeModal" v-if="modalShow == 1">
      <template v-slot:addParams>
        <el-form class="form" ref="form" :model="params" label-width="90px">
          <el-form-item label="接口参数">
            <el-input v-model="params.name"></el-input>
          </el-form-item>
          <el-form-item label="接口备注">
            <el-input v-model="params.bak"></el-input>
          </el-form-item>
          <el-form-item label="数据类型">
            <el-select v-model="params.type" placeholder="数据类型">
              <el-option label="String" value="String"></el-option>
              <el-option label="Int" value="Int"></el-option>
              <el-option label="Float" value="Float"></el-option>
              <el-option label="Boolean" value="Boolean"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="是否可传空">
            <el-radio-group v-model="params.isNull">
              <el-radio label="否"></el-radio>
              <el-radio label="是"></el-radio>
            </el-radio-group>
          </el-form-item>
        </el-form>
        <div class="buttonBox">
          <el-button @click="sureParams" type="primary">确认</el-button>
          <el-button @click="closeModal">取消</el-button>
        </div>
      </template>
    </Modal>
    <!-- 参数录入 -->
    <Modal class="modal" v-on:close="closeModal" v-if="modalShow == 2">
      <template v-slot:addParams>
        <el-form class="form" ref="form" :model="paramsError" label-width="90px">
          <el-form-item label="code">
            <el-input v-model="paramsError.code" type="number"></el-input>
          </el-form-item>
          <el-form-item label="msg">
            <el-input v-model="paramsError.msg"></el-input>
          </el-form-item>
        </el-form>
        <div class="buttonBox">
          <el-button @click="sureParamsError" type="primary">确认</el-button>
          <el-button @click="closeModal">取消</el-button>
        </div>
      </template>
    </Modal>
    <!-- 数据结构的录入 -->
    <Modal class="modal" v-on:close="closeModal" v-if="modalShow == 3">
      <template v-slot:addParams>
        <el-form class="form" ref="form" :model="paramsSuccess" label-width="90px">
          <el-form-item label="code">
            <el-input v-model="paramsSuccess.code" type="number"></el-input>
          </el-form-item>
          <el-form-item label="msg">
            <el-input v-model="paramsSuccess.msg"></el-input>
          </el-form-item>
          <el-form-item label="父节点">
            <el-select v-model="params.type" placeholder="选择父节点">
              <el-option label="String" value="String"></el-option>
              <el-option label="Int" value="Int"></el-option>
              <el-option label="Float" value="Float"></el-option>
              <el-option label="Boolean" value="Boolean"></el-option>
            </el-select>
          </el-form-item>
        </el-form>
        <div class="buttonBox">
          <el-button @click="sureParamsSuccess" type="primary">确认</el-button>
          <el-button @click="closeModal">取消</el-button>
        </div>
      </template>
    </Modal>
  </div>
</template>
<script>
import '../assets/css/global.css'
import Modal from '../components/Modal.vue'
export default {
  name: 'edit',
  data () {
    return {
      height: {
        height: ''
      },
      //弹框是否隐藏
      modalShow: 0,
      //录入的信息
      form: {
        type: 'get',
        name: '',
        bak: '',
      },
      //a录入参数
      params: {
        name: '',
        bak: '',
        type: '',
        isNull: '否',
      },
      //b报错信息的录入
      paramsError: {
        code: '',
        msg: ''
      },
      //返回参数的数据结构
      paramsSuccess: {
        code: '',
        msg: '',
        children: []
      },
      //参数表格
      csData: [

      ],
      //报错的表格
      errorData: [],
      successData: [],
      successOption: [],
    }
  },
  mounted () {
    this.init();
  },
  components: {
    Modal
  },
  computed: {

  },
  methods: {
    //初始化方法
    init () {
      let h = window.innerHeight - 95 + 'px';
      this.height.height = h;
    },
    //录入a参数弹框显示
    addParms (n) {
      if (n == 3) {
        this.successData.map((item) => {
          this.successOption.push(item.code);
          this.isChildrenLength(item.children);//判断当前是否还有子集
        })
        console.log(this.successOption)
      }
      this.modalShow = n;
    },
    isChildrenLength (child) {
      if (child.length > 0) {
        child.map((item) => {
          this.successOption.push(item.code);
          this.isChildrenLength(item.children);//判断当前是否还有子集
        })
      }
    },
    //关闭a参数录入弹窗显示
    closeModal () {
      this.modalShow = 0;
    },
    //确认参数录入数据
    sureParams () {
      if (this.params.name == "") {
        this.$message({
          message: "接口参数不能为空",
          type: "warning"
        });
      } else if (this.params.bak == "") {
        this.$message({
          message: "接口备注不能为空",
          type: "warning"
        })
      } else if (this.params.type == "") {
        this.$message({
          message: "接口类型不能为空",
          type: "warning"
        })
      } else {
        this.csData.push(JSON.parse(JSON.stringify(this.params)));
        //重置数据
        this.params.name = '';
        this.params.bak = '';
        this.params.type = '';
        this.params.isNull = '否';
        this.closeModal()//关闭弹窗
      }
    },
    //报错信息录入
    sureParamsError () {
      if (this.paramsError.code == '' || this.paramsError.msg == '') {
        this.$message({
          message: '请填入完整的数据',
          type: 'warning'
        })
      } else {
        this.errorData.push(JSON.parse(JSON.stringify(this.paramsError)));
        this.closeModal();
      }
    },
    sureParamsSuccess () {
      this.successData.push(JSON.parse(JSON.stringify(this.paramsSuccess)));
      this.closeModal();
    }
  }
}
</script>
<style scoped>
.indexBox {
  overflow-y: scroll;
}
.editBox {
  margin: 20px;
  background: #fff;
  border-radius: #e6e6e6;
  border-radius: 8px;
  border: 1px solid #e3e3e5;
  overflow-y: auto;
  padding-top: 20px;
  padding-bottom: 20px;
}
.modal {
  position: fixed;
  left: 0;
  top: 0;
  z-index: 1;
}
.form {
  width: 90%;
}
.buttonBox {
  text-align: right;
}
</style>