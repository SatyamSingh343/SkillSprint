import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store/store';
import { setSearchQuery } from '../store/coursesSlice';
import { Search } from 'lucide-react';

export function CourseList() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { courses, searchQuery } = useSelector((state: RootState) => state.courses);

  const filteredCourses = courses.filter(course => 
    course.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    course.instructor.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="max-w-6xl mx-auto">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">Available Courses</h1>
      
      <div className="relative mb-8">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
        <input
          type="text"
          placeholder="Search courses or instructors..."
          className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={searchQuery}
          onChange={(e) => dispatch(setSearchQuery(e.target.value))}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCourses.map(course => (
          <div
            key={course.id}
            className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer transform transition hover:scale-105"
            onClick={() => navigate(`/course/${course.id}`)}
          >
            <img
              src={course.thumbnail}
              alt={course.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-2">{course.name}</h2>
              <p className="text-gray-600 mb-4">{course.instructor}</p>
              <div className="flex justify-between items-center">
                <span className={`px-3 py-1 rounded-full text-sm ${
                  course.enrollmentStatus === 'Open' ? 'bg-green-100 text-green-800' :
                  course.enrollmentStatus === 'In Progress' ? 'bg-yellow-100 text-yellow-800' :
                  'bg-red-100 text-red-800'
                }`}>
                  {course.enrollmentStatus}
                </span>
                <span className="text-gray-500">{course.duration}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}