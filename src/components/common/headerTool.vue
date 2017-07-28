<template>
      <div id="headerTool">
          <el-row class="headerTool-col">
            <el-col :span="12" class="headerTool-col">
               <img class="imglogo" src="../../assets/photo/headerNav/title@2x.png"/>
            </el-col>
            <el-col :span="10" class="headerTool-col">
                      <el-row class="headerTool-col">
                            <el-col :span="12" >
                                    <el-input
                                        class="mid-input"
                                        placeholder="请选择搜索信息"
                                        size="small"
                                        icon="search"
                                        v-model="search"
                                        :on-icon-click="handleIconClick">
                                    </el-input>
                              </el-col> 
                              <el-col :span="12">
                                    <el-col :span="4"><img class="imgIcon" src="../../assets/photo/headerNav/zoom-@2x.png"/></el-col>
                                    <el-col :span="4"><img class="imgIcon" src="../../assets/photo/headerNav/zoom+@2x.png"/></el-col>
                                  <el-col :span="4">                                     
                                    <el-dropdown class="headerTool-dropdown" menu-align="start">
                                        <span class="el-dropdown-link">
                                            <img class="imgIcon imgIcondropdown " src="../../assets/photo/headerNav/Group 2@2x.png"/>   
                                        </span>
                                        <el-dropdown-menu slot="dropdown" class="headerTool-menu">
                                            <el-dropdown-item class="headerTool-item">测量距离</el-dropdown-item>
                                            <el-dropdown-item class="headerTool-item">面积测量</el-dropdown-item>
                                        </el-dropdown-menu>
                                    </el-dropdown>
                                  </el-col>
                                  <el-col :span="4">
                                    <el-dropdown class="headerTool-dropdown" menu-align="start">
                                        <span class="el-dropdown-link">
                                            <img class="imgIcon imgIcondropdown-right" src="../../assets/photo/headerNav/Group@2x.png"/>
                                        </span>
                                        <el-dropdown-menu slot="dropdown" class="headerTool-menu">
                                            <el-dropdown-item class="headerTool-item">测量距离</el-dropdown-item>
                                            <el-dropdown-item class="headerTool-item">面积测量</el-dropdown-item>
                                        </el-dropdown-menu>
                                    </el-dropdown>                  
                                  </el-col>
                                  <el-col :span="4"><img class="imgIcon" src="../../assets/photo/headerNav/edit@2x.png"/></el-col> 
                                  <el-col :span="4"><img class="imgIcon" src="../../assets/photo/headerNav/export@2x.png"/></el-col>
                              </el-col> 
                            </el-row>
            </el-col>
            <el-col :span="2" class="headerTool-col">  
                <div id="rn">
                <ul>
                    <li class="headerTool-li">                
                        <el-dropdown class="headerTool-dropdown" menu-align="start" @command="routerGo">
                            <span class="el-dropdown-link">
                                <img class="r-img"src="../../assets/photo/headerNav/setup@2x.png" @click="routerGo('/')"/>   
                            </span>
                            <el-dropdown-menu slot="dropdown" class="headerTool-menu">
                                <el-dropdown-item class="headerTool-item" command='机构管理'>机构管理</el-dropdown-item>
                                <el-dropdown-item class="headerTool-item" command='部门管理'>部门管理</el-dropdown-item>
                                <el-dropdown-item class="headerTool-item" command='权限设置'>权限设置</el-dropdown-item>
                                <el-dropdown-item class="headerTool-item" command='系统管理'>系统管理</el-dropdown-item>
                                <el-dropdown-item class="headerTool-item" command='通知公告'>通知公告</el-dropdown-item>
                            </el-dropdown-menu>
                        </el-dropdown>
                    </li>    
                    <li class="headerTool-li"><img class="r-img"src="../../assets/photo/headerNav/user@2x.png" @click="routerGo('/userinfo')"/></li>    
                    <li class="headerTool-li"><img class="r-img"src="../../assets/photo/headerNav/logout@2x.png"   @click="logout()"/></li>
                </ul> 
                </div>
            </el-col>
          </el-row>
      </div>    
</template>
<script>
export default {
    name: 'headerTool',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      signupActive:'',
      search:'',
    }
  },

  methods:{
    routerGo(url){
        this.$router.push(url);
      },
      handleIconClick(){

      },
    logout(){
      var _this = this;
       this.$confirm('确认退出吗?', '提示', {
					//type: 'warning'
				})
          .then(function(){
              sessionStorage.removeItem('user');
              _this.$router.push('/signin');
          });
    }
  },
}
</script>
<style scoped>
#headerTool{
  background: #505958;
}
#rn{
  background-color:  rgba(41,51,50,0.30);  
  text-align: center;
  height:48px
}
.headerTool-col{
      height:48px
}
.headerTool-li{
    list-style-type:none;
    display: inline-block;
}
.r-img{
    display: inline-block;
    width: 24px;
    height: 24px;
    padding: 10px 10px ;
}
.imglogo{
  display: inline-block;
  height: 28px;
  padding:10px 24px;
}

/*  中间项 */
  .imgIcon{
        display: inline-block;
        width: 24px;
        height: 24px;
        padding: 12px 10px 12px 10px;

    }
    .imgIcondropdown-left{
        display: inline-block;
        width: 32px;
        height: 24px;
        padding: 12px 6px 12px 6px;
    }
      .imgIcondropdown-right{
        display: inline-block;
        width: 30px;
        height: 22px;
        padding: 14px 7px 12px;
    }
    .mid-input{
        margin-top:8px;
        height: 32px;
    }
    .headerTool-dropdown{
        display: inline-block;
        width: 24px;
        height: 24px;  
        color: #ffffff; 
    }
    .headerTool-li>.headerTool-dropdown{
        margin-right: 20px;
    }
    .headerTool-menu{
        background: #505958;
        border: 0px;
        padding: 0;
        margin-top: 30px;
        color: #ffffff;
    }
    .headerTool-item:hover{
        background: #2192D9;
        color: #ffffff;
    }
</style>
