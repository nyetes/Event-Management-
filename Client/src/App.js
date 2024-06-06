// //

// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Navigation from "./components/Navigation";
// import EventList from "./components/EventList";
// import EventForm from "./components/EventForm";
// import LoginForm from "./components/LoginForm";
// import RegisterForm from "./components/RegisterForm";
// import PrivateRoute from "./components/PrivateRoute";
// import "./styles/App.css";

// function App() {
//   return (
//     <Router>
//       <div className="App">
//         <Navigation />
//         <Routes>
//           <Route
//             path="/events"
//             element={<PrivateRoute component={EventList} />}
//           />
//           <Route
//             path="/create"
//             element={<PrivateRoute component={EventForm} />}
//           />
//           <Route
//             path="/edit/:id"
//             element={<PrivateRoute component={EventForm} />}
//           />
//           <Route path="/login" element={<LoginForm />} />
//           <Route path="/register" element={<RegisterForm />} />
//         </Routes>
//       </div>
//     </Router>
//   );
// }

// export default App;

import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import EventForm from "./components/EventForm";
import EventList from "./components/EventList";
import LoginForm from "./components/LoginForm";
import RegisterForm from "./components/RegisterForm";
import PrivateRoute from "./components/PrivateRoute";
import Navigation from "./components/Navigation";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route path="/login" element={<LoginForm />} />
        <Route path="/register" element={<RegisterForm />} />
        <Route
          path="/events"
          element={<PrivateRoute component={EventList} />}
        />
        <Route
          path="/create-event"
          element={<PrivateRoute component={EventForm} />}
        />
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </div>
  );
}

export default App;
