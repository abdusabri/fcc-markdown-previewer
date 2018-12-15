import marked from "marked";

export const parseTextToMarkdown = text => {
  return marked(text);
};
