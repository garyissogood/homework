<template>
  <div>
    <nav aria-label="Page navigation example">
      <ul class="pagination justify-content-center">
        <li
          class="page-item"
          :class="{'disabled': pages.current_page === 1}"
        >
          <a
            class="page-link"
            href="#"
            aria-label="Previous"
            @click.prevent="updatePage(pages.current_page - 1)"
          >
            <span aria-hidden="true">&laquo;</span>
          </a>
        </li>

        <li
          class="page-item"
          v-for="(item, index) in pages.total_pages"
          :key="index"
          :class="{'active': pages.current_page === item}"
        >
          <a
            class="page-link"
            href="#"
            @click.prevent="updatePage(item)"
          >
            {{ item }}
          </a>
        </li>

        <li
          class="page-item"
          :class="{'disabled': pages.current_page === pages.total_pages}"
        >
          <a
            class="page-link"
            href="#"
            aria-label="Next"
            @click.prevent="updatePage(pages.current_page + 1)"
          >
            <span aria-hidden="true">&raquo;</span>
          </a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'Pagination',
  props: {
    pages: {
      type: Object,
      default() {
        return {
        };
      },
    },
  },
  data() {
    return {
    };
  },
  methods: {
    updatePage(item) {
      this.$emit('update', item);
    },
  },
};
</script>
