## Function 方法 构造器
* Function 是一个构造器，能创建Function对象，即JavaScript中每个函数实际上都是Function 对象。
### 创建 方法
1. 直接声明
```js
   function say(info){
      console.log(info)
   }
```
2. new 类创建（函数表达式）
```js
   let foo = new Function ([arg1[, arg2[, ...argN]],] functionBody)

   var plus = new Function("a","b","return a+b");// 声明
   var result = plus(1,2);//调用，返回 3
   // 等同于
   function plus(a,b){return a+b;};
```

#### 重点：
1、使用 Function构造器生成的对象是在函数创建时解析的（即真正调用时才生成对象的模型），所以比普通函数声明方法低效，因为普通方法是和其它代码一起解析的；

2、new Function()此方法不支持闭包，即不能访问创建他的所在 function对象的私有变量，而只能访问自身参数列表中的变量和全局变量，因此一般只作为全局函数时使用
```js
   var test = 1; //用于测试的全局变量
   var plus = new Function("a","b","return a+b+test");
   alert(plus(1,2));  //将提示结果为4，即访问到了test变量

   function adder(value){
   	var number = value;//定义私有变量
   	alert("标记1");
   	this.method = new Function("a", "b", "return a+b+number");
   }
   var operation = new adder(1);
   alert("标记2");
   alert(operation.method(1,2));//提示了标记1 与 标记2，但此处没结果（出错），
   // 若将 method的定义中 number  改为全局变量test，将运行出结果4。可见Function构造器方法确实不能实现闭包。
```

### Function 属性
#### Function.arguments 
* 以数组形式获取传入函数的所有参数。此属性已被函数内部的 arguments对象替代
```js
   function f(n) { g(n - 1); }
   function g(n) {
     console.log('before: ' + g.arguments[0]);
     if (n > 0) { f(n); }
     console.log('after: ' + g.arguments[0]);
   }
   f(2);
   console.log('函数退出后的 arguments 属性值：' + g.arguments);
   // before: 1
   // before: 0
   // after: 0
   // after: 1
   // 函数退出后的 arguments 属性值：null
```
> 1、使用函数名调用；
> 2、arguments数组访问的是本次函数调用时传入的实参，而非上一次调用时的参数（对于嵌套或循环调用需注意！）

##### arguments对象是 function内部的本地变量，而不是函数的属性。使用示例：
```js
function test(var1,var2){
   arguments[0] = 0; //可改变参数的值
   alert(arguments[0] + arguments[1]);
}
test(1, 2);//将提示结果为 2、
```
* 注：arguments对象并不是一个真正的Array对象，没有**数组的属性与方法（length除外）**。但可通过继承数组的 slice方法获得参数数组```var args = Array.prototype.slice.call(arguments);```。但但是又不建议使用此方法获得参数数组，因为 slice方法会影响js引擎的优化（如v8引擎）。最好使用遍历 arguments获取参数生成数组。

* arguments对象属性
1. arguments.length 返回函数期望的参数个数
>func.length 指明该函数期望多少个参数，意即形参的个数。数量不包括剩余参数。仅包括第一个具有默认值之前的参数个数 
>> 相比之下，arguments.length 是**函数被调用时实际传参**的个数。
```js
   console.log(Function.length);  /* 1 */
   console.log((function(){}).length); // 0
   console.log((function(a){}).length); // 1
   console.log((function(a, b, c, d){}).length); // 4
   console.log((function(a, b, c = 1, d) {}).length); // 2
```

2. arguments.callee返回该arguments对象所属的函数构造器（即函数具体对象），从而可实现**匿名函数的递归**等
```js
function create() {
   return function(n) {
      if (n <= 1)
         return 1;
      return n * arguments.callee(n - 1);//调用该arguments所属的匿名函数构造器。
   };
}
var result = create()(5); // returns 120 (5 * 4 * 3 * 2 * 1)

// 返回调用函数名称
function myFunc() {
   if (myFunc.caller == null) {
      return ("该函数在全局作用域内被调用!");//在全局被调用时caller值为null
   } else
      return ("调用我的是函数是" + myFunc.caller);
}
```
### Function 实例方法
#### func.apply()
* 在一个对象的上下文中应用另一个对象的方法(**改变this指向**)；参数能够**以数组形式**传入
> 语法： B.prototype.method.apply(A, [args1, args2...argsN]);
>> 构造器 B的原型的method方法（也即 B的对象所具有的方法）提供给对象A，使用，args为需要传入的method的参数
>>> 注： B必须为构造器名（即函数名），A为某个将使用此method函数的对象。
```js
   function A(var1,var2){
	   this.arg1 = var1;
	   this.arg2 = var2;
      // 此种方式将不能应用apply等方法
	   //this.method = function(){
      //    alert(this.arg1+this.arg2);
      // }      
   }
   function B(){
   	this.arg1 = 10;
   	this.arg2 = 20;
   }
   A.prototype.method = function(){ alert(this.arg1 + this.arg2);}
   var a = new A(1, 2);
   a.method(); //提示结果：3
   b = new B();
   A.prototype.method.apply(b); // 将构造器A的method方法应用与对象b。因为 method没有参数，所以参数数组省略。
   b.method();//真正调用，若带有参数，此处可不用再写，写在apply参数列表即可。提示结果：30
```
#### func.call()
* 在一个对象的上下文中应用另一个对象的方法(**改变this指向**)；参数能够**以列表形式**传入
> 语法： function.call(thisArg, arg1, arg2, ...)
```js
   function sayHello(arg1, arg2){
      console.log(this.name + '-'+ this.age)
      console.log(arg1, arg2)
   }
   var user1 ={
      namr: 'tony',
      age: 18
   }
   var user2 ={
      namr: 'xiaoBai',
      age: 20
   }
   sayHello.apply(user1, ['参数1','参数2']); // tony-18 参数1 参数2
   sayHello.call(user2, '参数1','参数2');// xiaoBai-20 参数1 参数2
   var newFun = sayHello.bind(user1, '参数1','参数2');
   // bind()创建的新函数里的this 永远只想指向 user1对象  而非在全局嗲用时的 window对象
   newFun() // xiaoBai-20 参数1 参数2  
```
#### func.bind()
* 创建一个新的函数，这个新函数(调用时)的 this 永远被指定为 bind() 的第一个参数（thisArg），而其余参数将作为新函数的参数
> 语法：fun.bind(thisArg[, arg1[, arg2[, ...]]])
```js
   this.x = 9; 
   var module = {
      x: 81,
      getX: function() { 
        return this.x;
      }
   };
   module.getX(); // 返回 81
   var retrieveX = module.getX;
   retrieveX(); // 返回 9, 在这种情况下，"this"指向全局作用域

   // 创建一个新函数，将"this"绑定到module对象
   // 新手可能会被全局的x变量和module里的属性x所迷惑
   var boundGetX = retrieveX.bind(module);
   boundGetX(); // 返回 81
```
**Function 是引用类型，也具有length属性、valueOf与 toString方法。应该将所有实例function都看做Function 的对象，函数名即该对象的引用！**