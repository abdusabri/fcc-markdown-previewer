import marked from "marked";
import sanitizeHtml from "sanitize-html";

export const parseTextToMarkdown = text => {
  return marked(text, {
    sanitize: true,
    sanitizer: sanitizeHtml
  });
};
