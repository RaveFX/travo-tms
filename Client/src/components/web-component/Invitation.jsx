
import React, { useState, useEffect } from "react";
import {
  Button,
  Input,
  Typography,
  MenuItem,
} from "@material-tailwind/react";
import { UserPlusIcon, ClipboardDocumentIcon, CheckIcon } from "@heroicons/react/24/outline";
import axios from 'axios';
import { useParams } from "react-router-dom";

export function SubscriptionPopover() {
  const { trip_id } = useParams();
  const [uniqueLink, setUniqueLink] = useState("");
  const [copySuccess, setCopySuccess] = useState(false);
  const [isCopying, setIsCopying] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const link = `http://127.0.0.1:5173/travo/text/${trip_id}/${uniqueLink}`;


  const loadTripinfo = async () => {
    try {
      const response = await axios.get(`http://localhost:8080/api/v1/trip/trip-information/${trip_id}`);
      const { uniqueLink } = response.data;
      setUniqueLink(uniqueLink);
    } catch (error) {
      console.error("Error loading trip information:", error);
    }
  }

  useEffect(() => {
    loadTripinfo();
  }, [trip_id]);

  const handleCopyToClipboard = async () => {
    try {
      setIsCopying(true);
      await navigator.clipboard.writeText(link);
      setCopySuccess(true);
    } catch (err) {
      console.error('Could not copy to clipboard: ', err);
      setCopySuccess(false);
    } finally {
      setIsCopying(false);
    }
  };

  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (

    <div>
      <div className="relative">
        <Button
          className={`flex flex-row gap-3 bg-white font-extrabold font-poppins text-[#000000] ${isCopying ? 'pointer-events-none' : 'hover:bg-[#F5F1F1] hover:shadow-[0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)]'} rounded-full w-[140px] h-[44px] shadow-[0 2px 4px rgba(0,0,0,0.15]`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <UserPlusIcon className='w-5 h-5 stroke-[#000000]' strokeWidth="3" />
          Invite- {trip_id}
        </Button>
        {isMenuOpen && (
          <div className="absolute top-12 right-0 mt-2 p-4 bg-white rounded-lg shadow-md">
            <MenuItem>
              <Typography variant="h6" color="blue-gray" className="mb-6">
                Invite your friends!
              </Typography>
            </MenuItem>
            <MenuItem>
              <div className="flex gap-2">
                <Input value={link} type="text" readOnly />
                <Button
                  className={`${copySuccess ? 'bg-[#57CC99] disabled' : 'bg-[#F5F1F1]'}`}
                  onClick={handleCopyToClipboard}
                  disabled={isCopying || copySuccess}
                >
                  {!copySuccess ? (
                    <ClipboardDocumentIcon className='w-5 h-5 stroke-[#000000]' strokeWidth="2" />
                  ) : (
                    <div className="flex flex-row justify-between p-0 m-0">
                      <CheckIcon className='w-[4.8rem] h-4 stroke-[#000000]' strokeWidth="3" />
                      <p className="font-size-1 mr-2">copied</p>
                    </div>
                  )}
                </Button>
              </div>
            </MenuItem>
            <MenuItem>
              <div className="flex gap-2 mt-4">
                <a
                  href={`https://api.whatsapp.com/send?text=${encodeURIComponent(`Check out this link: http://127.0.0.1:5173/travo/text/${trip_id}/${uniqueLink}`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#25D366] text-white p-2 rounded hover:bg-[#128C7E]"
                >
                  Share on WhatsApp
                </a>
                <a
                  href={`mailto:?subject=Check out this trip&body=${encodeURIComponent(`Join our trip: ${uniqueLink}`)}`}
                  className="bg-[#0072CE] text-white p-2 rounded hover:bg-[#0059A6]"
                >
                  Share via Email
                </a>
              </div>
            </MenuItem>
          </div>
        )}
      </div>
    </div >
  );
}





