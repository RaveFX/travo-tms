import {
    List,
    ListItem,
    ListItemPrefix,
    Avatar,
    Card,
    Typography,
} from "@material-tailwind/react";

const ListWithAvatar = () => {
    return (
        <Card className="w-[100vh] m-5">
            <List>
                <table className="min-w-full bg-white dark:bg-whiye ">
                    <tbody className="m-5">
                        <tr className="h-12 hover:bg-gray-200 cursor-pointer">


                            <td className="text-center  items-center  whitespace-no-wrap">
                                <div className="flex">
                                    <div className="h-8 w-8">
                                        <img src="https://tuk-cdn.s3.amazonaws.com/assets/components/advance_tables/at_1.png" alt className="h-full w-full rounded-full overflow-hidden shadow" />
                                    </div>
                                    <p className="ml-2 text-gray-600 dark:text-gray-800 tracking-normal  text-sm">Carrie Anthony</p>
                                </div>
                            </td>

                            <td className="text-center text-xs  whitespace-no-wrap text-gray-600 dark:text-gray-800 tracking-normal ">07045869852</td>
                            <td className="text-center text-xs  whitespace-no-wrap text-gray-600 dark:text-gray-800 tracking-normal">Kandy</td>
                            <td className="text-center text-xs  whitespace-no-wrap text-gray-600 dark:text-gray-800 tracking-normal">27 of Aug 2023</td>
                            <td className="text-center text-xs  whitespace-no-wrap text-gray-600 dark:text-gray-800 tracking-normal">20</td>
                        </tr>
                        <tr className="h-12 hover:bg-gray-200 cursor-pointer">


                            <td className="text-center  items-center  whitespace-no-wrap">
                                <div className="flex">
                                    <div className="h-8 w-8">
                                        <img src="https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt className="h-full w-full rounded-full overflow-hidden shadow" />
                                    </div>
                                    <p className="ml-2 text-gray-600 dark:text-gray-800 tracking-normal  text-xs">Carrie Anthony</p>
                                </div>
                            </td>

                            <td className="text-center text-xs  whitespace-no-wrap text-gray-600 dark:text-gray-800 tracking-normal ">07045869852</td>
                            <td className="text-center text-xs  whitespace-no-wrap text-gray-600 dark:text-gray-800 tracking-normal">Kandy</td>
                            <td className="text-center text-xs  whitespace-no-wrap text-gray-600 dark:text-gray-800 tracking-normal">27 of Aug 2023</td>
                            <td className="text-center text-xs  whitespace-no-wrap text-gray-600 dark:text-gray-800 tracking-normal">20</td>
                        </tr>
                        <tr className="h-12 hover:bg-gray-200 cursor-pointer">


                            <td className="text-center  items-center  whitespace-no-wrap">
                                <div className="flex">
                                    <div className="h-8 w-8">
                                        <img src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt className="h-full w-full rounded-full overflow-hidden shadow" />
                                    </div>
                                    <p className="ml-2 text-gray-600 dark:text-gray-800 tracking-normal  text-xs">Carrie Anthony</p>
                                </div>
                            </td>

                            <td className="text-center text-xs  whitespace-no-wrap text-gray-600 dark:text-gray-800 tracking-normal ">07045869852</td>
                            <td className="text-center text-xs  whitespace-no-wrap text-gray-600 dark:text-gray-800 tracking-normal">Kandy</td>
                            <td className="text-center text-xs  whitespace-no-wrap text-gray-600 dark:text-gray-800 tracking-normal">27 of Aug 2023</td>
                            <td className="text-center text-xs  whitespace-no-wrap text-gray-600 dark:text-gray-800 tracking-normal">20</td>
                        </tr>
                    </tbody>
                </table>
            </List>
        </Card>
    );
}
export default ListWithAvatar