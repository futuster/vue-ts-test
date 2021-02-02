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


import {IHotel} from "@/services/hotel/models";
import IPagination from "@/services/common/IPagination";
import store from "../store"

@Component
export default class HotelList extends Vue {
  isLoading = false;

  get hotels(): Array<IHotel> {
    return store.state.hotels;
  }

  async mounted(): Promise<void> {
    await this.fetchList();
  }

  async fetchList(): Promise<void> {
    this.isLoading = true;
    try {
      store.dispatch("fetchHotelList");
    } finally {
      this.isLoading = false;
      // TODO нужно сохранять позицию скрола, чтобы при возвращении назад продолжить с того места на котором остановились
      window.scrollTo(0, 0);
    }
  }
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
  margin-right: 1rem;
}

.hotel-list img {
  width: 100%;
  height: auto;
}

</style>
