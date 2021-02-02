<template>
  <div>
    <h1>Лучшие гостиницы мира</h1>
    <div class="hotel-list">
      <div class="hotel-list-item" v-for="hotel in hotels" :key="hotel.uid">

        <router-link :to="{ name: 'HotelShow', params: { uid: hotel.uid }}">
          <img :src="hotel.image">

          <h4>{{ hotel.title }}</h4>

          <Money :amount="hotel.price"/>

          <div class="location">
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-map-pin"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
            {{ hotel.location }}
          </div>

        </router-link>

      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {Component, Prop, Vue} from 'vue-property-decorator';
import {IHotelList} from "@/services/hotel/models";
import Money from "@/components/Money.vue";

@Component({
  components: {
    Money,
  },
})
export default class HotelList extends Vue {
  @Prop() private hotels!: IHotelList;
}
</script>

<style scoped>
.hotel-list {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 120%;
  margin-left: -10%;
}

.hotel-list a {
  text-decoration: none;
}

.hotel-list h4 {
  margin: 0;
  padding: 0;
}

.hotel-list-item {
  width: 25%;
  padding: 0 1rem 1rem 0;
}

.hotel-list-item span {
  color: #333;
}

.hotel-list img {
  width: 100%;
  height: auto;
}

.location {
  font-size: 12px;
  color: #666;
}

</style>
