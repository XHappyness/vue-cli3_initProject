/* 补充Vue类型声明 */
import Vue from 'vue'
declare module 'vue/types/vue' {
    interface Vue {
        $server: Server.IServer;
    }
}