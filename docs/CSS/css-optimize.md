## CSS优化
- 参考链接
  [提高幸福感的 9 个 CSS 技巧](https://juejin.cn/post/6844903837661151240)
  [理解Critical CSS](https://www.w3cplus.com/css/understanding-critical-css.html)

### 合理使用变量
  - CSS变量使用规则
    + 变量声明： `--*;` *为变量名称。
    + 变量使用：`var(--*);` *为变量名称
      > CSS 变量字符限制为： [0-9]、[a-zA-Z]、_下划线、-中划线、中文和韩文等。    
      > 变量的声明和使用，都须在css声明块 {} 里面
    ```css
      :root {
          --main_color: #fafafa;
          --font_size_12: 12px;
          --font_size_14: 14px;
          --size: 20px;
      }
      .div1{
          background-color: var(--main_color);
          font-size: var(--font_size_12);
      }
    ```
  - Sass 和 Less 稍微有点区别：
    * sass声明变量"$"：`$color: pink;`
    * less声明变量"@": `@color: pink;`
    
### 建议使用 padding 代替 margin
  - 熟知当属于同一个 BFC 中毗邻(即毗邻：相邻或者嵌套的)的两个或多个相邻的 html元素之间的margin会发生重叠，所以如果 margin 使用的过于频繁的时候，html元素的**垂直距离**可能就会发生重叠。
  - 有时使用 padding 不能满足需求，这时可在“非空内容”这个条件做文章。即在父元素添加一个伪元素。
  > **故在使用 margin 的时一定要注意 collapsing margins 问题**

### position:fixed 降级问题
  - 在遇到吸顶效果，就使用`position:fixed`这个属性时。若是其父元素中有使用`transform`属性，fixed **的效果会降级为 absolute**
  - 解决方案：
  - 已知会降级为 absolute 效果，则就改考虑什么情况下 fixed 和 absolute 的表现效果会是一样的。
    + 即当使用 fixed 的直接**父元素的高度和屏幕的高度相同**时 fixed 和 absolute 的表现效果会是一样的。
  > 如果这个直接父级内的元素存在滚动的情况，那就加上 overflow-y: auto。

### 合理使用 px | em | rem | % 等单位(在移动端)
  - px 绝对单位，在移动端自适应的要求下，使用的频率不是很高。
    + 比较小的图案
      * 比如需要画一个半径为 5px 的圆，如果我们使用 rem 作为单位，我们很快会发现在一些机型上的图案不圆，会呈现椭圆形。这是由于**rem 转 px 会存在精度丢失问题**。
      > 需要使用 px 配合 dpr 来实现：
      ```less
        /* 注 @size 建议取双数*/
        .circle(@size, @backgroundColor) {  
            width: @size;
            height: @size;
            background-color: @backgroundColor;
            [data-dpr="1"] & {
                width: @size * 0.5;
                height: @size * 0.5;
            }
            [data-dpr="3"] & {
                width: @size * 1.5;
                height: @size * 1.5;
            }
        }
      ```
    + 字体大小（基本都是用 rem 作为单位）
      * 一般情况字体的大小我也会使用 rem 作为单位，因为精度丢失我认为在可以接受的范围之内。
  - 相对单位 rem
    + rem 是 CSS3 新增的一个相对单位（root em），即**相对 HTML 根元素的字体大小**的值。
    + rem 应该是自适应使用的最广泛的单位了。
  - 相对单位 em
    + em 也是一个相对单位，却是**相对于当前对象内文本的字体大小**。
    + line-height
      * 通常在 line-height 使用 em。因为在调整font-size字体大小时，line-height已经设置成了相对行高。
    + text-indent首行缩进
      * 通常在存在text-indent首行缩进的需求，也会使用em单位。`text-indent: 2em`首行缩进两个字符
  - 视口单位 vw | vh
    + `1vw => 视口宽度的 1%; 1vh => 视口高度的 1%`
    + 以 rem 单位设计的弹性布局时，是需要在头部加载一段脚本来进行监听分辨率的变化来动态改变根元素字体大小，使得 CSS 与 JS 耦合了在一起。
    + 采用vw | vh 弹性布局
      ```scss
        $vm_fontsize: 75;
        @function rem($px) {
            @return ($px / $vm_fontsize ) * 1rem;
        }
        $vm_design: 750;
        html {
            font-size: ($vm_fontsize / ($vm_design / 2)) * 100vw; 
            @media screen and (max-width: 320px) {
                font-size: 64px;
            }
            @media screen and (min-width: 540px) {
                font-size: 108px;
            }
        }
        //注 body 也增加最大最小宽度限制，避免默认100%宽度的 block 元素跟随 body 而过大过小
        body {
            max-width: 540px;
            min-width: 320px;
        }
      ``` 

### 1px 方案
  - 使用伪类 + transform
    + 此方案在一些版本较低的移动端机型有时会出现粗细不均、细线消失断裂的兼容性问题
    ```css
      .border_bottom { 
          position: relative; 
          border: none !important; 
          overflow: hidden; 
      }
      .border_bottom:after { 
          content: "";
          display: block;
          position: absolute; 
          left: 0; 
          bottom: 0; 
          width: 100%; 
          height: 1px; 
          background-color: #d4d6d7; 
          -webkit-transform-origin: 0 0;  
          transform-origin: 0 0; 
          -webkit-transform: scaleY(0.5);
          transform: scaleY(0.5);
      }        
    ```
  - 使用 box-shadow 模拟
    + 此方案基本可以满足所有场景，不过缺点就是颜色会变浅
    ```css
      .border_bottom {
        box-shadow: inset 0px -1px 1px -1px #d4d6d7;
      }        
    ```
  - 这种方案对 dpr 做了不同的处理，可谓更加精细。
    ```scss
      .min-device-pixel-ratio(@scale2, @scale3) {
        @media screen and (min-device-pixel-ratio: 2), (-webkit-min-device-pixel-ratio: 2) {
          transform: @scale2;
        }
        @media screen and (min-device-pixel-ratio: 3), (-webkit-min-device-pixel-ratio: 3) {
          transform: @scale3;
        }
      }

      .border-1px(@color: #DDD, @radius: 2PX, @style: solid) {
        &::before {
          content: "";
          pointer-events: none;
          display: block;
          position: absolute;
          left: 0;
          top: 0;
          transform-origin: 0 0;
          border: 1PX @style @color;
          border-radius: @radius;
          box-sizing: border-box;
          width: 100%;
          height: 100%;
          @media screen and (min-device-pixel-ratio: 2), (-webkit-min-device-pixel-ratio: 2) {
            width: 200%;
            height: 200%;
            border-radius: @radius * 2;
            transform: scale(.5);
          }
          @media screen and (min-device-pixel-ratio: 3), (-webkit-min-device-pixel-ratio: 3) {
            width: 300%;
            height: 300%;
            border-radius: @radius * 3;
            transform: scale(.33);
          }
        }
      }

      .border-top-1px(@color: #DDD, @style: solid) {
        &::before {
          content: "";
          position: absolute;
          left: 0;
          top: 0;
          width: 100%;
          border-top: 1Px @style @color;
          transform-origin: 0 0;
          .min-device-pixel-ratio(scaleY(.5), scaleY(.33));
        }
      }
    ```

### 从html元素继承 box-sizing
  - 通常在设置元素的 border 和 padding 并不希望改变元素的 width,height 值，这时可以为该元素设置 `box-sizing:border-box;` 
  ```css
    html {
      /* 注 不会覆盖其他元素的 box-sizing 值，又无需为每一个元素重复设置 box-sizing: border-box; */
      box-sizing: border-box;
    }
    *,
    *:before,
    *:after {
      box-sizing: inherit;
    }
  ```

### 文字超出省略、文字两端对齐
  - 文字超出省略
    ```scss
      .line-camp( @clamp:2 ) {
        text-overflow: -o-ellipsis-lastline;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: @clamp;
        -webkit-box-orient: vertical; 
      }
    ```
    + `-webkit-box-orient: vertical` 在使用 webpack 打包的时候这段代码会被删除掉，原因是 *optimize-css-assets-webpack-plugin* 这个插件的问题。解决方案如下代码：
      ```scss
        .line-camp( @clamp:2 ) {
          text-overflow: -o-ellipsis-lastline;
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: @clamp;
          /*! autoprefixer: off */
          -webkit-box-orient: vertical;
          /* autoprefixer: on */
        }
      ```
  - 文本两端对齐
    ```html
      <div>姓名</div>
      <div>手机号码</div>
      <div>账号</div>
      <div>密码</div>
    ```
    ```css
      div {
          margin: 10px 0; 
          width: 100px;
          height: 1em;
          border: 1px solid red;
          line-height: 1em;
          /*注 chrome支持此属性值 */
          text-align: justify; 
          text-align-last:justify
      }
      div:after{
          content: '';
          display: inline-block;
          width: 100%;
      }
    ```

### SCSS的 mixin混入归类重复的样式
  ```scss
    @mixin mixin-name {
      color: red;
      font-size: 2em;
      font-weight: bold;
      border: 1px solid white;
    }
    .container {
      @include mixin-name;
      background-color: green;
    }
  ```
  ```less
    .mixin-name {
      color: red;
      font-size: 2em;
      font-weight: bold;
      border: 1px solid white;
    }
    .container {
      .mixin-name;
      background-color: green;
    }
  ```
  ```css
    .container {
      color: red;
      font-size: 2em;
      font-weight: bold;
      border: 1px solid white;
      background-color: green;
    }
  ```

### Critical Css内联首屏关键
  - 性能优化中有一个重要的指标——首次有效绘制（FMP）这一指标直接影响用户看到页面前所需等待的时间。CSS资源的加载对浏览器渲染页面的影响很大，这是因为默认情况下浏览器只有先完成`<head` 部分 CSS样式的加载、解析之后才会渲染页面。
  - 优化就是**找出渲染首屏的最小 CSS 集合**（Critical CSS），并把它们写到`<head>`部分，从而让浏览器接收到 HTML文件后就尽快渲染出页面。对于剩余部分的 CSS样式则可以使用异步的方式再进行加载。
  ```html
    <html>
      <head>
        <style> /* inlined critical CSS */ </style> 
        <script> loadCSS('non-critical.css'); </script> 
      </head> 
      <body> ...body goes here </body> 
    </html>
  ```