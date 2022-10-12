### 相对于父元素的 fixed绝对定位
- 参考连接
  [position:fixed 相对父元素定位](https://www.cnblogs.com/mengff/p/9908958.html)
- position:fixed是对于浏览器窗口定位的，要实现相当于父元素定位，可以这样：
  > **不设置fixed元素的top，bottom，left，right，只设置margin来实现。**
  >> 这种方法本质上fixed元素还是相当于窗口定位的，实现效果上是相对于父元素定位。此外，position:fixed元素会受到父元素的影响，而出现不能以窗口进行定位
```css
  .parent{
    position: relative;
  }
  .children{
    position: fixed;
    margin: 20px 10px
  }
```