---
title: Unit in CSS
date: 2022-06-02
tags:
 - basic
 - unit
categories: 
 - CSS
---
## Css中的单位
- 参考链接
  + [七个你可能不了解的 CSS 单位](https://juejin.cn/post/6844903446932357127#comment)

### em 和 rem
  - em单位： 基于**自身DOM元素**定义的 font-size 字体大小
    > 若自身Dom元素 没有定义 font-size属性，则自身Dom元素的 em基于(最近)祖辈定义的font-sizez字体大小 
  - rem单位(root em)： 基于 **html(根)元素**定义的 font-size 字体大小
    > html内所有子元素 font-size属性默认值（font-size具有继承性）
  ```css
    html {
        font-size: 14px;
    }
    .box {  
      width: 60rem;  // 14px * 60 or 840px
      font-size: 1.2rem; // 14px * 1.2 or 16.8px
    }
    p{
      width: 10em; // 28px * 10 or 280px
      font-size: 2rem; // 14px * 2 or 28px
    }
    //注 该策略可为了允许你的界面随着内容按比例缩放。这可能不一定对每个案例都有意义
  ```
### vw 和 vh
  - 1vw单位和1vh单位分别基于 viewport的宽度和高度平均划分100份。占具 1 等份.
    > 若可视窗口(浏览器)的宽度为 1920px, 1vw => 19.2px
    > 若可视窗口(浏览器)的高度为 1080px, 1vh => 10.8px
  ```css
    .box{
      width: 100vw; // 注 占满全屏
      font-size: 10vw; // 注 跟随可视窗口宽度的缩放而变化 
    }
    //注 用vw来设置一个字体大小。这个大小将会随着浏览器的宽度按比例缩放。
  ```
### vmin 和 vmax
  - vmin 和 vmax 对比出这次可视窗口的宽度和高度。区分出 vmax最大和 vmin最小值
    > 若可视窗口 宽度为 1920px 高度为 1080px. 则 100vmax => 1920px; 100vmin => 1080px
    > 若可视窗口 宽度为 1080px 高度为 1920px. 则 100vmax => 1920px; 100vmin => 1080px
    ```css
      .box {
         height: 100vmax;
         width: 100vmax;
      }
    ```
  - vw 和 vh 注重 viewport的 width 和 height 对应标识
  - vmax 和 vmin 注重 viewport width 和 height 的值大小
### ex 和 ch
  - ex和ch单位，与em和rem相似点，依赖于**当前字体和字体大小**
  - ex和ch单位，与em和rem不同点，依赖于**font-family**，因为它们被定为基于特殊字体的法案
  - ch单位：给定一个等宽字体的字体，一个N个字符单位宽的盒子
    > 盒子width：40ch;,则可一直容纳一个有40个字符的应用那个**特定字体的字符串**。虽然这个特殊规则的**传统用途与列出盲文有关**
  - ex单位：定义为"当前字体的x-height或者一个em的一半"。给定的字体的x-height是指那个字体的小写x的高度。通常，这是这个字体的中间的标志。
    > em 占两个字符（即：一个汉字），ex占一个字符（即：一个英文字母）
  - 案例： sup元素代表上标，可以用相对定位和一个1ex的底部值在行内被推高。类似地，你可以拉低一个下标元素。浏览器默认支持这些利用上标和下标特性的vertical-align规则
    ```css
      sup {
          position: relative;
          bottom: 1ex;
      }
      sub {
          position: relative;
          bottom: -1ex;
      }
    ```
