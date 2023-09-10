import { Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Badge, } from "@material-tailwind/react";
import CategoryStructure from "./CategoryStructure";
import { categories } from "./categorys";

import { LuSettings2 } from 'react-icons/lu';
import React, { useContext, useState } from "react";
import ReactSlider from "react-slider";
import axios from "axios";
import { AuthContext } from "./DataContext";


const MIN = 100;
const MAX = 1000;
const Categories = () => {
  const {rooms, setRooms} = useContext(AuthContext)
  const [size, setSize] = React.useState(null);
  const [values,setValues] = useState([MIN, MAX])
  const [bedRooms,setBedRooms] = useState(0)
  const [beds,setBeds] = useState(0);

  const minPrice = values[0];
  const maxPrice = values[1];
  console.log(bedRooms, beds, minPrice, maxPrice)
 
  const handleOpen = (value) => setSize(value);
  const handleFilter = () => {
    axios.get(`https://airbnb-server-mocha.vercel.app/search?bedrooms=${bedRooms}&beds=${beds}&minPrice=${minPrice}&maxPrice=${maxPrice}`)
    .then(data => setRooms(data.data))
  }
  return (
    <div className="flex gap-4 items-center justify-center">
      <div className="pt-4 cursor-pointer flex items-center justify-between overflow-x-auto">
        {categories.map((category) => (
          <CategoryStructure key={category.icon} label={category.label} icon={category.icon}></CategoryStructure>
        ))}
      </div>
      <Dialog  open={
          size === "xs"
        }
        size={size || "md"}
        handler={handleOpen}>
        <DialogHeader>Filter</DialogHeader>
        <form onChange={handleFilter}>
        <DialogBody divider>
       <div>
        <div>
          <div>
          <h3>Min Amount</h3>
          <input type="text" value={values[0]} />
          </div>
          <div>
          <h3>Max Amount</h3>
          <input type="text" value={values[1]} />
          </div>
        </div>
       <ReactSlider
    className="horizontal-slider border border-gray-500 border-2xl"
    thumbClassName="example-thumb w-8 h-8 border border-red-500 rounded-full bg-red-900 mb-8"
    trackClassName="example-track"
    defaultValue={[0, 5000]}
    onChange={setValues}
    min={MIN}
    max={MAX}
    ariaLabel={['Lower thumb', 'Upper thumb']}
    ariaValuetext={state => `Thumb value ${state.valueNow}`}
    renderThumb={(props, state) => <div {...props}>{state.valueNow}</div>}
    pearling
    minDistance={100}
/>
       </div>
       <div>
        <div className="mt-8">
          <h3>Bedrooms</h3>
          <div>
            <div className="w-10 h-6 text-center border rounded-full border-gray-600">
              <input type="number" onChange={e => setBedRooms(e.target.value)} placeholder="BedRooms" />
            </div>
          </div>
        </div>
        <div className="mt-8">
          <h3>Beds</h3>
          <div>
            <div className="w-10 h-6 text-center outline-gray-500 rounded-full border-gray-600">
              <input type="number" onChange={e => setBeds(e.target.value)} placeholder="Rooms" />
            </div>
          </div>
        </div>
       </div>
        </DialogBody>
        <DialogFooter>
          <Button
            variant="text"
            color="red"
            onClick={handleOpen}
            className="mr-1"
          >
            <span>Cancel</span>
          </Button>
          <Badge content={rooms.length}>
          <Button type="button" variant="gradient" color="green" onClick={handleOpen}>
            <span>Search</span>
          </Button>
          </Badge>
        </DialogFooter>
        </form>
      </Dialog>
      <div>
        <Button  onClick={() => handleOpen("xs")} className="flex gap-2 items-center" variant="outlined"><LuSettings2></LuSettings2> Filter</Button>
      </div>
    </div>
  );
};

export default Categories;
