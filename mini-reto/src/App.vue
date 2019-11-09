<template>
  <div id="app" class="space">
    <section class="main-container">
      <div class="inner-container">
        <div class="row">
          <h1>Estatus de Ruta</h1>
        </div>
        <div class="row">
          <RouteCard></RouteCard>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import RouteCard from "./components/RouteCard.vue";

export default {
  name: "app",
  components: {
    RouteCard
  }
};
</script>
