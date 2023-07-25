import React, { useState } from 'react'; // Don't forget to import useState
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
} from "@material-tailwind/react";

export default function Shop() {
    // Create state to track selected cards
    const [selectedCards, setSelectedCards] = useState([]);

    // Dummy data for cards
    const cardData = [
        {
            id: 1,
            title: "Adobe Photoshop CC 2022",
            location: "Lisbon, Portugal",
            price: "$850",
            imgUrl: "https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        },
        {
            id: 2,
            title: "Adobe Photoshop CC 2022",
            location: "Lisbon, Portugal",
            price: "$850",
            imgUrl: "https://images.unsplash.com/photo-1511556532299-8f662fc26c06?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        },
        {
            id: 3,
            title: "Adobe Photoshop CC 2022",
            location: "Lisbon, Portugal",
            price: "$850",
            imgUrl: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        },
        {
            id: 2,
            title: "Adobe Photoshop CC 2022",
            location: "Lisbon, Portugal",
            price: "$850",
            imgUrl: "https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        },
        {
            id: 3,
            title: "Adobe Photoshop CC 2022",
            location: "Lisbon, Portugal",
            price: "$850",
            imgUrl: "https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        },
        {
            id: 3,
            title: "Adobe Photoshop CC 2022",
            location: "Lisbon, Portugal",
            price: "$850",
            imgUrl: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        },
        {
            id: 2,
            title: "Adobe Photoshop CC 2022",
            location: "Lisbon, Portugal",
            price: "$850",
            imgUrl: "https://images.unsplash.com/photo-1539185441755-769473a23570?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80",
        },
        // Add more card data here if needed
    ];

    // Function to toggle selection of a card
    const toggleSelectCard = (id) => {
        if (selectedCards.includes(id)) {
            setSelectedCards(selectedCards.filter((cardId) => cardId !== id));
        } else {
            setSelectedCards([...selectedCards, id]);
        }
    };

    return (
        <div>
            <div className='flex flex-wrap gap-4'>
                {cardData.map((card) => (
                    <div key={card.id} className={`w-96 ${selectedCards.includes(card.id) ? 'bg-blue-100' : 'bg-white'} rounded-xl p-3`}>
                        <Card className="w-full shadow-lg hover:shadow-xl hover:transform hover:scale-105 duration-300 ">
                            <CardHeader color="blue-gray" className="relative h-56">
                                <div className="relative flex items-end overflow-hidden rounded-xl">
                                    <img src={card.imgUrl} alt="Hotel Photo" />
                                    <div className="flex items-center space-x-1.5 rounded-lg bg-blue-500 px-4 py-1.5 text-white duration-100 hover:bg-blue-600">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-3 w-3">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                                        </svg>

                                        <button className="text-sm" onClick={() => toggleSelectCard(card.id)}>Add to cart</button>
                                    </div>
                                </div>
                            </CardHeader>
                            <CardBody>
                                <div className="mt-1 p-2">
                                    <h2 className="text-slate-700">{card.title}</h2>
                                    <p className="mt-1 text-sm text-slate-400">{card.location}</p>

                                    <div className="mt-3 flex items-end justify-between">
                                        <p className="text-lg font-bold text-blue-500">{card.price}</p>

                                        <div className="flex items-center space-x-1.5 rounded-lg bg-blue-500 px-4 py-1.5 text-white duration-100 hover:bg-blue-600">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-4 w-4">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                                            </svg>

                                            <button className="text-sm">Edit</button>
                                        </div>
                                    </div>
                                </div>
                            </CardBody>
                        </Card>
                    </div>
                ))}
            </div>
        </div>
    );
}
