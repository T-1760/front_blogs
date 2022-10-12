## CSS 基础点
- 参考链接
  + [2021前端面试复习-CSS3](https://juejin.cn/post/7000669234208440356)
  + [「2021」高频前端面试题汇总之CSS篇](https://juejin.cn/post/6905539198107942919)
  + [100道近两万字帮你巩固css知识点](https://juejin.cn/post/6844904185847087111)

### css样式属性继承
#### 有继承性的属性
  - 字体系列属性
    + > font-family：字体系列
    + > font-weight：字体的粗细
    + > font-size：字体的大小
    + > font-style：字体的风格
  - 文本系列属性
    + > text-indent：文本缩进
    + > text-align：文本水平对齐
    + > line-height：行高
    + > word-spacing：单词之间的间距
    + > letter-spacing：中文或者字母之间的间距
    + > text-transform：控制文本大小写（就是uppercase、lowercase、capitalize这三个）
    + > color：文本颜色
  - 元素可见性
    + > visibility：控制元素显示隐藏
  - 列表布局属性
    + > list-style：列表风格，包括list-style-type、list-style-image等
  - 光标属性
    + > cursor：光标显示为何种形态

#### 无继承性的属性
  - display：规定元素应该生成的框的类型
  - 文本属性：
    + > vertical-align：垂直文本对齐
    + > text-decoration：规定添加到文本的装饰
    + > text-shadow：文本阴影效果
    + > white-space：空白符的处理
    + > unicode-bidi：设置文本的方向
  - 盒子模型的属性：
    + > width、height、margin、border、padding
  - 背景属性：
    + > background、background-color、background-image、background-repeat、background-position、background-attachment
  - 定位属性：
    + > float、clear、position、top、right、bottom、left、min-width、min-height、max-width、max-height、overflow、clip、z-index
  - 生成内容属性：
    + > content、counter-reset、counter-increment
  - 轮廓样式属性：
    + > outline-style、outline-width、outline-color、outline
  - 页面样式属性：
    + > size、page-break-before、page-break-after
  - 声音样式属性：
    + > pause-before、pause-after、pause、cue-before、cue-after、cue、play-during

### link和@import的区别
  - link是 **HTML提供的标签**，不仅可以加载CSS文件，还可以定义RSS、rel连接属性等
  - @import是 **CSS提供等语法规则**，只有导入样式表带作用。
  - link标签引入的CSS**被同时加载**，而@import引入的CSS将**在页面加载完毕后被加载**
  - @import是**CSS2.1才有的语法，存在兼容性**，而link作为*HTML标签不存在兼容性问题* 
### CSS选择器优先级
  1. 权重值`1000+`：@important
  2. 权重值`1000`：内联样式(`<style>`标签
  3. 权重值`100`：ID选择器
  4. 权重值`10`：类选择器/属性选择器/伪类选择器
  5. 权重值`1`：元素选择器/伪元素选择器
  6. 权重值`0`：关系选择器/通配符选择器
### 什么是BFC布局，如何创建BFC布局？
  - BFC布局为**块格式化上下文**（Block Formatting Context，BFC）， 是CSS布局的一个概念，**里面的元素不会影响到外面的元素**。
  - 创建BFC：
    + 元素设置浮动：float有值并不为none
    + 元素设置position绝对定位：**absolute | fixed**
    + overflow值为：**hidden | auto | scroll**
    + display值为：**inline-block | table-cell | table-caption | flex**等
  - BfC作用：
    + 解决**margin重叠**问题：由于BFC是一个独立的区域，内部元素和外部元素互不影响，将两个元素变为BFC，就解决了margin重叠问题
    + 创建自适应两栏布局：可以用来创建自适应两栏布局，左边宽高固定，右边宽度自适应。
    + 解决高度塌陷问题：在子元素设置浮动后，父元素会发生高度的塌陷(即：height: 0)，只需将父元素变成一个BFC。

### px、em、rem的区别
  - px 固定单位，不能随其它元素的变化而变化
  - em 相对单位，相对于**父元素**的font-size
  - rem 相对单位，相对于**根元素html**的font-size
### 盒模型
  - 盒模型由四部分组成：content、padding、border
  - 标准盒模型和IE盒模型的区别在于**设置width和height时，对应的范围不同**
    + 标准盒模型的width、height只包含了contentWidth
    + IE盒模型的width、height包含了contentWidth、border、padding
  - 可通过修改元素的box-sizing属性来改变元素的盒模型
    + box-sizing: content-box; 表示标准盒模型（默认值）
    + box-sizing: border-box; 表示IE盒模型（怪异盒模型)
### 如何解决1px问题
  - 直接写**0.5px**
  - 利用伪元素，先放大再缩小
  - 使用 viewport缩放来解决