import './AddItem.css'
import { useNavigate } from 'react-router'

export default function AddItem () {
    const navigate = useNavigate();

    function handleClick() {
        navigate('/card');
    }

    return (
        <div className="additem--container">
            <form>
                <div className="title">
                    <label> Title:
                        <input type="text" name="heading" placeholder='Example: My wonderful wonder land' />
                    </label>
                </div>
                <div className="description">
                    <label> Description: 
                        <textarea name="description" id="" placeholder='Enter detailed description for the above title'></textarea>
                    </label>
                </div>
                <input type="submit" value="Add Note" onClick={handleClick} />
            </form>
        </div>
    )
}