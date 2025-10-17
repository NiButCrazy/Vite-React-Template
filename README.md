# Vite + React + TypeScript 创建模板

个人自用

## 安装使用

```shell
npm create nbc-app < projectName | 可选 >
# yarn create nbc-app < projectName | 可选 >
# pnpm create nbc-app < projectName | 可选 >
```

> 当然也可以直接克隆项目  
> 感兴趣的还可以查看个人 [汉化版 React DevTools](https://github.com/NiButCrazy/react-devtools-extension-chinese)


> [!NOTE]
> **小提示**
> 如果你使用的是 `webstorm`，断点调试功能需要在IDE运行配置中勾选`打开浏览器`和`使用JavaScript调试器`，
> 当然也可以额外配置一个 Javascript 的运行配置专门启动`断点调试`，这样**断点服务器**和**vite服务器**各管各的**互不影响**。
>
> 另外，如果你发现断点调试时 Chrome 是一个全新的页面，没有你的个人数据、扩展以及配置，可以为chrome的用户数据创建一个**软连接
**
> `mklink /D <link> <target>`，然后把链接设置到 `webstorm` 的浏览器配置里就可以了
>
具体原因和解决方法请查看[官方文档](https://www.jetbrains.com/zh-cn/help/webstorm/2025.1/configuring-javascript-debugger.html)

> [!TIP]
> vite 服务运行时，可直接在运行窗口中 `Ctrl + Shift + 鼠标左键` 点击服务器链接，
> 这样是直接打开`断点调试的功能`，十分方便

### 第三方库

- React Router - 路由管理
- Zustand - 全局状态管理
- Less - 样式预处理

[流程图](./.idea/__comment__/Project.mermaid)

```mermaid
flowchart LR
    subgraph src 源代码目录
        subgraph components[components 组件库]
            subgraph button / Button 组件
                subgraph assets2[assets 资源]
                    ...1[...]
                end
                subgraph lib2[lib 代码]
                    ...2[...]
                end
                subgraph styles2[styles 样式]
                    ...3[...]
                end
                lib2 -- 代码库 --> Button.tsx
                assets2 --> Button.tsx
                styles2 -- 样式表 --> Button.tsx -- 导出至 --> index1.ts[index.ts<br>...]
            end
            subgraph app / App 组件
                subgraph assets3[assets 资源]
                    ...4[...]
                end
                subgraph lib3[lib 代码]
                    ...5[...]
                end
                subgraph styles3[styles 样式]
                    ...6[...]
                end
                lib3 -- 代码库 --> App.tsx
                assets3 --> lib3
                styles3 -- 样式表 --> App.tsx -- 导出至 --> index3.ts[index.ts<br>...]
            end
            subgraph pages 业务界面组件库
                subgraph Home 组件
                    subgraph assets1[assets 资源]
                        subgraph images
                            react.svg
                        end
                    end
                    subgraph lib1[lib 代码]
                        工具类代码库
                    end
                    subgraph styles1[styles 样式]
                        Home.module.less
                    end
                    index2.ts[index.ts<br>整合导出内容]
                    lib1 -- 代码库 --> Home.tsx
                    assets1 -- 图标 --> Home.tsx
                    styles1 -- 样式表 --> Home.tsx -- 导出至 --> index2.ts
                end
            end
        end
        subgraph utils 工具模块
            router.tsx[router.tsx 路由管理模块]
        end
        components -- 组件挂载 --> router.tsx
        main.tsx[main.tsx 逻辑入口]
        router.tsx -- 路由挂载 --> main.tsx
        subgraph global[global 全局访问入口]
            index.css[index.css 全局样式]
        end
        global -- 全局属性挂载 --> main.tsx
    end
    subgraph public[public 公共资源根]
        subgraph images
            vitelogo[vite.svg]
        end
    end
    index.html[index.html 页面入口]
    public -- 静态资源 --> index.html
```
