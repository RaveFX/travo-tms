import React , {useState} from "react";
import Chat from "./Chat";
import Map from "./Map";
import Notepad from "./Notepad";

import {
    IconButton,
    SpeedDial,
    SpeedDialHandler,
    SpeedDialContent,
    SpeedDialAction,
  } from "@material-tailwind/react";
  import {
    PlusIcon,
    HomeIcon,
    CogIcon,
    Square3Stack3DIcon,
  } from "@heroicons/react/24/outline";
   
  export function SpeedDialPop(props) {

    // const [selectedComponent, setSelectedComponent] = useState(null);

    const{selectedComponent, setSelectedComponent} = props;
    const openChat = () => setSelectedComponent('Chat');
    const openMap = () => setSelectedComponent('Map');
    const openNote = () => setSelectedComponent('Note');

    return (
      <div className="">
        <div className="absolute bottom-10 right-10">
          <SpeedDial>
            <SpeedDialHandler>
              <IconButton size="lg" className="rounded-full">
                <PlusIcon className="h-5 w-5 transition-transform group-hover:rotate-45" />
              </IconButton>
            </SpeedDialHandler>
            <SpeedDialContent>
              <SpeedDialAction onClick={openChat}>
                <HomeIcon className="h-5 w-5" />
              </SpeedDialAction>
              <SpeedDialAction onClick={openMap}>
                <CogIcon className="h-5 w-5" />
              </SpeedDialAction>
              <SpeedDialAction onClick={openNote}>
                <Square3Stack3DIcon className="h-5 w-5" />
              </SpeedDialAction>
            </SpeedDialContent>
          </SpeedDial>
        </div>
        {selectedComponent === "Chat" && <Chat />}
        {selectedComponent === "Map" && <Map />}
        {selectedComponent === "Note" && <Notepad />}
      </div>
    );
  }