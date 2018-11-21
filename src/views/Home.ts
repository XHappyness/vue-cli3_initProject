import { Component, Vue } from 'vue-property-decorator';
import {serverUrl} from '@/common/configByEnv.js'

@Component({
  components: {},
})
export default class Home extends Vue {
    name: string = 'xuehaishaung'
    serverUrl = serverUrl;
    test() {
      this.$server.getUserList_async(20).then(res => {
        console.log(res);
      });
    }
}