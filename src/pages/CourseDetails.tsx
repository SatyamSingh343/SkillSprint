import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store/store';
import { enrollCourse } from '../store/coursesSlice';
import { ChevronDown, ChevronUp } from 'lucide-react';

export function CourseDetails() {
  const { id } = useParams<{ id: string }>();
  const dispatch = useDispatch();
  const [expandedWeek, setExpandedWeek] = useState<number | null>(null);
  
  const course = useSelector((state: RootState) => 
    state.courses.courses.find(c => c.id === id)
  );

  const isEnrolled = useSelector((state: RootState) => 
    state.courses.enrolledCourses.some(c => c.id === id)
  );

  if (!course) {
    return <div>Course not found</div>;
  }

  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <img
          src={course.thumbnail}
          alt={course.name}
          className="w-full h-64 object-cover"
        />
        <div className="p-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{course.name}</h1>
          <div className="flex items-center mb-6">
            <span className="text-gray-600 mr-4">Instructor: {course.instructor}</span>
            <span className={`px-3 py-1 rounded-full text-sm ${
              course.enrollmentStatus === 'Open' ? 'bg-green-100 text-green-800' :
              course.enrollmentStatus === 'In Progress' ? 'bg-yellow-100 text-yellow-800' :
              'bg-red-100 text-red-800'
            }`}>
              {course.enrollmentStatus}
            </span>
          </div>

          <div className="prose max-w-none mb-8">
            <p className="text-gray-600">{course.description}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div>
              <h2 className="text-xl font-semibold mb-3">Course Details</h2>
              <ul className="space-y-2">
                <li><strong>Duration:</strong> {course.duration}</li>
                <li><strong>Schedule:</strong> {course.schedule}</li>
                <li><strong>Location:</strong> {course.location}</li>
              </ul>
            </div>
            <div>
              <h2 className="text-xl font-semibold mb-3">Prerequisites</h2>
              <ul className="list-disc list-inside space-y-1">
                {course.prerequisites.map((prereq, index) => (
                  <li key={index} className="text-gray-600">{prereq}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-4">Syllabus</h2>
            <div className="space-y-4">
              {course.syllabus.map((week) => (
                <div key={week.week} className="border rounded-lg">
                  <button
                    className="w-full px-4 py-3 flex justify-between items-center text-left"
                    onClick={() => setExpandedWeek(expandedWeek === week.week ? null : week.week)}
                  >
                    <span className="font-medium">Week {week.week}: {week.topic}</span>
                    {expandedWeek === week.week ? <ChevronUp /> : <ChevronDown />}
                  </button>
                  {expandedWeek === week.week && (
                    <div className="px-4 py-3 border-t bg-gray-50">
                      <p className="text-gray-600">{week.content}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {!isEnrolled && course.enrollmentStatus === 'Open' && (
            <button
              onClick={() => dispatch(enrollCourse(course.id))}
              className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
            >
              Enroll in Course
            </button>
          )}
        </div>
      </div>
    </div>
  );
}