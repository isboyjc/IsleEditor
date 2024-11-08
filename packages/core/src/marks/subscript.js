/*
 * @LastEditTime: 2024-11-03 19:20:22
 * @Description: 下标
 * @Date: 2024-03-27 20:26:45
 * @Author: isboyjc
 * @LastEditors: isboyjc
 */
import Subscript from '@tiptap/extension-subscript'

const source = {
  title: 'subscript',
  desc: '',
  command: ({ editor }) => editor.chain().focus().toggleSubscript().run(),
  isActive: ({ editor }) => editor.isActive('subscript'),
  shortcutkeys: {
    mac: ['⌘', ','],
    win: ['Ctrl', ',']
  }
}

export default Subscript.extend({
  addOptions() {
    return {
      ...this.parent?.(),
      ...source
    }
  }
})
