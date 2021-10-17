import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';


const ServiceDetail = () => {

    const {id} = useParams();
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('/fakeData.json')
        .then(res => res.json())
        .then(data => setData(data))
    
    }, [])

    const ExactItem = data.filter(td => td._id === id)
    console.log(ExactItem)
    return (
        <div>
            <h1>This is service Detail Page {id}</h1>
            <h3>Name: {ExactItem.name}</h3>
        </div>
    );
};

export default ServiceDetail;