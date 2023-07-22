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
                    <figure className="px-10 pt-10 relative">
                        <img src={eventImg01} alt="Shoes" className="rounded-xl" />
                        <h2 className="absolute w-20 h-10 bg-slate-100 text-center top-10 left-10 rounded font-bold">22 sep</h2>
                    </figure>
                    <div className="card-body ">
                        <p>8:00 pm. - 10 pm.</p>
                        <h2 className="card-title">Getting Started In Successful Life Coaching Career In Venice City</h2>

                        <div className="card-actions">
                            <button className="btn bg-primaryColor">more info</button>
                        </div>
                    </div>
                </div>
                <div className="card w-96 mt-4 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10 relative">
                        <img src={eventImg02} alt="Shoes" className="rounded-xl" />
                        <h2 className="absolute w-20 h-10 bg-slate-100 text-center top-10 left-10 rounded font-bold">25 sep</h2>
                    </figure>
                    <div className="card-body ">
                        <p>8:00 pm. - 10 pm.</p>
                        <h2 className="card-title">Getting Started In Successful Life Coaching Career In Venice City</h2>

                        <div className="card-actions">
                            <button className="btn bg-primaryColor">more info</button>
                        </div>
                    </div>
                    <button>more info</button>
                </div>
                <div className="card w-96 mt-4 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10 relative">
                        <img src={eventImg03} alt="Shoes" className="rounded-xl" />
                        <h2 className="absolute w-20 h-10 bg-slate-100 text-center top-10 left-10 rounded font-bold">06 sep</h2>
                    </figure>
                    <div className="card-body ">
                        <p>8:00 pm. - 10 pm.</p>
                        <h2 className="card-title">Getting Started In Successful Life Coaching Career In Venice City</h2>

                        <div className="card-actions">
                            <button className="btn bg-primaryColor">more info</button>
                        </div>
                    </div>
                </div>
                <div className="card w-96 mt-4 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10 relative">
                        <img src={eventImg04} alt="Shoes" className="rounded-xl" />
                        <h2 className="absolute w-20 h-10 bg-slate-100 text-center top-10 left-10 rounded font-bold">10 sep</h2>
                    </figure>
                    <div className="card-body ">
                        <p>8:00 pm. - 10 pm.</p>
                        <h2 className="card-title">Getting Started In Successful Life Coaching Career In Venice City</h2>

                        <div className="card-actions">
                            <button className="btn bg-primaryColor">more info</button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default NewEvent;