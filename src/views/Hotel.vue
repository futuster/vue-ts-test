<template>
  <div>
    <HotelShow />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HotelShow from "@/components/HotelShow.vue";

@Component({
  components: {
    HotelShow
  },
})
export default class Hotel extends Vue {}
</script>
