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
                <input type="text" placeholder="请输入邮箱">  
                <input type="text" placeholder="请输入密码">
                <input type="text" placeholder="请输入邮箱验证码"><span>获取验证码</span>
            </div>
            <div class="b" >
                <input type="checkbox">
                <P>勾选则代表同意<a href="#" style="text-decoration:none">《服务条款》</a>和<a href="#" style="text-decoration:none">《网易隐私政策》</a></P>
            </div>
            <router-link to="/login_em">
                <button>完成注册</button>
            </router-link>
            <div style="font-size:12px;margin-top:5%;text-align: center;color:gray">
                <router-link to="/login_em" style="color:black;text-decoration: none;">返回上一层 ></router-link>      
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
input:nth-of-type(3){
    margin-top: 10%;
}
.inp{
    position: relative;
}
.inp span{
    border: 1px solid gray;
    position: absolute;
    bottom: 6%;
    right: 5%;
}

button{
    width: 60%;
    color:white;
    padding: 4% 0%;
    border: none;
    background-color: red;
    margin-left: 22%;
}
.b{
    margin: 5% 0%;
    font-size:12px;
    position:relative;
}
.b input{
    position: absolute;
    left: -40%;
    bottom: 4%;
}
.b p{
    margin-left: 15%;
}
</style>