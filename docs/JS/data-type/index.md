## JavaScript数据类型
### JavaScript 数据类型（构造器）
* 基本类型（也称**字面量**或**值类型**）
1.String
2.Number
3.Boolean
4.null
> 唯一值null，表示对象的引用地址为空
5.undefined
> 常出现在一个变量被声明但是没有初始化，即没有赋值。值为undefined
6.Symbol
* 引用类型
7.Object
8.Function
#### JavaScript中 String和string, Number和number... Function和function的类型大小写区别？
* JavaScript与Java宗旨相似 **一切基于对象（Object）**。JS中使用的一切都是对象，原型链知识点也会体现。new操作符创建相应对象(也称 new一个构造器)
> 给一个变量直接赋值，而不用为其声明数据类型，因JS引擎帮 coder 暗地里处理了。类似css中的速写属性
```js
  const str = 'abc'; // js引擎将其  str = new String('abc')
  // 其实用到的是 new String()构造器的 toUpperCase()
  str.toUpperCase(); // ’ABC‘

  const num = 123; // js引擎将其 num = new Number(123)
  // 其实用到的是 new Number()构造器的 toFixed()
  num.toFixed(2); // 123.00

  const obj = {
   name: 'Tony',
   age: 18
  }; // obj = new Object({name: 'Tony'. age: 18})

  const foo = function(){
    console.log('hello world!')
  }; // foo = new Function(function(){console.log('hello world!')})
```

### 判断数据类型
* typeof 和 instanceof都是运算符，作用都是**判断变量的数据类型**，但是它们各自的用法和操作对象又有所不同。
#### typeof
* typeof(var) 获取指定变量的具体类型。
* 返回值：**数据类型字符串(共有8种)**
> 1. number
> 2. string
> 3. boolean
> 4. object (typeof null 为 'object'， js语言起初设计出现的特殊性)
> 5. undefined
> 6. function
> 7. symbol
> 8. bigint
```js
console.log(typeof 123); // 'number'
console.log(typeof '123'); // 'string'
console.log(typeof true); // 'boolean'
console.log(typeof null); // 'object'
console.log(typeof {name: 'tong'}); // 'object'
console.log(typeof undefined); // 'undefined'
console.log(typeof Function); // 'function'
console.log(typeof function(){}); // 'function'
console.log(typeof function foo(){}); // 'function'
console.log(typeof Symbol()); // 'symbol'
console.log(typeof 123n); // 'bigint'
```
> typeof var === 'type' 对变量类型进行判断。
```js
 var a = 123;
 var b = "abc";
 var c = false;
 console.log(typeof a === 'number'); //true
 console.log(typeof b === 'number'); //false
 console.log(typeof c === 'boolean'); //true
 console.log(typeof d === 'undefined'); //true      
```
> typeof判断对象类型变量时(new操作符)，都是返回object。
```js
  //定义两个构造函数
  function foo1(){};
  function foo2(){};
  var a = new foo1();
  var b = new foo2();
  console.log(typeof a === foo1);// false
  console.log(typeof b === foo2);// false
  console.log(typeof a);// object
  console.log(typeof b);// object
```
* 正因为 typeof **判断对象类型具有局限性**，故此**判断对象类型应使用insatanceof**运算符

#### instanceof 
* object instanceof Object，判断指定对象类型的 prototype(用于判断一个变量是否某个对象的实例，)
* 返回值(Boolean类型)：true / false 
```js 
  console.log(String instanceof Object); // true
  console.log(null instanceof Object); // false
  
  // 字面量创建数组
  console.log([] instanceof Object); // true
  console.log([] instanceof Array); // true
  let arr = new Array();//数组对象创建数组
  console.log(arr instanceof Object); //  true
  console.log(arr instanceof Array); //  true

  let obj = {name:"傲天", age:19}; //使用字面量创建对象
  console.log(obj instanceof Object); // true

  let foo = new Function(); //这是一个函数对象
  console.log(foo instanceof Function); // true

  //定义两个构造函数
  function foo1(){}
  function foo2(){}
  let a = new foo1();
  let b = new foo2();  
  console.log(a instanceof foo1); // true
  console.log(b instanceof foo2); // true 
```
#### typeof 与 instanceof 区别
* typeof 用于**判断基本类型**，
* instanceof 用于**判断对象类型**。