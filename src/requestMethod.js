<<<<<<< HEAD
import $ from 'jquery'
// import Vues from './main'


function requestData(url,data,method){
	console.log(data)
    return new Promise((resolve,reject)=>{
        $.ajax({
            type: method,
            url: 'https://scm.irobotzz.com'+ url,
            data: data,
            dataType: "json",
            success: function(data){
                // if(data.status==403){   //token过期
                //     Vues.$message.error('token过期，请重新登录！');
                //     sessionStorage.clear();
                //     setTimeout(()=>{
                        // Vues.$router.push({path:'/login'});
                //     },200)
                // }else{
                    resolve(data);
                // }
            },
            error:function(data){
                reject(data);
            }
        });
    })
}

=======
import $ from 'jquery'
// import Vues from './main'


function requestData(url,data,method){
    return new Promise((resolve,reject)=>{
        $.ajax({
            type: method,
            url: 'http://47.105.134.186:8080/scm'+ url,
            data: data,
            dataType: "json",
            success: function(data){
                // if(data.status==403){   //token过期
                //     Vues.$message.error('token过期，请重新登录！');
                //     sessionStorage.clear();
                //     setTimeout(()=>{
                        // Vues.$router.push({path:'/login'});
                //     },200)
                // }else{
                    resolve(data);
                // }
            },
            error:function(data){
                reject(data);
            }
        });
    })
}

>>>>>>> 69cc1981d4ea4eadc6fc419df2661131cf427890
export default requestData