<template>
  <view class="container">
    <view class="title">uv-keyboard 测试</view>
    
    <view class="input-box">
      <view class="input-label">输入结果：</view>
      <view class="input-value">{{ inputValue || '请点击键盘输入' }}</view>
    </view>

    <view class="section">
      <view class="section-title">选择键盘类型</view>
      <view class="btn-group">
        <view class="btn" @tap="openNumberKeyboard">数字键盘</view>
        <view class="btn btn-secondary" @tap="openCardKeyboard">身份证键盘</view>
      </view>
    </view>

    <view class="section">
      <view class="section-title">操作日志</view>
      <scroll-view scroll-y class="log-list">
        <view v-for="(log, index) in logs" :key="index" class="log-item">
          {{ log }}
        </view>
      </scroll-view>
    </view>

    <uv-keyboard
        ref="keyboard"
        v-model="inputValue"
        :mode="mode"
        :dotDisabled="false"
        :minusDisabled="false"
        :random="false"
        :close-on-click-confirm="false"
        :overlay="false"
        @change="onChange"
        @backspace="onBackspace"
    />
  </view>
</template>

<script>
export default {
  data() {
    return {
      mode:'number',
      inputValue: '',
      logs: []
    }
  },
  methods: {
    openNumberKeyboard() {
      this.mode = 'number'
      this.$refs.keyboard.open()
    },
    openCardKeyboard() {
      this.mode = 'card'
      this.$refs.keyboard.open()
    },
    onChange(e) {
      this.inputValue += String(e)
      const type = this.mode === 'card' ? '身份证' : '数字'
      this.addLog(`${type}: ${e}`)
    },
    onBackspace() {
      this.inputValue = this.inputValue.slice(0, -1)
      this.addLog('删除')
    },
    addLog(msg) {
      const time = new Date().toLocaleTimeString()
      this.logs.unshift(`[${time}] ${msg}`)
      if (this.logs.length > 10) this.logs.pop()
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

.input-box {
  background: #fff;
  border-radius: 16rpx;
  padding: 30rpx;
  margin-bottom: 30rpx;
}

.input-label {
  font-size: 28rpx;
  color: #909399;
  margin-bottom: 15rpx;
}

.input-value {
  font-size: 36rpx;
  color: #303133;
  font-weight: bold;
  text-align: center;
  padding: 20rpx;
  background: #f5f5f5;
  border-radius: 8rpx;
}

.section {
  background: #fff;
  border-radius: 16rpx;
  padding: 30rpx;
  margin-bottom: 30rpx;
}

.section-title {
  font-size: 32rpx;
  font-weight: bold;
  color: #303133;
  margin-bottom: 20rpx;
}

.card-result {
  margin-top: 20rpx;
  font-size: 28rpx;
  color: #606266;
  text-align: center;
}

.btn-group {
  display: flex;
  gap: 20rpx;
}

.btn {
  flex: 1;
  height: 80rpx;
  line-height: 80rpx;
  text-align: center;
  background: #2979ff;
  color: #fff;
  border-radius: 8rpx;
  font-size: 28rpx;
}

.btn-secondary {
  background: #606266;
}

.log-list {
  height: 300rpx;
  max-height: 300rpx;
}

.log-item {
  font-size: 24rpx;
  color: #606266;
  padding: 15rpx 0;
  border-bottom: 1px solid #f5f5f5;
}
</style>
