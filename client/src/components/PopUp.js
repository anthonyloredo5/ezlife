import react from 'react';
import { Dialog, DialogTitle, DialogContent } from '@material-ui/core';

//code to beplaced in parent file where button is located





//<PopUp
//  openPopup={openPopup}
//  setOpenPopup={setOpenPopup}
//>
//compenent to popup
//<SignUp/>
//</Popup>


function PopUp(props) {
    const { title, children, openPopup, setOpenPopup} = props;

    <Dialog open={openPopup}>
        <DialogTitle>
            <div>
                title
            </div>
        </DialogTitle>
        <DialogContent>
            <div>
                content
            </div>
        </DialogContent>
    </Dialog>
}

export default PopUp;