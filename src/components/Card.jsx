import { Carousel, IconButton } from '@material-tailwind/react';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import { RiArrowDropLeftLine, RiArrowDropRightLine } from 'react-icons/ri';

const Card = ({room}) => {
  return (
    <div className='col-span-1 cursor-pointer group'>
      <div className='flex flex-col gap-2 w-full'>
        <div
          className='
            aspect-square 
            w-full 
            h-full
            relative 
            overflow-hidden 
            rounded-xl
          '
        >
           <Carousel className="rounded-xl overflow-hidden"
           prevArrow={({ handlePrev }) => (
            <IconButton
              variant="text"
              color="white"
              size="lg"
              onClick={handlePrev}
              className="!absolute top-2/4 left-4 -translate-y-2/4 opacity-0 group-hover:opacity-100 transition-opacity"
            >
              
              <RiArrowDropLeftLine className='text-6xl text-black border w-8 h-8 bg-white rounded-full'></RiArrowDropLeftLine>
            </IconButton>
          )}
          nextArrow={({ handleNext }) => (
            <IconButton
              variant="text"
              color="white"
              size="lg"
              onClick={handleNext}
              className="!absolute top-2/4 !right-4 -translate-y-2/4 opacity-0 group-hover:opacity-100 transition-opacity"
            >
              <RiArrowDropRightLine className='text-6xl text-black border w-8 h-8 bg-white rounded-full'></RiArrowDropRightLine>
            </IconButton>
          )}
           >
            {
                room.image.map((img, index) => (
                    <img key={index}
            className='
              object-cover 
              h-full 
              w-full 
            '
            src={img}
            alt='Room'
          />
                ))
            }
    </Carousel>
          <div
            className='
            absolute
            top-3
            right-3
          '
          >
            <div
      className='
        relative
        hover:opacity-80
        transition
        cursor-pointer
      '
    >
      <AiOutlineHeart
        size={28}
        className='
          fill-white
          absolute
          -top-[2px]
          -right-[2px]
        '
      />
      <AiFillHeart
        size={24}
        className='fill-neutral-500/70 hover:fill-rose-500'
      />
    </div>
          </div>
        </div>
        <div className='font-semibold text-lg'>{room.location}</div>
        <div className='font-light text-neutral-500'>
          {room.dateRange}
        </div>
        <div className='flex flex-row items-center gap-1'>
          <div className='font-semibold'>$ {room.price}</div>
          <div className='font-light'>night</div>
        </div>
      </div>
    </div>
  )
}

export default Card