import React, { useState } from 'react'
import Products from './Product'

const Category = () => {
    const [data, setData] = useState(Products)
    const filterResult=(catItem)=>{
   const results = Products.filter((curData)=>{
    return curData.category===catItem;
   })
   setData(results)
    }
    return (
        <>
            <h1 className='text-center text-info'> Let's Shop </h1>
            <div className='container-fluid mx-2'>
                <div className='row mt-5 mx-2'>
                    <div className='col-md-3'>
                        <button className='btn btn-warning w-100 mb-4' onClick={()=> filterResult('Men')} > Men</button>
                        <button className='btn btn-warning w-100 mb-4' onClick={()=> filterResult('Women')}> Women</button>
                        <button className='btn btn-warning w-100 mb-4' onClick={()=> filterResult('Kids')} > Kids</button>
                        <button className='btn btn-warning w-100 mb-4' onClick={()=> setData(Products)}> All </button>
                    </div>
                    <div className='col-md-9'>
                    <div className='row'>
                        {data.map((values)=>{
                            const { id, title, price, category, subcategory, color, size, images}=values;                            return (
                                <>
                                <div className='col-md-4 mb-4' key = {id}>
                            <div className="card">
                                <img src={images} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">{title}</h5>
                                    <p>Price : {price}</p>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <button  className="btn btn-dark">Buy Now</button>
                                </div>
                                </div>
                            </div>
                                </>
                            )
                        })}
                        
                        </div>
                    </div>
                   
                </div>
               
            </div>
            
        </>
    )
}

export default Category
