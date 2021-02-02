<template>
  <div class="hotel-detail">

    <h1>{{ hotel.title }}</h1>
    <figure>
      <img :src="hotel.image">
    </figure>
    <div></div>
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
  margin: 0 0 1rem;
  padding: 0;
}

figure img {
  width: 100%;
  height: auto;
  max-width: 1080px;
}

</style>
