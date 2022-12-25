<template>
  <div>手写实现源码功能</div>
</template>
<script lang="ts" setup>
//https://juejin.cn/post/6844903809206976520 参考链接
//实现new操作符

import { ControlTwoTone } from '@ant-design/icons-vue';
import { array, string } from 'vue-types';

//创立一个空的对象
const function newFn(func) {
  const res={}
  if(func.prototype!==null){
  res._proto_=func.prototype
  }
  const ret = func.apply(res,Array.prototype.slice.call(arguments,1))
  if((typeof ret ==='object'||typeof ret ==='function')&& ret!==null){
    return ret
  }
return res
} 

// 实现json.stringify
const function jsonStringify(obj){
  let type= typeof obj
  if(type !=='object'){
    if(/string|undefined|function/.test(type)){
      obj='"'+obj+'"'
    }
    return string(obj)
  }else{
    let json =[]

    let arr = Array.isArray(obj)
    for(let k in obj){
      let v= obj[k];
      let type = typeof v;
      if(/string|undefined|function/.test(type)){
        v='"'+v+'"';
      }else if(type ==='object'){
        v= jsonStringify(v)
      }
      json.push((arr?'':'"'+k+'":')+String(v))

    }
    return (arr?"[":"{")
  }
}

//实现json.parse
//1.使用eval--容易受到xss的攻击，需要进行校验
const evalJson =()=>{
  return eval('(' + opt +')')
}


//实现call或apply，bind 都是可以改变this的指向
//call简单版
const foo={
  value:1,
  bar:function(){
    console.log(this.value)
  }
}
foo.bar()

//call完整版--使用原型的方法改变this的指向
 function.prototype.call2 = function(content = window){
content.fn=this;
let arge=[...arguments].slice(1);
let result = content.fn(...args);
delete content.fn;
return result;
 }


//apply（）实现
function.prototype.apply2 = function(context=window){
  context.fn=this;
  let result;
  if(argument[1]){
    result = context.fn(...arguments[1])
  }else{
    result=context.fn()
  }
  delete context.fn
  return result
}

//bind()实现
function.prototype.band2 = function(content){
  if(typeof this !='function'){
    throw Error('not a function')
  }
  let fn=this;
  let args=[...arguments].slice(1);
  let resFn = function(){
    return fn.apply(this instanceof resFn? this:ControlTwoTone,args.concat(...arguments))
  }
  function temp(){}
  temp.prototype = this.prototype;
  resFn.prototype = new temp()
  return resFn
}

</script>