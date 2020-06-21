const Word = (word, isCurrentWord) => {
        const classname = `word ${isCurrentWord ? "currentword" : ""}`;

	const template = `
      <span class="${classname}">${word}</span>
  `;

	return template;
};

export default Word;
