


import React from 'react'; 
import fil from '../fil.jpg'; 

import Menu from '../Menu'; 
import Halo from './car.js';
function produit(props) {
return (
<div>
    <Menu/>
<h1>produits</h1>
<Halo />
<Halo />
<Halo />

<img src={fil} widht="1000px" height="450px" alt=""/>
</div>
);
}

export default produit;
