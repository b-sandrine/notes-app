import './Card.css'
import { MdDelete, MdEdit } from 'react-icons/md'

function Card () {
    const notes = [
        {
          id: 1,
          title: "My wonderful invention",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla suscipit ullamcorper finibus. Fusce fringilla tortor odio, eu malesuada lectus bibendum pulvinar. Donec a interdum nibh. Cras dignissim ex non nisl mattis porta. Ut et molestie quam. Pellentesque scelerisque velit ac nunc consectetur sollicitudin vel ac enim. Praesent feugiat tempus risus, non efficitur dolor placerat sit amet. Nulla sagittis ex lacus, eget vulputate dolor mattis in. Vivamus lobortis non urna nec lobortis. Cras sed nulla lorem. "
        },
        {
          id: 2,
          title: "The holidays at my granny",
          description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla suscipit ullamcorper finibus. Fusce fringilla tortor odio, eu malesuada lectus bibendum pulvinar. Donec a interdum nibh. Cras dignissim ex non nisl mattis porta. Ut et molestie quam. Pellentesque scelerisque velit ac nunc consectetur sollicitudin vel ac enim. Praesent feugiat tempus risus, non efficitur dolor placerat sit amet. Nulla sagittis ex lacus, eget vulputate dolor mattis in. Vivamus lobortis non urna nec lobortis. Cras sed nulla lorem. "
        },
        {
          id: 3,
          title: "City tour on Friday",
          description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla suscipit ullamcorper finibus. Fusce fringilla tortor odio, eu malesuada lectus bibendum pulvinar. Donec a interdum nibh. Cras dignissim ex non nisl mattis porta. Ut et molestie quam. Pellentesque scelerisque velit ac nunc consectetur sollicitudin vel ac enim. Praesent feugiat tempus risus, non efficitur dolor placerat sit amet. Nulla sagittis ex lacus, eget vulputate dolor mattis in. Vivamus lobortis non urna nec lobortis. Cras sed nulla lorem. "
        },
        {
            id: 4,
            title: "City tour on Friday",
            description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla suscipit ullamcorper finibus. Fusce fringilla tortor odio, eu malesuada lectus bibendum pulvinar. Donec a interdum nibh. Cras dignissim ex non nisl mattis porta. Ut et molestie quam. Pellentesque scelerisque velit ac nunc consectetur sollicitudin vel ac enim. Praesent feugiat tempus risus, non efficitur dolor placerat sit amet. Nulla sagittis ex lacus, eget vulputate dolor mattis in. Vivamus lobortis non urna nec lobortis. Cras sed nulla lorem. "
        },
        {
            id: 5,
            title: "City tour on Friday",
            description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla suscipit ullamcorper finibus. Fusce fringilla tortor odio, eu malesuada lectus bibendum pulvinar. Donec a interdum nibh. Cras dignissim ex non nisl mattis porta. Ut et molestie quam. Pellentesque scelerisque velit ac nunc consectetur sollicitudin vel ac enim. Praesent feugiat tempus risus, non efficitur dolor placerat sit amet. Nulla sagittis ex lacus, eget vulputate dolor mattis in. Vivamus lobortis non urna nec lobortis. Cras sed nulla lorem. "
          },
          {
            id: 6,
            title: "City tour on Friday",
            description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla suscipit ullamcorper finibus. Fusce fringilla tortor odio, eu malesuada lectus bibendum pulvinar. Donec a interdum nibh. Cras dignissim ex non nisl mattis porta. Ut et molestie quam. Pellentesque scelerisque velit ac nunc consectetur sollicitudin vel ac enim. Praesent feugiat tempus risus, non efficitur dolor placerat sit amet. Nulla sagittis ex lacus, eget vulputate dolor mattis in. Vivamus lobortis non urna nec lobortis. Cras sed nulla lorem. "
          },
          {
            id: 7,
            title: "City tour on Friday",
            description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla suscipit ullamcorper finibus. Fusce fringilla tortor odio, eu malesuada lectus bibendum pulvinar. Donec a interdum nibh. Cras dignissim ex non nisl mattis porta. Ut et molestie quam. Pellentesque scelerisque velit ac nunc consectetur sollicitudin vel ac enim. Praesent feugiat tempus risus, non efficitur dolor placerat sit amet. Nulla sagittis ex lacus, eget vulputate dolor mattis in. Vivamus lobortis non urna nec lobortis. Cras sed nulla lorem. "
          },
    ];

    return (
        
            notes.map((note) => (
                <div className='card--container'>
                    <div className="data">
                        <h1>{note.title}</h1>
                        <p>{note.description}</p>
                    </div>
                    <div className="operations">
                        <MdEdit className='edit-icon' />
                        <MdDelete className='delete-icon' />
                    </div>
                </div>
            ))
        
    )
    
}

export default Card;