## CSS 属性速查表
- 参考链接
  [CSS的常用属性速查表](https://juejin.cn/post/6844904033145061389)
  [在线Api](https://devdocs.io/css/)
- 常用的主要为：选择-定位-布局-盒模型-字体-背景-动画-其他

### 一、Selectors选择器
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
  + > box::hover{ color: black } 鼠标悬浮状态
  + > box::focus{ color: black } 元素本身获得焦点
  + > box::focus-within{ color: black } 元素本身及子元素获得焦点
  + > box:nth-child{ color: black } 第n个子元素
  + > box:not{ color: black } 不处于某个状态
  + > box:target { color: black } URL的锚点
  + > box:checked{ color: black } 单/复选框开关on的状态
  + > box:disabled { color: black } 禁用状态
  + > box:valid{ color: black } 校验通过状态
  + > box:invalid{ color: black } 校验不通过状态
  + > box:placeholder-shown{ color: black } 输入框有占位符时的情况（也就是用户还未输入时的情况）
  + > box:empty{ color: black } 空标签元素(常用场景：字段缺失、ajax加载数据为空)
- Pseudo-element **伪元素选择器(通过 “::”标记)**，在原先的元素基础上插入额外的元素，并且它不充当HTML的标签
  + > box::before | box::after{ color: black } 标签的额外2个可绘制的元素
  + > box::selection{ color: black } 被用户选中的部分
  + > box::placeholder{ color: black } 输入框的占位符文本

### 二、Positioning定位属性
  - position
    + > relative：相对定位，元素占据文档位置，可以有偏移
    + > absolute：绝对定位，元素不占位置，相对于父元素定位
    + > fixed：固定在视窗某一位置
    + > sticky：“粘”在视窗某一位置
  - top | left | bottom | right
    > 上下左右的偏移距离
  - z-index
    > 层叠关系 

### 三、Display布局
  - display
    + > none: 不显示元素
    + > block：块级元素
    + > inline：内联元素
    + > flex：弹性盒子布局
    + > grid：网格布局
    + > contents：充当遮罩的元素（比如给img套上a并能使其不影响布局）

### 四、 Box Model盒模型
  - width | height 宽高
  - padding | margin 内外边距
    + 语法糖
      * > padding/margin: `top` `leftAndRight` `bottom`
      * > padding/margin: `top` `right` `bottom` `left`
  - border 边框
    + 语法糖
      * > border: `border-width` `border-style` `border-color`
    + border-width 边框宽度
    + border-style 边框样式
    + border-color 边框颜色
  - border-radius 边框圆角
  - box-shadow 边框阴影
    + 语法糖
      * > box-shadow：`offset-x` `offset-y` `blur-radius` `spread-radius` `color` `inset`
    + offset-x x轴方向阴影偏移量(正值向右，负值向左)
    + offset-y y轴方向阴影偏移量(正值向下，负值向上)
    + blur-radius 阴影虚化(模糊)
    + spread-radius 阴影尺寸
    + color`阴影颜色
    + inset 内部阴影，
      * > outset 外部阴影
      * > inset 内部阴影
  - box-sizing 盒模型类型
    + > content-box：标准盒模型(默认值; width/height = content + padding + border)
    + > border-box：IE盒模型（width/height = content）
  - overflow
    + > visible：超出部分可见
    + > hidden：超出部分不可见
    + > scroll：超出部分以滚动条形式显示

### 五、font字体
  - 语法糖
    + > font: [`font-style`] [`font-variant`] [`font-weight`] `font-size`/`line-height` `font-family`
  - font-style 字体样式
    + > normal: 正常
    + > italic: 斜体
    + > oblique: 倾斜
  - font-variant 字体变化
    + CSS 2.1 中定义的值，即normal和small-caps
    + > normal: 正常
    + > small-caps: 小体大写字母
  - font-weight 字体粗细
    + > 预选值：[normal正常 | bold 加粗 | lighter细体]
    + > 数值：100 到 900 之间整百值
  - font-size 字体大小
  - line-height 字体行高
  - font-family 字体种类
    + > “Arial”
    + > “Times New Roman”
    + > “宋体”
    + > “黑体"
#### text 
  - text-align 文本对齐
    + > left: 左对齐
    + > center: 居中对其
    + > right: 右对齐
  - text-overflow 文本超出部分截断
  - text-shadow 文本阴影
  - text-transform 文本大小写
  - text-decoration 文本装饰样式
    + > none: 无
    + > overline: 上划线
    + > underline: 下划线
    + > line-through: 中划线，删除线
  - text-indent 文本缩进
  - letter-spacing 文本字符的间距
  - white-space 空格处理
    + > nowrap：使文本永不换行
    + > pre：保留空格和换行符，但无法自动换行
    + > pre-wrap：保留空格和换行符，且可以自动换行
  - -webkit-text-stroke 文本描边
#### color
  - color 文本颜色
  - currentColor 当前元素color的值
  - opacity 颜色透明度
  - transparent 透明色
#### Writing Modes
  - writing-mode  定义文本水平或垂直排布以及在块级元素中**文本的行进方向**。(全球语言普遍ltr从左到右)。
    + > horizontal-tb：从左到右水平流动，是默认值
    + > vertical-lr：从上到下垂直流动，下一垂直行位于上一行右侧
    + > vertical-rl：从上到下垂直流动，下一垂直行位于上一行左侧

### 六、background背景
  - 语法糖
    + > background: [`background-color`] [`background-image`] [`background-repeat`] [`background-attachment`] [`background-position`] / [ `background-size`] [`background-origin`] [`background-clip`] [`background-attachment`];
    ```css
      .example {
          background: aquamarine 
                      url(img.png) 
                      no-repeat 
                      scroll 
                      center center / 50% 
                      content-box content-box;
        }
    ```
  - CSS2.1
    + background-color：背景颜色。
      * > linear-gradient() 线性渐变
      * > radial-gradient() 径向渐变
      * > conic-gradient() 圆锥渐变
    + background-image：背景图像。
    + background-repeat: 如何重复背景图像。
    + background-attachment: 背景图像是否固定或者随着页面的其余部分滚动。
    + background-position: 背景图像的位置。
  - CSS3
    + background-size: 背景图片的尺寸。
    + background-origin: 背景图片的定位区域。
    + background-clipL 背景的绘制区域(背景裁剪)
    + background-attachment:  背景固定
      * > scroll：背景相对于**元素本身**固定
      * > fixed：背景相对于**视口**固定
      * > local：背景相对于**元素的内容**固定
  - backdrop-filter 作用于元素背景的滤镜
#### image
  - object-fit 指定替换元素(如img)的内容应该如何适应到其使用的高度和宽度确定的框
    + > fill: 使图片**拉伸**填满整个容器, 不保证保持原有的比例(默认)
    + > contain: 保持纵横比例缩放，**保证长边**完全显示
    + > cover: 保持纵横比例缩放，**保证短边**完全显示
    + > none: 保持原有尺寸比例。**保证图片原始尺寸大小**。多出的部分隐藏
    + > scale-down: 当实际图片尺寸大于容器尺寸时，contain属性的结果；当实际图片尺寸小于容器尺寸时，表现为none属性的结果
#### filter
  - filter 作用于元素本身的滤镜, 常用滤镜
    + > blur()：高斯模糊
    + > contrast()：对比度
    + > drop-shadow()：投影，常用于给不规则形状进行
    + > greyscale()：灰度
    + > hue-rotate()：色调变换
#### Blending
  - mix-blend-mode 混合模式
    + > multiply：正片叠底
    + > screen：滤色
    + > difference：插值

### 七、Transforms变形
  - transform 变形
    + > translate：平移
    + > scale：缩放
    + > rotate：旋转
    + > skew：斜切
  - transform-origin 变换中心
  - transform-style
    + > flat：默认
    + > preserve-3d：3d场景
  - perspective 透视距离
  - backface-visibility 物体后方是否可视
    + > visible: 背面朝向用户时可见。
    + > hidden: 背面朝向用户时不可见

### 八、Animation动画
  - animation 语法糖
    + > animation: `name` `duration` `timing-function` `delay` `iteration-count` `direction` `fill-mode`;
  - animation-name 动画名称
  - animation-duration 动画时间
  - animation-timing-function 动画缓动函数
    + 制定了 @keyframes中各个节点之间的时间变化曲线
    + > 内置函数：ease、linear、ease-in、ease-out、ease-in-out、steps(n, start/end)
      >> * steps指定了animation-timing-function为一个阶跃函数。
      >> * n是一个正整数，表示阶跃次数，
      >> * start/end，表示阶跃点，start表示一开始就先进行阶跃，end(默认值)表示每阶段完成后再进行阶跃，
  - animation-delay 动画延迟
  - animation-iteration-count 动画播放次数
  - animation-fill-mode 动画填充模式
  - animation-play-state 动画播放状态
  - @keyframes 动画关键帧
  - transition 语法糖
    + > transition: `transition-property` `transition-duration` `transition-timing-function` `transition-delay`;
  - transition-property 过渡属性名
  - transition-duration 过渡时间
  - transition-timing-function 过渡缓动函数
    + > 内置函数：ease、linear、ease-in、ease-out、ease-in-out、steps()
    + > 自定义缓动函数：cubic-bezier()
  - transition-delay 过渡延迟
 
#### Motion Path
  - offset-path 路径的定义
  - offset-distance 对象在路径上的位置

### 九、Others其他
  - attr() 获取自定义属性的值作为content生成的内容
  - var() CSS自定义变量
  - calc() 计算值
  - @media 媒体查询，用于适配不同设备
  - -webkit-box-reflect 投影
  - percentage 百分比相对的对象有两种：
    + > 相对父元素：`width、height、top、left、margin、padding`
    + > 相对自身：`translateX、translateY`
#### SVG
  - clip-path 裁剪路径，用来裁剪出各种形状
  - mask 蒙版，用于创建镂空效果
  - letter-spacing 字母间距
  - pointer-events 鼠标事件（通常都设为`none`，表示消除对象的鼠标事件）
#### List
  - list-style-type 列表的marker样式（通常都设为`none`，表示消除列表样式）
  - counter-reset 重置某个计数器为某一值
  - counter-increment 给某个计数器增加特定的值
#### UI
  - appearance 元素的默认样式（通常都设为`none`，表示消除默认外观）
  - cursor 光标类型，最常用的是`pointer`，也就是一只手
  - outline 轮廓
  - user-select 用户是否能选择文本（通常都设为`none`，表示用户无法选中此文本）
#### Scroll
  - scroll-behavior 滚动行为
    + > auto：默认滚动行为
    + > smooth：丝滑滚动行为
  - scroll-snap-type 定义在滚动容器中的一个临时点（snap point）如何被严格的执行
  - scroll-snap-align 控制将要聚焦的当前滚动子元素在滚动方向上相对于父容器的对齐方式
  - -webkit-overflow-scrolling 设置为`touch`可以恢复移动端的弹性滚动
  - overscroll-behavior 设置为`contain`可以禁止连锁滚动效果

