import schoolTime from "../../../assets/images/school-time.jpg";


const SchoolTime = () => {
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

            <div className="hero h-min	p-10  rounded bg-base-200">

                <div className="hero-content flex-col lg:flex-row-reverse text-right">
                    <div className="w-2/4 flex items-center justify-center	">
                        <img src={schoolTime} className="max-w-sm rounded-lg shadow-2xl" />
                    </div>
                    <div className="w-2/4	">
                        <h1 className="text-5xl  font-bold">Limitless learning, more possibilities</h1>
                        <p className="py-6">For college-level learning, this approach is important enough that you can expect to spend much more time on learning activities outside the classroom than you will in the classroom.

                        </p>
                        <button className="btn bg-primaryColor">Learn More</button>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default SchoolTime;