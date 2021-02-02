<template>
  <div class="hotel-detail">
    <h1>{{ hotel.title }}</h1>
    <figure>
      <img :src="hotel.image">
    </figure>
    <div>{{ hotel.description }}</div>
    <router-link :to="{name: 'HotelReserve', params: {uid: hotel.uid}}">Забронировать</router-link>
  </div>
  </div>
</template>

<script lang="ts">
import {Component, Prop, Vue} from 'vue-property-decorator';


import {IHotel} from "@/services/hotel/models";
import IPagination from "@/services/common/IPagination";
import store from "../store"

@Component
export default class HotelShow extends Vue {
  isLoading = false;

  get hotel(): IHotel {
    return store.state.hotel;
  }

  async mounted(): Promise<void> {
    await this.fetchList();
  }

  async fetchList(): Promise<void> {
    this.isLoading = true;
    try {
      store.dispatch("fetchHotel", this.$route.params.uid);
    } finally {
      this.isLoading = false;
    }
  }
}
</script>

<style scoped>
.hotel-detail {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
}

.column {
  display: flex;
  flex-direction: column;
  flex-basis: 100%;
  flex: 1;
}

.image {
  flex-basis: 20%;
}

.image img {
  width: 100%;
  height: auto;
}
</style>
