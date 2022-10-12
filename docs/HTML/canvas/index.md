## canvas基础篇
- 参考链接
  [Canvas基础](http://t.zoukankan.com/wuhui070470-p-5762942.html)
  [一个少女心满满的例子带你入门 Canvas](https://juejin.cn/post/6844903490020442125)
  [canvas基础知识入门](https://www.jianshu.com/p/c27e5c7fd51a)
  [Canvas常用API合集](https://juejin.cn/post/6988046310146310180#comment)
  [Canvas API 详解](https://juejin.cn/post/6844903587462512647#comment)
  [学习 canvas （一） 基础信息](https://juejin.cn/post/6964276295131725860)
  [学习HTML5 Canvas这一篇文章就够了](https://blog.csdn.net/u012468376/article/details/73350998?spm=1001.2101.3001.6650.7&utm_medium=distribute.pc_relevant.none-task-blog-2%7Edefault%7EBlogCommendFromBaidu%7ERate-7-73350998-blog-122777209.pc_relevant_paycolumn_v3&depth_1-utm_source=distribute.pc_relevant.none-task-blog-2%7Edefault%7EBlogCommendFromBaidu%7ERate-7-73350998-blog-122777209.pc_relevant_paycolumn_v3&utm_relevant_index=11)
  [canvas基础](https://blog.csdn.net/qq_48113035/article/details/122777209)
 
### Canvas基本概念
  - canvas 是 HTML5 提供的一个用于展示绘图效果的(行内块级元素)标签, 语义为 "画布"。
  - `<canvas></canvas>`标签在 浏览器默认是一张宽高为 300px * 150px 的图片。
    > 鼠标右键可见“图片另存为”菜单项
  - `<canvas></canvas>`只有两个可选的属性 width、height属性, 不要使用 CSS的方式设置宽高, 应该使用标签的宽高属性. `<canvas></canvas>`标签宽高属性优先级：css设置宽高 > JS设置宽高 > 标签设置宽高
    > `<canvas width="600" height="600"></canvas>`
    >> 标签属性设置宽高值，不用携带 (px)相应单位; 而css设置宽高需要携带 (px)相应单位, 否则无效
  - canvas本身不能绘图. 需要使用 JavaScript(即：canvas对象提供了各种绘图用的 api)来完成绘图。
    > 简解：`<canvas></canvas>`标签是一块画布，而 javaScript(提供的 canvas对象)是画笔
  - `<canvas></canvas>`中嵌入文本一般不会显示, 浏览器不支持 canvas 标签, 会将其解释为 div标签
    > 该特性常用提示用户浏览器是否支持 canvas的能力`<canvas>你的(IE)浏览器不支持canvas, 请升级你的浏览器</canvas>`
    >> 目前主流浏览器均支持 `<canvas></canvas>`元素标签。
  - 应用领域
    + 游戏
    + 可视化数据(重点)
    + banner 广告
    + 多媒体
    + 未来可期
      * 模拟仿真; 远程操作; 图形编辑等

### canvas 常见绘图步骤
  1. 获得 `canvas` 对象.
  2. 调用 `getContext` 方法, 提供字符串参数 '2d'。创建2d的上下文绘制环境
    > 该方法返回 `CanvasRenderingContext2D` 类型的对象(简写：ctx). 该对象提供基本的绘图命令.
  3. 使用 `CanvasRenderingContext2D` 对象提供的方法进行绘图.
    - 基本绘图命令(线性思维，类似过程编程)
      > 设置开始绘图的位置: context.moveTo( x, y ).
      > 设置直线到的位置: context.lineTo( x, y ).
      > 闭合路径: context.closePath().
      > 描边绘制: context.stroke().
      > 填充绘制: context.fill().
    - 绘图指令步骤: 点 > 线 > 面
      1. 定义由点构成的 线条的粗细和样色等属性; 图形的填充色等属性
      2. 定点 
        + ctx.moveTo()
      3. 连线
        + ctx.stroke()
      4. 填充
        + ctx.fill()

####  getContext 方法
  - 该方法用于绘制上下文工具
  - 语法: `canvasDom.getContext( type )`
    > type: "2d" 绘制平面图形, 返回 CanvasRenderingContext2D 类型的对象
    > type: "webgl" 绘制立体图形, 返回 WebGLRenderingContext 类型的对象
#### canvas对象 常用的属性和方法
  | 属性或函数 | 案例使用 | 功能|
  |:--:|:--:|:--:|
  | moveTo() | `ctx.moveTo(x, y)`| 用于设置线条路径起点(落笔点)。坐标为(x, y);原点(0, 0)在canvas元素标签的左上角 |
  | lineTo() | `ctx.lineTo(x, y)`| 用于设置需要绘制线条路径的末点, 坐标为(x, y)。通过stroke描边后呈现线条 |
  | lineWidth	| `ctx.lineWidth = 5` | 用于设置线条的(粗细)宽度 |
  | strokeStyle	| `ctx.strokeStyle= '#008c8c'` | 用于设置线条的颜色，常用十六进制颜色值	|
  | fillStyle	| `ctx.fillStyle = 'rgb(11,101,125)'` | 用于设置填充颜色,采用RGB着色，搭配fill()呈现|
  | beginPath()	| `ctx.beginPath()`| 开始一条新的路径, 避免与上次路径有连接(绘制第2个多边形)，常搭配 closePath()使用 |
  | closePath()	| `ctx.closePath()` | 最后一个描点与最开始的描点自动连接起来，自动闭合路径(手动闭合坐标须顾虑路径线宽值) |
  | fill() | `ctx.fill()` | 用于描绘的点的路径来填充图形. 默认黑色(**填充区域必须为闭合的多边形**)|
  | stroke() | `ctx.stroke()` | 用于将描述的所有点按照指定顺序连接起来 |

#### canvas路径概念
  - 路径就是一次绘图
  - 非零环绕原则
   > 在 canvas对象中使用各种方法描点实际上描述的是一个称为路径( path )的东西.
   > 描述的东西都是路径, 只有最后执行填充或描边方法时才会显示出效果.
   > 每一个路径都是一个状态.
#### 线型相关属性
  - ctx.lineWidth 设置线宽.
    > ctx.lineWidth = number (默认最小值为 1)
  - ctx.lineCap 设置路径始末两端类型.
    > ctx.lineCap = ["butt", "round", "square"]
    >> butt: 表示两端使用 [默认值].
    >> round: 表示两端添加 圆角 帽子.
    >> square: 表示两端添加 方角 帽子.
    >> 提示：`ctx.closePath()`闭合路径看不到效果
  - ctx.lineJoin 设置路径拐角类型.
    > ctx.lineJoin = ["miter", "round", "bevel"]
    >> miter: 表示使用 直角[默认值].
    >> round: 表示使用 圆角
    >> bevel: 表示使用 平切
  - ctx.getLineDash() / ctx.setLineDash() 获得/设置线段样式数组.
    > 绘制虚线时 getLineDash() 与 setLineDash() 使用数组描述实线与虚线的长度
    >> `ctx.setLineDash([10,30]);`
    >> `ctx.getLineDash(); // [10,30]`
  - ctx.lineDashOffset 绘制线段偏移量
    > lineDashOffset 用于设置开始绘制虚线的偏移量. 正负值表示左右偏移
    >> `ctx.lineDashOffset = -20`
  - ctx.strokeStyle = value / ctx.fillStyle = value
    > value颜色值与css样式相同，rgba(), 十六进制颜色值, [渐变对象](https://www.h5w3.com/155583.html)
      ```js
        //注 创建渐变对象  渐变开始点和渐变结束点
        let g = ctx.createLinearGradient(x1,y1,x2,y2);
        g.addColorStop(0, '#000'); //注 添加颜色点 
        g.addColorStop(1, '#fff'); //注 添加颜色点 
        ctx.strokeStyle = g;     //注 使用渐变对象
      ```
### canvas绘制图形
#### 文字
  - ctx.fillText(text, x, y, [maxWidth])
  - ctx.strokeText(text, x, y [maxWidth])
    > text: 填充图形的文本内容
    > x: 文本内容起点的 X坐标
    > y: 文本内容起点的 y坐标
    > maxWidth[可选参数]: 绘制的最大宽度。若文本内容宽度超出该最大宽度值。这文本内容会受到挤压变形
    ```js
      let grad = c.createLinearGradient(0, 0, 300, 0);
      grad.addColorStop(0, "white");
      grad.addColorStop(0.5, "red");
      grad.addColorStop(1, "black");
      
      ctx.fillStyle = grad;// 注 文字颜色
      ctx.font = "48px Arial";// 注 文字字号 字体
      ctx.direction = "inherit";// 注 文本方向 [inherit(默认值) | ltr | rtl]
      ctx.textAlign = "start";// 注 文本对齐 [start(默认值) | end | left | right | center]
      ctx.textBaseline = "alphabetic";// 注 基线对齐 [alphabetic(默认值) | top | hanging | middle | ideographic | bottom]
      ctx.fillText("文本内容", 20, 150);
    ```
#### 矩形
  - 实心矩形 ctx.fillRect(x, y, width, height)
  - 空心矩形 ctx.strokeRect(x, y, width, height)
  - 清除矩形(区域会变透明) ctx.clearRect(x, y, widh, height)
    > x：起始点的 x 坐标
    > y：起始点的 y 坐标
    > width： 矩形的宽
    > height： 矩形的高
#### 圆弧
  ![弧度值坐标轴](https://upload-images.jianshu.io/upload_images/19781462-d21d2e3b2be78ce1.png?imageMogr2/auto-orient/strip|imageView2/2/w/422/format/webp)
  - ctx.arc(rx, ry, r, startingAngle, endingAngle, anticlockwise)
    > rx	圆心的x坐标
    > ry	圆心的y坐标
    > r	圆的半径
    > startingAngle	从哪一个弧度值开始
    > endingAngle	从哪一个弧度值结束
    > anticlockwise	绘制弧形的方向，默认为 false 顺时针方向绘制
#### 贝塞尔曲线