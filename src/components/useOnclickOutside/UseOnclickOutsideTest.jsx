import { useRef, useState } from "react";
import './styles.css';
import useOutsideClick from ".";

export default function UseOnclickOutsideTest() {
    const [showContent, setShowContent] = useState(false);
    const ref = useRef();
    useOutsideClick(ref, () => setShowContent(false));

    return (
        <div className='container'>
            {showContent
                ? (<div ref={ref} className='ref-container'>
                    <h1>Show content here</h1>
                    <p>
                        Please click outside of this to close this.
                        It won't close if you click inside of this content.
                    </p>
                </div>)
                : (<button onClick={() => setShowContent(true)}>
                    Show Content
                </button>
                )}
        </div>
    )
}