import { useEffect, useState } from "react";


const useColleges = () => {

    const [loading,setLoading] = useState(true)
    const [colleges, setColleges] = useState([]);
    useEffect(() => {
        fetch('colleges.json')
            .then(res => res.json())
            .then(data => {
                setColleges(data);
                setLoading(false);
                console.log(data);
            })
    }, [])

    return [colleges, loading];
};

export default useColleges;