<template>
  <div id="card">
    <div class="card-wrapper">
      <h3>{{ title }}</h3>
    </div>
  </div>
</template>

<script>
export default {
  name: "card",
  props: {
    title: String
  }
};
</script>

<style>
.card-wrapper {
  padding: 10px;
  margin: 20px 0;
  width: 300px;
  border-radius: 10px;
  background-color: #34495e;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
}
</style>
