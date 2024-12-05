# isle-editor

[![NPM](https://img.shields.io/npm/v/@isle-editor/core.svg)](https://www.npmjs.com/package/@isle-editor/core)
[![GitHub](https://img.shields.io/github/stars/isboyjc/isle-editor.svg?style=social)](https://github.com/isboyjc/isle-editor)

[English](./README.md)

如需更多详细信息，请务必查看我们的 [文档](https://editor.islenote.com)。如果您遇到任何问题或对我们的系统有任何建议，请提出问题。

## 介绍

`isle-editor` 是一款开源 Web 编辑器，支持富文本、块、`markdown` 编辑，高效且开箱即用，基于 [prosemirror](https://github.com/prosemirror) 和 [tiptap](https://github.com/ueberdosis/tiptap)。

我们希望通过 `isle-editor` 让开发人员能够轻松地为他们的应用添加文本编辑，相对于市面上的开源编辑器，`isle-editor` 是 `新` 的，它除了支持普通的富文本风格外，还支持流行的 `Notion Style` 风格。

您可以输出 `HTML` 将它作为一个普通的富文本编辑器，也可以输出 `JSON` 将它作为一个块编辑器。

考虑到可扩展性，您可以使用我们内置的组合扩展包快速搭建编辑器，也可以选择性使用我们的核心扩展一步一步的定制您的编辑器，同时您还可以自定义扩展丰富编辑器的功能。

## 为什么选择 isle-editor

`prosemirror` 是一个强大且灵活的开源富文本编辑框架，它为构建高度可定制的富文本编辑器提供了一套核心工具和 `API`。`tiptap` 是基于 `prosemirror` 实现的一个开源现代化富文本编辑器框架，它为 `prosemirror` 提供了更高层的封装和默认实现，使其更易用。

`prosemirror` 和 `tiptap` 都是无头的，也就是不依赖任何框架，尽管您可以使用 `tiptap` 极大简化开发编辑器的效率，但是它依旧是复杂的，因为 `tiptap` 并不提供 `UI` 视图，开发时您需要为编辑器做很多处理，包括各种扩展的实现以及视图层的处理。

`isle-editor` 的目标是为开发者提供一套完全开箱即用的富文本编辑器，无需复杂的配置，即可快速集成到现有项目中。我们复用了 `tiptap` 的核心实现，因为它是相对可靠的，同时我们也提供了多个版本的 `UI` 视图以及更多的核心扩展，可以让使用者完全基于配置达到开箱即用。

您可以在任意框架中使用 `isle-editor`，无需复杂的配置，即可快速集成到现有项目中。（目前我们只支持 `vue` 视图，更多框架视图正在排期中，您也可以在 [GitHub](https://github.com/isboyjc/isle-editor) 上提交您的代码，帮助我们实现更多框架的视图支持。)

虽然 `isle-editor` 目前只支持 `Vue` 视图，但是它的核心扩展是可以完全集成 `tiptap` 的，您如果使用 `tiptap` 开发项目，那么您可以无缝使用我们的核心扩展。您也可以参考 `isle-editor` 源码，因为我们希望它是 `tiptap` 的最佳实践。

## 特性

- **开箱即用**: 使用简单，只需几行代码即可快速接入，无需复杂配置。
- **可扩展**: 内置丰富的可插拔扩展、视图组件，支持自定义。
- **可定制**: 支持自定义主题样式，内置 `light`、`dark` 两种主题。
- **多语言**: 支持多语言编辑，内置中文、英文，可自由扩展更多语言。
- **灵活**: 支持多种编辑模式，如块编辑、富文本、`WYSIWYG`、`Markdown`、`Notion Style` 编辑等。
- **高性能**: 基于 `prosemirror` 和 `tiptap` 的高性能实现，提供流畅的编辑体验。

## 适用场景

`isle-editor` 适用于多种场景：

- **内容创作**: 博客、文档、笔记等内容创作场景
- **协同编辑**: 团队协作、实时编辑场景
- **富文本编辑**: 支持图片、视频、表格等富文本内容
- **自定义编辑器**: 可以根据需求定制专属编辑器

## 快速体验

访问我们的 [在线演示](https://playground.islenote.com) 快速体验 `isle-editor` 的功能。

## License

isle-editor 是开源软件，许可证为 [MIT 许可证](https://github.com/isboyjc/isle-editor/blob/main/LICENSE)。