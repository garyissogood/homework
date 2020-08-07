export default {
  template: `<nav aria-label="Page navigation example">
  <ul class="pagination">
      
      <li class="page-item" :class="{'disabled': pages.current_page === 1}">
      <a class="page-link" href="#" aria-label="Previous" @click.prevent="updatePage(pages.current_page - 1)">&laquo;</a>
      </li>
      
      <li class="page-item" v-for="(item , index) in pages.total_pages" :key="index" :class="{ active: pages.current_page === item }"><a class="page-link" href="#" @click.prevent="updatePage(item)">{{ item }}</a>
      </li>

      <li class="page-item" :class="{'disabled': pages.current_page === pages.total_pages}">
      <a class="page-link" href="#" aria-label="Next" @click.prevent="updatePage(pages.current_page + 1)">&raquo;</a>
      </li>
  </ul>
</nav>`,
  props: ['pages'],
  methods: {
    updatePage(num) {
      this.$emit('update', num)
    },
  },
};