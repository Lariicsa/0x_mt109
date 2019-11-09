<template>
  <div id="app" class="space">
    <section class="main-container">
      <div class="inner-container">
        <div class="row">
          <h1>Estatus de Ruta</h1>
        </div>
        <div class="row">
          <button class="button" @click="connect" v-if="status === 'disconnected'">Mostrar estatus</button>
          <button class="button" @click="disconnect" v-if="status === 'connected'">Terminar</button>
        </div>
        <div class="row">
          <hr />
        </div>
        <div class="row">
          <div class="table">
            <div class="table__wrapper">
              <RouteCard
                v-bind:key="log.index"
                v-for="log in logs"
                :status="log.status"
                :class="log.status === 'completed' ? 'done' : 'progress'"
              ></RouteCard>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import RouteCard from "./components/RouteCard.vue"

export default {
  name: "app",
  data() {
    return {
      logs: [],
      status: "disconnected"
    }
  },
  components: {
    RouteCard
  },
  methods: {
    connect() {
      this.socket = new WebSocket("ws://localhost:8080")
      this.socket.onopen = () => {
        this.status = "connected"
        this.socket.onmessage = ({ data }) => {
          this.logs.push(JSON.parse(data))
        }
      }
    },
    disconnect() {
      this.socket.close()
      this.status = "disconnected"
      this.logs = []
    }
  }
}
</script>
