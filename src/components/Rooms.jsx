
import { useContext } from "react";
import Card from "./Card";
import { useSearchParams } from "react-router-dom";
import { AuthContext } from "./DataContext";

const Rooms = () => {
    // const [rooms, setRooms] = useState([]);
    const {rooms, GetData} = useContext(AuthContext)
    // eslint-disable-next-line no-unused-vars
    const [params, setParams] = useSearchParams();
    const category = params.get('category');
    GetData(category);
    return (
        <>
        {
            rooms && rooms.length > 0 ? <div className="pt-12 grid gap-2 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
            {
            rooms.map((room, index) => <Card key={index} room={room}></Card>)
            }
        </div>: <div className="text-center pt-12">
        <div className="text-2xl font-bold">
        No Rooms Available In This Category
        </div>
        <div className="font-light text-neutral-500 mt-2">Please Select Other Categories</div>
        </div>
        }
        </>
    );
};

export default Rooms;