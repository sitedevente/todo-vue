<template>
  <div class="dynamic">
    <h1>This is a dynamic page example that displays a number</h1>
    <p>
      Number to display is:
      <span class="number">{{ $route.params.number }}</span>
    </p>
  </div>
</template>

<style lang="scss" scoped>
p {
  color: maroon;
  text-align: center;
  > span.number {
    font-weight: bold;
    color: red;
    font-size: 2em;
  }
}
</style>