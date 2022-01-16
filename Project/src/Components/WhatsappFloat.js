import React, {useState} from 'react';

const WhatsappFloat = () =>{

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



window.addEventListener('scroll', toggleVisible);

return (
	

//     <button id='whatsappBtn' style={{display:visible?'inline':'none'}} >
// <img src="https://img.icons8.com/color/50/000000/whatsapp.png" alt='whatsapp'/>
//     </button>
 <a href="https://api.whatsapp.com/send?phone=+919867348169&text=Hi, I want to place my order at Dokmen" style={{display :visible?'inline':'none'}} id='whatsappBtn'>
<img src="https://img.icons8.com/color/50/000000/whatsapp.png" alt='whatsapp'/>
</a> 
);
}

export default WhatsappFloat;
