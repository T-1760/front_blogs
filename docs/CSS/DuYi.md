# CSS-DuYi笔记
### 分类
1. 内部样式表
> html的 **style元素标签中**
>
> >**样式200行内**，可使用此方式
2. 内联样式表，元素样式 [不推荐]
> 直接书写在该元素的 **style属性中**
>
> > 该方式常被 js 替代
3. 外部样式表[推荐]
> 样式书写到独立的css文件中
>> 1). 外部样式可以解决多页面样式 重复的问题
>> 2). 有**利于浏览器缓存**，从而提高页面响应速度
>> 3). 有利于代码分离(html与css)，更容易阅读和维护

### 常见样式声明(属性)
```css
选择器 {
  声明（属性）
}

```
#### font-size 字体大小
1. px: 像素 绝对单位。简解为文字高度所占多少个像素
2. em: 相对单位。**相对于父元素的字体大小**，1em = 100%
> 每个元素都有字体大小，若为直接声明，则直接使用父元素的字体大小。若无父元素（html）则使用（浏览器）基准字号

#### font-weight 字体粗细
* strong元素也可达到加粗效果
> user agent, UA,用户代理（浏览器）
1. 预设值[推荐]
> normal[默认值]: 数值 400
> bold: 数值 700
2. 数值
> 并非所有字体都支持 数值，需要该字体适配对应数值

#### font-family 字体类型
* 必须用户计算机（客户端）中存在的字体方可有效，否则忽略
* 使用多个字体，以匹配不同环境。
1. consolas: 只支持英文显示
2. 微软雅黑
3. Arial
4. sans-serif: 非衬线字体（放在末尾，适配古老机型）

#### font-style 字体样式
* i元素，em元素 默认样式是倾斜字体
* italic: 常用来设置斜体

#### text-decoration 文本修饰（文本加线）
1. none
2. under-line
> a元素 
3. line-through 
> del元素 表示错误的内容
> s元素  表示过期的内容

#### text-indent 文本缩进

#### text-align 水平对齐方式
* 元素内部文字的水平排列方式
1. left
2. center
3. right

#### line-height 行高
* 设置行高为容器高度，可使单行文本垂直居中效果
1. 数值[推荐]: 表示**相对于当前元素的字体大小**
2. px
3. em

#### letter-spacing 文字间隙
1. px
2. em

#### opacity 透明度
* opacity 设置的是真个元素(涉及内部子元素)的透明，取值为[ 0 ~ 1 ]
> css属性涉及到颜色可 设置  rgba([ 0 ~ 255 ], [ 0 ~ 255 ], [ 0 ~ 255 ], [ 0 ~ 1 ])

#### cursor 鼠标指针
```css
  div{
    /* auto 使用浏览器类型  写法类似font-family*/
    cursor: url("鼠标图片地址(兼容性须使用.ico 或 .cur图片格式)"), auto;
  }
```
#### 盒子隐藏
1. display: none 不生成盒子
2. visibility: hidden 生成盒子， 视觉上移除盒子

#### 背景图
* 与 img元素的区别
1. img元素属于 HTML概念
> 当图片属于网页内容时，必须使用 img元素
2. 背景图属于 CSS概念
> 当图片仅用于美化网页时，必须使用 背景图

* background-image 背景图片

* background-repeat 图片(不足)填充
1. no-repeat x轴和y轴不填充
2. x-repeat 沿 x轴填充
3. y-repeat 沿 y轴填充

* background-size
1. 预设值： contain(完整比例不变), cover(撑满完整)类似object-fit
2. 数值 或 百分比

* background-position 背景图位置
1. 预设值： top, right, bottom, left, center
2. 数值 或 百分比

* background-attachment 常使用控制背景是否固定
> 背景图相对于视口

* background-color 背景颜色可与毕竟图片混用

**速写 ``background：url('图片地址') repeat position/size attachment color``**

### 选择器
#### 通配符选择器
* * 选中所有元素
#### 属性选择器
* 根据属性名和属性值选中元素
```css
[href]{
  text-decoration: none;
}

[href=“www.baidu.com”]{
  color:#ff4400;
  text-decoration: none;
}
```
#### 伪类选择器
* 选中某些元素的某种状态
1. :link: 超链接未访问的状态
2. :visited: 超链接访问后的状态
3. :hover: 鼠标悬停状态
4. :active: 激活状态，鼠标按下状态
> love hate 爱恨法则: 改写 a元素超链接的四种伪类必须依据此法则顺序，否则会出错 （权重问题）
5. first-child 选择**第一个子**元素
> first-of-type: 选中子元素中**第一个指定类型**的元素
```css
  /* 选中a元素并且位于父元素下的第一个子元素（长子） */
  a:first-child{ /* 侧重第一个子元素 */
    color; red
  }
  /* 选中第一个子元素类型为 a的元素 */
  a:first-of-type{ /* 侧重类型 */
    color: red
  }
```
6. last-child 选择**最后一个**子元素
> last-of-type: 选中子元素中**最后一个指定类型**的元素
```css
  /* 选中a元素并且位于父元素下的最后一个子元素（长子） */
  a:last-child{ /* 侧重最后一个子元素 */
    color; red
  }
  /* 选中最后一个子元素类型为 a的元素 */
  a:last-of-type{ /* 侧重 类型 */
    color: red
  }
```
7. nth-child 选中指定的第几个子元素
> nth-of-type 选中指定的子元素中第几个某类型的元素
>> 偶数关键字 even 等同于 2n 
>> 基数关键字 odd: 等同于 2n + 1
```css
/* 选中a元素且位于父元素中的第五的子元素上 */
a:nth-child(5){ /* 侧重子元素位置 */
  color: red
}
/* 选中子元素中奇数位的a类型元素 */
a:nth-of-type(odd){ /* 侧重类型  */
  color: red
}
```

#### 伪元素选择器
1. ::before 
2. ::after
3. ::first-letter 选中元素第一个字符
4. ::first-line 选中元素中第一行的文字
5. ::selection 选中被用户框选的文字 
```css
  p::first-letter{
    color: red
  }
  p::first-line{
    color: green
  }
  p::selection{
    color: white;
    background: black
  }
```
#### 元素选择器
#### class选择器
#### ID选择器



### 选择器组合
1. 并且 => 空
```css
  div.red{
    color: red;
  }
```
2. 后代元素 => 空格
```css
  div .red{
    color: red;
  }
```
3. 子（一代）元素 => >
```css
  div>.red{
    color: red;
  }
```
4. 相邻兄弟元素 => +
```css
  div+.red{
    color: red;
  }
```
5. 后面所有的兄弟元素 => ~
```css
  div~.red{
    color: red;
  }
```
### 选择器并列
* ", "逗号  语法糖, 渲染时依旧拆分独立
```css
  html,
  body{
    padding: 0;
    margin: 0
  }
```

### 层叠
* 申明冲突： 用一个样式，多次应用到同一个元素
* 层叠（权重）： 解决声明冲突的过程。浏览器自动处理
#### 一、比较重要性
1. 开发者样式表中的 !important样式
2、开发者样式表中的普通样式
3. 浏览器默认样式表中的样式
#### 二、比较特殊性
* 总体规则； 选择器选中的范围越窄越特殊
* 具体规则： 通过选择器计算一个4位权重值（256进制）
1. 千位：若是内联样式计1，反之计0
2. 百位：所有选择器中所欲id选择器的数量
3. 十位：选择器中所有class选择器，属性选择器，伪类选择器的数量
4. 个位：选择器中所有元素选择器，伪元素选择器的数量

#### 比较源次序
* 后来者居上：代码书写靠后胜出
> 常见重置样式表(cdn引用即可)：normaliza.css, reset.css, meyer.css

### 继承
* 子元素会继承父元素的某些CSS属性（字体内容相关）

### 属性值的计算过程
* 依次逐个元素进行渲染，顺序依据[页面文档的树形目录结构](https://imgtu.com/i/gnC4ld)进行渲染
> 渲染每个元素的前提条件：**该元素的所有 css属性必须有值**
* 一个元素的所有属性从没有值到都有值的计算过程，称为 属性值计算过程
[![CSS属性值计算过程](https://z3.ax1x.com/2021/05/04/gnPikT.png)](https://imgtu.com/i/gnPikT)
1. 确定声明值：参考样式表（开发者样式表，浏览器样式表）中没有冲突的声明，作为css属性值
2. 层叠冲突：对样式表有冲突的声明使用层叠规则，确定css属性值
3. 使用继承：对仍然没有值的属性，若可继承，则继承父元素的值
4. 使用默认值：对仍然没有值的属性，使用默认值

#### CSS特殊取值
1. inherit： 手动（强制）继承，将父元素的值取出应用到该元素
2. initial： 初始值，将该属性设置为默认值

### 常规流（文档流）
* html页面中元素的排列分为三种
> 1. 常规流 [默认]
> 2. 浮动
> 3. 定位
* html元素默认情况均为常规流布局
* 包含快（父元素）containing block： 决定（子元素）盒子的排列区域或是活动区域
> 绝大部分情况：**盒子的包含快，为其夫元素的内容盒content-box**
#### 块盒
* 法则1：每个块盒的**总宽度**（content+padding++border+margin）**必须等于包含快的宽度**
* 法则2：若块盒的总宽度计算后未等于包含块宽度，则将由块盒的margin-right吸收（但不会影响margin-right设定值或默认值）

1，水平方向
* 块盒 width 默认值为 auto （auto 该属性包含块剩余空间全部吸收）
* 块盒 margin 默认值为 0 
> width 和 margin 均为 auto值， 包含块优先被width占满吸收， margin的auto无效

2. 垂直方向
* 块盒 height 默认值为 auto, 则会取决于/适应内部内容(内部子元素)的高度
* 块盒 margin 默认值为 0 ， 若 margin: auto ,则垂直方向表示为0  => margin: 0 auto;

3. %百分比取值
*  块盒的 width, padding(四个方向), margin（四个方向）可设置百分比，均相对于包含块的宽度（须确定包含块（父元素）的宽度，否则无参考） 
* 包含块（父元素 height; auto）的高度取决于(子元素)块盒的高度，则（子元素）块盒的height高度设置百分比无效，因块盒无绝对包含块height参考。反之百分比相对于父元素高度

4. 相邻 margin（上下外边距）合并
* 两个(父子元素间 或 兄弟元素间)常规流块盒**margin外边距相邻**，则会取最大margin值

#### 浮动 float
* float : none[默认值] / left / right
* 法则1： 当一个元素浮动后(float不为none), 该元素**必定为块盒(display: block)**
* 法则2： 浮动元素的包含块(和常规流一样)为父元素的content-box

* 盒子尺寸
> 1. 宽度width: auto时， 适应元素内部内容宽度（撑开）
> 2. 高度height：auto时（同常规流）适应内部内容的高度(撑开）
> 3. margin: auto 时， 无效值为0
> 4. border(四方向)，padding(四方向)的百分比设置（同常规流），相对于元素width宽度

* 盒子位置
> 1. float：left 左浮动盒子靠上靠左排列
> 2. float：right 右浮动盒子靠上靠右排列
> 3. 在包含块中(既有常规流盒子又有浮动盒子)排列时，float浮动盒子会避开常规流块盒
>> 常规流盒子代码编写在前，float盒子代码书写在后
> 4. 在包含块中(既有常规流盒子又有浮动盒子)排列时，常规流块盒会无视float浮动盒子
>> float浮动盒子代码书写在前， 常规流块盒代码书写在后
> 5. 常规流行盒在排列时，会避开float浮动盒子
>> 文字环绕： 若文字没有在行盒中， 浏览器会自动生成一个行盒包裹文字，此行盒成为 匿名行盒

* float盒子之间位置
1. 左浮动的盒子**向上向左**排列
2. 右浮动的盒子**向上向右**排列
3. 浮动盒子的顶边**不得高于上一个盒子的顶边**
4. 若剩余空间无法摆放浮动盒子，则该盒子向下移动，直到具备足够空间摆放盒子。然后（依据float）向左/向右移动

* 高度坍塌
+ 根源： （包含块父元素）常规流盒子的自动高度计算时，不考虑（内部子元素为）浮动盒子的高度
+ 清除浮动 css属性 clear: 
- none[默认值]
- left: 清除左浮动， 该元素必须出现在所有左浮动盒子的下方（后方）
- right: 清除右浮动， 该元素必须出现在所有右浮动盒子的下方（后方）
- both: 清除左右浮动， 该元素必须出现在所有浮动盒子的下方（后方）

#### 定位 position
* 定位： 手动控制元素在包含块(父元素)的精准位置
* position： static[默认值] / relative / absolute / fixed
* 定位元素： 元素的 position属性 不为 static
* 定位元素(relative相对定位除外)和float浮动元素 均会脱离文档流
> 1. 文档流中的元素摆放时，会忽略脱离文档流的元素
> 2. 文档流中元素计算自动高度时， 会忽略脱离文档流的元素

+ relative 相对定位
- **不会脱离文档流**，只是让元素**在原来位置上进行偏移**（通过top/bottom, left/right设置，方向冲突时以top和left为准）
- **relative的偏移不会对其他盒子造成任何影响**

+ absolute 绝对定位
1. 高度为 auto适应，适应内部内容的高度
2. content-box包含块变化：依次向外找第一个为**定位元素**的祖先元素，该祖先的padding-box填充盒为其包含块。若祖先均不是定位元素，则整个网页为其包含块（也称初始包含块）

+ fixed 固定（视口）定位
- 包含块： 固定为视口（浏览器网页的可视窗口）

* 补充
1. absolute 和 fixed元素的 **margin为auto时，会自动吸收剩余空间（与常规流相同**）
2. absolute绝对定位 和 fixed固定定位元素**一定时block块盒，且不存在marign合并**
3. absolute绝对定位 和 fixed固定定位元素**一定不能 float浮动（float无效）**



## 【css扩展知识】

### @规则
1. @import 【CSS导入资源】
```css
  @import '导入css文件地址或路径'
```
2. @charset "utf-8" 【CSS编码规则】
> 当css文件中出现中文字符时，告知浏览器css字符编码。并且放到**css根文件首行**

3. @font-face 【定义字体】
```css
  @font-face {
    font-family: ’自定义字体名称';
    src: url('字体资源路径')
  }
```
* 字体图标 就有所有字体CSS属性   (www.iconfont.cn)

### 块级格式化上下文 BFC( Block Formatting Context )
* 块级格式化上下文规定了在该区域中**常规流 Block块盒的布局**方式；块级格式化上下文是一个**独立**的**渲染区域**
#### 常规流 Block块盒布局规则
> 1. 常规流块盒在水平方向上，**必须撑满包含块 containing block**
> 2. 常规流块盒在包含块 containing block的**垂直方向上依次摆放**
> 3. 常规流块盒若 margin外边距无缝相邻（1父子嵌套：父块盒没有设置padding和border时；2兄弟依偎：两兄弟在同一BFC区域时）,则进行上下 margin外边距合并（左右一般不会出现外边距合并）
> 4. 常规流块盒的自动高度和摆放位置， 无视 float浮动元素和 position定位元素
#### BFC渲染区域
* 渲染区域由某个 HTML元素创建。以下元素会在**其内部创建 BFC区域**:
1. 根元素：即< html> 元素创建的BFC区域，覆盖了网页中所有的元素
2. float浮动元素和 position定位元素
3. 块盒元素的overflow属性不等于 visible [推荐]
4. display: table;
5. display: inline-block
![BFC渲染区域](https://z3.ax1x.com/2021/06/27/RJlfte.jpg)
#### 独立的
* 不同的 BFC区域，进行渲染时互不干扰。创建 BFC的元素隔绝了它内部和外部的联系，内部渲染不会影响到外部。规则如下:
1. 创建的 BFC元素，它的**自动高度需要计算内部浮动元素**
2. 创建的 BFC元素，它的 **border box边框盒不会与浮动元素重叠**
3. 创建的 BFC元素，它**不会与子元素进行外边距合并**(即：处于不同 BFC区域的两个元素外边距不会合并)

### line-height 行高
* **line-height: 数字【推荐】**。在父元素总设置行高时， 多个子元素的字体大小不同情况下
* 行高为字体大小的两倍
1. line-height: 2em;
> 先计算像素值，再继承
2. line-height: 2;
> 先继承，再计算像素值

### html 和 body 背景
* 底层画布(在此画布基础上才能渲染出html元素)的特点：
  + 该画布**最小宽度为视口宽度**
  + 该画布**最小高度为视口高度**
  + 注：html设置了背景，则html元素背景即为底层画布；html未设置背景，则由 body元素背景为底层画布
1. html元素的背景
  * html元素设置的背景 **会覆盖底层画布**。即无论html元素内有无内容，该背景至少覆盖整个视口大小
2. body元素的背景
  > 1. html元素**未设置背景**，则body元素设置的背景会**覆盖底层画布**。即该背景至少覆盖整个视口大小
  > 2. html元素**设置了背景**，则body元素背景则**正常显示**（依据定义的宽高显示）
* 底层画布背景图
  + html元素设置了背景，则依据一下规则
  + html元素未设置背景，则由 body元素背景将依据下面规则
  + background-size
  > 1. background-size:背景图的宽度百分比% 时，**相对于视口宽度**（背景色宽度百分比% 则是根据定义的宽度展示）
  > 2. background-size: 背景图的高度百分比% 时，**相对于网页高度（html内容高度）**
  + background-position
  > 1. background-position: 背景图的横向位置百分比%，预设值，**相对于视口宽度**
  > 1. background-position: 背景图的纵向位置百分比%， 预设值，**相对于视口高度（html内容高度）**

  
  
  ### inline行盒的垂直对齐
  
  * 多个 inline行盒垂直方向上的对齐
  > 解决： vertical-align: middle预设值 / 数值
  * img图片的底部白边
    + img图片的父元素为block块盒且高度auto自动，img图片底部出现一行白边（高度随父元素字体大小决定）
    > 解决1: 设置父元素的字体大小为 0
    > 解决2： 将img图片设置为 block块盒【推荐】
  * line-height: 1；建议替换为 **line-height: normal;**



### z-index 堆叠上下文

* 堆叠上下文(stack context): 由某个元素（父元素）创建的区域，规定了该元素区域内容（子元素）**相对于该（父元素）堆叠上下文区域的 Z轴上排列的先后顺序**
#### 创建堆叠上下文的方法
1. html元素(根元素)
2. 具有 **z-index(设定值不为 默认值auto)**的定位元素
#### 同一堆叠上下文中元素在 Z轴上排列顺序（从底层到顶层顺序）
1. 创建堆叠上下文(父元素)的 background背景和 border边框 
2. 堆叠级别z-index为 负值的堆叠上下文（子元素也是个堆叠上下文）
3. 常规流非定位的 block块盒（块盒子元素）
4. 非定位的 float浮动盒子（浮动子元素）
5. 常规流非定位 inline行盒（行盒子元素）
6. 任何 z-index是 auto的**定位元素**（定位子元素），以及 z-index值为 0的堆叠上下文（子元素也是个堆叠上下文）
7. 堆叠级别z-index为 正值的堆叠上下文
8. 同一堆叠上下文（父元素）内子元素级别相等，依据书写代码后者高

* 注：每个堆叠上下文stack context整体独立于其他上下位，堆叠上下文内容元素互不穿插。



### 居中总结

#### 水平居中

1. inline行盒 和 inline-block行块盒

   > text-align: center； // 设置 行盒和行块盒的包含块（父元素）

   > ```css
   > .parent{
   > 	text-align: center;
   > }
   > ```

2. 常规流 block块盒

   > margin: 0 auto;// 自身定宽(因width的auto高于margin的auto)， 左右margin设置为 auto
   >
   > ```css
   > .blcok-box{
   >     width: 100px;
   >     marign: 0 auto
   > }
   > ```

   

3.  absolute 绝对定位元素 和 fixed固定定位

   > 自身定宽，设置绝对定位左右坐标为0 （left: 0; right: 0）,左右margin设置为 auto(marign: 0 auto)
   >
   > ```css	
   > .parent{
   >     position: relative;
   > }
   > .child{
   > 	width: 100px
   >     position: absolute;
   >     left: 0;
   >     right: 0;
   >     margin: 0 auto;
   > }
   > ```

   

#### 垂直居中

1.  单行文本的垂直居中

   > 设置单行文本所在元素的行高， 为整个区域的高度
   >
   > ````css	
   > .black, 
   > .inline-block{
   > 	height: 100px;
   >     linke-height: 100px;
   > }
   > ````

2. inline-block行块盒和 black块盒内多行文本垂直居中

   > 方法1：设置盒子上下填充padding， 达到类似效果【不推荐】
   >
   > 方法2（绝对定位）：定高， 设置上下的坐标为0（top:  0, bottom: 0）, 将上下margin设置为 auto
