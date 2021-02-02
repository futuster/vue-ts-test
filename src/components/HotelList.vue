<template>
  <div>
    <h1>Лучшие гостиницы мира</h1>
    <div class="hotel-list">
      <div class="hotel-list-item" v-for="hotel in hotels" :key="hotel.uid">

        <router-link :to="{ name: 'HotelShow', params: { uid: hotel.uid }}">
          <img :src="hotel.image">
          {{ hotel.title }}

        </router-link>

      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {Component, Prop, Vue} from 'vue-property-decorator';
import {IHotelList} from "@/services/hotel/models";


@Component
export default class HotelList extends Vue {
  @Prop() private hotels!: IHotelList;
}
</script>

<style scoped>
.hotel-list {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}

.hotel-list-item {
  width: 20%;
  margin: 0 1rem 1rem 0;
}

.hotel-list img {
  width: 100%;
  height: auto;
}

</style>
