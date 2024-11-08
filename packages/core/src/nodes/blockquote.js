/*
 * @LastEditTime: 2024-11-01 19:38:27
 * @Description: 引用
 * @Date: 2024-04-01 04:09:00
 * @Author: isboyjc
 * @LastEditors: isboyjc
 */
import { mergeAttributes, Node, wrappingInputRule } from '@tiptap/core'

const source = {
  title: 'blockquote',
  icon: 'TextQuote',
  desc: '> isle',
  command: ({ editor, range }) => {
    range
      ? editor.chain().focus().deleteRange(range).toggleBlockquote().run()
      : editor.commands.toggleBlockquote()
  },
  isActive: ({ editor }) => editor.isActive('blockquote'),
  shortcutkeys: {
    mac: ['⌘', 'Shift', 'B'],
    win: ['Ctrl', 'Shift', 'B']
  }
}

export const inputRegex = /^\s*>\s$/

export default Node.create({
  name: 'blockquote',

  addOptions() {
    return {
      HTMLAttributes: {},
      ...source
    }
  },

  content: 'block+',

  group: 'block',

  defining: true,

  parseHTML() {
    return [{ tag: 'blockquote' }]
  },

  renderHTML({ HTMLAttributes }) {
    return [
      'blockquote',
      mergeAttributes(this.options.HTMLAttributes, HTMLAttributes),
      0
    ]
  },

  addCommands() {
    return {
      setBlockquote:
        () =>
        ({ commands }) => {
          return commands.wrapIn(this.name)
        },
      toggleBlockquote:
        () =>
        ({ commands }) => {
          return commands.toggleWrap(this.name)
        },
      unsetBlockquote:
        () =>
        ({ commands }) => {
          return commands.lift(this.name)
        }
    }
  },

  addKeyboardShortcuts() {
    return {
      'Mod-Shift-b': () => this.editor.commands.toggleBlockquote()
    }
  },

  addInputRules() {
    return [
      wrappingInputRule({
        find: inputRegex,
        type: this.type
      })
    ]
  }
})
