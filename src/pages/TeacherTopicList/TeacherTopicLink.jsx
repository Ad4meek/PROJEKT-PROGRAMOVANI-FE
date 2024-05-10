import { Link } from "react-router-dom"

export default function TeacherTopicLink(props) {
   
    return (
        <>
            <Link to={`/topicview/${props._id}`}>
                <p>{props.name}</p>
            </Link>
        </>
    )
}