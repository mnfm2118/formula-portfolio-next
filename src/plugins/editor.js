import EditorJS from '@editorjs/editorjs';
import Header from '@editorjs/header';
import List from '@editorjs/list';
import Paragraph from '@editorjs/paragraph';

// export default ({ $axios }, inject) => {
//   inject('editor', {
//     EditorJS: ({ holder, placeholder, data }) => {
//       return new EditorJS({
//         holder,
//         placeholder,
//         data,
//       })
//     },
//   })
// }

function doEditor(data) {
  console.log(data);
  return new EditorJS({
    holder: 'editor',
    data: {
      time: 1552744582955,
      ...data,
    },
    tools: {
      header: {
        class: Header,
        config: {
          levels: [2, 3, 4],
          defaultLevel: 2,
        },
      },
      list: {
        class: List,
        inlineToolBar: true,
        config: {
          defaultStyle: 'unorderd',
        },
      },
      paragraph: {
        class: Paragraph,
        inlineToolBar: true,
        config: {
          preserveBlank: true,
        },
      },
    },
  });
}

export default doEditor;