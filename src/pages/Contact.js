

import React from 'react'; 

import Menu from '../Menu';

function contact(props) {
return (
<div>
    <Menu/>
   
<h1>contact</h1>

  <div class="con">
   
  <>
  
  <div>
    <h1> FORMULAIRE DE CONTACT</h1>
  <label for="email">Nom</label>
  
<br></br>
  <input name="myInput" />
<br></br>
<label for="email">prenom</label>

<br></br>
  <input name="myInput" /> 
  <br></br>
  
          <label for="email">Email</label>
 
<br></br>
          <input type="email" name="email" id="email"></input>
          <br></br>
     POSEZ VOS QUESTION
        <br></br>
          <textarea>
 
</textarea>
<br></br>
<br></br>
<button type='submit'>Submit</button>
        </div>
    </>


    </div>
    </div>

);
}

export default contact;
