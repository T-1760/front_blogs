## String 字符串
### 目录
* [str.splice](#splice)
* [str.split](#split)
* [str.substring](#substring)
* [str.substr](#substr)
* [str.charAt](#charAt)
* [str.concat](#concat)
* [str.toUpperCase](#toUpperCase)
* [str.toLowerCase](#toLowerCase)
* [str.trim](#trim)
* [str.endsWith](#endsWith)
* [str.replace](#replace)
* [str.match](#match)
* [str.search](#search)
* [str.includes](#includes)
* [str.indexOf](#indexOf)
* [str.lastIndexOf](#lastIndexOf)
* [str.charCodeAt](#charCodeAt)
* [str.codePointAt](#codePointAt)


### 创建字符串
1. 字面量创建
```js
    let str = '123'
``` 
2. new 类方法创建
```js
    let str = new String('123');
```

### Array 属性
1. length属性： 数组长度，会自动变化（**最大索引 + 1**）
2. String.prototype.constructor用于创造对象的原型对象的特定的函数。

### String 构造器实例方法
#### <p id="slice"> str.slice(start, end) </p>
* 功能：拷贝字符串中的某段数据，对原字符串不会产生改变
* 返回值：返回拷贝了某段数据的**新字符串**
> * 参数：
> start: 起始位，从0开始
> end(可选): 结束位
```js
    let string = 'happy day'
    let stringSlice = string.slice(1, 2) // 从位置1即第二个字符开始，拷贝到位置为2前
        console.log(string ,stringSlice) //string:'happy day'  stringSlice:'a'
    stringSlice = string .slice(0)// 拷贝整个字符串
        console.log(string ,stringSlice) //string:'happy day'  stringSlice:'happy day'
```

#### <p id="split"> str.split(separator, limit) </p>
* 功能：以指定的分割符对字符串进行分割
* 返回值：返回以分隔符分割成的数组
> * 参数：
> separator: 分隔符
> imit(可选): 限制分割的份数
```js
    let string = 'happy day and day'
    let ArraySplit= string.split(' ') // 以空格进行分割
        console.log(string ,ArraySplit) //string:'happy day and day'  ArraySplit:['happy','day','and','day']
    ArraySplit= string.split(' ',2) // 以空格进行分割，并提取2份
        console.log(string ,ArraySplit) //string:'happy day and day'  ArraySplit:['happy','day']
```

#### <p id="substring"> str.substring(start, end) </p>
* 功能：截取指定位置的字符串
* 返回值：返回截取到的字符串
> * 参数：
> start: 起始位置，从0开始
> end(可选): 结束位置
```js
    let string = 'happy day'
    let stringSubstring= string.substring(0,4) // 从开头位置截取到位置4之前
        console.log(string, stringSubstring) //string:'happy day'  stringSubstring:'happ'
    stringSubstring= string.substring(5) // 从位置5开始截取到完
        console.log(string, stringSubstring) //string:'happy day'  stringSubstring:'day'
```
#### <p id="substr"> str.substr(start, length) </p>
* 功能：截取指定长度的字符串
* 返回值：返回截取到的字符串
> * 参数：
> start: 起始位置.(当参数为负数时 从字符串末尾开始计算，例如 -1 则是字符串的 最后一个字符)，
> length（可选）: 截取的字符长度。[默认]为字符串长度
```js
    let str='string'
    console.log(str.substr(0, 3))  // str
    console.log(str.substr(1)) // tring
    console.log(str.substr(-1))  // g
    console.log(str)  // string
```

#### <p id="charAt"> arr.charAt(index) </p>
* 功能：从字符串中返回指定的字符
* 返回值：返回的字符
> * 参数：
> index:指定位置，从0开始
```js
    let string = 'happy day'
    let char= string.charAt(4) // 读取第五个字符
    console.log(string, char) //string:'happy day'  char:'y'
```

#### <p id="concat"> str.concat(str1, str2, str3...) </p>
* 功能：字符串拼接
* 返回值：返回拼接完的 **新字符串**
> * 参数：
> str1:拼接的字符串
```js
    let str1 = 'happy day'
    let str2 = 'And day'
    let str3 = str1.concat(str2) // 读取第五个字符
    console.log(str1, str2, str3 ) //str1:'happy day'  str2:'And day' str3:'happy dayAnd day'
    // 更建议使用[赋值操作符]（`+`, `+=`）
```

#### <p id="toUpperCase"> str.toUpperCase() </p>
 * 功能：把字符串转化为大写
 * 返回值：转换为大写的**新字符串**
```js
    let string = 'happy day'
    let upperCase= string.toUpperCase() // 把字符串转换成大写
    console.log(string, upperCase) //string:'happy day'  upperCase: 'HAPPY DAY'
```

#### <p id="toLowerCase"> str.toLowerCase() </p>
* 功能：把字符串转化为小写
* 返回值：转换为小写的**新字符串**
```js
    let string = 'HAPPY DAY'
    let upperCase= string.toLowerCase() // 把字符串转换成小写
    console.log(string ,upperCase) //string:'HAPPY DAY'  upperCase: 'happy day'
```

#### <p id="trim"> str.trim() </p>
* 功能：去掉字符串两端的空白字符 (space, tab, no-break space 等) 以及所有行终止符字符（如 LF，CR等）
* 返回值：返回去掉空白字符的字符串
```js
    let string = '  happy day   '
    let str= string.trim() // 去掉字符串两端的空白字符
    console.log('string:' ,string ,'str:',str) //string:'  happy day   '  str: 'happy day'
```

#### <p id="endsWith"> str.endsWith(str，index) </p>
* 功能：判断给定字符或者是字符串是否是该字符串的结尾
* 返回值(Boolean类型)：true 或 false
> * 参数：
> str: 字符串
> index（可选）: 把第几位当作是末尾（以1开始）
 */
```js
    let string = 'happy day'
    let endwith= string.endsWith('ay') // 末尾是以’ay‘结尾
        console.log(string ,endwith) //string:'happy day'  charcode:true
    endwith= string.endsWith('app',4) // 把第四位当作是末尾，判断’app‘是不是结尾
        console.log(string ,endwith) //string:'happy day'  charcode:true
```
#### <p id="replace"> str.replace(regexp|substr, newSubStr|function) </p>
* 功能：替换字符串中的字符，
* 返回值：一个部分或全部匹配由替代模式所取代的新的字符串。
> * 参数
> regexp: 一个正则表达式对象 或者 其字面量。该正则所匹配的内容会被第二个参数的返回值替换掉。
> substr: 一个将被 newSubStr 替换的 字符串。其被视为一整个字符串，而不是一个正则表达式。仅第一个匹配项会被替换。
> newSubStr: 用于替换掉第一个参数在原字符串中的匹配部分的字符串。该字符串中可以内插一些特殊的变量名。
> function: 一个用来创建新子字符串的函数，该函数的返回值将替换掉第一个参数匹配到的结果。
```js
    let str='string'
    console.log(str.replace('r','R'), str)  //stRing    string
    // 交换一个字符串中两个单词的位置
    let re = /(\w+)\s(\w+)/;
    let newStr = 'two one'.replace(re, "$2, $1"); // one, two
    console.log(newStr);
```

#### <p id="match"> str.match(regexp ) </p>
* 功能：检索字符串匹配正则表达式的结果
* 返回值（Array类型）：找到：[查询结果1，查询结果2···, index: 0, input: "string", groups: undefined]; 未找到：null
> index: 匹配的结果的开始位置
> input: 搜索的字符串.
> groups: 一个捕获组数组 或 undefined（如果没有定义命名捕获组）。
* 参数
> regexp： 一个正则表达式对象。若参数非正则表达式，将隐式地使用new RegExp(obj)
> 注：如果使用g标志全局搜索，则将返回与完整正则表达式匹配的所有结果，但不会返回groups捕获组；若不包含 g 标志，str.match() 将返回与 RegExp.exec(). 相同的结果。
```js
    console.log('string'.match(/\w*$/)) // ["string", index: 0, input: "string"]
    console.log('string'.match('rin')) // ["rin", index: 2, input: "string"]
    console.log('string'.match(/^a*$/))  //null
    console.log('string'.match())  // ["", index: 0, input: "string", groups: undefined]
    console.log('abc123'.match(/\d/g))// ["1", "2", "3"]
    console.log('abc123'.match(/\d/))// ["1", index: 4, input: "abc123", groups: undefined]
```

#### <p id="search"> str.search(regexp) </p>
* 功能：执行正则表达式 和 str对象之间的一个搜索匹配.(用法等同于match，match返回匹配结果值数组，search返回搜索匹配值索引)
* 返回值：返回 正则表达式在字符串中**首次匹配项的索引**; 反之返回 -1
* 参数
> regexp： 一个正则表达式对象。若参数非正则表达式，将隐式地使用new RegExp(obj)
```js
    console.log('string'.search('rin'))  //2
    console.log('string'.search('stringaa')) //-1
```

#### <p id="includes"> str.includes(searchStr，index) </p>
* 功能：查找字符串是否包含提供的字符串
* 返回值(Boolean类型)：true 或 false
> * 参数：
> searchStr:查找的字符串
> index（可选）:从第几位找起（从0开始）
 */
```js
    let string = 'happy day'
    let includeFlag= string.includes('ay') // 查找是否存在'ay'
       console.log(string ,includeFlag) //string:'happy day'  includeFlag:true
    includeFlag= string.includes('day',5) // 从第六个字符开始查找是否存在’day'
       console.log(string ,includeFlag) //string:'happy day'  includeFlag: true
```

#### <p id="indexOf"> str.indexOf(searchStr，index) </p>
* 功能：查找某字符串在该字符串中第一次出现的索引位置
* 返回值：索引位置, 若不存在返回 -1
> * 参数：
> searchStr:查找的字符串
> index（可选）:从第几位找起（从0开始）
```js
    let string = 'happy day'
    let index = string.indexOf('ppy') // 查找’ppy'在字符串中第一次出现的索引位置
       console.log(string ,index) //string:'happy day'  index: 2
    index = string.indexOf('ppy',2) // 从索引位置为2开始查找’ppy‘的索引位置
       console.log(string ,index) //string:'happy day'  index: 2
```
#### <p id="lastIndexOf"> str.lastIndexOf(searchStr,start) </p>
* 功能：从末尾开始查找某字符串在该字符串中第一次出现的索引位置
* 返回值：索引位置，若不存在返回 -1
> * 参数：
> searchStr:查找的字符串
> index（可选）:从第几位找起（从**字符串末尾**开始 ）
```js
    let string = 'happy day'
    let index = string.indexOf('ppy') // 查找’ppy'在字符串中第一次出现的索引位置
       console.log(string ,index) //string:'happy day'  index: 2
    index = string.indexOf('ppy',2) // 从索引位置为2开始查找’ppy‘的索引位置
       console.log(string ,index) //string:'happy day'  index: 2
```

#### <p id="charCodeAt"> arr.charCodeAt(index) </p>
* 功能：从字符串中返回指定字符的 16位Unicode编码
* 返回值：Unicode编码
> * 参数：
> index:指定位置，从0开始
```js
    let string = 'happy day'
    let charCode = string.charCodeAt(4) // 读取第五个字符
    console.log(string , charCode) //string:'happy day'  charCode:121
```

#### <p id="codePointAt"> str.codePointAt(index) </p>
* 功能：从字符串中返回指定字符的 Unicode编码
* 返回值：Unicode编码
> * 参数：
> index:指定位置，从0开始
```js
    let string = 'happy day'
    let charCode= string.codePointAt(4) // 读取第五个字符
    console.log(string ,charCode) //string:'happy day'  charCode:121
    // 注意其与charCodeAt方法的区别：charCodeAt是用2个字节编码（码元），codePointAt使用4个字节编码（码点）
```