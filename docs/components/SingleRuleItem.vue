<script>
  export default {
    props:{
      id: {
        required: true,
      },
      title: {
        required: true,
      }
    },
    computed:{
      codeBoxEnabled(){
        return (this.$slots.code && this.$slots.code()) || (this.$slots.badCode && this.$slots.badCode())
      }
    }
  }
</script>

<template>
  <div class="section" :id="id">
    <div class="col">
      <h3>{{title}}</h3>
      <slot name="detail"></slot>
    </div>
    <div class="col" v-if="codeBoxEnabled">
      <slot name="code"></slot>
      <div v-if="$slots.badCode && $slots.badCode()" class="bad-code">
        <h3>Bad</h3>
        <slot name="badCode">
        </slot>
      </div>
      <div v-if="$slots.goodCode && $slots.goodCode()" class="good-code">
        <h3>Good</h3>
        <slot name="goodCode">
        </slot>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.bad-code{
  background-color: #f7e8e8;
  overflow: hidden;
  border-radius: 15px;
  h3{
    color: #ed3c50;
    //margin: 0;
    font-size: 1.1em;
    margin: 15px 0 0 15px;
  }
}

.good-code{
  margin-top: 15px;
  background-color: #ecfaf7;
  overflow: hidden;
  border-radius: 15px;
  h3{
    color: #42b883;
    //margin: 0;
    font-size: 1.1em;
    margin: 15px 0 0 15px;
  }
}
</style>
