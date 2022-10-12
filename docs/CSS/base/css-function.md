---
title: Function in CSS
date: 2022-06-02
tags:
 - basic
 - function
categories: 
 - CSS
---
## CSS中的函数
- 参考链接
  + [常用的CSS函数](https://juejin.cn/post/6844903838709710856)
  + [CSS函数那些事](https://juejin.cn/post/6909709349183029256)
  + [有趣的CSS数学函数](https://juejin.cn/post/6999416290997698596)
  + [CSS 你能见到的函数标记](https://juejin.cn/post/6900952710376488973)
  + [CSS中的函数和变量](https://juejin.cn/post/6908962052727898125)
  + [css函数共有86个](https://blog.csdn.net/MFWSCQ/article/details/89530967)
- 依据w3cPlus网中可以划分为以下几类
  + 属性函数
    > attr()；
  + 背景图片函数
    > * linear-gradient()
    > * radial-gradient()
    > * conic-gradient()
    > * repeating-linear-gradient()
    > * repeating-radial-gradient()
    > * repeating-conic-gradient()
    > * image-set()
    > * image()
    > * url()
    > * element()
  + 颜色函数
    > * rgb()
    > * rgba()
    > * hsl()
    > * hsla()
    > * hwb()
    > * color-mod()；
  + 图形函数
    > * circle()
    > * ellipse()
    > * inset()
    > * polygon()
    > * path()
  + 滤镜函数
    > * blur()
    > * brightness()
    > * contrast()
    > * drop-shadow()
    > * grayscale()
    > * hue-rotate()
    > * invert()
    > * opacity()
    > * saturate()
    > * sepia()；
  + 转换函数
    > * matrix()
    > * matrix3d()
    > * perspective()
    > * rotate()
    > * rotate3d()
    > * rotateX()
    > * rotateY()
    > * rotateZ()
    > * scale()
    > * scale3d()
    > * scaleX()
    > * scaleY()
    > * scaleZ()
    > * skew()
    > * skewX()
    > * skewY()
    > * translate()
    > * translateX()
    > * translateY()
    > * translateZ()
    > * translate3d()；
  + 数学函数
    > * calc()
    > * min()
    > * max()
    > * mixmax()
    > * repeat()；
  + 缓动函数
    > * cubic-bezier()
    > * steps()；
  + 其他函数
    > * counter()
    > * counters()
    > * toggle()
    > * var()
    > * symbols()

### var()变量引用
  - 定义：可使用Css中通过--*声明的变量，var()函数可以**代替元素中任何属性中的值的任何部分**
  - 用法：--cssVarName 用来声明变量，使用 var(--cssVarName)来使用变量。
    > CSS变量 声明只可用于属性值，不可用以属性名
    > CSS变量 不支持多个同时声明
    > CSS变量 使用的合法性
    > CSS变量 与属性单位结合需要使用 * 乘法
    > CSS变量 声明时可相互调用声明的变量
    ```css
    body{
      --primary: #008c8c;
    }
    .container{
      background: var(--primary)
    }
    ```
  - 了解更多
    [CSS自定义属性级联变量var()](https://www.cnblogs.com/bibibobo/p/6140659.html)
    [CSS变量（CSS variable）](https://www.cnblogs.com/nyw1983/p/11628729.html)
#### css变量作用域
   ```css
    :root {
       --color: blue; 
    }
    div {
       --color: green; 
    }
    #alert {
       --color: red; 
    }
    * {
       color: var(--color); 
    }
  ```
  ```html
    <p>我的蓝色继承于根元素</p>
    <div>我的绿色来自直接设置</div>
    <div id='alert'>
      ID选择器权重更高，因此阿拉是红色！
      <p>我也是红色，占了继承的光</p>
      root 取全局作用域，
      div 取所有的div元素，
      #alert 取所有id为alert的元素使用，
      剩余按照css解析顺序，
    </div>
  ```
#### JS读取CSS变量
  ```js
    let dom = document.querySelector("#alert")
    let cssVarColor = getComputedStyle(dom).getPropertyValue('--color'); 
    console.log(cssVarColor);// red
  ```

### attr()元素属性值
  - 定义：用来选择元素的属性值，通常搭配css content一起使用
  - 用法：attr(html元素的属性名)
    ```html
      <p>
        <a href="http://www.baidu.com" name="百度">十</a>
      </p>
      <p>
        <a href="http://www.google.com" name="Google">九</a>
      </p>
    ```
    ```css
      /* 注 即将a元素的属性值作为 a元素伪元素的文本内容 “http://www.baidu.com / 百度” */
      a:after{
        content:'('attr(href) '/' attr(name) ')'
      }
    ```
### calc()计算
  - 定义：用于动态计算长度值，[运算符前后须有空格否则无效](https://juejin.cn/post/7055169229980434462), 支持 '+'加法, '-'减法, '*'乘法, '/'除法, '()'括号除等运算
  - 语法：calc(expression)
  > expression：数学表达式
  ```css
    width: calc(70% - 60px) 
    height: calc(70% / 2 * 12 + 66px)
  ```
### linear-gradient()线性渐变
  - 定义：创建一个线性渐变的 图像，
  - 语法：linear-gradient(direction, color1 color1Percentage, color2 color2Percentage,...)
    > direction：渐变方向角度， 默认自上而下
        
    > color1, color2,... 
    >> 指定渐变的起止颜色，由颜色值、停止位置（可选，使用百分比指定）组成

    > color1Percentage, color2Percentage
    >> 对应颜色值的百分比 
  ```css
    body{
      background: linear-gradient(red, orange, yellow, green, cyan, blue, purple);
      background: linear-gradient(45deg, red, orange, yellow, green, cyan, blue, purple);
      background: linear-gradient(to right, red, orange, yellow, green, cyan, blue, purple);
    }
  ```
### radial-gradient()径向渐变
  - 定义：创建一个径向渐变图像，渐变由中心点定义，必须设置两个终止色（区别）
  - 语法：radial-gradient([shape size  position], start-color, ..., last-color);
    > shape: 确定圆的类型（选填）
      >> ellipse(默认): 指定椭圆形的径向渐变
      >> circle： 指定圆形的径向渐变

    > size: 指定径向渐变的大小（选填）
      >> farthest-corner(默认)： 指定径向渐变的半径长度为从圆心到离圆心最远的角 
      >> closest-side： 指定径向渐变的半径长度为从圆心到离圆心最近的边
      >> closest-corner： 指定径向渐变的半径长度为从圆心到离圆心最近的角
      >> farthest-side：指定径向渐变的半径长度为从圆心到离圆心最远的边
      
    > position: 定义渐变的位置（选填）
      >> center(默认)：设置中间为径向渐变圆心的纵坐标值
      >> top：设置顶部为径向渐变圆心的纵坐标值
      >> bottom：设置底部为径向渐变圆心的纵坐标值

    > start-color, ..., last-color：定义渐变的起止色

  ```css
    body{
      background: radial-gradient(circle, red, green, blue, yellow);
    }
  ```
### repeating-linear-gradient()重复线性渐变
  - 定义：创建一个重复的线性渐变图像
  - 语法: repeating-linear-gradient(angle | side-or-corner, color1 color1Percentage, color2 color2Percentage, ...);
    > angle: 定义渐变角度（0deg-360deg，默认180deg），默认自上而下

    > side-or-corner: 指定线性渐变起始位置（顺序随意）
    >> 关键字一： 水平位置（left,right）
    >> 关键字而： 垂直位置（top,bottom）
    
    > color1, color2,... 
    >> 指定渐变的起止颜色，由颜色值、停止位置（可选，使用百分比指定）组成

    > color1Percentage, color2Percentage
    >> 对应颜色值的百分比 

  ```css
    body{
      background: repeating-linear-gradient(30deg, red 5%, yellow 10%, green 20%);
    }
  ```