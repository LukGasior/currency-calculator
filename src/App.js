import Form from "./Form";
import Clock from "./Clock";
import { Wrapper, Header } from "./style"


function App() {
  return (
    <Wrapper>
      <Clock />
      <Header>
        Kalkulator walut
      </Header>
      <Form />
    </Wrapper>
  );
}

export default App;
