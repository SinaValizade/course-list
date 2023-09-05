import './App.css';
import React from "react";
import {useState} from "react";
import Course from "./course";

function App() {
    const [inputValue, setInputValue] = useState('');
    const [courseList, setCourseList] = useState([]);
    const theInput = document.getElementById('input');
    return (
        <div className="App mt">
            <p className="title">please add your courses :</p>
            <input type="text" id="input" onChange={list}/>
            <button onClick={adding}>Add</button>
            <div>
                {courseList.map((course, index) => {
                    return <Course key={index} course={course} deleteCourse={deleteCourse} changeColor={changeColor}/>
                })
                }
            </div>
        </div>
    );

    function list(e) {
        setInputValue(e.target.value);
    }

    function adding() {
        if (inputValue !== '') {
            const course = {
                courseName: inputValue,
                id: courseList.length === 0 ? 1 : courseList[courseList.length - 1].id + 1,
                isCompleted: false
            }
            setCourseList([...courseList, course]);
        } else alert('please add a course !')
        theInput.value = '';
        setInputValue('');
    }

    function deleteCourse(deleted) {
        setCourseList(courseList.filter((course) => course.id !== deleted));
    }

    function changeColor(completed) {
        setCourseList(courseList.map((course) => course.id === completed ? {...course, isCompleted: true} : course));
    }
}

export default App;