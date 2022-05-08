<template>
  <div class="card">
    <div class="card-border">
      <img class="card-img-top" :src="require(`@/assets/${img_url}`)" />
      <div>
        <h5>{{ name }}</h5>
        <p>
          {{ description }}
        </p>
        <p>Атака {{ attack }} Здоровье {{ health }} Стоймость {{ cost }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Card",
  props: {
    name: {
      default: "None",
      type: String,
    },
    description: {
      default: "Some quick example text to build on the card title",
      type: String,
    },
    health: {
      default: "6",
      type: String,
    },
    attack: {
      default: "8",
      type: String,
    },
    cost: {
      default: "5",
      type: String,
    },
    img_url: {
      default: "cards/snake.png",
      type: String,
    },
  },
};
</script>

<style>
.card {
  display: inline-block;
  max-width: 175px;
  max-height: 65px;
  padding: 5px;
}

.card-border {
  border: solid;
  border-color: black;
}

.card-img-top {
  max-width: 85px;
  max-height: 85px;
}
</style>
