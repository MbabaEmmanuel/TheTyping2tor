import Header from './components/Header'
import MainTextBox from './components/MainTextBox'
import LiveTextBox from './components/LiveTextBox'

async function App() {
  const template = document.createElement('template')
  template.innerHTML = `
    <div class="container">
      ${Header()}
      ${MainTextBox()}
      ${LiveTextBox()}
    </div>
  `
  // Return a new node from template
  return template.content.cloneNode(true)
}

export default App;
