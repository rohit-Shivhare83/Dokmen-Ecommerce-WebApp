import React, {useState} from 'react';
import {AiOutlineArrowUp} from 'react-icons/ai'

const ScrollButton = () =>{

const [visible, setVisible] = useState(false)

const toggleVisible = () => {
	const scrolled = document.documentElement.scrollTop;
	if (scrolled > 300){
	setVisible(true)
	}
	else if (scrolled <= 300){
	setVisible(false)
	}
};

const scrollToTop = () =>{
	window.scrollTo({
	top: 0,
	behavior: 'smooth'
	
	});
};

window.addEventListener('scroll', toggleVisible);

return (
	

    <button id='topBtn' style={{display:visible?'inline':'none'}} onClick={scrollToTop}>
<AiOutlineArrowUp style={{fontSize:"20px"}}/>
    </button>
);
}

export default ScrollButton;