<template>
  <div>
    <HotelList :hotels="hotels"/>
  </div>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';
import HotelList from '@/components/HotelList.vue';
import {IHotel} from "@/services/hotel/models";
import store from "@/store";

@Component({
  components: {
    HotelList,
  },
})
export default class Home extends Vue {
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
      // это нужно делать в хуках роутера, beforeRouteEnter; а сохранять нужно в стор, который персистить в локалсторейдж
      window.scrollTo(0, 0);
    }
  }
}
</script>
