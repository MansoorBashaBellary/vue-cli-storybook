<template>
  <button>
    <span role="img" aria-label="so cool">
        {{ title }}
    </span>
  </button>
</template>

<script>
export default {
  name: 'button',
  props: [ 'title' ]
}
</script>

