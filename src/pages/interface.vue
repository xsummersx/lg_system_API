<template>
  <div>
    <div class="indexBox">
      <el-container>
        <el-aside width="250px" class="nav" v-bind:style="height">
          <el-input placeholder="请输入内容" v-model="input3" class="input-with-select">
            <el-button slot="append" icon="el-icon-search" class="input-btn"></el-button>
          </el-input>
          <ul>
            <li class="interItem">
              <div class="navName">
                1.1-W_GetPaperInfo
              </div>
              <div class=navDer>接口用于获取试卷详情信息接口用于获取试卷详情信息接口用于获取试卷详情信息接口用于获取试卷详情信息</div>
            </li>
          </ul>
        </el-aside>
        <el-main class="main" v-bind:style="height">
          <el-tag class="text-info-title">1.1-W_GetPaperInfo</el-tag>
          <el-tag type="info" class="text-info-sub">作用：接口用于获取试卷详情信息接口用于获取试卷详情信息接口用于获取试卷详情信息接口用于获取试卷详情信息</el-tag>
          <el-divider class="line" content-position="left">a.输入</el-divider>
          <template>
            <el-table :data="tableData" border stripe style="width: 100%">
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
          <el-divider class="line" content-position="left">b.输出</el-divider>
          <el-tag type="danger">error</el-tag>
          <template>
            <el-table :data="errorData" border stripe style="width: 100%">
              <el-table-column prop="code" label="code" width="200">
              </el-table-column>
              <el-table-column prop="msg" label="msg">
              </el-table-column>
            </el-table>
          </template>
          <br />
          <el-tag type="success">success</el-tag>
          <template>
            <div>
              <el-table :data="outputData" style="width: 100%;margin-bottom: 20px;" row-key="parameter" border
                default-expand-all :tree-props="{children: 'children', hasChildren: 'hasChildren'}">
                <el-table-column prop="parameter" label="接口" width="200">
                </el-table-column>
                <el-table-column prop="description" label=" 参数">
                </el-table-column>
              </el-table>
            </div>
          </template>
          <el-divider class="line" content-position="left">c.测试</el-divider>
          <el-tag type="default">测试URL：</el-tag>
          <div class="url">
            http://60.190.136.238:20103/Web_ZSP_DCS/api/share/GetRzOriginData_A00?Token=73fd7fef550517630996697579bb8828&SchoolID=&SubjectID=&EventType=&BeginTime=&EndTime=
          </div>
          <el-form class="form" ref="form" :model="form" label-width="80px">
            <el-form-item v-for="(item,itemIndex) in form.list" :key="itemIndex" v-bind:label="item.ID">
              <el-input v-model="item.Input"></el-input>
            </el-form-item>
            <el-button type="primary" @click="onSubmit" class="submit">测试</el-button>
          </el-form>
        </el-main>
      </el-container>
    </div>
  </div>
</template>
<script>
import '../assets/css/global.css'
export default {
  name: 'interface',
  data () {
    return {
      height: {
        height: ''
      },
      input3: '',//搜索输入框
      //参数
      tableData: [{
        name: 'token',
        bak: '基础平台token值',
        type: 'String',
        isNull: '否'
      }, {
        name: 'schoolID',
        bak: '学校编码',
        type: 'Int',
        isNull: '是'
      }, {
        name: 'className',
        bak: '班级名称',
        type: 'Boolean',
        isNull: '否'
      }],
      //接口报错
      errorData: [{
        code: '0',
        msg: '接口正常'
      }, {
        code: '1',
        msg: '学校参数异常'
      }, {
        code: '-1',
        msg: 'token值不对'
      }],
      //接口正确
      outputData: [{
        index: '0',
        parameter: "schoolID",
        description: '学校编码',
      }, {
        index: '1',
        parameter: "subjectID",
        description: '学科编码',
      }, {
        index: '2',
        parameter: "paperList",
        description: '试卷列表',
        children: [{
          index: '21',
          parameter: "paperID",
          description: '试卷ID',
        },
        {
          index: '22',
          parameter: "QuestList",
          description: '试题列表',
          children: [{
            index: '220',
            parameter: "quesID",
            description: "试题编码"
          }, {
            index: '221',
            parameter: "quesTypeName",
            description: "题型名称"
          }]
        }]
      }],
      form: {
        url: 'http:172.16.41.235:20102/api/ZNBK/W_GetPaper',
        list: [{
          "ID": "schoolID",
          "Input": ""
        }, {
          "ID": "token",
          "Input": ""
        }]
      }
    }
  },
  //计算函数
  computed: {

  },
  //组件
  components: {
  },
  //钩子函数
  mounted () {
    this.init()
  },
  methods: {
    init () {
      let h = window.innerHeight - 135 + 'px';
      this.height.height = h;
    },
    onSubmit () {
      console.log('submit!');
      let str = "";
      this.form.list.map((item) => {
        str += "&" + item.ID + "=" + item.Input;
      });
      str = str.substring(1, str.length);
      str = this.form.url + "?" + str;
      console.log(str);
      //window.open(str, '_blank');
      //location.href = str
    },
  }
}
</script>
<style scoped>
.nav,
.main {
  margin: 20px;
  background: #fff;
  border-radius: #e6e6e6;
  border-radius: 8px;
  border: 1px solid #e3e3e5;
  overflow-y: auto;
}
.input-with-select {
  margin: 10px;
  width: calc(100% - 20px);
}
ul,
li {
  list-style: none;
  margin: 0;
  padding: 0;
}
.interItem {
  line-height: 20px;
  font-size: 12px;
  cursor: pointer;
  padding: 10px;
  background: #ecf5ff;
}
.navName {
  color: #333;
  font-weight: bold;
}
.navDer {
  color: #999;
}
.navName.active {
  color: #409eff;
}
.text-info-title {
  font-size: 16px;
  font-weight: bold;
  width: 100%;
}
.text-info-sub {
  width: 100%;
  margin-top: 10px;
}
.url {
  font-size: 12px;
  line-height: 24px;
  border: 1px solid #e3e3e5;
  padding: 10px;
  margin-top: -1px;
}
.form {
  margin-top: 20px;
  width: 70%;
}
.submit {
  float: right;
}
</style>