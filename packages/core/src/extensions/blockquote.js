import { mergeAttributes, Node, wrappingInputRule } from "@tiptap/core";

const source = {
  slash: true,
  name: "blockquote",
  desc: "> isle",
  command: ({ editor, range }) => {
    range
      ? editor.chain().focus().deleteRange(range).toggleBlockquote().run()
      : editor.chain().focus().toggleBlockquote().run();
  },
  isActive: ({ editor }) => editor.isActive("blockquote"),
  isDisabled: ({ editor }) => !editor.can().toggleBlockquote(),
  shortcutkeys: "Mod-Shift-B",
};

export const inputRegex = /^\s*>\s$/;

export default Node.create({
  name: "blockquote",

  addOptions() {
    return {
      HTMLAttributes: {},
      ...source,
    };
  },

  content: "block+",

  group: "block",

  defining: true,

  parseHTML() {
    return [{ tag: "blockquote" }];
  },

  renderHTML({ HTMLAttributes }) {
    return [
      "blockquote",
      mergeAttributes(this.options.HTMLAttributes, HTMLAttributes),
      0,
    ];
  },

  addCommands() {
    return {
      setBlockquote:
        () =>
        ({ commands }) => {
          return commands.wrapIn(this.name);
        },
      toggleBlockquote:
        () =>
        ({ commands }) => {
          return commands.toggleWrap(this.name);
        },
      unsetBlockquote:
        () =>
        ({ commands }) => {
          return commands.lift(this.name);
        },
    };
  },

  addKeyboardShortcuts() {
    return {
      "Mod-Shift-b": () => this.editor.commands.toggleBlockquote(),
    };
  },

  addInputRules() {
    return [
      wrappingInputRule({
        find: inputRegex,
        type: this.type,
      }),
    ];
  },
});
