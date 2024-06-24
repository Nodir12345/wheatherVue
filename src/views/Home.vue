<template>
  <div class="home">
    <div>
      <h2>Search Weather by City</h2>
    <input
      type="text"
      v-model="city"
      placeholder="Enter city name"
      @keyup.enter="Weather"
    />
    <button @click="Weather">Search</button>
    </div>
   
   
    <WeatherCard v-if="weatherData" :weather="weatherData" />
    <p v-if="errorMessage">{{ errorMessage }}</p>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import axios from 'axios';
import WeatherCard from '../components/WheatherCard.vue';

const city = ref('');
const weatherData = ref(null);
const errorMessage = ref('');
const apiKey = 'a72e119f71ca12f8b712687e9f94b21c';

const Weather = async () => {
  errorMessage.value = ''; // ishlasa error yuqalib ketadi
  try {
    const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather`, {
      params: {
        q: city.value,
        units: 'metric',
        appid: apiKey
      }
    });
    weatherData.value = response.data;
    city.value = ''; // inputni tozalaydi
  } catch (error) {
    errorMessage.value = 'Error fetching weather data';
    console.error('Error: ', error);
  }
};
</script>


<style scoped>
.home {
  text-align: center;
  margin-top: 20px;
}

input {
  padding: 8px;
  margin: 5px;
  width: 200px;
  border: 1px solid red;
  border-radius: 2px;
}

button {
  padding: 8px 12px;
  margin-left: 5px;
  background-color: rgb(58, 93, 96);
  border-radius: 5px;
}
</style>
