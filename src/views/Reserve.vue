<template>
  <div>
    <div v-if="!reservationComplete">
    <HotelReserve @onReservationSubmit="onReserve" :hotel="hotel"/>
    </div>
    <div v-else>
      <h4>{{hotel.title}} успешно забронирован!</h4>
    </div>
  </div>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';
import HotelReserve from '@/components/HotelReserve.vue'
import store from '../store'
import {IHotel, IHotelReserveRequestParams} from "@/services/hotel/models";

@Component({
  components: {
    HotelReserve
  },
})
export default class Reserve extends Vue {
  isLoading = false;
  reservationComplete = false;

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

  onReserve(payload: IHotelReserveRequestParams): void {

    this.isLoading = true;

    try {
      store.dispatch("hotelReserve", payload);
      this.reservationComplete = true;
    } catch (e) {
      console.error(e);
    } finally {
      this.isLoading = false;
    }

  }
}
</script>
