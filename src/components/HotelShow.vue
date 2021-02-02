<template>
  <div class="hotel-detail">

    <h1>{{ hotel.title }}</h1>
    <figure>
      <img :src="hotel.image">
    </figure>
    <div>{{ hotel.description }}</div>
    <router-link class="btn" v-if="hotel.uid" :to="{name: 'HotelReserve', params: {uid: hotel.uid}}">Забронировать</router-link>

  </div>
  </div>
</template>

<script lang="ts">
import {Component, Prop, Vue} from 'vue-property-decorator';


import {IHotel, IHotelList} from "@/services/hotel/models";
import IPagination from "@/services/common/IPagination";
import store from "@/store";
import PageNotFound from "@/components/PageNotFound.vue";

@Component({
  components: {PageNotFound}
})
export default class HotelShow extends Vue {
  @Prop() private hotel!: IHotel;
}
</script>

<style scoped>
.btn {
  margin: 1rem 0 3rem;
  text-decoration: none;
  color: #EEE;
  background: #007be0;
  display: inline-block;
  font-size: 16px;
  padding: .4rem .5rem;
  border-radius: 3px;
  outline: none;
  border: 1px solid #666;
  transition: all .2s ease-in-out;
}

.btn:hover {
  background: #3aa2ff;
  color: #FFF;
  box-shadow: 0 0 3px #48ceff;
}
figure {
  margin: 0;
  padding: 0;
}
</style>
