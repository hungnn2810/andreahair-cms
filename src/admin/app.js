import favicon from "./extensions/favicon.ico";

const config = {
  locales: [
    // 'ar',
    // 'fr',
    // 'cs',
    // 'de',
    // 'dk',
    // 'es',
    // 'he',
    // 'id',
    // 'it',
    // 'ja',
    // 'ko',
    // 'ms',
    // 'nl',
    // 'no',
    // 'pl',
    // 'pt-BR',
    // 'pt',
    // 'ru',
    // 'sk',
    // 'sv',
    // 'th',
    // 'tr',
    // 'uk',
    //"vi",
    // 'zh-Hans',
    // 'zh',
  ],
};

const bootstrap = (app) => {};

export default {
  config: {
    head: { favicon: favicon },
    translations: {
      en: {
        "Auth.form.welcome.title": "Andreahair Admin!",
        "Auth.form.welcome.subtitle": "Đăng nhập",
        "app.components.LeftMenu.navbrand.title": "Andreahair Admin",
        "global.content-manager": "Danh mục",
        "content-manager.components.LeftMenu.collection-types": "Đối tượng",
        "content-manager.HeaderLayout.button.label-add-entry": "Thêm mới",
        "content-manager.containers.Edit.pluginHeader.title.new": "Thêm mới",
        "components.PageFooter.select": "Số lượng / trang",
      },
    },
  },
  bootstrap,
};
