import { Route, Routes } from "react-router";
import { Container } from "./components/Container/Container";

import EventsBoard from "./pages/EventsBoard";
import Participants from "./pages/Participants";
import Registration from "./pages/Registration";

export const App = () => {
  return (
    <Container>
      <Routes>
        <Route path="/" element={<EventsBoard />} />
        <Route path="/participants/:eventId" element={<Participants />} />
        <Route path="/registration/:eventId" element={<Registration />} />
      </Routes>
    </Container>
  );
};
