const LiveTextBox = () => {
	const template = `
      <input class="live-text-box card" onkeyup="keypress(this, event)">
  `;

	return template;
};

export default LiveTextBox;
