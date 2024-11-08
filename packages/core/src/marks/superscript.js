/*
 * @LastEditTime: 2024-11-03 19:20:33
 * @Description: 上标
 * @Date: 2024-03-27 20:14:45
 * @Author: isboyjc
 * @LastEditors: isboyjc
 */
import Superscript from '@tiptap/extension-superscript'

const source = {
  title: 'superscript',
  desc: '',
  command: ({ editor }) => editor.chain().focus().toggleSuperscript().run(),
  isActive: ({ editor }) => editor.isActive('superscript'),
  shortcutkeys: {
    mac: ['⌘', '.'],
    win: ['Ctrl', '.']
  }
}

export default Superscript.extend({
  addOptions() {
    return {
      ...this.parent?.(),
      ...source
    }
  }
})
