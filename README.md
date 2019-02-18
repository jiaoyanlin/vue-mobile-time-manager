# vue-mobole-time-manager

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

#### vue-cli安装步骤及项目初始化：

1、安装node；

2、安装vue-cli 3：npm install -g @vue/cli

建议先安装cnpm：npm install -g cnpm --registry=https://registry.npm.taobao.org

然后用cnpm install -g @vue/cli安装，这样速度快点

安装成功后可以输入vue验证是否已经安装成功

ps: 我现在安装的版本是3.4.0，可以使用vue --version 或者vue -V 来查看版本号。

3、初始化项目(项目名称可自定义，如my-project-vue)：vue create my-project-vue

你会被提示选取一个 preset。你可以选默认的包含了基本的 Babel + ESLint 设置的 preset，也可以选“手动选择特性”来选取需要的特性。我选了了后者，如下配置：

```
Vue CLI v3.4.0
? Please pick a preset: Manually select features
? Check the features needed for your project: Babel, Router, Vuex, CSS Pre-proce
ssors, Linter, Unit
? Use history mode for router? (Requires proper server setup for index fallback
in production) No
? Pick a CSS pre-processor (PostCSS, Autoprefixer and CSS Modules are supported
by default): Sass/SCSS (with dart-sass)
? Pick a linter / formatter config: Standard
? Pick additional lint features: (Press <space> to select, <a> to toggle all, <i
> to invert selection)Lint on save
? Pick a unit testing solution: Jest
? Where do you prefer placing config for Babel, PostCSS, ESLint, etc.? In dedica
ted config files
? Save this as a preset for future projects? (y/N) y
```
可参考：https://juejin.im/post/5b6015dd51882562b92496de

4、进入项目目录：cd 如my-project-vue

5、启动项目：npm run serve

#### 其他准备工作：

1、安装调试工具vue.js devtools：可以在chrome应用商店直接搜索并安装，然后重启浏览器使用（需要根据情况将该插件中详细信息中的某些选项打开），或者参考此篇网上搜索到的博文进行安装 https://www.bbsmax.com/A/gAJGay2gdZ/

2、eslint规则修改：可参考 https://segmentfault.com/a/1190000008742240

修改.eslintrc.js文件，在rules中加入：

```
//空格标准这里是2个空格为标准 可以写4,tab
indent: ['error', 4],
// 关闭语句强制分号结尾
"semi": [0],
// 函数定义时括号前面要不要有空格
"space-before-function-paren": [0, "always"],
```






