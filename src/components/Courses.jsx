import React, {useState, useEffect} from 'react';
import { useAuth } from '../AuthContext';
import { listCourses } from '../api';

const Courses = () => {
    const [courses, setCourses] = useState([])
    const { token } = useAuth();


    useEffect(() => {
        const fetchCourses = async () => {
            try {
                const response = await listCourses(token);
                setCourses(response);
            } catch (error) {
                console.error('Ha ocurrido un error:',error)
            }
        }
        fetchCourses();
    }, [token])

    return (
        <div>
            <h2>Cursos con vacantes</h2>
            <ul>
                {courses.map(course => (
                    <li key={course.id}>{course.title}</li>
                ))}
            </ul>
        </div>
    );
};

export default Courses;