import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";

export default function Cardss() {
  return (
    <Card className="w-[35%]">
      <CardHeader shadow={false} floated={false}>
        <img
          src="https://images.unsplash.com/photo-1642095012245-bda8033e8ee3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1026&q=80"
          alt="card-image"
          className="  h-48 w-48 mr-3 object-cover rounded-xl"
        />
      </CardHeader>
      <CardBody>
        <div className="m-2 pl-9 flex items-center justify-between">
          <Typography color="blue-gray" className=" text-center font-bold">
            Book Hotel
          </Typography>
        </div>
        <Typography
          variant="small"
          color="gray"
          className="font-normal m-5 text-center opacity-75"
        >
          Hey there you are! You deserve this
        </Typography>
      </CardBody>
      <CardFooter className="m-1 mb-4 pl-12 w-max pt-0">
        <Button children="Book Now" color="indigo" />
      </CardFooter>
    </Card>
  );
}
