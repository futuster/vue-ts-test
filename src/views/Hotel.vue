<template>
  <div>
    <HotelShow :hotel="hotel"/>
  </div>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';
import HotelShow from "@/components/HotelShow.vue";
import {IHotel} from "@/services/hotel/models";
import store from "@/store";

@Component({
  components: {
    HotelShow
  },
})
export default class Hotel extends Vue {
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
