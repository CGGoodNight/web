## 获取城市得到对应的数据(未实现，提示思想)
> 1. 点击城市按钮通过中间件实现AJAX并把用户选择的城市通过参数传递过去(也可以通过用户点击触发函数发送给home页面，通过home页面传递给后端返回对应城市的数据)。
> 2. 页面得到城市，然后主页通过componentDidMount的组件生命周期函数触发connect的dispatch方法，并通过中间件发送AJAX返回数据然后更新到组件的props上。

## 项目打包时将图片打包到文件中去。（开发过程中尽量使用网络上的图片，减少项目的大小）
> 1. 使用import引入路径 例如:
>>       import food from '../../../static/images/food.png'
>>       <img src={ food } alt=""/>
> 2. 使用require引入路径 例如:
>>       let img = 'static/images/movie';
>>       <img src={ require("../../../" + img + ".png") } alt="" /> 
>>>  注意：require中当()中为变量时，不能出现./ || ../ 和后缀名。

## 路由传参
> 1. 传递字符串
>>    定义path="/city(/:name)"  (参数可省略) 或者 path="/city/:name" (必须有参数) 传递hashHistory.replace('/city/重庆');   给路由name传递'name'的字符串
>>    接收this.props.params.属性名   ------------注意 接受的参数挂载Route组件上的component的组件上的params！！！
> 2. 传递对象
>>    var data = {id:3,name:sam,age:36};
>>    data = JSON.stringify(data);
>>    var path = `/user/${data}`;

>>	  hashHistory.push(path);
>>    Link to={path}>用户</Link>