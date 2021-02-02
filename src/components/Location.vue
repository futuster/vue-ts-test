<template>
  <div class="location">
    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-map-pin"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
    {{ location }}
  </div>
</template>

<script lang="ts">
import {Component, Prop, Vue} from 'vue-property-decorator';
import {IHotelList} from "@/services/hotel/models";

@Component({
  components: {},
})
export default class Location extends Vue {
  @Prop() private location!: string;
}
</script>

<style scoped>
.location {
  font-size: 12px;
  color: #666;
}
</style>
