## JavaScript类型转换
- 参考链接
  + [66条JavaScript面试知识点](https://juejin.cn/post/6844904200917221389)
  + [参考链接](https://www.jb51.net/article/211229.htm)
  + [基于javascript 显式转换与隐式转换(详解)](https://www.jb51.net/article/130644.htm)
  + [JavaScript数据类型详解 ](https://juejin.cn/post/6844903990904225805)
### js的数据类型的转换
- 在 JS 中类型转换**只有三种情况**，分别是：
  + 转换为*布尔值*（调用Boolean()方法）
  + 转换为*数字*（调用Number()、parseInt()和parseFloat()方法）
  + 转换为*字符串*（调用.toString()或者String()方法）
    > null和 undefined没有toString方法(执行报错“Uncaught TypeError: Cannot read properties of undefined (reading 'toString')”)

![js中类型转换过程图](https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2020/5/28/1725b947653323df~tplv-t2oaga2asx-watermark.awebp)

### 一. 显式转换
  - 强制改变变量的数据类型
  - JavaScript自带标准库方法 Boolean(), Number(), BigInt(), String(), Object()
#### 转换为 string字符串类型
  - String(value)
  - value.toString()
    > 注：null和 undefined没有toString方法
#### 转换为 number数值类型
  - Number(value)
  - parseInt(value)
  - parseFloat(value)
#### 转换为 boolean布尔类型
  - Boolean(value)

### 二. 隐式转换
- JavaScript是一个弱类型编程语言，因此声明变量可以自动转换（隐式强制）
- 通常在使用算术运算符(+ / — *加减乘除运算) 和 逻辑判断(==相对比较运算)中出现
  >但是 隐性强制是一把双刃剑，合理使用可以增加可读性，减少冗长。如果使用不当或被误解
#### 转换为 string字符串类型
  - 使用**连接符 "+"**
    ```js
      let num = 99;
      let str = num + "";// "99"
      typeof str; // "string"
    ```
#### 转换为 number数值类型
  - 在需要转换的内容**前面加上"+"正号**
    ```js
      let str = "99"
      let num = +str; // 99
      typeof num; // "number"
    ```
  - 在需要转换的内容做**算术运算(除"+"加法外)**
    ```js
      let str = "123"
      let numSub = str - ""; // 123
      let numMul = str * ""; // 123
      let numDiv = str / ""; // 123
      typeof numSub; // "number"
      typeof numMul; // "number"
      typeof numDiv; // "number"
      
      // 注 一定要和(转换为字符串中的)连接符做一个区分
      let add = str + "" // "123"
      typeof add; // "string"
    ```
#### 转换为 boolean布尔类型 
  - 使用 "!"取反运算符
    ```js
      let numValue = !! Infinity; // true
      let numValue2 = !! -Infinity; // true
      let arrValue = !![]; // true
      let objValue = !!{}; // true
    注 此些特殊值转布尔为false: !!("" | 0 | -0 | 0n(BigInt) | false | undefined | null | NaN)
    ```