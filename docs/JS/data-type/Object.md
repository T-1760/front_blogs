## Object数据类型
### 创建 Object对象（构造器）
1. 字面量声明
```js
  let obj = {name: "Tony", age: 20}
```
2. new 类创建
```js
  let obj = new Object({name: "Tony", age: 20})
```

### Object构造器的静态方法
#### Object.keys(obj)
* 作用： 获取该对象的**所有属性名数组**
#### Object.values(obj)
* 作用： 获取该对象的**所有属性值数组**
#### Object.entries(obj)
* 作用： 获取该对象的**所有(项的)属性名和属性值的数组**

### Object构造器的实例方法（可被重写）
#### obj.toString()
* 作用： 获取该对象的 String字符串格式。 默认情况下返回值为字符串```"[object Object]"```
#### obj.valueOf()
* 作用： 获取该对象的值，默认情况下返回值为 该对象本身

**JavaScript中（万物皆对象） 所有对象，都拥有 Object的所有实例成员**（实例属性和实例方法）

* JavaScript中对一个 Object对象进行转换，则实际上调用该对象的 obj.valueOf()方法，然后调用返回值的 toString()方法; **若valueOf()返回值为原始类型, 则不调用 toString()方法**。