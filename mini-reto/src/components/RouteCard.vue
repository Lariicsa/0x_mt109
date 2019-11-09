<template>
  <div :class="variant" class="table__row">
    <div class="table__cell">
      <span>Ruta</span>
      <p>RG010</p>
    </div>
    <div class="table__cell">
      <span>Conductor</span>
      <p>José Luis Cepeda</p>
    </div>
    <div class="table__cell">
      <span>Creada</span>
      <p>1 de Enero del 2019</p>
    </div>

    <div class="table__cell">
      <span>Inició</span>
      <p>13:00</p>
    </div>
    <div class="table__cell">
      <span>Terminó</span>
      <p>-</p>
    </div>
    <div class="table__cell">
      <span>Entregas</span>
      <p>3</p>
    </div>
    <div class="table__cell">
      <div class="tag">{{status}}</div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["status", "variant"]
};
</script>