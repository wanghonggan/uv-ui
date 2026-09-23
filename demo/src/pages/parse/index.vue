<template>
  <view class="container">
    <view class="title">uv-parse 富文本测试</view>
    <view class="content-box">
      <uv-parse :content="content" :tag-style="tagStyle"></uv-parse>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      content: '<p><a target="_blank" href="https://element-plus.org/">element-plus</a><br/>123213123<img src="http://localhost:6789/devcrm/h5-whg/pbcrm-server/static/file/20260507/83a55ddb047748f1909ae91f7a02c888.jpg" contenteditable="false" style="font-size: 14px; max-width: 100%;"/></p><p>123123123<img src="http://localhost:6789/devcrm/h5-whg/pbcrm-server/static/file/20260507/342e19cf931747e0881fb048631902b4.jpg" contenteditable="false" style="font-size: 14px; max-width: 100%;"/></p><p>123213</p><table border="1" width="100%" cellpadding="4" cellspacing="0"><tbody><tr><th>2323</th><th>123</th></tr><tr><td>23</td><td>213</td></tr></tbody></table><p>123123</p><p>123123</p><table border="1" width="100%" cellpadding="4" cellspacing="0"><tbody><tr><th>123</th><th>23</th><th>23</th><th>23</th><th>23</th></tr><tr><td></td><td></td><td></td><td></td><td></td></tr><tr><td></td><td></td><td></td><td></td><td></td></tr><tr><td></td><td></td><td></td><td></td><td></td></tr></tbody></table><p>123123</p>',
      tagStyle: {
        table: 'border-collapse: collapse; width: 100%; border: 1px solid #ccc;',
        th: 'border: 1px solid #ccc; padding: 8px; background-color: #f5f5f5; text-align: center;',
        td: 'border: 1px solid #ccc; padding: 8px; text-align: center;'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  padding: 20rpx;
  min-height: 100vh;
  background-color: #f5f5f5;
}

.title {
  font-size: 40rpx;
  font-weight: bold;
  text-align: center;
  padding: 30rpx;
  color: #303133;
}

.content-box {
  background: #fff;
  border-radius: 16rpx;
  padding: 30rpx;
}
</style>
