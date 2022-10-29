import React from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import DeleteSweepIcon from '@mui/icons-material/DeleteSweep';
import Button from '@mui/material/Button';

import Box from '@mui/material/Box';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import FileCopyIcon from '@mui/icons-material/FileCopyOutlined';
import SaveIcon from '@mui/icons-material/Save';
import PrintIcon from '@mui/icons-material/Print';
import ShareIcon from '@mui/icons-material/Share';
import CopyToClipboard from 'react-copy-to-clipboard';
const Message = (props) => {
   

    const actions = [
        { icon: <CopyToClipboard text={props.title + " " + props.content} ><FileCopyIcon /></CopyToClipboard>, name: 'Copy' },
        { icon: <SaveIcon />, name: 'Save' },
        { icon: <PrintIcon onClick={()=>{window.print()}}/>, name: 'Print' },
        { icon: <ShareIcon />, name: 'Share' },
    ];

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);


    const deleteNote = () => {
        props.deleteItem(props.id);
    }

    return (<>
        <div className="row row-cols-auto m-2">
            <div className="card p-4 border-0" style={{ width: "18rem" }}>
                <div className="card-body " style={{ backgroundImage: " linear-gradient(30deg, #8b80e74a, #544d5400)" }} >
                    <h5 className="card-title text-capitalize ">{props.title}</h5><p>{props.content}</p>
                    <div className="speed">
                    <Button className="delete_label" onClick={deleteNote}><DeleteSweepIcon /></Button>
                         <Box sx={{ height: '70px', transform: 'translateZ(0px)', flexGrow: 1 }}>
                            <SpeedDial
                                ariaLabel="SpeedDial controlled open example"
                                sx={{ position: 'absolute', bottom: 16, right: 16 }}
                                icon={<SpeedDialIcon />}
                                onClose={handleClose}
                                onOpen={handleOpen}
                                open={open}
                                direction="up"
                            >
                                {actions.map((action) => (
                                    <SpeedDialAction
                                        key={action.name}
                                        icon={action.icon}
                                        tooltipTitle={action.name}
                                        onClick={handleClose}
                                    />
                                ))}
                            </SpeedDial>
                        </Box>
                        </div>
                </div>

             </div>
        </div>

    </>)
}
export default Message;
