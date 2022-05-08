<template>
  <div class="field">
    <div class="split top">
      <div class="centered"></div>
    </div>

    <div class="split bottom">
      <div class="centered">
        <card />
        <card />
        <card />
      </div>
    </div>
  </div>
</template>

<script>
import Card from "../components/cards/Card.vue";

export default {
  name: "Field",
  components: {
    Card,
  },
  props: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
body {
  margin: 0 !important;
  padding: 0 !important;
}

/* Разделить экран пополам */
.split {
  height: 47%;
  width: 100%;
  position: fixed;
  overflow-x: hidden;
  padding-top: 20px;
}

.top {
  top: 0;
  border: solid;
  border-color: red;
}

.bottom {
  bottom: 0;
  border: solid;
  border-color: green;
}

.centered {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
}
</style>
