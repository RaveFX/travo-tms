import React from "react";
import { Link,useNavigate } from "react-router-dom";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
 
export default function TabBar(props) {

  const navigate = useNavigate();
  const {data} = props;

  const [activeTab, setActiveTab] = React.useState("all trips");
  const handleTabClick = (value) => {
    setActiveTab(value);
    // Navigate to the specified route when a tab is clicked
    navigate(`/${value}`);
   
  };
  return (
  
    <Tabs value={activeTab} className="ml-4">
      <TabsHeader
        className="rounded-none border-b border-blue-gray-50 bg-transparent p-0"
        indicatorProps={{
          className: "bg-transparent border-b-2 border-[#22577A] shadow-none rounded-none",
        }}
      >
        {data.map(({ label, value }) => (

         
          <Tab
            key={value}
            value={value}
            onClick={() => handleTabClick(value)}
            className={activeTab === value ? "text-[#30AA7C] font-bold" : ""}
          >
          
            {label}
          </Tab>
         
        ))}
      </TabsHeader>
      <TabsBody>
        {data.map(({ value, desc }) => (
          <TabPanel key={value} value={value}>
            {desc}
          </TabPanel>
        ))}
      </TabsBody>
    </Tabs>
   
  );
}