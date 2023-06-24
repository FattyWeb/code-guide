<script>
  export default {
    props:{
      id: {
        required: true,
      },
      title: {
        required: true,
      },
      eslint: {
        default: false
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
      <h3>
        {{title}}
        <span class="link-box" v-if="eslint">
        <img class="link" height="20" src="/icons/link.svg" alt="关联eslint规则">
        <div class="link-content">
          eslint-rule:
          <strong>
            {{ eslint.rule }}
          </strong>
          <a :href="eslint.link" style="margin-left: 3px" target="_blank">
            <img class="link-doc" src="/icons/document.svg" alt="文档">
          </a>
          |
          <img class="link-doc" src="/icons/copy.svg" alt="复制">
        </div>
      </span>
      </h3>
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

.link{
  cursor: pointer;
  vertical-align: baseline;
  transition: transform .3s ease-in-out;
  &-box{
    position: relative;
  }

  &-content{
    position: absolute;
    left: 105%;
    top: 5.5px;
    white-space: nowrap;
    font-size: 0.8rem;
    line-height: 0.8rem;
    border-radius: 5px;
    box-shadow: 0 0 10px 1px $grey;
    padding: 10px;
    transition: all 0.3s linear;
    opacity: 0;
    transform: scale(0.5);
    visibility: hidden;
    letter-spacing: 0px;
    &:hover {
      transform: scale(1);
      opacity:1;
      visibility: visible;
    }
  }

  &-doc{
    height: 0.8rem;
    vertical-align: middle;
    cursor: pointer;
  }

  &:hover {
    transform: rotate(180deg);
    & + .link-content{
      transform: scale(1);
      opacity:1;
      visibility: visible;
    }
  }
}


</style>
