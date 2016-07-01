let loginStatus = (username,password)=>{
    if(username && password){
       if(username === "admin" && password === "123"){
           return true;
       }else{
           return false;
       }
    }else{
        return false;
    }
};


module.exports={
    login:loginStatus('admin','123')
}