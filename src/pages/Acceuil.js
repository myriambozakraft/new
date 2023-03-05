


import React from 'react'; 

import Menu from '../Menu';
import water from '../water.jpg'; 
import fil from '../fil.jpg'; 
import pomm from '../pomm.jpg'; 
import pipip from '../pipip.webp'; 
import paa from '../paa.webp'; 
 


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faUser } from '@fortawesome/free-solid-svg-icons'
import { faWeightHanging  } from '@fortawesome/free-solid-svg-icons'





import Halo from './/car.js';


function Acceuil(props) {
return (
<div>
<div className="cherch">
      

<FontAwesomeIcon icon={ faUser} size="2x" color= "grey"/>
      <FontAwesomeIcon icon={ faUser} size="2x" color= "grey"/>

      <FontAwesomeIcon icon={faWeightHanging} size="2x" color= "grey"/>
     
      </div>
   
<div className="cherche">
      <input
        type="text" placeholder="naturaal.."></input>
        
     
      
      

        
      

</div>
<div>

<br></br>
<br></br>
<br></br>

    
    <Menu />
    <img src={water} widht="1000px" height="450px" alt=""/>

    Naturaal...
    
    <div>
     

   
    
    
<br></br>
<br></br>
<br></br>
    <Halo />
  
    
<br></br>
<br></br>
<br></br>
<p>
Le Lorem Ipsum est simplement du faux texte employé 
dans la composition et la mise en page avant impression. L
<br></br>
e Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte. Il n'a pas fait que survivre cinq siècles, mais s'est aussi adapté à la bureautique informatique, sans que son contenu n'en soit modifié. Il a été popularisé dans les années 1960 grâce à la vente de feuilles Letraset contenant des passages du Lorem Ipsum, et, plus récemment, par son inclusion dans des applications de mise en page de texte, comme Aldus PageMaker.

</p>

<div className="p">
<img  className="p" src={paa} widht="1000px" height="450px" alt=""/>
<span class="hi">
 promotion </span>
</div>

<div className="po">
<img  src={pipip} widht="1000px" height="450px" alt=""/>

<span class="hi">
 promotion </span></div>
<img className="pom" src={pomm} widht="1000px" height="450px" alt=""/>
</div>

<img src={fil} widht="1000px" height="450px" alt=""/>

</div>

</div>

);
}

export default Acceuil;
