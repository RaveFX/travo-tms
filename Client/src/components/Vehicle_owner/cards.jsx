import React from "react";

import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
  Tooltip,
  IconButton,
} from "@material-tailwind/react";
import {
  BanknotesIcon,
  StarIcon,
  HeartIcon,
  WifiIcon,
  HomeIcon,
  TvIcon,
  FireIcon,
} from "@heroicons/react/24/solid";

const cards = [
  {
    name: "Wooden House, Florida",
    rating: 5,
    price: 129,
    features: ["Free wifi", "2 bedrooms", "65 HDTV", "Fire alert"],
    image:
      "https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
  },
  {
    name: "Beach House, California",
    rating: 4.5,
    price: 159,
    features: ["Pool", "Private beach access", "BBQ grill", "Fire pit"],
    image:
      "https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
  },
  {
    name: "Mountain Cabin, Colorado",
    rating: 4,
    price: 199,
    features: [
      "Hot tub",
      "Ski in/ski out",
      "Wood-burning fireplace",
      "Game room",
    ],
    image:
      "https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
  },
  {
    name: "Mountain Cabin, Colorado",
    rating: 4,
    price: 199,
    features: [
      "Hot tub",
      "Ski in/ski out",
      "Wood-burning fireplace",
      "Game room",
    ],
    image:
      "https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
  },
];

const CardList = () => {
  return (
    <div className="flex h-full font-poppins ml-2 gap-5 text-sm rounded-2xl">
      {cards.map((card) => (
        <Card key={card.name}>
          <CardHeader floated={false} color="blue-gray">
            <img src={card.image} alt="ui/ux review check" />
            <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-tr from-transparent via-transparent to-black/60 " />
            <IconButton
              size="sm"
              color="red"
              variant="text"
              className="!absolute top-4 right-4 rounded-full"
            >
              <HeartIcon className="h-6 w-6" />
            </IconButton>
          </CardHeader>
          <CardBody>
            <div className="mb-3 flex items-center justify-between">
              <Typography
                variant="h5"
                color="blue-gray"
                className="font-medium"
              >
                {card.name}
              </Typography>
              <Typography
                color="blue-gray"
                className="flex items-center gap-1.5 font-normal"
              >
                <StarIcon className="-mt-0.5 h-5 w-5 text-yellow-700" />
                {card.rating}
              </Typography>
            </div>
            <Typography color="gray">{card.features.join(", ")}</Typography>
          </CardBody>
          <CardFooter className="pt-3">
            <Button size="lg" fullWidth={true}>
              Reserve
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
};

export default CardList;
