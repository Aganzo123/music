<template>
    <main>
        <div class="header" >
            <p style="line-height:35px;font-size:16px">
                酷我音乐
            </p>
        </div>
        <div class="con">
            <div class="sign">
                <img src="../assets/images/logos1.png" width="50%" alt="">
            </div>
            <div class="cho">
                <router-link to="/login_ph">
                    <button class="ph">手机号快捷登录</button>
                </router-link>
                <router-link to="/login_em">
                    <button class="em">邮箱账号登录</button>
                </router-link>
            </div>
        </div>   
    </main>
</template>
<script>
export default {
    
}
</script>

<style  scoped>
main{
    background-color: #F2F5F4;
}
.header {
    width: 100%;
    text-align: center;
    z-index: 100;
    position: fixed;
    overflow: hidden;
    padding: 1%  0%;
    background-color: white;
}

.sign{
    width: 100%;
    text-align: center;
    padding: 30% 0%;
}
.cho{
    width: 100%;
}
.con .ph{
    width:90%;
    border:none;
    background-color: red;
    color: white;
    padding: 3% 0%;
    border-radius: 5px;
    margin-left: 5%;
    outline: none;
}
.con .em{
    width:90%;
    border:none;
    padding: 3% 0%;
    background-color: #F2F5F4;
    color: red;
    border: 1px solid red;
    border-radius: 5px;
    margin: 5% 5%;
    outline: none;
}
</style>