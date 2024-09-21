import { Route, Routes } from "react-router";
import { Container } from "./components/Container/Container";
import EventsBoard from "./pages/EventsBoard/EventsBoard";
export const App = () => {
  return (
    <Container>
      <Routes>
        <Route path="/" element={<EventsBoard />} />
      </Routes>
    </Container>
  );
};
