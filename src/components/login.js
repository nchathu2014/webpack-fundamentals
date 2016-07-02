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


//commonJS module export
/*
module.exports={
    login:loginStatus('admin','123')
}*/

//es6 module export

export{loginStatus};
