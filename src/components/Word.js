const Word = (word, isCurrentWord) => {
        const classname = `word ${isCurrentWord ? "currentword" : ""}`;

	const template = `
      <span class="${classname}">
        ${word.split("").map((letter) => {
          return `<span class="letter">${letter}</span>`;
        }).join("")}
      </span>
  `;

	return template;
};

export default Word;
