<template>
    <main>
        <div class="header" >
        
            <p style="line-height:35px;font-size:16px">
                酷我音乐
            </p>
        </div>
        <div class="con" style="width:100%">
            <div class="sign">
                <img src="../assets/images/logos1.png" alt="">
            </div>
            <div class="inp">
                <input type="text" placeholder="邮箱账号">
                <input type="text" placeholder="密码">
            </div>
            <div class="a">
                <router-link to="/login_em_zc" style="color:gray;">
                    <span class="a_left">注册账号</span> 
                </router-link>
                <span class="a_right">忘记密码</span>
            </div>
           
                         <router-link to="/index"> <button>登录</button> </router-link>      
  
            <div style="font-size:12px;margin-top:5%;text-align: center;color:gray">
                <router-link to="/login" style="color:black;text-decoration: none;">其他登录方式 ></router-link>      
            </div>
        </div>
    </main>
</template>

<script>
export default {
    data() {
        return {
            phone:'',
        }
    },
}
</script>
<style  scoped>
.header {
    width: 100%;
    text-align: center;
    z-index: 100;
    position: fixed;
    overflow: hidden;
    padding: 1%  0%;
    background-color: white;
    border-bottom: 1px solid #F2F5F4;
}
.header .one{
    position: absolute;
    left: 1%;
    top: 21%;
}
.header .one img{
    width: 50%;
}
.header .two img{
    width:50%
}
.header .two{
    position: absolute;
    top:21%;
    right:12%
}
.header .thr img{
    width:50%
}
.header .thr{
    position: absolute;
    top:21%;
    right:1%
}
.sign{
    width: 100%;
    text-align: center;
    padding: 22% 0% 12%;
    
}
.sign img{
    width: 40%;
}
input{
    outline: none;
    margin-left: 5%;
    width: 90%;
    padding-bottom:2% ;
    border: none;
    border-bottom: 1px solid #F2F5F4;
}
input:nth-of-type(2){
    margin-top: 10%;
}

.a{
    width: 90%;
    padding: 5%;
    font-size:12px;
    color:gray;
    float: left;
}
.a .a_right{
    float: right;
}
button{
    width: 90%;
    color:white;
    padding: 4% 0%;
    border: none;
    background-color: red;
    margin-left: 7%;
}

</style>