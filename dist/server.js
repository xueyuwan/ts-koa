"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator.throw(value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments)).next());
    });
};
const koa = require('koa');
const models_1 = require('./models');
var app = new koa();
app.use((ctx, next) => __awaiter(this, void 0, void 0, function* () {
    var startDt = new Date().getTime();
    yield next();
    var endDt = new Date().getTime() - startDt;
    // 查询数据
    var users = yield models_1.db.userModel.find();
    users.forEach(user => {
        if (user.name == '杨杰')
            user.name = '杨   杰';
    });
    ctx.body = users;
    ctx.set('x-response-time', endDt + 'ms');
}));
app.listen(3000);
