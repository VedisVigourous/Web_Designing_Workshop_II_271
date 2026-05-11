import { isValidElement } from "react";

function StudentCard(val){
    return (
        <div>
            <p>Name: {val.name}</p>
            <p>Course: {val.course}</p>
            <p>Marks: {val.marks}</p>
        </div>
    );
}

export default StudentCard;