import './AddItem.css'

export default function AddItem () {
    return (
        <div className="additem--container">
            <form>
                <label> Title:
                    <input type="text" name="heading" placeholder='Example: My wonderful wonder land' />
                </label>
                <label> Description: 
                    <textarea name="description" id="" placeholder='Enter detailed description for the above title'></textarea>
                </label>
                <input type="submit" value="Submit" />
            </form>
        </div>
    )
}