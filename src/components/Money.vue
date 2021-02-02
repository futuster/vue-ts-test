<template>
  <span class="money">{{ money }}</span>
</template>

<script lang="ts">
import {Component, Prop, Vue} from 'vue-property-decorator';
import {IHotelList} from "@/services/hotel/models";

@Component({
  components: {},
})
export default class Money extends Vue {
  @Prop() private amount!: number;

  get money(): string {
    const formatter = new Intl.NumberFormat('ru-RU', {
      style: 'currency',
      currency: 'RUB',
    });

    return formatter.format(this.amount);
  }
}
</script>
