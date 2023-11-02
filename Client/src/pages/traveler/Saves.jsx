import React, { useState, useEffect, } from "react";
import { Link, useParams } from "react-router-dom";
import axios from 'axios';
import { Alert, Input, Card, Button, Checkbox, CardHeader, Avatar, } from "@material-tailwind/react";
import { BanknotesIcon, UserGroupIcon, UserIcon, WalletIcon } from "@heroicons/react/24/outline";
// import { id } from "date-fns/locale";


const user_id = sessionStorage.getItem('user_id');


function Icon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-6 w-6"
    >
      <path
        fillRule="evenodd"
        d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
        clipRule="evenodd"
      />
    </svg>
  );
}

function Tripid() {
  const { id } = useParams();
  return (
    <div>
      <p>{id}</p>
    </div>
  );
}

function TotalCostByTrip() {
  const { id } = useParams(); // Assuming this is the trip_id from the URL
  const [totalCost, setTotalCost] = useState(null);

  // useEffect(() => {
  //   axios
  //     .get(`http://localhost:8080/api/v1/budget/getTotalCostByTripId/${id}`) // Update the API endpoint to match your backend
  //     .then((response) => {
  //       setTotalCost(response.data);
  //     })
  //     .catch((error) => {
  //       console.error(error);
  //     });
  // }, [id]);

  const fetchTotalCost = () => {
    axios
      .get(`http://localhost:8080/api/v1/budget/getTotalCostByTripId/${id}`)
      .then((response) => {
        setTotalCost(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    // Fetch data initially
    fetchTotalCost();

    // Refresh the data every 5 seconds (adjust the interval as needed)
    const intervalId = setInterval(fetchTotalCost, 1000);

    // Cleanup the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, [id]);
 

  return (
    <div>
      <p>{totalCost !== null ? `LKR ${totalCost.toFixed(2)}` : 'Loading...'}</p>
    </div>
  
  
  );

}

function TotalCostByUser() {
  const { id } = useParams(); 

  const [totalCostByUser, setTotalCostByUser] = useState(0);

  // useEffect(() => {
  //   axios
  //     .get(`http://localhost:8080/api/v1/budget/getTotalCostByUserId/${user_id}`)
  //     .then((response) => {
  //       setTotalCostByUser(response.data);
  //     })
  //     .catch((error) => {
  //       console.error(error);
  //     });
  // }, [user_id]);

  const fetchTotalCostByUser = () => {
    axios
      .get(`http://localhost:8080/api/v1/budget/getTotalCostByUserId/${user_id}/${id}`)
      .then((response) => {
        setTotalCostByUser(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    // Fetch data initially
    fetchTotalCostByUser();

    // Refresh the data every 5 seconds (adjust the interval as needed)
    const intervalId = setInterval(fetchTotalCostByUser, 1000);

    // Cleanup the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div>
      <p>LKR {totalCostByUser}</p>
    </div>
  );
}

function RowCount() {
  const [rowCount, setRowCount] = useState(0);

  useEffect(() => {
    axios
      .get('http://localhost:8080/api/v1/tripMembers/count') // Replace with your actual backend URL
      .then((response) => {
        setRowCount(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div>
      <p>{rowCount}</p>
    </div>
  );
}

function UserCount() {
  const [userCount, setUserCount] = useState(0);

  useEffect(() => {
    axios
      .get('http://localhost:8080/api/v1/tripMembers/count') // Replace with your actual backend URL
      .then((response) => {
        setUserCount(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (userCount);
}

function PerUserCost() {
  const [perUserCost, setPerUserCost] = useState(null);
  const totalCost = TotalCostByTrip();
  const rowCount = RowCount();

  useEffect(() => {
    // Calculate the per-user cost when both totalCost and rowCount are available
    if (totalCost !== null && rowCount !== 0) {
      const perUserCostValue = totalCost / rowCount;
      setPerUserCost(perUserCostValue);
    }
  }, [totalCost, rowCount]);

  return (
    <div>
      <p>
        {perUserCost !== null
          ? `LKR ${perUserCost.toFixed()}`
          : 'Calculating...'}
      </p>
    </div>
  );
}
const data = [

  {
    amount: <TotalCostByTrip />,
    label: "Total Expenses",
    imgUrl: <BanknotesIcon/>,
    bgColor: "#eff2f7",
    textColor: "#212b36",
  },
  {
    amount: <RowCount />,
    label: "Trip Participants",
    imgUrl: <UserGroupIcon/>,
    bgColor: "#eff2f7",
    textColor: "#212b36",
  },
  {
    amount: <TotalCostByUser />,
    label: "Your Expenses",
    imgUrl: <WalletIcon/>,
    bgColor: "#eff2f7",
    textColor: "#212b36",
  },
  {
    // amount: <PerUserCost/>,
    amount: <PerUserCost/>,
    label: "Per User Cost",
    imgUrl: <UserIcon/>,
    bgColor: "#eff2f7",
    textColor: "#212b36",
  },

  // {
  //   amount: "LKR 5,000",
  //   label: "Balance Due",
  //   imgUrl: <WalletIcon/>,
  //   bgColor: "#eff2f7",
  //   textColor: "#212b36",
  // },

  // Add more data objects as needed
];

const Budgetcard = () => {
  return (
    <div className="m-5 flex">
      {data.map((item, index) => (
        <div key={index} className="m-5">
          <div
            className={`border-solid border-[#e7e7e7] bg-white flex flex-col justify-center pl-6 gap-4 w-[115%] h-40 shrink-0 items-start border rounded-lg`}
          >
            <div
              className={`bg-[${item.bgColor}] flex flex-col justify-center w-12 h-12 shrink-0 items-center rounded-[31px]`}
            >
              <div className="w-6">{item.imgUrl}   </div>
            </div>
            <div className="flex flex-col gap-px w-3/5">
              <div
                className={`whitespace-nowrap text-2xl font-['Inter'] font-bold leading-[30px] text-[${item.textColor}]`}
              >
                {item.amount}
              </div>
              <div
                className={`whitespace-nowrap text-xs font-['Poppins'] font-medium leading-[20px] text-[#637381] mr-10`}
              >
                {item.label}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};


function Budgetform() {
  const { id } = useParams();
  const tripno = id;


  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent the default form submission behavior

    // Get the form data
    const formData = new FormData(e.target);



    try {
      const response = await axios.post('http://localhost:8080/api/v1/budget/addBudget', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log(response);
      // <SubmitAlert />;
      // Handle the response here (e.g., show a success message)
      console.log('Response: Success', response.data);
    } catch (error) {
      // Handle errors here (e.g., show an error message)
      console.error('Error: kedup', error);
    }
  };



  return (
    <>

      <Card color="white" shadow={true}>

        <form onSubmit={handleSubmit} className=" m-5 text-sm mt-8 mb-2 w-100 max-w-screen-lg border-solid sm:w-55">
          <div className="mb-4 font-poppins flex gap-6">
            <Input name="cause" id="cause" size="lg" placeholder="Cause/Event" required />
            <input name="user_id" id="user_id" size="lg" placeholder="User ID" required value={user_id} type="hidden" />
            <input name="tripId" id="trip_id" size="lg"  required value={id} type="hidden" />
            <Input name="cost" id="cost" size="lg" placeholder="Cost" required />
            <input name="receipt" id="receipt" size="lg" placeholder="Cost" value={10} type="hidden" />
          </div>
          <div className="flex mb-4 gap-6">
            <select
              id="type" name="type"
              className="block text-xs w-full px-4 py-3 text-black-100  dark:border-gray-300"
            >
              <option selected>Category</option>
              <option >Food</option>
              <option >Travel</option>
              <option >Tickets</option>
              <option >Other</option>
            </select>

            <Input type="date" name="date" id="date" size="lg" placeholder="Date" />

          </div>
          <div className="flex flex-row gap-6">
            <div className="flex mb-4 gap-6">
              {/* <FileUpload /> */}
            </div>
            <div className="flex mb-4 gap-6">
              <Button type="submit" className="bg-[#22577A] ">
                Submit Expenses
              </Button>
            </div>
          </div>
        </form>
      </Card>
    </>
  );
}

function OtherMemberBudgets() {
  const { id } = useParams();

  return (
    <>

      <Card color="white" shadow={true}>

        
      </Card>
    </>
  );
}

const placedata = [
  {
    title: "Sigiriya",
    description:
      "Sigiriya or Sinhagiri is an ancient rock fortress located in the northern Matale District near the town of Dambulla in the Central Province, Sri Lanka.",
    imgUrl:
      "./cardimage.jpg",
  },
  {
    title: "Ella",
    description:
      "Small town in the Badulla District of Uva Province, Sri Lanka. The area has a rich bio-diversity, dense with numerous varieties of flora and fauna",
    imgUrl:
      "/ella.jpg",
  },
  {
    title: "Dunhinda Falls",
    description:
      "Dunhinda Falls is a waterfall located about 5 kilometres from Badulla in the lower central hills of Sri Lanka. The waterfall gets its name from the smoky dew drops.",
    imgUrl:
      "/dunhinda.jpg",
  },
  {
    title: "Sri Pada (Adam's Peak)",
    description:
      "Adam's Peak is a 2,243 m (7,359 ft) tall conical sacred mountain located in central Sri Lanka.It is well known for the Sri Pada (Śrī Pāda; Sinhala: ශ්‍රී පාද, sacred footprint)",
    imgUrl:
      "/adams.jpg",
  },

];

function BudgetPeeps() {
  const user_id = sessionStorage.getItem('user_id');
  const { id } = useParams(); // Assuming this is the trip_id from the URL
  const [budgetPeople, setBudgetPeople] = useState([]);

  useEffect(() => {
    // Make an API call to fetch data
    axios.get(`http://localhost:8080/api/v1/budget/getBudgetsByUserId/${user_id}/${id}`)
      .then((response) => {
        setBudgetPeople(response.data);
      })
      .catch((error) => {
        console.error('Error fetching data: ' + error);
      });
  }, [  ]);

  return (
    <>
      {budgetPeople.map((budgetPerson) => (
        <div key={budgetPerson.userName} className="flex  flex-row gap-6">
          <div className="bg-white p-4 rounded-xl w-36 shadow-lg">
            {/* Add an image URL here */}
            <img src={budgetPerson.imgUrl} alt="Avatar" className="w-full h-24 rounded-lg" />
            <h1 className="py-2 text-center font-bold">{budgetPerson.userName}</h1>
            <div>
              <Button className="">Balance: {budgetPerson.totalCost}</Button>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export function Saves() {
  return (
    // <Card className="m-10 top-40 p-3 w-100 h-60 ">
    //   <CardBody>
    //     <Typography variant="h5" color="blue-gray" className="mb-2">
    //       You haven't Save anything yet
    //     </Typography>
    //     <Typography>
    //       To save, Explore for hotels, restaurants and things to do, then tap the save icon
    //     </Typography>
    //   </CardBody>
    //   <CardFooter className="pt-0">
    //     <Button 
    //     className="h-[3rem] m-4 justify-center py-2 md:w-[150px] shadow-none hover:shadow-none active:shadow-none focus:shadow-none bg-[#22577A] rounded-full font-poppins font-extrabold'">Read More</Button>
    //   </CardFooter>
    // </Card>
    <>

      {/* Budget */}
      <div className="font-poppins w-full bg-[#F6F8FA] flex overflow-hidden ">
        {/* <div className="">
          <Sidebar />
        </div> */}

        <div className=" flex flex-col w-full">
          {/* <div>
          <TopNavbar />
           
          </div> */}
          <div className="mt-10 ml-10">
            <p className="font-bold text-2xl">Traveller Budget </p>
            <Tripid />
          </div>
          <div>
            <div className="flex">
              <Budgetcard />
            </div>
            <div className="ml-10  flex">
              <p className="font-bold">Add Expenses</p>
            </div>
            <div className="flex flex-row">
              <div className="mt-5 ml-10 w-[50%] mb-5 flex">
                <Budgetform />
              </div>
              <div className="mt-5 ml-10 w-[50%] mb-5 flex">
                <OtherMemberBudgets />
              </div>


              <div className="mt-5 gap-4 mb-5 w-[50%]  flex overflow-scroll overflow-y-hidden">
                {/* <BudgetPeople /> */}
                {/* <BudgetPeeps /> */}

              </div>
              <div className="flex mr-[50%] gap-8">
              <div
              className="flex-col m-5 "
            >
              <Link to="/Expenses">
                <Button className="bg-[#22577A] h-[25%] w-[150%] text-white font-poppins ">
                  View your Expenses
                </Button>
              </Link>
            </div>
            <div
              className=" flex-col m-5 "
            >
                 <Link to="/MemberExpenses">
                <Button className="bg-[#22577A] h-[25%] w-[260%]  text-white font-poppins ">
                  View  member Expenses
                </Button>
              </Link>
            </div>
            {/* <div
              className=" flex-col m-5 "
            >
                 <Link to="/ExtBudgetForm">
                <Button className="bg-[#22577A] h-[25%] w-[260%]  text-white font-poppins ">
                  Budget Estimate
                </Button>
              </Link>
            </div> */}
            </div>
           
            </div>
          
          </div>
        </div>
      </div>


    </>
  );
}