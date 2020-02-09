// new Vuex.Store({})
import Vue from "vue";
import VueCompositionAPI, { reactive, computed } from "@vue/composition-api";
Vue.use(VueCompositionAPI);

class Store {
  constructor(optionsObject) {
    // Devolvemos un objeto reactivo
    this.state = reactive(optionsObject.state);
    this.mutations = optionsObject.mutations;
    this.actions = optionsObject.actions;

    // Getters
    if (optionsObject.getters) {
      this.getters = {};
      const { getters } = optionsObject;
      for (const [getterName, getterFunction] of Object.entries(getters)) {
        Object.defineProperty(this.getters, getterName, {
          get: () => computed(() => getterFunction(this.state)).value
        });
      }
    }
  }
  // Mutaciones
  commit(mutationName, payload) {
    const mutation = this.mutations[mutationName];
    if (!mutation) {
      throw Error(`${mutationName} no existe`);
    }
    mutation(this.state, payload);
  }
  // Acciones
  dispatch(actionName, payload) {
    const action = this.actions[actionName];
    if (!action || !action.then) {
      return Promise.resolve(action(this, payload)); // this = context
    }
    return action(this, payload);
  }
}

const Vuex = {
  Store
};

export default Vuex;
