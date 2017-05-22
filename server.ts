import  koa = require('koa');
import {db} from './models';

var app = new koa();

app.use(async(ctx,next)=>{
        var startDt= new Date().getTime();
        await next();
        var endDt = new Date().getTime() -startDt;

        // 查询数据
       var users =await db.userModel.find();
       users.forEach(user=>{
           if(user.name=='杨杰') user.name='杨   杰'
       })
       ctx.body=users;
        ctx.set('x-response-time',endDt+'ms');
});



app.listen(3000)