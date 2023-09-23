<template>
  <div class="header">
    <h1 class="headerText"></h1>
    <nav>
      <ul class="nav nav-tabs nav-fill">
        <li v-for="tab in tabs" :key="tab.id" class="nav-item">
          <a style="cursor: pointer;" class="nav-link"
            :class="{ active: tab.id === currentTab }"
             @click="changeTab(tab.id)"
          >{{ tab.label }}</a>
        </li>
      </ul>
    </nav>
    <div class="container">
      <!--    <keep-alive include="CoralSeaTab">-->
      <component :is="currentTab"></component>
      <!--    </keep-alive>-->
    </div>
  </div>
</template>

<script>
import {defineAsyncComponent} from "vue";
import pMinDelay from 'p-min-delay'
import Loading from "@/components/Loading.vue";

const CoralSeaTab = defineAsyncComponent({
      loader: () => pMinDelay(import('@/components/CoralSeaTab.vue'), 2000),
      loadingComponent: Loading
    }
)
const LeyteGulfTab = defineAsyncComponent( {
      loader: () => pMinDelay(import('@/components/LeyteGulfTab.vue'), 2000),
      loadingComponent: Loading
    }
)
const MidWayTab = defineAsyncComponent({
      loader: () => pMinDelay(import('@/components/MidWayTab.vue'), 2000),
      loadingComponent: Loading
    }
)


export default {
  name: "App",
  components: { CoralSeaTab, LeyteGulfTab, MidWayTab },
  data() {
    return {
      currentTab: 'CoralSeaTab',
      tabs: [
        { id:'CoralSeaTab', label: '산호해 해전' },
        { id:'MidWayTab', label: '미드웨이 해전' },
        { id:'LeyteGulfTab', label: '레이테만 해전' },
      ]
    }
  },
  methods: {
    changeTab(tab) {
      this.currentTab = tab;
    }
  }
}
</script>

<style scoped>
  .header {
    padding: 20px 0 0 20px;
  }
  .headerText {
    padding: 0px 20px 40px 20px;
  }
  .tab {
    padding: 30px;
  }
</style>