import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store/store';
import { updateProgress, markAsCompleted } from '../store/coursesSlice';
import { CheckCircle } from 'lucide-react';

export function StudentDashboard() {
  const dispatch = useDispatch();
  const enrolledCourses = useSelector((state: RootState) => state.courses.enrolledCourses);

  const handleProgressUpdate = (courseId: string, progress: number) => {
    dispatch(updateProgress({ courseId, progress }));
  };

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">My Dashboard</h1>

      {enrolledCourses.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-gray-600">You haven't enrolled in any courses yet.</p>
        </div>
      ) : (
        <div className="space-y-6">
          {enrolledCourses.map(course => (
            <div key={course.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="p-6">
                <div className="flex items-start">
                  <img
                    src={course.thumbnail}
                    alt={course.name}
                    className="w-32 h-24 object-cover rounded-lg"
                  />
                  <div className="ml-6 flex-1">
                    <h2 className="text-xl font-semibold text-gray-800 mb-2">{course.name}</h2>
                    <p className="text-gray-600 mb-4">Instructor: {course.instructor}</p>
                    
                    <div className="mb-4">
                      <div className="flex justify-between mb-1">
                        <span className="text-gray-600">Progress</span>
                        <span className="text-gray-600">{course.progress}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-blue-600 h-2 rounded-full transition-all"
                          style={{ width: `${course.progress}%` }}
                        />
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      {!course.completed ? (
                        <>
                          <input
                            type="range"
                            min="0"
                            max="100"
                            value={course.progress}
                            onChange={(e) => handleProgressUpdate(course.id, Number(e.target.value))}
                            className="w-48"
                          />
                          <button
                            onClick={() => dispatch(markAsCompleted(course.id))}
                            className="flex items-center px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
                          >
                            <CheckCircle className="w-5 h-5 mr-2" />
                            Mark as Completed
                          </button>
                        </>
                      ) : (
                        <span className="text-green-600 font-semibold flex items-center">
                          <CheckCircle className="w-5 h-5 mr-2" />
                          Completed
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}