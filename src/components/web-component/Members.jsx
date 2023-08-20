import {
  Popover,
  PopoverHandler,
  PopoverContent,
  Avatar,
  Button,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
} from "@material-tailwind/react";
 
export default function MemberPopOver() {

  const members = [
    { id: 1, name: 'Sanduni', avatarSrc: './public/images/Female(1).svg', details: 'Member details here' },
    { id: 2, name: 'Kanishka', avatarSrc: './public/images/Female.svg', details: 'Member details here' },
    { id: 3, name: 'Samuel', avatarSrc: './public/images/Female(1).svg', details: 'Member details here' },
    { id: 4, name: 'Samindu', avatarSrc: './public/images/Male.svg', details: 'Member details here' },
    { id: 5, name: 'Madushi', avatarSrc: './public/images/Male(1).svg', details: 'Member details here' },
    // Add more members as needed
  ];

  return (
    <Popover placement="bottom">
      <PopoverHandler>
        <button>
          <div className="flex items-center -space-x-4">
            {members.map((member, index) => (
              <div
                key={member.id}
                className={`ml-${
                  index !== 0 ? -20 : 0
                } transition-all duration-200 ease-in-out`}
              >
                <Avatar
                  variant="circular"
                  alt={member.name}
                  src={member.avatarSrc}
                />
              </div>
            ))}
          </div>
        </button>
      </PopoverHandler>
      <PopoverContent className="w-72 z-[1000]">
        <List>
          {members.map((member) => (
            <ListItem key={member.id}>
              <ListItemPrefix>
                <Avatar
                  variant="circular"
                  alt={member.name}
                  src={member.avatarSrc}
                />
              </ListItemPrefix>
              <div>
                <Typography variant="h6" color="blue-gray">
                  {member.name}
                </Typography>
                <Typography
                  variant="small"
                  color="gray"
                  className="font-normal"
                >
                  {member.details}
                </Typography>
              </div>
            </ListItem>
          ))}
        </List>
      </PopoverContent>
    </Popover>
  );
}