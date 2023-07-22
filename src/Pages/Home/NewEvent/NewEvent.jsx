import eventImg01 from "../../../assets/images/event01.jpg"
import eventImg02 from "../../../assets/images/event02.jpg"
import eventImg03 from "../../../assets/images/event03.jpg"
import eventImg04 from "../../../assets/images/event04.jpg"

const NewEvent = () => {
    return (
        <div className="mt-10">
            <div className="text-center">
                <p className="text-xl font bold">
                    All College
                </p>
                <h2 className="text-5xl font-bold">
                    New Events
                </h2>
            </div>
            <div className="flex justify-center items-center flex-wrap gap-4 mt-10 ">
                <div className="card w-96 bg-base-100 mt-4 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src={eventImg01} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Shoes!</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions">
                            <button className="btn btn-primary">Buy Now</button>
                        </div>
                    </div>
                </div>
                <div className="card w-96 mt-4 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src={eventImg02} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Shoes!</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions">
                            <button className="btn btn-primary">Buy Now</button>
                        </div>
                    </div>
                </div>
                <div className="card w-96 mt-4 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src={eventImg03} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Shoes!</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions">
                            <button className="btn btn-primary">Buy Now</button>
                        </div>
                    </div>
                </div>
                <div className="card w-96 mt-4 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src={eventImg04} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Shoes!</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions">
                            <button className="btn btn-primary">Buy Now</button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default NewEvent;