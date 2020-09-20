<template>
<div style="position: fixed; top: 20px; right: 20px; min-width: 300px; z-index: 11000;">
    <div
      class="toast fade show"
      v-for="(item, i) in messages"
      :key="i"
      :id="`toast-${i}`"
      role="alert"
      aria-live="assertive"
      aria-atomic="true"
      data-autohide="false"
    >
        <div class="toast-header">
          <div
            class="inline-block rounded mr-2"
            style="width: 20px; height: 20px"
            :class="`bg-${ item.status }`"
          />
            <strong class="mr-auto">六角JS實戰班</strong>
            <small>Now</small>
            <button
                type="button"
                class="ml-2 mb-1 close"
                data-dismiss="toast"
                aria-label="Close"
                @click="closeToast(`toast-${ i }`)"
            >
            <span aria-hidden="true">&times;</span>
            </button>
        </div>
        <div class="toast-body">
            {{ item.message }}
        </div>
    </div>
</div>
</template>

<script>
export default {
  name: 'Toasts',
  data() {
    return {
      messages: [],
    };
  },
  created() {
    const vm = this;
    vm.$bus.$on('message:push', (message, status = 'warning') => {
      vm.updateMessage(message, status);
    });
  },
  methods: {
    // 編輯Toasts狀態
    updateMessage(message, status) {
      const timestamp = Math.floor(new Date() / 1000);
      this.messages.push({
        message,
        status,
        timestamp,
      });
      this.removeMessageWithTimeing(timestamp);
    },
    removeMessage(num) {
      this.messages.splice(num, 1);
    },
    // 自動移除Toasts
    removeMessageWithTimeing(timestamp) {
      const vm = this;
      setTimeout(() => {
        vm.messages.forEach((item, i) => {
          if (item.timestamp === timestamp) {
            vm.messages.splice(i, 1);
          }
        });
      }, 5000);
    },
    // 手動移除Toasts-隱藏
    closeToast(element) {
      $(`#${element}`).toast('hide');
    },
  },
};
</script>
