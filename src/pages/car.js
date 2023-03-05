

import welcome from '../welcome.jpg'; 
import biooo from '../biooo.jpg'; 
import bio from '../bio.jpg'; 
import bb from '../bb.jpg'; 
import bi from '../bi.jpg'; 
import bibi from '../bibi.jpg';

import'../App.css';


import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css'
function Halo(props) {

const responsive = {
superLargeDesktop: {
// the naming can be any, depends on you.
breakpoint: { max: 4000, min: 3000 },
items: 5
},
desktop: {
breakpoint: { max: 3000, min: 1024 },
items: 3
},
tablet: {
breakpoint: { max: 1024, min: 464},
items: 2
},
mobile: {
breakpoint: { max: 464, min: 0 },
items: 1
}
};
return (
  <div className="App">

  
  <Carousel responsive={responsive}>
  

<div><img className='product--image' src={bb} alt="GAME ALOE
  PRIX:€25 
  "/>
 
</div>

<div><img className='product--image' src={biooo} alt="GAME ALOE
  PRIX:€14
  "/>


  PRIX:€8.99

  
  </div>
<div><img className='product--image' src={bi} alt="GAME ALOE
  PRIX:€25
  "/>
 
  PRIX:€3.99
  
</div>

<div><img className='product--image' src={bibi} alt="GAME ALOE
  PRIX:€25"/>
   
  PRIX:€6.99
  
 </div>

  <div><img className='product--image' src={bio} alt=""/>
  
   PRIX:€4.99
</div>

  <div><img className='product--image' src={welcome} alt="GAME ALOE
  PRIX:25 EURO
  "/>
  
  PRIX:€25 
 </div>
 
 
</Carousel>
</div>
  
 
  );
  }
 



 export default Halo