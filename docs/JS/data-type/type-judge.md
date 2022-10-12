## 数据类型的判断
- 参考链接
  + [js的四种类型检测方法](https://juejin.cn/post/6893501668147593223)
  + [66条JavaScript面试知识点](https://juejin.cn/post/6844904200917221389)

### JS中四种判断数据类型的方法
- **基本数据类型: String, Number, Boolean, undefined, null,  Symbol(ES6新增), BigInt(ES10新增)**
  > 原始数据类型：直接存储在栈（stack）中，占据空间小、大小固定，属于被频繁使用数据，所以放入栈中存储。
- 引用数据类型: **Object对象(Array, RegExp, Date...)和 Function函数**
  > 引用数据类型：同时存储在栈（stack）和堆（heap）中，占据空间大、大小不固定。引用数据类型在栈中存储了指针，该指针指向堆中该实体的起始地址。当解释器寻找引用值时，会首先检索其在栈中的地址，取得地址后从堆中获得实体。
  1. typeof [重点]
  2. instanceof
  3. constructor
  4. Object.prototype.toString.call [重点]

#### typeof
  - 定义：能够**检测基本类型**的运算符
  - 语法：typeof (value)
  - 返回值(string)
    >  [“string”、“number”、“boolean”、“undefined”、“object”、“function”、“symbol”、“bigint”]
    ```js
      typeof "123"; // “string”
      typeof NaN; // “number”
      typeof false; // “boolean”
      typeof null; // “object”
      typeof undefined; // “undefined”
      typeof function(){}; // “function”
      typeof Symbol("a"); // 'symbol'
      typeof 1n; // "bigint"
      typeof []; // "object"
    ```
- 特征
  1. typeof检测基本类型基本完美，但是引用类型就无法细分。例如数组对象, 正则对象, new出来的数字对象...全部返回的是 "object"字符串
  2. 如NaN / Infinity 均为 “number”
  3. typeof null 为 "object"（历史遗留问题）

#### instanceof
  - 定义： 用于检测构造函数的 prototype 属性是否出现在某个实例对象的原型链上。
  - 语法: object instanceof constructor
  - 返回值(Boolean)
    ```js
      new Number(0) instanceof Number; // true
      new Number(0) instanceof Object; // true
      0 instanceof Number; // false
      0 instanceof Object; // false
      new String("0") instanceof String; // true
      new String("0") instanceof Object; // true
      "0" instanceof String; // false
      "0" instanceof Object; // false
      [] instanceof Array; // true
      [] instanceof Object; // true
      ({}) instanceof Object; // true
      (/^$/) instanceof RegExp; // true
      (/^$/) instanceof Object; // true
      (function(){}) instanceof Function; // true 补充： new Function() => function(){} 
      (function(){}) instanceof Object; // true 
    ``` 
  - 特征
    1. 无法检测基本类型，返回的都是false ，只能检测引用类型
    2. 由于instanceof是根据**原型来检测类型**的，返回值也是布尔类型，因此无法直观的看出数据类型
    3. 因为原型可以更改，有时候利用instanceof来判断不一定十分准确
  - 提示
    > null instanceof Object; // false
    > null instanceof null; // 报错 "Uncaught TypeError: Right-hand side of 'instanceof' is not an object"
    > undefined instanceof Object; // false 
    > undefined instanceof undefined; // 报错 "Uncaught TypeError: Right-hand side of 'instanceof' is not an object"

#### constructor
  - 定义: 通过构造器来判断类型。
  - 语法: target.constructor == "构造器名称"
  - 返回值(Boolean)
    ```js
      new Number(0).constructor === Number; // true
      new Number(0).constructor === Object; // false
      (0).constructor === Number; // true
      (0).constructor === Object; // false
      new String("0").constructor === String; // true
      new String("0").constructor === Object; // false
      "0".constructor === String; // true
      "0".constructor === Object; // false
      [].constructor === Array; // true
      [].constructor === Object; // false
      ({}).constructor === Object; // true
      (/^$/).constructor === RegExp; // true
      (/^$/).constructor === Object; // false
      (function(){}).constructor === Function; // true 补充： new Function() => function(){}
      (function(){}).constructor === Object; // false
    ``` 
  - 特征
    1. 可检测基本类型(即: 字面量)
    2. 原理基本和instanceof一样，都是根据原型判断
  - 提示
    > null和 undefined 没有 constructor属性

#### Object.prototype.toString.call()
  - 定义: 返回一个表示该对象的字符串。
  - 语法: Object.prototype.toString.call(params)
  - 返回值(String): "[object 类型]"
    > 类型 [“String”、“Number”、“Boolean”、“Array”、“Object”、“Function”、“RegExp”、“Symbol”、“Bigint”、“Null”、“Undefined”]
    ```js
     Object.prototype.toString.call("0"); // '[object String]'
     Object.prototype.toString.call(0); // '[object Number]'
     Object.prototype.toString.call(true); // '[object Boolean]'
     Object.prototype.toString.call([]); // '[object Array]'
     Object.prototype.toString.call({}); // '[object Object]'
     Object.prototype.toString.call(/^$/); // '[object RegExp]'
     Object.prototype.toString.call(new Date()); // '[object Date]'
     Object.prototype.toString.call(new Date().getDate); // '[object Function]'
     Object.prototype.toString.call(new Date().getDate()); // '[object Number]'
     Object.prototype.toString.call(Symbol("a")); // '[object Symbol]'
     Object.prototype.toString.call(function(){}); // '[object Function]'
     Object.prototype.toString.call(null); // '[object Null]'
     Object.prototype.toString.call(undefined); // '[object Undefined]'
    ```
  - 原理：Object.prototype.toString.call()中“[object 类型]”返回的值是**由Symbol.toStringTag**决定

#### jQuery判断类型的方法
```js
  var class2type = {};
  ["Boolean","Number","String","Function","Array","Date","RegExp","Object","Error","Symbol","BigInt","GeneratorFunction"].forEach(item=>{
    class2type["[object "+item+"]"] = item.toLowerCase();
  })
  function toType(obj){
    if(obj == null){
      return obj + '';
    }
    return typeof obj === "object" ||
           typeof obj === "function" ? class2type[toString.call(obj)] || "object" : typeof obj;
  }

```