/* VUEX组件注册，响应式全局状态，用于各个模块之间共用的变量状态，如当前的登录用户信息  */
import vue from "vue"
import vuex from "vuex"
import locStorage from '../assets/js/utils/locStorage.js'

vue.use(vuex)

const store = new vuex.Store({
    state: {
        version: 20230925,
        isMobile: 'pc',
        serverHost: null,
        copyAllUrl: null,//一键复制存储内容
        userName: '' || localStorage.getItem('userName'),
        RoleLevel: '' || localStorage.getItem('RoleLevel'),
        linkName: 'name',
        noticePopup: false,//资讯窗的展示
        loginStatus: false,
        Authorization: localStorage.getItem('Authorization') ? localStorage.getItem('Authorization') : '',
        auth: true,
        authInfo: '验证失败页面',
        metaInfo: {
            favicon: "",
            webname: "" || window.location.host,
            logo: null,
            splitline: "",
            websubtitle: "",
            admintitle: "",
            keywords: "",
            webms: "",
            explain: "",
            aboutinfo: "",
            baidu: "",
            links: "",
            api: 0,
            watermark: 0,
            register: 0,
            guidepage: 0
        },

    },
    mutations: {
        handleUserName: (state, name) => {
            state.userName = name
            localStorage.setItem('userName', name)
        },
        setCopyAllUrl(state, copyAllUrl) {
            state.copyAllUrl = copyAllUrl;
        },
        setIsMobile(state, isMobile) {
            state.isMobile = isMobile;
        },
        cahngeMetaInfo(state, metaInfo) {
            if (metaInfo.websubtitle == null) {
                metaInfo.websubtitle = "";
                metaInfo.splitline = "";
            }
            if (metaInfo.logo == null || metaInfo.logo.replace(/\s*/g, '') == "") {
                metaInfo.logo = null;
            }
            if (locStorage.get("ISINFORMATION") == null) {
                setTimeout(() => {
                    state.noticePopup = true;
                }, 1300)
            }

            state.metaInfo = metaInfo;
        },
        setAdminTitle(state, title) {
            state.metaInfo.admintitle = title;
        },
        setServerHost(state, serverHost) {
            state.serverHost = serverHost;
        },
        setPreludeSwitch(state, preludeSwitch) {
            state.preludeSwitch = preludeSwitch;
        },
        setUserName(state, username) {
            state.userName = username;
        }

    },
    actions: {},
    getters: {},
    modules: {}
})

export default store;
