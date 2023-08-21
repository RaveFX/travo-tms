import { Button } from "@material-tailwind/react";
 
function ButtonVariants() {

    const btns=[
        {title:"Add New",variant:"outlined"}
    ]
  return (


    <div className="flex w-max gap-4">
      <Button variant={variant}>{title}</Button>
     
    </div>
  );
}
export default ButtonVariants
