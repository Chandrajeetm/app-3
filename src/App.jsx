import React, { useState } from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Message from "./Message";
import Navbar from "./Navbar";
import InputBar from "./InputBar";
import Footer from "./Footer";
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';

const App = () => {
    const [addItem, setIaddtem] = useState([]);
    const [a,seta]=useState(false);


    const addNote = (note) => {
        seta(true);
        setIaddtem((prev) => {
            return [...prev, note]
        });
    };

    const onDelete =(id) => {
        if(addItem.length===1)
        {
            seta(false);
        }
        setIaddtem((prevdata) => 
           
            prevdata.filter((curr, inde) => { 
               
                return inde!==id;
            }
            )
        );
    };
    return (<>
        <Navbar size={addItem.length} />
        <hr/>
        <div className="container ">
            <InputBar passNote={addNote} />
            {a?(
            <div className="container bottommargin">
                <div className="whole container text-center p-md-2 mt-4 d-flex flex-wrap justify-content-center">

                    {addItem && addItem.map((value, index) => {
                        return <Message

                            key={index}
                            id={index}
                            title={value.title}
                            content={value.content}
                            deleteItem={onDelete}

                        />
                    })
                    }

                </div>
            </div>
            ):<div className="keepNoteHere">
                <h1 className="d-flex justify-content-center text-center fs-1 text-muted">Keep Your Note Here <span><AppRegistrationIcon className="fs-1"/></span></h1>
            </div>}
        </div>

        <Footer />
    </>)
}
export default App;