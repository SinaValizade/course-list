import React from "react";

const Course = (props) => {
    return (
        <div className="item">
            <p style={{background: props.course.isCompleted ? '#00C409' : 'white'}}>{props.course.courseName}</p>
            <div className="btns">
                <button onClick={() => props.deleteCourse(props.course.id)}>X</button>
                <button onClick={() => props.changeColor(props.course.id)}>completed</button>
            </div>
        </div>
    )
}
export default Course;