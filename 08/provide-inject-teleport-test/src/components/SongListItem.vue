<template>
  <li>
    <font-awesome-icon :icon="song.done ? icons.checked : icons.unchecked" />
    {{ song.title }}
  </li>
</template>

<script>
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";

export default {
  name: "SongListItem",
  components: {FontAwesomeIcon},
  inject: [ "icons" ],
  props: ["song"]
}
</script>

<style></style>