<template>
  <div>
    <h1><router-link :to="{name:'HotelShow', params: {uid: hotel.uid}}">{{ hotel.title }}</router-link></h1>
    <form @submit.prevent="onSubmit">
      <label> <span>ФИО</span>
        <input type="text" required v-model="reservation.fullname">
      </label>
      <label> <span>Телефон</span>
        <input type="text" required v-model="reservation.phone">
      </label>
      <label> <span>Электронная почта</span>
        <input type="email" v-model="reservation.email">
      </label>
      <label> <span>Дата рождения</span>
        <input type="date" required v-model="reservation.birthdate">
      </label>
      <label> <span>Адрес</span>
        <input type="text" v-model="reservation.address">
      </label>

      <button type="submit" class="btn">Забронировать</button>
    </form>
  </div>
</template>

<script lang="ts">
import {Component, Prop, Vue} from 'vue-property-decorator';
import {IHotel, IHotelReserveRequestParams} from "@/services/hotel/models";

@Component
export default class HotelReserve extends Vue {
  @Prop() private hotel!: IHotel;

  reservation: IHotelReserveRequestParams = {
    fullname: 'Константинопольский Константин Константинович',
    address: 'г. Москва, Кремль 1',
    phone: '+77777777777',
    email: 'mail@example.com',
    birthdate: '1912-06-23',
  };

  onSubmit(): void {
    this.$emit('onReservationSubmit', this.reservation);
  };
}
</script>

<style scoped>
h1 a {
  color: #333;
  text-decoration: none;
  display: inline-block;
  border-bottom: 1px solid #ccc;
  transition: all .3s ease-in-out;
}
h1 a:hover {
  color: #000;
  border-color: #000;
}
label {
  display: block;
  padding: 0 0 .5rem;
}

label span {
  display: block;
  font-weight: bold;
}

input {
  border-radius: 3px;
  padding: .4rem .5rem;
  border: 1px solid #666;
  outline: none;
  width: 350px;
  transition: all .2s ease-in-out;
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji;
  font-size: 14px;
}

input:focus {
  box-shadow: 0 0 3px #48ceff;
  border-color: #48ceff;
}

button {
  margin-top: 1rem;
}

</style>
