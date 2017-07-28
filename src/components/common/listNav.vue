<template>
  <div id="listNav">
        <div class="navUp" >
             <img   class="logo" src="../../assets/photo/nav/logo_聚升2@2x.png"/> 
            <div class="line"></div>
        </div>
        <div>
       <ul>
            <li class="listNav-li">
                <div class="li-div" @click="routerGo(0,'/')">
                    <img src="../../assets/photo/nav/map@2x.png"/> 
                    <p><small>管网地图</small></p>                              
                </div>
            </li>
             <li class="listNav-li">                             
                    <el-dropdown class="listNav-dropdown"  >
                        <span class="el-dropdown-link">
                            <div class="li-div">
                                 <img src="../../assets/photo/nav/jiance@2x.png"/> 
                                <p><small>实时监测</small></p>                              
                            </div>
                        </span>
                        <el-dropdown-menu slot="dropdown" class="listNav-menu">
                            <el-dropdown-item  v-on:click.native="routerGo(1,'/realTimeMoni')" class="listNav-item">绝缘子环流检测</el-dropdown-item>
                            <el-dropdown-item  v-on:click.native="routerGo(1,'/realTimeMoni')" class="listNav-item">电缆监测</el-dropdown-item>
                        </el-dropdown-menu>
                    </el-dropdown>                   
            </li>
             <li class="listNav-li">
                    <div class="li-div" @click="routerGo(2,'/')">
                        <img src="../../assets/photo/nav/shipinjiance@2x.png"/> 
                        <p><small>视频监测</small></p>                              
                    </div>
            </li>            
             <li class="listNav-li">
                    <div class="li-div" @click="routerGo(3,'/')">
                        <img src="../../assets/photo/nav/taizhang@2x.png"/> 
                        <p><small>台账管理</small></p>                              
                    </div>
            </li>               
            <li class="listNav-li">
                    <el-dropdown class="listNav-dropdown"  >
                        <span class="el-dropdown-link">
                            <div class="li-div">
                                 <img src="../../assets/photo/nav/gongcheng@2x.png"/> 
                                <p><small>工程管理</small></p>                              
                            </div>
                        </span>
                        <el-dropdown-menu slot="dropdown" class="listNav-menu">
                            <el-dropdown-item  v-on:click.native="routerGo(4,'/patrol/user')" class="listNav-item">工程信息管理</el-dropdown-item>
                            <el-dropdown-item  v-on:click.native="routerGo(4,'/')" class="listNav-item">工程人员</el-dropdown-item>
                            <el-dropdown-item  v-on:click.native="routerGo(4,'/')" class="listNav-item">任务管理</el-dropdown-item>
                            <el-dropdown-item  v-on:click.native="routerGo(4,'/')" class="listNav-item">工程进度</el-dropdown-item>
                        </el-dropdown-menu>
                    </el-dropdown>   
            </li>               
            <li class="listNav-li">
                    <el-dropdown class="listNav-dropdown"  >
                        <span class="el-dropdown-link">
                            <div class="li-div">
                                 <img src="../../assets/photo/nav/yunwei@2x.png"/> 
                                <p><small>运维管理</small></p>                              
                            </div>
                        </span>
                        <el-dropdown-menu slot="dropdown" class="listNav-menu">
                            <el-dropdown-item  v-on:click.native="routerGo(5,'/')" class="listNav-item">班组管理</el-dropdown-item>
                            <el-dropdown-item  v-on:click.native="routerGo(5,'/fireWarning/plan')" class="listNav-item">缺陷管理</el-dropdown-item>
                            <el-dropdown-item  v-on:click.native="routerGo(5,'/')" class="listNav-item">检修管理</el-dropdown-item>
                            <el-dropdown-item  v-on:click.native="routerGo(5,'/')" class="listNav-item">巡检管理</el-dropdown-item>                        
                        </el-dropdown-menu>
                    </el-dropdown>   
            </li>               
            <li class="listNav-li">
                    <el-dropdown class="listNav-dropdown"  >
                        <span class="el-dropdown-link">
                            <div class="li-div">
                                 <img src="../../assets/photo/nav/gongju@2x.png"/> 
                                <p><small>工具管理</small></p>                              
                            </div>
                        </span>
                        <el-dropdown-menu slot="dropdown" class="listNav-menu">
                            <el-dropdown-item  v-on:click.native="routerGo(6,'/fireSciencManagement/position')" class="listNav-item">工具进出库记录</el-dropdown-item>
                            <el-dropdown-item  v-on:click.native="routerGo(6,'/')" class="listNav-item">工具检查</el-dropdown-item>
                            <el-dropdown-item  v-on:click.native="routerGo(6,'/')" class="listNav-item">工具盘点</el-dropdown-item>
                        </el-dropdown-menu>
                    </el-dropdown>   
            </li>               
            <li class="listNav-li">
                <div class="li-div" @click="routerGo(7,'/outFireConduct')">
                     <img src="../../assets/photo/nav/dangan@2x.png"/> 
                    <p><small>档案管理</small></p>                              
                 </div> 
            </li>                                             
        </ul> 

        </div>
  
  </div>
</template>

<script>
export default {
  name: 'listNav',
      data() {
      return {
        defaultIndex:0,
        activeIndex:""
      };
    },
    methods: {
        routerGo(index,url){
            this.changeColor(index)
            this.$router.push(url);
        },
        changeColor(index){
            var ary=document.getElementsByClassName("listNav-li");
                for(var i=0;i<ary.length;i++){
                    if(i!=index){
                        // ary[i].style.backgroundColor="#373940"  
                    }else{
                        ary[index].style.backgroundColor="#2192D9"                
                    }
                }
        }
    } ,
    mounted(){
        this.changeColor(this.defaultIndex)
    }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#listNav{
    background-color:#373940;
    width: 96px;
    height: 100%;
    position: fixed;

}
 img{
    display: block;
    height:32px;
    width: 32px;
    padding-left: 16px;
} 
.navUp{
  padding: 0 12px;
}
.logo{
    display: block;
    height:72px;
    width: 72px;
    padding: 12px 1px 12px;;
}
.line{
    background: rgba(227,230,229, 0.2);
    height: 1px;
    width: 72px;
}

li{
    display: block;
    height: 80px;
    list-style-type:none
}
.li-div{
    padding:14px 16px 14px; 
    margin: 0;
    width: 64px;
    text-align: center;
}
p{
    font-size: 12px;
    color: rgba(255,255,255,0.80);
    line-height: 12px;
    padding-top:8px
}
    .listNav-menu{
        background: #373940;
        border: 0px;
        padding: 0;
        margin-left: 100px;
        margin-top: -70px;
        color: #ffffff;
        font-size: 12px;
        line-height: 12px;
    }
    .listNav-item{
        height: 40px;
        width: 100px;
    }
    .listNav-item:hover{
        background: #2192D9;
        color: #FFFFFF;
    }
    li:hover{
        background: #2192D9;

    }
</style>