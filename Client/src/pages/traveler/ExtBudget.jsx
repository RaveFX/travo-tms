import React, { useEffect, useState } from "react";
import MultiStep from "react-multistep";


// // import BackgroundSidebar from "../assets/images/bg-sidebar-desktop.svg";
// // import BackgroundSidebarMobile from "../assets/images/bg-sidebar-mobile.svg";


// // import arcadeLogo from "../assets/images/icon-arcade.svg";
// // import advancedLogo from "../assets/images/icon-advanced.svg";
// // import proLogo from "../assets/images/icon-pro.svg";



// const ExtBudgetForm = () => {
//   //------------------------------STATES------------------------------
//   const [stepNumber, setStepNumber] = useState(() => 1);
//   const [goBackVisible, setGoBackVisible] = useState("invisible");
//   const [steps, setSteps] = useState([
//     { id: 1, title: "YOUR INFO", active: true },
//     { id: 2, title: "SELECT PLAN", active: false },
//     { id: 3, title: "ADD-ONS", active: false },
//     { id: 4, title: "SUMMARY", active: false },
//   ]);

//   const [yourInfo, setYourInfo] = useState({
//     name: "",
//     email: "",
//     phone: "",
//   });
//   const [isEmpty, setIsEmpty] = useState(false);
//   const [isPlanEmpty, setIsPlanEmpty] = useState(false);
//   const [planDuration, setPlanDuration] = useState("mo");
//   const [planDurationName, setPlanDurationName] = useState("Monthly");

//   const [plan, setPlan] = useState({
//     title: "",
//     price: 0,
//     yearly: false,
//   });

//   const [planOptions, setPlanOptions] = useState([
//     {
//       id: 1,
//     //   logo: arcadeLogo,
//       title: "Arcade",
//       price: 9,
//       monthlyPrice: 9,
//       yearlyPrice: 90,
//       selected: false,
//     },
//     {
//       id: 2,
//     //   logo: advancedLogo,
//       title: "Advanced",
//       price: 12,
//       monthlyPrice: 12,
//       yearlyPrice: 120,
//       selected: false,
//     },
//     {
//       id: 3,
//     //   logo: proLogo,
//       title: "Pro",
//       price: 15,
//       monthlyPrice: 15,
//       yearlyPrice: 150,
//       selected: false,
//     },
//   ]);

//   const [addonOptions, setAddonOptions] = useState([
//     {
//       id: 1,
//       title: "Online service",
//       desc: "Access to multiplayer games",
//       price: 1,
//       monthlyPrice: 1,
//       yearlyPrice: 10,
//       selected: false,
//     },
//     {
//       id: 2,
//       title: "Larger storage",
//       desc: "Extra 1TB of cloud save",
//       price: 2,
//       monthlyPrice: 2,
//       yearlyPrice: 20,
//       selected: false,
//     },
//     {
//       id: 3,
//       title: "Customizable profile",
//       desc: "Custom theme on your profile",
//       price: 2,
//       monthlyPrice: 2,
//       yearlyPrice: 20,
//       selected: false,
//     },
//   ]);

//   const [addons, setAddons] = useState([]);

//   const [displayThankyou, setDisplayThankyou] = useState(false);

//   //------------------------------SIDE EFFECTS------------------------------
//   useEffect(() => {
//     setSteps((prevSteps) => {
//       const updatedSteps = prevSteps.map((step) => {
//         if (step.id === stepNumber) {
//           return { ...step, active: true };
//         } else {
//           return { ...step, active: false };
//         }
//       });
//       return updatedSteps;
//     });
//     if (stepNumber > 1) {
//       setGoBackVisible("visible");
//     } else {
//       setGoBackVisible("invisible");
//     }

//     // console.log(steps);
//     // console.log(stepNumber);
//     // console.log(yourInfo);
//     // console.log(plan);
//     //console.log(addons);
//     // console.log(planOptions);
//     // console.log(addonOptions);
//     // console.log(plan);
//     // console.log(isPlanEmpty);
//     // console.log(displayThankyou);
//     // console.log(planDuration);
//   }, [
//     stepNumber,
//     yourInfo,
//     plan,
//     addons,
//     addonOptions,
//     planOptions,
//     isPlanEmpty,
//     displayThankyou,
//   ]);

//   //------------------------------FUNCTIONS------------------------------
//   const nextStep = () => {
//     if (stepNumber == 1) {
//       if (
//         yourInfo.name.length == 0 ||
//         yourInfo.email.length == 0 ||
//         yourInfo.phone.length == 0
//       ) {
//         setIsEmpty(true);
//         return;
//       } else {
//         setIsEmpty(false);
//       }
//     }

//     if (stepNumber == 2) {
//       if (plan.title.length == 0) {
//         setIsPlanEmpty(true);
//         return;
//       } else {
//         setIsPlanEmpty(false);
//       }
//     }

//     setStepNumber((prevStep) => prevStep + 1);
//   };

//   const prevStep = () => {
//     setStepNumber((prevStep) => prevStep - 1);
//   };

//   const changeClick = () => {
//     setStepNumber((prevStep) => prevStep - 2);
//   };

//   const changeYourInfo = (event) => {
//     setYourInfo((prevInfo) => {
//       return { ...prevInfo, [event.target.name]: event.target.value };
//     });
//   };

//   const selectPlan = (title, price, id) => {
//     setPlanOptions((prevPlanOptions) => {
//       const updatedPlanOptions = prevPlanOptions.map((planOption) => {
//         if (planOption.id == id) {
//           return { ...planOption, selected: true };
//         } else {
//           return { ...planOption, selected: false };
//         }
//       });
//       return updatedPlanOptions;
//     });

//     setPlan((prevPlan) => {
//       return { ...prevPlan, title: title, price: price };
//     });
//   };
//   const toggleDuration = () => {
//     if (plan.yearly == false) {
//       setPlan((prevPlan) => {
//         setPlanDuration("yr");
//         setPlanDurationName("Yearly");

//         setPlanOptions((prevPlanOptions) => {
//           const updatedPlanOptions = prevPlanOptions.map((planOption) => {
//             return { ...planOption, price: planOption.yearlyPrice };
//           });
//           return updatedPlanOptions;
//         });

//         setAddonOptions((prevAddonOptions) => {
//           const updatedAddonOptions = prevAddonOptions.map((addonOption) => {
//             return { ...addonOption, price: addonOption.yearlyPrice };
//           });
//           return updatedAddonOptions;
//         });

//         return { ...prevPlan, yearly: true };
//       });
//     } else {
//       setPlan((prevPlan) => {
//         setPlanDuration("mo");
//         setPlanDurationName("Monthly");

//         setPlanOptions((prevPlanOptions) => {
//           const updatedPlanOptions = prevPlanOptions.map((planOption) => {
//             return { ...planOption, price: planOption.monthlyPrice };
//           });
//           return updatedPlanOptions;
//         });

//         setAddonOptions((prevAddonOptions) => {
//           const updatedAddonOptions = prevAddonOptions.map((addonOption) => {
//             return { ...addonOption, price: addonOption.monthlyPrice };
//           });
//           return updatedAddonOptions;
//         });

//         return { ...prevPlan, yearly: false };
//       });
//     }

//     // setPlan((prevPlan) => {
//     //   return { ...prevPlan, yearly: !plan.yearly };
//     // });
//   };

//   const checkBox = (e) => {
//     const id = parseInt(e.target.getAttribute("data-id"));
//     const title = e.target.getAttribute("data-title-name");
//     const price = parseInt(e.target.getAttribute("data-price"));
//     if (e.target.checked == true) {
//       setAddons((prevAddons) => [
//         ...prevAddons,
//         { id: id, title: title, price: price },
//       ]);
//     } else {
//       setAddons((prevAddons) => {
//         return prevAddons.filter((addon) => addon.id != id);
//       });
//     }

//     setAddonOptions((prevAddons) => {
//       const updatedAddons = prevAddons.map((addon) => {
//         if (addon.id == id) {
//           if (addon.selected == false) {
//             return { ...addon, selected: true };
//           } else {
//             return { ...addon, selected: false };
//           }
//         } else {
//           return addon;
//         }
//       });
//       return updatedAddons;
//     });
//   };

//   // const selectAddon = (id) => {
//   //   setAddonOptions((prevAddons) => {
//   //     const updatedAddons = prevAddons.map((addon) => {
//   //       if (addon.id == id) {
//   //         if (addon.selected == false) {
//   //           return { ...addon, selected: true };
//   //         } else {
//   //           return { ...addon, selected: false };
//   //         }
//   //       } else {
//   //         return addon;
//   //       }
//   //     });
//   //     return updatedAddons;
//   //   });
//   // };

//   return (
//     <div className="container">
//       <div className="bg-[#d6d9e6] md:bg-white rounded-xl md:p-3 md:flex justify-center">
//         <div className="relative">
//           {/* <img
//             className="hidden md:block"
//             src={BackgroundSidebar}
//             alt="sidebar"
//           />
//           <img
//             className="block md:hidden w-full"
//             src={BackgroundSidebarMobile}
//             alt="topbar"
//           /> */}

//           <div className="flex justify-center mt-8 absolute inset-0 space-x-10 md:space-x-0 md:block md:mt-0 md:pl-6 md:pt-8 md:space-y-7">
//             {steps.map((step) => (
//               <Step
//                 key={step.id}
//                 number={step.id}
//                 title={step.title}
//                 active={step.active}
//               />
//             ))}
//           </div>
//         </div>
//         <div className="flex flex-col justify-between absolute top-40 w-[450px] md:static mb-40 rounded-2xl mx-8 px-16 pt-10 pb-16 bg-white md:px-0 md:py-5 md:mx-28 md:w-100 md:my-2">
//           {(displayThankyou && (
//             //<div className="flex flex-col justify-between absolute top-40 w-[450px] md:static mb-40 rounded-2xl mx-8 px-16 pt-10 pb-16 bg-white md:px-0 md:py-5 md:mx-28 md:w-100 md:my-2">
//             <>
//               <Thankyou />
//             </>
//             //</div>
//           )) || (
//             // <div className="flex flex-col justify-between absolute top-40 w-[450px] md:static mb-40 rounded-2xl mx-8 px-16 pt-10 pb-16 bg-white md:px-0 md:py-5 md:mx-28 md:w-100 md:my-2">
//             <>
//               <div>
//                 {(stepNumber === 1 && (
//                   <YourInfo
//                     onChangeYourInfo={changeYourInfo}
//                     yourInfo={yourInfo}
//                     currentStep={stepNumber}
//                     isEmpty={isEmpty}
//                   />
//                 )) ||
//                   (stepNumber === 2 && (
//                     <Plan
//                       onPlanSelect={selectPlan}
//                       onToggleDuration={toggleDuration}
//                       currentStep={stepNumber}
//                       planOptions={planOptions}
//                       isPlanEmpty={isPlanEmpty}
//                       planDuration={planDuration}
//                     />
//                   )) ||
//                   (stepNumber === 3 && (
//                     <Addons
//                       onBoxCheck={checkBox}
//                       currentStep={stepNumber}
//                       addonOptions={addonOptions}
//                       planDuration={planDuration}
//                     />
//                   )) ||
//                   (stepNumber === 4 && (
//                     <Summary
//                       selectedPlan={plan}
//                       selectedAddons={addons}
//                       currentStep={stepNumber}
//                       planDuration={planDuration}
//                       planDurationName={planDurationName}
//                       onChangeClick={changeClick}
//                     />
//                   ))}
//               </div>
//               <div className="flex justify-between fixed px-16 bottom-0 left-0 w-full bg-white p-5 md:static md:p-0 md:static items-center w-[700px]]">
//                 {/* {stepNumber != 1 && (
//               <div
//                 onClick={prevStep}
//                 className={`font-medium text-[#9699ab] cursor-pointer transition duration-100 hover:text-[#02295a] ${goBackVisible}`}
//               >
//                 Go back
//               </div>
//             )} */}
//                 <div
//                   onClick={prevStep}
//                   className={`font-medium text-[#9699ab] select-none cursor-pointer transition duration-100 hover:text-[#02295a] ${goBackVisible}`}
//                 >
//                   Go back
//                 </div>
//                 {stepNumber === 4 ? (
//                   <div
//                     onClick={() => setDisplayThankyou(true)}
//                     className="font-medium bg-[#473dff] select-none text-white py-3 px-5 rounded-lg cursor-pointer transition duration-100 hover:opacity-90"
//                   >
//                     Confirm
//                   </div>
//                 ) : (
//                   <div
//                     onClick={nextStep}
//                     className="font-medium bg-[#02295a] select-none text-white py-3 px-5 rounded-lg cursor-pointer transition duration-100 hover:opacity-90"
//                   >
//                     Next Step
//                   </div>
//                 )}
//               </div>
//             </>
//             // </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ExtBudgetForm;

// //Components.

// const AddonComponent = ({
//   id,
//   title,
//   desc,
//   price,
//   selected,
//   onBoxCheck,
//   planDuration,
// }) => {
//   const [addonBg, setAddonBg] = useState("");
//   const [check, setCheck] = useState(false);
//   useEffect(() => {
//     if (selected) {
//       setAddonBg("bg-[#f0f6ff]");
//       setCheck(true);
//     } else {
//       setAddonBg("");
//       setCheck(false);
//     }
//     // console.log("check", check);
//     // console.log("selected", selected);
//   }, [selected, check]);

//   // const toggleCheckbox = () => {
//   //   if (selected) {
//   //     setAddonBg("bg-[#d6d9e6]");
//   //     setCheck(true);
//   //   } else {
//   //     setAddonBg("");
//   //     setCheck(false);
//   //   }
//   // };

//   return (
//     <div
//       // onClick={() => {
//       //   onAddonSelect(id);
//       //   toggleCheckbox();
//       // }}
//       className={`${addonBg} flex justify-between items-center border border-[#d6d9e6] space-x-5 md:space-x-40 py-3 pr-8 pl-6 rounded-xl hover:border-[#02295a]`}
//     >
//       <div className="flex items-center justify-between w-full space-x-6">
//         <div className="flex items-center space-x-5 w-full">
//           <input
//             onChange={onBoxCheck}
//             data-id={id}
//             data-title-name={title}
//             data-price={price}
//             className="w-4 h-4"
//             type="checkbox"
//             checked={check}
//           />
//           <div className="">
//             <div className="font-bold text-[#02295a]">{title}</div>
//             <div className="text-[#9699ab] text-[14px]">{desc}</div>
//           </div>
//         </div>
//         <div className="text-[#adbeff] text-[14px] font-bold">
//           +${price}/{planDuration}
//         </div>
//       </div>
//     </div>
//   );
// };


// const Addons = ({ currentStep, onBoxCheck, planDuration, addonOptions }) => {
//   const [bg, setBg] = useState("black");

//   useEffect(() => {}, []);

//   return (
//     <div>
//       <SectionHeading
//         title="Pick add-ons"
//         desc="Add-ons help enhance your gaming experience."
//       />
//       <div className="space-y-5">
//         {addonOptions.map((addon) => (
//           <AddonComponent
//             onBoxCheck={onBoxCheck}
//             key={addon.id}
//             id={addon.id}
//             title={addon.title}
//             desc={addon.desc}
//             price={addon.price}
//             selected={addon.selected}
//             planDuration={planDuration}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };



// const ExtBudgetFormField = ({
//   name,
//   label,
//   placeholder,
//   onChangeYourInfo,
//   value,
//   isEmpty,
// }) => {
//   const [displayRequired, setDisplayRequired] = useState("hidden");
//   const [redBorder, setRedBorder] = useState("border-[#d6d9e6]");

//   useEffect(() => {
//     if (isEmpty == true) {
//       setDisplayRequired("block");
//       setRedBorder("border-[#ed3548]");
//     }
//     // console.log(displayRequired);
//     // console.log(isEmpty);
//   }, [isEmpty]);

//   return (
//     <div>
//       <div className="flex justify-between items-center">
//         <label>{label}</label>
//         <p
//           className={`${displayRequired} font-medium text-[14px] text-[#ed3548]`}
//         >
//           This field is required
//         </p>
//       </div>
//       <div>
//         <input
//           onChange={onChangeYourInfo}
//           name={name}
//           className={`font-medium w-full mt-1 p-2 pl-3 rounded-full rounded-lg border ${redBorder} text-[#02295a] text-[15px] hover:border-[#02295a] focus:border-white focus:ring-[#bfe2fd]`}
//           type="text"
//           placeholder={placeholder}
//           value={value}
//         />
//       </div>
//     </div>
//   );
// };


// const Plan = ({
//   currentStep,
//   onPlanSelect,
//   onToggleDuration,
//   planOptions,
//   isPlanEmpty,
//   planDuration,
// }) => {
//   const [errorDisplay, setErrorDisplay] = useState("invisible");
//   const [check, setCheck] = useState(false);

//   useEffect(() => {
//     if (isPlanEmpty) {
//       setErrorDisplay("block");
//     } else {
//       setErrorDisplay("invisible");
//     }

//     if (planDuration == "mo") {
//       setCheck(false);
//     } else {
//       setCheck(true);
//     }
//   }, [isPlanEmpty, planDuration]);

//   return (
//     <div>
//       <SectionHeading
//         title="Select your plan"
//         desc="You have the option of monthly or yearly billing."
//       />
//       <div className="grid md:grid-cols-3 md:grid-rows-1 gap-4">
//         {planOptions.map((planOption) => (
//           <PlanOption
//             onPlanSelect={onPlanSelect}
//             key={planOption.id}
//             id={planOption.id}
//             logo={planOption.logo}
//             title={planOption.title}
//             price={planOption.price}
//             selected={planOption.selected}
//             planDuration={planDuration}
//           />
//         ))}
//       </div>
//       <div
//         className={`${errorDisplay} font-medium text-[#ed3548] mt-5 text-center`}
//       >
//         Please select a plan!
//       </div>
//       <div className="font-medium mt-8 bg-[#fafbff] text-[#02295a] p-2 rounded-xl">
//         <div className="flex justify-center items-center space-x-5 text-[14px]">
//           <div>Monthly</div>
//           <div className="scale-75">
//             <label className="relative inline-flex items-center cursor-pointer">
//               <input
//                 onChange={onToggleDuration}
//                 type="checkbox"
//                 value=""
//                 className="sr-only peer"
//                 checked={check}
//               />
//               <div className="border-2 border-black w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer dark:bg-gray-800 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-gray-800"></div>
//             </label>
//           </div>
//           <div>Yearly</div>
//         </div>
//       </div>
//     </div>
//   );
// };


// const PlanOption = ({
//   id,
//   logo,
//   title,
//   price,
//   onPlanSelect,
//   selected,
//   planDuration,
// }) => {
//   const [bg, changeBg] = useState("");
//   const [displayTwoMonths, setDisplayTwoMonths] = useState("invisible");

//   useEffect(() => {
//     if (planDuration == "mo") {
//       setDisplayTwoMonths("invisible");
//     } else {
//       setDisplayTwoMonths("block");
//     }

//     if (selected) {
//       changeBg("bg-[#f0f6ff]");
//     } else {
//       changeBg("");
//     }
//   }, [selected, planDuration]);

//   return (
//     <div
//       onClick={() => onPlanSelect(title, price, id)}
//       className={`${bg} border border-[#d6d9e6] rounded-xl flex flex-row md:flex-col justify-start md:justify-between items-left pt-5 px-5 pr-14 cursor-pointer hover:border-[#473dff] focus:bg-violet-700`}
//     >
//       <div className="mb-5 md:mb-10 mr-10 md:mr-0">
//         <img src={logo} alt="Plan Option" />
//       </div>
//       <div>
//         <div className="text-[#02295a] font-medium">{title}</div>
//         <div className="text-[14px] text-[#9699ab] mb-3">
//           ${price}/{planDuration}
//         </div>
//         <div
//           className={`${displayTwoMonths} font-medium text-[#02295a] mb-3 -mt-2 w-[100px] text-[13px]`}
//         >
//           2 months free
//         </div>
//       </div>
//     </div>
//   );
// };

// const SectionHeading = ({ title, desc }) => {
//     return (
//       <div className="mb-8">
//         <h1 className="text-3xl font-bold text-[#02295a] my-1">{title}</h1>
//         <p className="text-[#9699ab] text-[14px]">{desc}</p>
//       </div>
//     );
//   };

//   const Step = ({ number, title, active }) => {
//     const [bg, setBg] = useState("");
//     useEffect(() => {
//       if (active) setBg("bg-[#adbeff]");
//       else setBg("");
//     }, [active]);
  
//     return (
//       <div className="flex text-left space-x-7 text-white">
//         <div
//           className={`font-bold border p-2 ${bg} text-center w-10 h-10 rounded-full`}
//         >
//           {number}
//         </div>
//         <div className="hidden md:block">
//           <div className="font-regular text-[#d6d9e6] text-[14px]">
//             Step {number}
//           </div>
//           <div className="font-bold text[15px]">{title}</div>
//         </div>
//       </div>
//     );
//   };
  
//   const Summary = ({
//     currentStep,
//     selectedPlan,
//     selectedAddons,
//     onChangeClick,
//     planDuration,
//     planDurationName,
//   }) => {
//     const [planPrice, setPlanPrice] = useState(() => selectedPlan.price);
//     const [addonsPrice, setAddonsPrice] = useState(() => {
//       if (selectedAddons.length == 0) {
//         return 0;
//       } else {
//         let totalAddonsPrice = 0;
//         selectedAddons.map((addon) => {
//           totalAddonsPrice += addon.price;
//         });
//         return totalAddonsPrice;
//       }
//     });
//     const [grandTotal, setGrandTotal] = useState(() => planPrice + addonsPrice);
  
//     useEffect(() => {
//       // console.log(planPrice);
//       // console.log(addonsPrice);
//       // console.log(grandTotal);
//       // console.log(selectedPlan);
//       // console.log(selectedAddons);
//     }, [selectedPlan, selectedAddons]);
  
//     return (
//       <div>
//         <SectionHeading
//           title="Finishing up"
//           desc="Double-check everything looks OK before confirming."
//         />
//         <div>
//           <div className="bg-[#f0f6ff] rounded-xl p-5 mb-5">
//             <div className="font-medium text-[#02295a] flex justify-between items-center mb-3">
//               <div className="mb-5">
//                 <div>
//                   {selectedPlan.title} {`(${planDurationName})`}
//                 </div>
//                 <a
//                   onClick={onChangeClick}
//                   className="text-[#9699ab] text-[14px] cursor-pointer underline decoration-solid"
//                 >
//                   Change
//                 </a>
//               </div>
//               <div className="font-medium">
//                 ${selectedPlan.price}/{planDuration}
//               </div>
//             </div>
//             <div className="space-y-3 mb-10 text-[14px] border-t-2 pt-4 text-[#9699ab]">
//               {selectedAddons.map((addon) => (
//                 <div key={addon.id} className="flex justify-between items-center">
//                   <div>{addon.title}</div>
//                   <div>
//                     +${addon.price}/{planDuration}
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//           <div className="flex justify-between items-center px-5">
//             <div className="text-[#9699ab] text-[14px]">
//               Total per{" "}
//               {planDurationName
//                 .toLowerCase()
//                 .substring(0, planDurationName.length - 2)}
//             </div>
//             <div className="text-[#473dff] font-bold">
//               +${grandTotal}/{planDuration}
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   };

//   const Thankyou = () => {
//     return (
//       <div className="flex flex-col justify-center items-center space-y-5 text-center mt-28">
//         <div>
//           <img src={thankyouIcon} alt="Thank you" />
//         </div>
//         <div className="font-bold text-[#02295a] text-3xl">Thank you!</div>
//         <p className="text-[#9699ab] text-[14px] w-96">
//           Thanks for confirming your subscription! We hope you have fun using our
//           platExtBudgetForm. If you ever need support. Please feel free to email us at
//           zainkazi27@gmail.com
//         </p>
//       </div>
//     );
//   };

//   const YourInfo = ({ yourInfo, onChangeYourInfo, isEmpty }) => {
//     const [ExtBudgetFormFields, setExtBudgetFormFields] = useState([
//       {
//         id: 1,
//         name: "name",
//         label: "Name",
//         placeholder: "e.g John Doe",
//       },
//       {
//         id: 2,
//         name: "email",
//         label: "Email Address",
//         placeholder: "e.g john@gmail.com",
//       },
//       {
//         id: 3,
//         name: "phone",
//         label: "Phone Number",
//         placeholder: "e.g +1 234 567 890",
//       },
//     ]);
  
//     // useEffect(() => {
//     //   console.log(isEmpty);
//     // }, [isEmpty]);
  
//     return (
//       <div>
//         <SectionHeading
//           title="Personal Info"
//           desc="Please provide your name, email address, and phone number."
//         />
//         <ExtBudgetForm>
//           <div className="flex flex-col space-y-6 text-[14px]">
//             {ExtBudgetFormFields.map((ExtBudgetFormField) => (
//               <ExtBudgetFormField
//                 onChangeYourInfo={onChangeYourInfo}
//                 key={ExtBudgetFormField.id}
//                 name={ExtBudgetFormField.name}
//                 label={ExtBudgetFormField.label}
//                 placeholder={ExtBudgetFormField.placeholder}
//                 value={yourInfo[ExtBudgetFormField.name]}
//                 isEmpty={isEmpty}
//               />
//             ))}
//           </div>
//         </ExtBudgetForm>
//       </div>
//     );
//   };



import { Link, useParams } from "react-router-dom";
import Sidebar from '../../components/web-component/Sidebar';
import TopNavbar from '../../components/web-component/Navbar';
import axios from 'axios';
import { Alert, Card, Input, Checkbox, CardHeader,  CardBody,CardFooter,Typography,Button,Avatar, } from "@material-tailwind/react";



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
 





export default function ExtBudgetForm() {
  return (
    <>
      <div className="font-poppins w-full bg-[#F6F8FA] flex overflow-hidden ">
        <div className="">
          <Sidebar />
        </div>
        
        <div className=" flex flex-col w-full">
          <div>
          <TopNavbar />
           
          </div>
          <div className="mt-10 ml-10">
            <p className="font-bold text-2xl">Traveller Budget : {user_id}</p>
          </div>
        
           
           
              <div className="mx-[30%] ">

{/* <MultiStep activeStep={1} prevButton={prevButton} nextButton={nextButton}>
    <StepOne title='Step 1'/>
    <StepTwo title='Step 2'/>
</MultiStep> */}
                {/* <Extform /> */}
                <MultiStepForm />
              </div>
             
              
    
          
          
        </div>
      </div>
    </>
  );
}



   
function Extform() {
    return (
    
       <Card color="transparent" shadow={false}>
        <Typography variant="h4" color="blue-gray">
          Budget Wizard 💰 
        </Typography>
        <Typography color="gray" className="mt-1 font-normal">
          Enter your expected budget for your trip.
        </Typography>
        <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
          <div className="mb-1 flex flex-col gap-6">
            <Typography variant="h6" color="blue-gray" className="-mb-3">
            Travelling Costs
            </Typography>
            <Input
              size="lg"
              placeholder="Enter expected travelling costs"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Food Costs
            </Typography>
            <Input
              size="lg"
              placeholder="Enter expected food costs"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
            <Typography variant="h6" color="blue-gray" className="-mb-3">
            Beverages
            </Typography>
            <Input
              size="lg"
              placeholder="Enter expected beverage costs"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
            <Typography variant="h6" color="blue-gray" className="-mb-3">
            Hotel/ Stay costs
            </Typography>
            <Input
              size="lg"
              placeholder="Enter expected hotel/ stay costs"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
          </div>
          
          <Button className="mt-6" fullWidth>
            Generate Budget
          </Button>
          
        </form>
      </Card>
    );
  }

function MultiStepForm() {
    const [formData, setFormData] = useState({
      firstName: '',
      lastName: '',
      dob: '',
      gender: '',
      email: '',
      password: '',
      confirmPassword: '',
    });
    const [currentStep, setCurrentStep] = useState(1);
    const nextStep = () => {
      setCurrentStep(currentStep + 1);
    };
    const prevStep = () => {
      setCurrentStep(currentStep - 1);
    };
    const renderStep = () => {
      switch (currentStep) {
        case 1:
          return <Step1 formData={formData} setFormData={setFormData} />;
        case 2:
          return <Step2 formData={formData} setFormData={setFormData} />;
        case 3:
          return <Step3 formData={formData} setFormData={setFormData} />;
        case 4:
          return <Step4 formData={formData} />;
        default:
          return null;
      }
    };
    return (
      <div className="container mt-5">
        <form>
          {renderStep()}
          <div className="mt-3">
            {currentStep > 1 && (
              <Button
                type="button"
                className="btn btn-secondary me-2"
                onClick={prevStep}
              >
                Previous
              </Button>
            )}
            {currentStep < 4 && (
              <Button
                type="button"
                className="btn btn-primary"
                onClick={nextStep}
              >
                Next
              </Button>
            )}
          </div>
        </form>
      </div>
    );
  }

  function Step1({ formData, setFormData }) {
    return (
      <div>
        <h2>Step 1: First Name & Last Name</h2>
        <div className="mb-3">
          <label htmlFor="firstName" className="form-label">
            First Name
          </label>
          <input
            type="text"
            className="form-control"
            id="firstName"
            value={formData.firstName}
            onChange={(e) =>
              setFormData({ ...formData, firstName: e.target.value })
            }
          />
        </div>
        <div className="mb-3">
          <label htmlFor="lastName" className="form-label">
            Last Name
          </label>
          <input
            type="text"
            className="form-control"
            id="lastName"
            value={formData.lastName}
            onChange={(e) =>
              setFormData({ ...formData, lastName: e.target.value })
            }
          />
        </div>
      </div>
    );
  }

  function Step2({ formData, setFormData }) {
    return (
      <div>
        <h2>Step 2: Date of Birth & Gender</h2>
        <div className="mb-3">
          <label htmlFor="dob" className="form-label">
            Date of Birth
          </label>
          <input
            type="date"
            className="form-control"
            id="dob"
            value={formData.dob}
            onChange={(e) =>
              setFormData({ ...formData, dob: e.target.value })
            }
          />
        </div>
        <div className="mb-3">
          <label htmlFor="gender" className="form-label">
            Gender
          </label>
          <select
            className="form-select"
            id="gender"
            value={formData.gender}
            onChange={(e) =>
              setFormData({ ...formData, gender: e.target.value })
            }
          >
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>
      </div>
    );
  }

  function Step3({ formData, setFormData }) {
    return (
      <div>
        <h2>Step 3: Email & Password</h2>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            value={formData.password}
            onChange={(e) =>
              setFormData({ ...formData, password: e.target.value })
            }
          />
        </div>
        <div className="mb-3">
          <label htmlFor="confirmPassword" className="form-label">
            Confirm Password
          </label>
          <input
            type="password"
            className="form-control"
            id="confirmPassword"
            value={formData.confirmPassword}
            onChange={(e) =>
              setFormData({ ...formData, confirmPassword: e.target.value })
            }
          />
        </div>
      </div>
    );
  }

  function Step4({ formData }) {
    return (
      <div>
        <h2>Step 4: Preview</h2>
        <div>
          <strong>First Name:</strong> {formData.firstName}
        </div>
        <div>
          <strong>Last Name:</strong> {formData.lastName}
        </div>
        <div>
          <strong>Date of Birth:</strong> {formData.dob}
        </div>
        <div>
          <strong>Gender:</strong> {formData.gender}
        </div>
        <div>
          <strong>Email:</strong> {formData.email}
        </div>
      </div>
    );
  }

 