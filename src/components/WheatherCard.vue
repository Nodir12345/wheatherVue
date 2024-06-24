<template>
  <div class="weather-card" v-if="weather">
    <h2>{{ weather.name }}</h2>
    <img
      :src="`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`"
      :alt="weather.weather[0].description"
    />
    <p>Temperature: {{ weather.main.temp }} °C</p>
    <p>Humidity: {{ weather.main.humidity }}%</p>
    <p>Conditions: {{ weather.weather[0].description }}</p>
  </div>
</template>

<script setup>
import { defineProps } from "vue";

const props = defineProps({
  weather: Object,
});
</script>

<style scoped>
.weather-card {
  border: 1px solid #ddd;
  padding: 20px;
  border-radius: 5px;
  margin-top: 20px;
  display: inline-block;
}
</style>
