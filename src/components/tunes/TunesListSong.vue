<template>
  <li class="tunes-list-song">
    <div v-if="song.cover">
      <img :src="song.cover" alt="album cover image" />
    </div>

    <p>
      <strong>
        {{ songify(song) }}
      </strong>
    </p>

    <figure v-if="song.audioFile">
      <audio controls :src="song.audioFile">
        Your browser does not support the
        <code>audio</code> element.
      </audio>
    </figure>
  </li>
</template>

<script>
export default {
  props: {
    song: {
      type: Object,
    },
  },
  methods: {
    songify() {
      return this.song.artist + " - " + this.song.name;
    },
  },
};
</script>

<style lang="scss" scoped>
li {
  margin: 2em 0;
  width: 30em;
}
</style>
