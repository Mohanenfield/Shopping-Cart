import React from 'react';
import data from './data';
import ItemCart from './ItemCart';

const Home = () => {
    return (
        <>
            <h1 className="text-center mt-3">Clothes</h1>
            <section className="py-4 container">
                <div className="row justify-content-center">
                    {data.clothes.map((e,index) => {
                        return(
                        <ItemCart name={e.name}
                            brand={e.brand}
                            img={e.image}
                            price={e.price}
                            category={e.category}
                            item={e}
                            key={index} />
                        );
                    })}

                </div>
            </section>
        </>
    )
}

export default Home;

