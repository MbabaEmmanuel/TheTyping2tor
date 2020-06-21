import Word from './Word'

const MainTextBox = () => {
        //hardcoding a basic example for now.
	const sentence = "Now is the time for all good men to come to the aid of their country.";
        let currentWordIndex = 0;

	const template = `
    <div class="card">
      <div class="card-body">
        ${sentence.split(" ").map((word, index) => {
          let isCurrentWord = index === currentWordIndex;
          return Word(word, isCurrentWord);
        }).join(" ")}
      </div>
    </div>
  `;

	return template;
};

export default MainTextBox;
