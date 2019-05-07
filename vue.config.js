module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "/sandbox/" : "/",
  css: {
    loaderOptions: {
      sass: {
        data: `@import "@/assets/styles/_mixins.scss";`
      }
    }
  }
};
