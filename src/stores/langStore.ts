import { createI18n } from "vue-i18n";
import zh_TW from "@/assets/language/zh_TW.json";
import en_US from "@/assets/language/en_US.json";

const i18n = createI18n({
    legacy:false,
    locale: 'zh_TW',
    globalInjection:true,
    messages:{
        zh_TW,
        en_US,
    }
});

export default i18n;