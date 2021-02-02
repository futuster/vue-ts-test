<template>
  <div>
    <h1>{{ hotel.title }}</h1>
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

      <button>Забронировать</button>
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

  margin: 1rem 0;
  font-size: 16px;
  padding: .4rem .5rem;
  border-radius: 3px;
  outline: none;
  border: 1px solid #666;
  transition: all .2s ease-in-out;
}
button:hover, button:focus {
  box-shadow: 0 0 3px #48ceff;
  border-color: #48ceff;
}
button:active {
  padding: .45rem .5rem .35rem;
  box-shadow: 0 0 5px #48ceff;
}
</style>
