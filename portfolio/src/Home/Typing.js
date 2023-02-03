import { TypeAnimation } from 'react-type-animation';
import './Typing.css'
function Typing() {
    return (
        <TypeAnimation
            sequence={[
                "I'm Aniket", // Types 'One'
                2000, // Waits 1s
                'A Fullstack developer', // Deletes 'One' and types 'Two'
                2000, // Waits 2s
                'Working as freelance',
                2000, // Types 'Three' without deleting 'Two'
                
            ]}
            wrapper="span"
            cursor={true}
            repeat={Infinity}
            style={{}}
            className='typing-text'
        />
    );
}
export default Typing;