// Write all the code here
import React from 'react';
import Popup from 'reactjs-popup';

const MyPopup = () => (
<Popup 
trigger={<button type="button">Send</button>}
position="right center"
modal
>
    <div>
        <p>Insert your messeage here.</p>
        <button onClick={() => Popup.close()}>Close</button>
    </div>
  </Popup>
);
