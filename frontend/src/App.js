import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import HomePage from './components/HomePage';
import AddMember from './components/AddMember';
import ViewMembers from './components/ViewMembers';
import MemberDetails from './components/MemberDetails';

function App() {
  return (
    <Router>
      <div className="header">
        <h1>Team TechAlchemy</h1>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/add">Add Member</Link>
          <Link to="/view">View Members</Link>
        </nav>
      </div>
      <div className="container">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/add" element={<AddMember />} />
          <Route path="/view" element={<ViewMembers />} />
          <Route path="/member/:id" element={<MemberDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
