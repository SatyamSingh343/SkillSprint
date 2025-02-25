# SkillSprint

SkillSprint is a web application designed to provide an interactive learning experience for students. The platform includes features such as a course listing page, course details page, student dashboard, and other essential components.

## Features
- **Course Listing Page**: Displays available courses with filtering and search options.
- **Course Details Page**: Shows in-depth information about a selected course.
- **Student Dashboard**: Allows students to track their enrolled courses and progress.
- **User Authentication**: Secure login and registration.
- **Responsive Design**: Optimized for both desktop and mobile views.

## Installation

Follow these steps to set up and run the application locally:

### Prerequisites
Make sure you have the following installed on your system:
- [Node.js](https://nodejs.org/) (Latest LTS version recommended)
- [MongoDB](https://www.mongodb.com/) (If using a database)
- Git

### Clone the Repository
```sh
git clone https://github.com/SatyamSingh343/SkillSprint.git
cd SkillSprint
```

### Install Dependencies
```sh
npm install
```

### Environment Variables
Create a `.env` file in the root directory and configure the necessary environment variables:
```
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

### Run the Application
```sh
npm start
```

The application will be available at `http://localhost:5000/`.

## Folder Structure
```
SkillSprint/
├── src/
│   ├── components/        # Reusable UI components
│   ├── pages/             # Different application pages
│   ├── context/           # State management and context providers
│   ├── utils/             # Helper functions and utilities
│   ├── styles/            # CSS and styling files
│   ├── App.js             # Main application entry
│   ├── index.js           # Root file
├── public/                # Static assets
├── package.json           # Dependencies and scripts
├── README.md              # Documentation
├── .env                   # Environment variables (not committed)
```

## Deployment
To deploy the application, follow these steps:
1. Choose a hosting platform like [Vercel](https://vercel.com/) or [Netlify](https://www.netlify.com/) for frontend.
2. Use [Render](https://render.com/) or [Heroku](https://www.heroku.com/) for backend services.
3. Set up environment variables on the hosting platform.
4. Deploy using GitHub integrations.

## Contributing
Contributions are welcome! Follow these steps:
1. Fork the repository.
2. Create a new branch (`git checkout -b feature-name`).
3. Commit changes (`git commit -m 'Add new feature'`).
4. Push to the branch (`git push origin feature-name`).
5. Open a Pull Request.

## License
This project is licensed under the MIT License.

## Contact
For any queries or issues, feel free to contact [Satyam Singh](https://github.com/SatyamSingh343).