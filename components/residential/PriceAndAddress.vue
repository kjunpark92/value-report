<template>
  <div class="priceAndUnit">
    <div class="unit">
      Apt: {{unit}}
    </div>
    <div class="price">
      ₩{{estimatedPrice.toLocaleString()}}
    </div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
  data(){
    return{
      estimatedPrice: 1234567890
    }
  },
  computed:{
    ...mapGetters({
      dong: 'searchModule/dong_addr',
      road: 'searchModule/road_addr',
      unit: 'searchModule/unit'
    })
  },
}
</script>

<style scoped>
.unit, .price{
  font-size: 32px;
}
.priceAndUnit{
  padding: 5px 30px;
  display: flex;
  justify-content: space-between;
}
</style>