/** @type {import('tailwindcss').Config} */
module.exports = {
  mode:"jit",
  //优化： 可以扫描到src下所有.vue .js文件 对其中的css进行处理
  purge: ["./index.html","./src/**/*.{vue,js}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}