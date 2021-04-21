<template>
  <ul class="tunes-list">
    <tunes-list-song v-for="song in songs" :key="song.id" :song="song" />
  </ul>
</template>

<script>
import TunesListSong from "./TunesListSong.vue";

export default {
  components: { TunesListSong },
  data() {
    return {
      songs: [],
    };
  },
  mounted() {
    window.eventBus.on("new-songs", (data) => (this.songs = data));
  },
};
</script>

<style lang="scss" scoped>
ul {
  list-style: none;
  display: flex;
  flex-flow: wrap;
  justify-content: center;
  align-items: center;
}
</style>
