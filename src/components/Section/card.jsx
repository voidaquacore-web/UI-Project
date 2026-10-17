

const Card = ({ img, num }) => {
    return (
        <div className="h-full bg-blue-800 w-70 relative overflow-hidden rounded-4xl">
            <img className='object-cover h-full scale-105' src={img} alt="" />
            <div className="top-0 left-0 p-5 flex flex-col justify-between h-full w-full  absolute">
                <h2 className="bg-white rounded-full text-black h-10 w-10 flex justify-center items-center text-2xl font-bold">{num}</h2>
                <div>
                    <p className="text-lg mb-8">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatibus corporis molestias ea praesentium tempore qui.</p>
                    <div className="flex justify-between">
                        <button className="hover:bg-amber-200 font-semibold bg-amber-300 text-black px-7 py-3 rounded-4xl">Satisfied</button>
                        <button className="bg-amber-300 hover:bg-amber-200 w-12 h-12 rounded-full text-black font-bold text-xl"><i className="ri-arrow-right-long-line"></i></button>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Card;