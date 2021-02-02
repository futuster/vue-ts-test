<template>
  <div>
    <h1>Лучшие гостиницы мира</h1>
    <div class="hotel-list">
      <div class="hotel-list-item" v-for="hotel in hotels" :key="hotel.uid">

        <router-link :to="{ name: 'HotelShow', params: { uid: hotel.uid }}">
          <img :src="hotel.image">

          <h4>{{ hotel.title }}</h4>

          <Money :amount="hotel.price"/>

          <Location :location="hotel.location"/>

        </router-link>

      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {Component, Prop, Vue} from 'vue-property-decorator';
import {IHotel} from "@/services/hotel/models";
import Money from "@/components/Money.vue";
import Location from "@/components/Location.vue";

@Component({
  components: {
    Money,
    Location,
  },
})
export default class HotelList extends Vue {
  @Prop() private hotels!: Array<IHotel>;
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

@media (max-width: 900px) {
  .hotel-list {
    width: 100%;
    margin-left: 0;
  }

  .hotel-list-item {
    width: 100%;
    padding: 0 0 1rem 0;
  }
}
</style>
