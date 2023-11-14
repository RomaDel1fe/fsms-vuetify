import { createStore } from 'vuex';
import auth from './modules/auth'; 
import loading from './modules/loading';
import screen from './modules/screen';

export default createStore({
  modules: {
    auth,
    loading,
    screen
  }
});
