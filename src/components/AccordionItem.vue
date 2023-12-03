<template>
  <div class="accordion-container">
    <div @click="toggleAccordion" class="accordion-header">
      {{ title }}
    </div>
    <div class="accordion-content" :class="{ active: isOpen }">
      <div class="content-inner">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    isOpen: false,
  }),
  name: "AccordionItem",
  props: {
    title: String,
    initialState: {
      type: Boolean,
      default: false,
    },
  },
  created() {
    this.isOpen = this.initialState;
  },
  methods: {
    toggleAccordion() {
      this.isOpen = !this.isOpen;
    },
  },
};
</script>

<style>
.accordion-container {
  border: 1px solid black;
  border-radius: 12px;
  margin-top: 2px;
}

.accordion-header {
  border: 1px solid #000000;
  border-radius: 10px;
  background-color: rgb(181, 132, 236);
  color: white;
  padding: 5px;
  font-weight: bold;
  cursor: pointer;
}

.accordion-content {
  overflow: hidden;
  max-height: 0;
  transition: max-height 0.8s linear;
}

.accordion-content.active {
  max-height: 1000px;
}

.content-inner {
  padding: 10px;
}
</style>
