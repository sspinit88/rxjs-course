import * as express from 'express';
import { Application } from 'express';
import { getAllCourses, getCourseById } from './get-courses.route';
import { searchLessons } from './search-lessons.route';
import { saveCourse } from './save-course.route';
const cors = require('cors');


const bodyParser = require('body-parser');

const app: Application = express();

app.use(bodyParser.json());

app.use(cors());

app.route('/api/courses').get(getAllCourses);

app.route('/api/courses/:id').get(getCourseById);

app.route('/api/lessons').get(searchLessons);

app.route('/api/courses/:id').put(saveCourse);


const httpServer = app.listen(3000, () => {
  console.log('HTTP REST API Server running at http://localhost:' + httpServer.address().port);
});



