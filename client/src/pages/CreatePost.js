import ReactQuill from 'react-quill-new';
import 'react-quill-new/dist/quill.snow.css';

export default function CreatePost() {
    return (
        <form>
            <input type="title" placeholder={"title"}/>
            <input type="summary" placeholder={"summary"}/>
            <input type="file"/>
            <ReactQuill />
        </form>
    );
}