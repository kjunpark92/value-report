<template>
  <div class="Estimate">
    <PriceAndAddress/>
    <BuildingAndLandStats/>
  </div>
</template>

<script>
import BuildingAndLandStats from '@/components/residential/BuildingAndLandStats'
import PriceAndAddress from '@/components/residential/PriceAndAddress'
export default {
  components:{
    BuildingAndLandStats,
    PriceAndAddress
  }
}
</script>

<style>

</style>