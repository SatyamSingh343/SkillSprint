import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store/store';
import { Layout } from './components/Layout';
import { CourseList } from './pages/CourseList';
import { CourseDetails } from './pages/CourseDetails';
import { StudentDashboard } from './pages/StudentDashboard';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<CourseList />} />
            <Route path="/course/:id" element={<CourseDetails />} />
            <Route path="/dashboard" element={<StudentDashboard />} />
          </Routes>
        </Layout>
      </Router>
    </Provider>
  );
}

export default App;