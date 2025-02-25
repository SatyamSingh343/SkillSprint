import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Course } from '../types/course';

interface CoursesState {
  courses: Course[];
  enrolledCourses: Course[];
  searchQuery: string;
}

const initialState: CoursesState = {
  courses: [
    {
      id: '1',
      name: 'Introduction to React',
      instructor: 'John Doe',
      description: 'Learn the fundamentals of React development',
      enrollmentStatus: 'Open',
      thumbnail: 'https://unsplash.com/photos/a-computer-screen-with-a-logo-on-it-xkBaqlcqeb4',
      duration: '8 weeks',
      schedule: 'Tuesdays and Thursdays, 6:00 PM - 8:00 PM',
      location: 'Online',
      prerequisites: ['Basic JavaScript', 'HTML & CSS'],
      syllabus: [
        {
          week: 1,
          topic: 'Introduction to React',
          content: 'Overview of React, Virtual DOM, and JSX',
        },
        {
          week: 2,
          topic: 'Components and Props',
          content: 'Creating components, passing props, component lifecycle',
        },
      ],
    },
    {
      id: '2',
      name: 'Advanced JavaScript',
      instructor: 'Jane Smith',
      description: 'Master advanced JavaScript concepts',
      enrollmentStatus: 'In Progress',
      thumbnail: 'https://source.unsplash.com/800x600/?javascript',
      duration: '10 weeks',
      schedule: 'Mondays and Wednesdays, 7:00 PM - 9:00 PM',
      location: 'Online',
      prerequisites: ['Intermediate JavaScript'],
      syllabus: [
        {
          week: 1,
          topic: 'Advanced Functions',
          content: 'Closures, currying, and higher-order functions',
        },
        {
          week: 2,
          topic: 'Asynchronous JavaScript',
          content: 'Promises, async/await, and event loop',
        },
      ],
    },
  ],
  enrolledCourses: [],
  searchQuery: '',
};

const coursesSlice = createSlice({
  name: 'courses',
  initialState,
  reducers: {
    setSearchQuery: (state, action: PayloadAction<string>) => {
      state.searchQuery = action.payload;
    },
    enrollCourse: (state, action: PayloadAction<string>) => {
      const course = state.courses.find(c => c.id === action.payload);
      if (course && !state.enrolledCourses.find(c => c.id === action.payload)) {
        const enrolledCourse = { ...course, enrolled: true, progress: 0 };
        state.enrolledCourses.push(enrolledCourse);
      }
    },
    updateProgress: (state, action: PayloadAction<{ courseId: string; progress: number }>) => {
      const course = state.enrolledCourses.find(c => c.id === action.payload.courseId);
      if (course) {
        course.progress = action.payload.progress;
      }
    },
    markAsCompleted: (state, action: PayloadAction<string>) => {
      const course = state.enrolledCourses.find(c => c.id === action.payload);
      if (course) {
        course.completed = true;
        course.progress = 100;
      }
    },
  },
});

export const { setSearchQuery, enrollCourse, updateProgress, markAsCompleted } = coursesSlice.actions;
export default coursesSlice.reducer;