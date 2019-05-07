<template>
  <div id="sortable">
    <h1>You can "drag-n-drop" to sort the data!</h1>

    <section>
      <draggable v-model="friends" ghost-class="ghost" @end="onEnd">
        <transition-group type="transition" name="flip-list">
          <card
            class="sortable"
            :id="friend.id"
            v-for="friend in friends"
            :key="friend.id"
            :title="friend.name"
          />
        </transition-group>
      </draggable>
    </section>
  </div>
</template>

<script>
import draggable from "vuedraggable";
import Card from "@/components/Card.vue";

export default {
  name: "sortable",
  components: {
    draggable,
    Card
  },
  data() {
    return {
      friends: [
        { name: "Afterlife", id: 1 },
        { name: "Life", id: 2 },
        { name: "Love", id: 3 },
        { name: "Money", id: 4 }
      ],
      oldIndex: "",
      newIndex: ""
    };
  },
  methods: {
    onEnd(evt) {
      console.log(evt);
      this.oldIndex = evt.oldIndex;
      this.newIndex = evt.newIndex;
    }
  }
};
</script>

<style lang="scss">
section {
  display: flex;
  justify-content: center;
  align-items: center;
}

.sortable {
  cursor: move;
  transition: transform 0.1s ease-in-out;

  &:hover {
    transform: scale(1.03);
  }
}

.sortable-drag {
  opacity: 0;
}

.flip-list-move {
  transition: transform 0.3s ease-out;
}

.ghost div {
  transform: scale(1.05);
  background-color: #2c3e50;
}
</style>
