import marked from "marked";
import sanitizeHtml from "sanitize-html";
import hljs from "highlight.js/lib/highlight";
import javascript from "highlight.js/lib/languages/javascript";
import "highlight.js/styles/github.css";
hljs.registerLanguage("javascript", javascript);

export const parseTextToMarkdown = text => {
  return marked(text, {
    sanitize: true,
    sanitizer: sanitizeHtml,
    highlight: function(code) {
      return hljs.highlightAuto(code).value;
    }
  });
};
