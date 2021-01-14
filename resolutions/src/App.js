import Header from './components/header.js'
import Footer from './components/footer.js'
import List from './components/list.js'
import { Container } from "react-bootstrap"

function App() {
  return (
    <div className = "App">
      <Header />
      <Container>
        <List />
      </Container>
      <Footer />
    </div>
  );
}

export default App;