const MainTextBox = () => {
	const sentence = "Now is the time for all good men to come to the aid of their country.";

	const template = `
    <div class="card">
      <div class="card-body">
        ${sentence.split(" ").map((word, index) => {
          return `<span class="word">${word}</span>`
        }).join(" ")}
      </div>
    </div>
  `;

	return template;
};

export default MainTextBox;
