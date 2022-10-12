## Number 数值 构造器
### 创建 数值
1. 字面量创建
```js
let num = 123
```
2. new 类创建
```js
let num1 = Number("123") // 123
let num2 = Number(true) // 1
let num3 = new Number('abc') // NAN
let num3 = new Number([1, 2, 3]) // NAN
let num3 = new Number({name:"xiaobai"}) // NAN

let num = Number('12.3')    // 12.3
let num = Number('12.00')   // 12
let num = Number('123e-1')  // 12.3
let num = Number('')        // 0
let num = Number(null)      // 0
let num = Number('0x11')    // 17
let num = Number('0b11')    // 3
let num = Number('0o11')    // 9
let num = Number('foo')     // NaN
let num = Number('100a')    // NaN
let num = Number('-Infinity') //-Infinit
```

### Number 构造器属性
1. Number.MAX_VALUE 属性：返回能表示的最大数字。
```js
    console.log( Number.MIN_VALUE );  // 5e-324
```
2. Number.MIN_VALUE 属性：能表示的最小数字。
```js
    console.log( Number.MAX_VALUE );  // 1.7976931348623157e+308
```
3. Number.NAN 属性：非数字值。
```js
    console.log( Number.NaN );   // NaN
```
4. Number.POSITIVE_INFINITY 属性：特殊的正无穷大值，在溢出时返回该值。
```js
    console.log( Number.POSITIVE_INFINITY ); // Infinity
    console.log( window.Infinity ); // Infinity  (Infinity 是全局对象的属性：)
```
5. Number.NEGATIVE_INFINITY 属性：负无穷，当溢出时返回。
```js
    console.log( Number.NEGATIVE_INFINITY ); // -Infinity
```

### Number 构造器静态方法
#### Number.isNaN()
* 功能：确定传递的值是否是 NaN。
#### Number.parseFloat()
* 功能：和全局对象 parseFloat() 一样。
#### Number.parseInt()
* 功能：和全局对象 parseInt() 一样。
#### Number.isFinite()
* 功能：确定传递的值类型及本身是否是有限数。
#### Number.isInteger()
* 功能：确定传递的值类型是“number”，且是整数。
#### Number.isSafeInteger()
* 功能：确定传递的值是否为安全整数 ( -(253 - 1) 至 253 - 1之间)。


### NUmber 构造器实例方法
#### num.toString()
* 功能：使用指定进制，将一个数字转换为字符串。
```js
    var num = Number(5.123);
    console.log(num.toString());  //5.123
```

#### num.toLocaleString()
* 功能：将一个数字转换为本地数字格式的字符串。
```js
    var num = Number(5.123);      //5.123
    console.log(num.toString());  //5.123
    console.log(num.toFixed(2));  //5.123
    console.log(num.toPrecision(2)); //5.123
    console.log(num.valueOf());  //5.123
    console.log(num.toExponential(1));   //5.1e+0
```

#### num.toFixed()
* 功能：将一个数字转换为包含指定小数位数的字符串。
```js
    var num = Number(5.123);
    console.log(num.toFixed(2));  //5.123
```

#### num.toExponential()
* 功能：讲一个数字转换为字符串，使用指定数目的有效数字。
```js
    var num = Number(5.123);      //5.123
    console.log(num.toExponential(1));   //5.1e+0
```

#### num.valueOf()
* 功能：返回一个Number对象的原始值。
```js
    var num = Number(5.123);      //5.123
    console.log(num.valueOf());  //5.123

```