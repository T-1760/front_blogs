## Array 数组
### 目录
* [Array.isArray](#isArray)
* [Array.from](#from)
* [Array.of](#of)
* [arr.splice](#splice)
* [arr.slice](#slice)
* [arr.push && pop](#pushpop)
* [arr.unshift&&shift](#unshiftshift)
* [arr.toString](#toString)
* [arr.join](#join)
* [arr.indexOf](#indexOf)
* [arr.sort](#sort)
* [arr.reverse](#reverse)
* [arr.filter](#filter)
* [arr.every](#every)
* [arr.some](#some)
* [arr.map](#map)
* [arr.forEach](#forEach)
* [arr.reduce](#reduce)
* [arr.includes](#includes)
* [arr.findIndex](#findIndex)
* [arr.find](#find)
* [arr.flat](#flat)
* [arr.fill](#fill)

### 一、创建数组
1. 字面量创建
```js
  let arr1 = []; 
  let arr2 = [‘123’, 123, { name: xiaobai, age: 18}]
```
2. new 类创建
```js
  let arr2 = new Array() //  []  注： new Array() == [] 结果 false
  let arr1 = new Array(3) // 返回一个数组长度为3的空数组 =>[empty × 3]
  let arr2 = new Array(‘123’, 123, { name: xiaobai, age: 18}) //  [‘123’, 123, { name: xiaobai, age: 18}]
```
### 二、Array 属性
1. length属性： 数组长度，会自动变化（**最大索引 + 1**）
2. Array.prototype 通过数组的原型对象可以为所有数组对象添加属性。
3. Array.prototype.constructor 所有的数组实例都继承了这个属性，它的值就是 Array，表明了所有的数组都是由 Array 构造出来的。

### 三、Array构造器静态方法
#### <p id="isArray"> Array.isArray() </p>
* ES5 功能：用来判断某个变量是否是一个数组对象。
* 返回值(Boolean)：如果值是 Array类型，则为true; 否则为false
> * 参数：
> obj: 需要检测的值
* 注：当检测Array实例时, Array.isArray 优于 instanceof,因为Array.isArray能检测iframes.
```js
  Array.isArray([1, 2, 3]); // true
  Array.isArray({foo: 123}); // false
  Array.isArray("foobar"); // false
  Array.isArray(undefined); // false
```

#### <p id="from"> Array.from(arrayLike[, mapFn[, thisArg]])</p>
* ES6 功能：从类似数组对象（即有length属性）或者 可迭代对象中创建一个新的数组实例。
> * 参数：
> arrayLike：想要转换成数组的 伪数组对象或 可迭代对象。
> mapFn(可选)：如果指定了该参数，新数组中的每个元素会执行该回调函数。
> thisArg(可选)：可选参数，执行回调函数 mapFn 时 this 对象。
```js
  let json ={
	    '0':'大',
	    '1':'前',
	    '2':'端',
	    length:3
	}
	let arr = Array.from(json);
	console.log(arr); // ["大", "前", "端"]	
```

#### <p id="of"> Array.of(elementN)</p>
* ES6 功能：根据一组参数来创建新的数组实例，支持任意的参数数量和类型。
* 返回值(Array类型):数组类型 
> * 参数：
> elementN：任意个参数，将按顺序成为返回数组中的元素。
```js
  Array.of(undefined); // [undefined]
  Array.of(7);       // [7]
  Array.of(1, 2, 3); // [1, 2, 3]
  Array(7);          // [ , , , , , , ] 返回一个数组长度73的空数组 =>[empty × 7]
  Array(1, 2, 3);    // [1, 2, 3]
```

### Array构造器实例方法
> 能**改变原数组值**的方法： **splice(), reverse(), sort(), push(), pop(), unshift(), shift(), fill()**。
#### <span id="splice"> arr.splice(start, deleteCount, item1, item2...) </span>
* ES5 功能：可实现数组项的删除、插入、替换
* 返回值：由被删除的元素组成的一个数组，如果没有被删除则返回空数组
> * 参数：
> start:删除或插入或替换的起始位置
> deleteCount（可选）:删除或插入或替换的数量。若忽略，则从start开始后边都会被删除
> item1（可选）:删除或插入或替换的值
* 重点： 该方法会**改变原始数组** splice() 与 slice() 方法作用不同在于 splice()会直接对数组进行修改。
```js
  let arr = [1,2,3,4,5]
  let result = arr.splice(1,2) // 从数组下标1开始 删除2个元素
    console.log(arr,result) //arr:[1,4,5]   result:[2,3]
  result = arr.splice(1,2,2,3)// 从数组下标1开始 替换2个元素为2，3
    console.log(arr,result) //arr:[1,2,3]   result:[4,5]
  result = arr.splice(3,0,4,5)// 从数组下标3开始 增加2个元素4，5
    console.log(arr,result) //arr:[1,2,3,4,5]   result:[]
```

#### <span id="slice"> arr.slice(start, end) </span>
* ES5 功能：浅拷贝数组中的某段数据 (浅拷贝说明如果是引用类型数据则拷贝的是引用地址)
* 返回值：返回一个浅拷贝了某段数据的 **新数组**
> * 参数：
> start(可选):起始位，对应数组下标（包含该位）
> end(可选):结束位，数组下标（不包含该位）
```js
  let arr = [1,2,3,4,{ name:'xiaobai'}]
  let result = arr.slice(1,2) // 从数组下标1浅拷贝到数组下标2前
    console.log(arr,result) //arr:[1,2,3,4,{ name:'xiaobai'}]   result:[2]
  result = arr.slice()// 浅拷贝整个数组
    console.log(arr,result) //arr:[1,2,3,4,{ name:'xiaobai'}]   result:[1,2,3,4,{ name:'xiaobai'}]
  result = arr.slice(3)// 从数组下标3开始浅拷贝
    console.log(arr,result) //arr:[1,2,3,4,{ name:'xiaobai'}]   result:[4,{ name:'xiaobai'}]
  result[0] = 100
  result[1]. name = 'dabai'
    console.log(arr,result) //arr:[1,2,3,4,{ name:'dabai'}]   result:[100,{ name:'dabai'}]
```

#### <span id="pushpop">数组尾部操作 arr.push(element1...) && arr.pop()  </span>
* push()ES5 功能：可向数组的末尾添加一个或多个元素，并返回新的长度。
* push()返回值：返回新的长度。**改变原始数组**
> * push()参数：
> element1(可选)：添加的（0 到 多个）值
* pop()ES5 功能：从原始数组中删除最后一个元素。
* pop()返回值： 并返回被pop弹出的元素。**改变原始数组**
* 注：当数组的length = 0，使用pop() 返回 undefined
```js
  var arr=[1, 2, 3, 4];
	var push_arr=arr.push("Tom", "Sun");
	  console.log(arr); //[1, 2, 3, 4, "Tom", "Sun"];
	  console.log(push_arr); // 6
	var pop_arr=arr.pop();
	  console.log(arr); //[1, 2, 3, 4, "Tom"];
	  console.log(pop_arr); // Sun	
```

#### <span id="unshiftshift">数组首部操作 arr.unshift(element1...) && arr.shift() </span>
* unshift()ES5 功能：可向数组的开头添加一个或更多元素，并返回新的长度。
* unshift()返回值：并返回新的长度。**改变原始数组**
> * unshift()参数：
> element1(可选)：添加的（0 到 多个）值
* shift()ES5 功能：用于把数组的第一个元素从删除，并返回第一个元素的值。
* shift()返回值：并返回第一个元素的值。**改变原始数组**
```js
  var arr=[1, 2, 3, 4];
	var shift_arr=arr.shift();
	  console.log(arr); // [2,  3,  4]
	  console.log(shift_arr); // 1
	var unshift_arr=arr.unshift("Tom");
	  console.log(arr); // ["Tom",  2,  3,  4]
	  console.log(unshift_arr); // 4
```

#### <span id="concat"> arr.concat(val1, val2....) </span>
* ES5 功能：合并一个或多个数组，返回新的数组，原数组不会被改变。数组元素若是引用类型，也为浅拷贝
* 返回值：返回一个**新数组**（浅拷贝）
> * 参数：
> val(可选):Array类型
```js
  let arr1 = [1, 2, 3]
  let arr2 = [4, 5, 6, { name:'xiaobai'}]
  let result = arr1.concat(arr2) // 连接两个数组
    console.log(arr1,result) //arr1:[1,2,3]   result:[1,2,3,4,5,6,{ name:'xiaobai'}]
  result = arr1.concat(arr2) 
  result[6]. name = 'dabai'
    console.log(arr2,result) //arr2: [4,5,6,{ name:'dabai'}] result:[1,2,3,4,5,6,{ name:'dabai'}]
  result = arr1.concat()
    console.log(arr1,result) //arr1:[1,2,3]   result:[1,2,3] 
```

#### <span id="toString"> arr.toString(val1, val2....) </span>
* ES5 功能：用于将数组内容转换为字符串
* 返回值(String类型)：一个表示指定的数组及其元素的字符串。
```js
  let arr1 = [1, 2, '3'];
  let arr2 = [1, '123',  {name: "xiaobai"]
  console.log(arr1.toString(), arr2.toString()) //arr1: "1,2,3",   arr2: "1,123,[object Object]"
  let nestedArray = [1,2, ["123", 123, {name: 'xiaobai'}]].toString()
  console.log(nestedArray)  // "1,2,123,123,[object Object]"
```

#### <span id="join"> arr.join( separator) </span>
* ES5 功能：用分隔符将数组中的每一项连接起来形成字符串
* 返回值(String类型)：返回一个用**分隔符连接起来的字符串**
> * 参数：
> separator(可选):分隔符（为空时，默认为 ","逗号）
```js
  let arr = [1, 2, 3, 4]
  let result = arr.join() // 用默认逗号分隔符将数组中的每一项连接起来形成字符串
    console.log(arr, result) //arr:[1, 2, 3, 4]   result:"1, 2, 3, 4"
  result = arr.join("")// 将数组中的每一项连接起来形成字符串
    console.log(arr, result) //arr:[1, 2, 3, 4]   result:“1234”
  result = arr.join('xiaobai')// 用'xiaobai'将数组中的每一项连接起来形成字符串
    console.log(arr, result) //arr:[1, 2, 3, 4]   result:"1xiaobai2xiaobai3xiaobai4"
  arr = [1, 2, 3, undefined, 4, null, 5]
  result = arr.join() // 如果数组元素为undefined或null，都返回空
    console.log(arr, result) //arr:[1, 2, 3, undefined, 4, null, 5]  result:"1,2,3,,4,,5"
  result = arr.join("") // 如果数组元素为undefined或null，都返回空
    console.log(arr, result) //arr:[1, 2, 3, undefined, 4, null, 5]  result:"12345"
```

#### <span id="indexOf"> arr.indexOf(searchEl, fromIndex) </span>
* ES5 功能：寻找索引
* 返回值(Number类型)：在数组中的索引位置
> * 参数：
> * searchEl: 查找的元素值
> * fromIndex(可选): 开始查找的索引值
```js
  let arr = [1,2,3]
  let index = arr.indexOf(2) // 查找元素’2‘的索引值  
    console.log(index) // index:1
  arr = [1,2,3,34,31,4]
  index = arr.indexOf(31,3)// 从索引值3开始寻找元素31
    console.log(index) // index:4
```

#### <span id="sort"> arr.sort(compareFunc(firstEl, secondEl)) </span>
* ES5 功能：对数组进行排序并返回
* 返回值：排序后的数组，原地排序
> * 参数（可选）：
> compareFunc(firstEl, secondEl)
> firstEl: 数组的第二项a[1]
> secondEl: 数组的第一项a[0]
> 若 compareFunc **> 0**, 那么 firstEl 排在 secondEl **之后**
> 若 compareFunc **= 0**, 那么 firstEl 和 secondEl 的**相对位置不变**
> 若 compareFunc **< 0**, 那么 firstEl 排在 secondEl **之前**
```js
  let arr = [1, 2, 3]
  arr.sort((firstEl, secondEl)=>{
    return secondEl - firstEl
  }) // 实现数组从大到小排序
    console.log(arr) // arr:[3, 2, 1]
  arr = [1, 2, 3, 34, 31, 4]
  arr.sort()
    console.log(arr) // arr:[1, 2, 3, 31, 34, 4]
```

#### <span id="reverse"> arr.reverse() </span>
* ES5 功能：反转数组，即第一项变成最后一项，最后一项变为第一项
* 返回值：经反转后的原数组
```js
  let arr = [1, 2, 3, 4]
  let reverseArr = arr.reverse() // 反转数组
  console.log(arr, reverseArr ) // arr:[4, 3, 2, 1]  reverseArr :[4, 3, 2, 1] 
```


#### <span id="filter"> arr.filter(callback(item,index,array)) </span>
* ES5 功能：创建一个新数组，其包含满足所提供方法的元素
* 返回值：返回一个**新的数组**,满足提供的方法的元素
> * 参数：
> callback:用来测试数组的每个元素的函数。返回 true 表示该元素通过测试，保留该元素，false 则不保留。
> item: 当前遍历到的元素
> index(可选): 当前遍历到的索引
> array(可选): 数组本身
```js
  let arr = [1,2,3]
  let ary = arr.filter(item=>(){
    return item>1
  }) // 过滤大于1的元素
    console.log(arr,ary) //arr1:[1,2,3]   ary:[2,3]
  arr = [1,2,3,[3,4]]
  ary = arr.filter(item=>{
    return item>1
  }) // 过滤大于1的元素
    console.log(arr,ary) //arr: [1,2,3,[3,4]]  ary: [2,3]
```

#### <span id="every"> arr.every(callback(item, index, array)) </span>
* ES5 功能：测试数组每一项是否满足所提供的函数
* 返回值(Boolean类型)：**所有项都满足**则为true, 反之为false
> * 参数：
> item: 当前遍历到的元素
> index(可选): 当前遍历到的索引
> array(可选): 数组本身
```js
  var arr = [1, 4, 6, 8, 10];
	var result1 = arr.every((currentValue) => { return currentValue < 12 });
	console.log(result1);  // true
	var result2 = arr.every((currentValue) => { return currentValue > 1	});
	console.log(result2);  // false
```

#### <span id="some"> arr.some(callback(item, index, array)) </span>
* ES5 功能：测试数组是否至少满足一次所提供的函数
* 返回值(Boolean类型)：**至少满足一次**则为true, 反之为false
> * 参数：
> callback:用来测试数组的每个元素的函数。
> item: 当前遍历到的元素
> index(可选): 当前遍历到的索引
> array(可选): 数组本身
```js
  let arr = [1,2,3]
  let flag = arr.some(item => { return item == 2 }) // 是否存在’2‘这个元素
  console.log(arr,flag) //arr:[1,2,3]   flag: true
```

#### <span id="map"> arr.map(callback(item, index, array)) </span>
* ES5 功能：用提供的方法遍历一遍数组，形成新数组
* 返回值(Array类型)：返回一个新数组
* 参数：
> callback:遍历每个元素的方法
> item: 当前遍历到的元素
> index(可选): 当前遍历到的索引
> array(可选): 数组本身
```js
  let arr = [1, 2, 3]
  let ary = arr.map(item=>{ return item * 2 }) // 给数组每位元素都乘以2
  console.log(arr, ary) //arr:[1, 2, 3]   ary:[2, 4, 6]
  
  let strArray = arr.map(String) // ["1", "2", "3"]
  let numArray = strArray.map(NUmber) // [1, 2, 3]
```

#### <span id="forEach"> arr.forEach(callback(item, index, array)) </span>
* ES5 功能：使用函数遍历数组所有元素
* 返回值(undefined类型)：无法返回值
> * 参数：
> callback:遍历每个元素的方法
> item: 当前遍历到的元素
> index(可选): 当前遍历到的索引
> array(可选): 数组本身
```js
  let arr = [1, 2, 3, 4]
  arr.forEach((item, index)=>{ arr[index] += item}) // 给数组每一项 加1 操作
  console.log(arr) // arr:[2, 4, 6, 8]
  // 需要注意它与map的区别：map是返回 新数组，而forEach返回值是 undefined
```

#### <span id="reduce"> arr.reduce(callback(accumulator, currentValue, index, array), initialValue) </span>
* ES5 功能：所有数组元素执行一次callback函数,将其结果汇总成单个结果返回
* 返回值：函数累计的结果（也就是accumulator的值）
* 注释：reduce从左到右，reduceRight从右到左。
> * 参数：
> accumulator/previons: 累计值
> currentValue: 当前遍历到元素
> index(可选): 当前遍历到的索引
> array(可选): 数组本身
> initialValue(可选): 1、若有： accumulator的初始值， currentValue取数组索引0第一项。2、若没有，则 accumulator 为数组中索引0 第一个元素, currentValue为数组中索引1 第二个元素
```js
  // eg1: 计算各元素重复出现次数
  let arr = [1, 2, 2, 3, 3, 3, 5, 4]
  let count = arr.reduce((accumulator,currentVal)=>{
    if(currentVal in accumulator){
        accumulator[currentVal]++
    }else{
        accumulator[currentVal] = 1
    }
    return accumulator
  },{}) 
  console.log(arr) // count:{1: 1, 2: 2, 3: 3, 4: 1, 5: 1}

  // eg2: 按照属性进行统计
  let people = [
      { name: 'Alice', age: 21 },
      { name: 'Max', age: 20 },
      { name: 'Jane', age: 20 }
    ]
  function groupBy(property,objArray){
    return objArray.reduce((accu,val)=>{
        if(val[property] in accu){
            accu[val[property]].push(val)
        }else{
          accu[val[property]] = Array.of(val)
        }
      return accu
    },{})
  }
  let groupByAge = groupBy('age',people) 
  // 输出如下：
  // { 
  //   20: [
  //     { name: 'Max', age: 20 }, 
  //     { name: 'Jane', age: 20 }
  //   ], 
  //   21: [{ name: 'Alice', age: 21 }] 
  // }

  // eg3: 实现数组去重
  let myArray = ['a', 'b', 'a', 'b', 'c', 'e', 'e', 'c', 'd', 'd', 'd', 'd']
  let myOrderedArray = myArray.reduce((acc,val)=>{
      if(!acc.includes(val)){
        acc.push(val)
      }
      return acc
  },[])
  console.log(myOrderedArray) // ["a", "b", "c", "e", "d"]
```

#### <span id="includes">arr.includes(valueToFind[, fromIndex]) </span>
* ES6 功能：判断一个数组是否包含一个指定的值
* 返回值(Boolean): 若在数组中找到了（如果传入了 fromIndex ，表示在 fromIndex 指定的索引范围中找到了）则返回 true 。
> * 参数
> valueToFind：需要查找的元素值。
> fromIndex(可选)：从fromIndex 索引处开始查找 valueToFind。如果为负值，则按升序从 array.length + fromIndex 的索引开始搜 （即使从末尾开始往前跳 fromIndex 的绝对值个索引，然后往后搜寻）。默认为 0。


#### <span id="findIndex"> arr.findIndex(callback(item, index, array)) </span>
* ES6 功能：数组中**第一个满足**提供的测试函数的元素索引
* 返回值：数组中通过提供测试函数的第一个元素的索引。否则，返回-1
> * 参数：
> item: 当前遍历到的元素
> index(可选): 当前遍历到的索引
> array(可选): 数组本身
```js
  let arr = [1, 2, 3, 4]
  let element = arr.find( item => item > 2 ) // 查找第一个大于2的元素
  console.log(element) // element: 2
```

#### <span id="find"> arr.find(callback(item, index, array)) </span>
* ES6 功能：找到**第一个符合**所提供的函数的条件，并返回该元素
* 返回值：符合条件的元素
> * 参数：
> item: 当前遍历到的元素
> index(可选): 当前遍历到的索引
> array(可选): 数组本身
```js
  let arr = [1,2,3,4]
  let element = arr.find( item => item > 2 ) // 查找第一个大于2的元素
  console.log(element) // element: 3
  // 需要注意它与filter的区别：find是找到 第一个 满足函数的元素，而filter是 所有 满足函数的元素
```

#### <span id="flat"> arr.flat(depth) </span>
* ES6 功能：通过指定深度遍历各元素，并且将个元素组成新数组返回
* 返回值：经指定深度遍历各元素后组成的**新数组**
> * 参数：
> depth(可选)：指定要提取嵌套数组的结构深度，默认值为 1
```js
  let arr = [1, 2, 3, [4, 5, 6]]
  let flatArr= arr.flat() // 按照深度为 1 进行提取元素，并组成新数组
  console.log(arr, flatArr) // arr:[1, 2, 3, [4, 5, 6]]  flatArr:[1, 2, 3, 4, 5, 6]

  // 使用 Infinity，可展开任意深度的嵌套数组
  let arr = [1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]]
  arr.flat(Infinity) // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
```

#### <span id="fill"> arr.fill(val, start, end) </span>
* ES6 功能：填充数组，**改变原数组**
* 返回值：填充后的数组
> * 参数：
> * val：要填充的值
> * start(可选)：要填充的起始位置
> * end(可选)：要填充的中止位置
```js
  let arr = [1, 2, 3, 4, 5]
  let fillArr= arr.fill(100, 2, 3) // 从数组下标2开始到数组下标3前，填充’100‘
    console.log(arr, fillArr) // arr:[1, 2, 100, 4, 5]  flatArr:[1, 2, 100, 4, 5]
  fillArr= arr.fill(100, 2) // 从数组下标2开始填充’100‘
    console.log(arr, fillArr) // arr:[1, 2, 100, 100, 100]  flatArr:[1, 2, 100, 100, 100]
  fillArr= arr.fill(100) // 从头开始填充’100‘
    console.log(arr, fillArr) // arr:[100, 100, 100, 100, 100]  flatArr:[100, 100, 100, 100, 100]
```

### 终止遍历数组
* 终止遍历数组方法
> 1. arr.every(): return false 跳出整个循环; return true跳出本次循环，继续循环
> 2. arr.some(): return true 跳出整个循环; return false跳出本次循环，继续循环
> 3. for遍历 break(或者return false): 用于跳出**整个循环(当前for)**，continue用于跳出**本次循环**
>> 如果是 多层嵌套的循环，要跳出所有循环，则需给最外层循环命名；
```js
  f: for(var i = 0; i < 3; i++) {
    for(var j = 0; j < 3; j++) {
        if (i === 0 && j === 0) {
            break f;      
        }  
        console.log(i, j);
    }     
  }
```
* forEach() 和 map()的 return false 均只能跳出本次循环，无法终止整个循环遍历
> forEach 和 map 正常不可以终端遍历过程。**可以抛除一个异常** 实现终止循环
```js
  var arr = [1,2,3,4,5,6,7];
  try {
    arr.forEach((item,index) => {
      console.log(item);
      if(item == 3){
        throw new Error('break');
      }
    });
  } catch (e) {
    // console.log(e);
  } finally {
  
  }
```    

