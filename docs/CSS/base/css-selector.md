---
title: Selector in CSS
date: 2022-06-02
tags:
 - basic
 - selector
categories: 
 - CSS
---
# CSS selector 选择器
- 参考链接
  + [CSS的常用属性速查表](https://juejin.cn/post/6844904033145061389)
## 一、Selectors选择器
- Type **类型（元素）选择器(通过 html元素(标签)名称标记)**
  > p { color: black }
- Class **类名选择器(通过 “.”标记)**
  > p.class{ color： black }
- ID **唯一值选择器(通过 “#”标记)**
  > p#id{ color: black }
- Descendant **后代选择器(通过 “ ”空格标记)**
  > ul li{ color: black }
- Sibling **相邻(兄弟)选择器(通过 “~”标记)**
  > input ~ label
- Attribute **属性选择器(通过 “[属性表述]”标记)**
  > input[type="checkbox"]{ color: black }
- Universal **通配符选择器((只用 “*”标记)**
  > *{ color: black }
- Pseudo-class **伪类选择器((通过 “:”标记)**
  > 1. box::hover{ color: black } 鼠标**悬浮**状态
  > 2. box::focus{ color: black } 元素**聚焦**
  > 3. box::focus-within{ color: black } 元素本身及子元素获得焦点
  > 4. box:nth-child{ color: black } 第 n个子元素
  > 5. box:not{ color: black } 不处于某个状态
  > 6. box:target { color: black } URL的锚点
  > 7. box:checked{ color: black } 单/复选框开关on的状态
  > 8. box:disabled { color: black } 禁用状态
  > 9. box:valid{ color: black } 校验通过状态
  > 10. box:invalid{ color: black } 校验不通过状态
  > 11. box:placeholder-shown{ color: black } 输入框有占位符时的情况（也就是用户还未输入时的情况）
  > 12. box:empty{ color: black } 空标签元素(常用场景：字段缺失、ajax加载数据为空)
- Pseudo-element **伪元素选择器(通过 “::”标记)**，在原先的元素基础上插入额外的元素，并且它不充当HTML的标签
  > + box::before | box::after{ color: black } 标签的**额外2个可绘制的元素**
  > + box::selection{ color: black } 被**用户选中的部分**
  > + box::placeholder{ color: black } 输入框的**占位符文本**