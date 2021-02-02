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
import {IHotel} from "@/services/hotel/models";
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
}

figure {
  margin: 0;
  padding: 0;
}
</style>
