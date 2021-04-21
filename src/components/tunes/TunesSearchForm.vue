<template>
  <form action="#" @submit.prevent="getMusic()">
    <input
      @keyup="search()"
      ref="searchInput"
      type="text"
      v-model="query"
      autofocus
    />
  </form>
</template>

<script>
import axios from "axios";
import { debounce } from "lodash";

export default {
  data() {
    return {
      query: "",
      limit: 6,
    };
  },
  methods: {
    getMusic() {
      axios
        .get(
          `https://itunes.apple.com/search?term=${encodeURI(
            this.query
          )}&entity=musicTrack&limit=${this.limit}`
        )
        .then((response) => {
          let iTunesSongs = response.data.results
            .filter((song) => song.kind === "song")
            .map((song) => this.extractData(song));

          window.eventBus.emit("new-songs", iTunesSongs);
        });
    },
    extractData({
      trackId: id,
      artistName: artist,
      previewUrl: audioFile,
      artworkUrl100: cover,
      trackName: name,
      collectionName: album,
    }) {
      return { id, artist, audioFile, cover, name, album };
    },
    search: debounce(function () {
      this.getMusic();
    }, 500),
  },
  mounted() {
    this.$refs.searchInput.focus();
  },
};
</script>

<style lang="scss" scoped></style>
