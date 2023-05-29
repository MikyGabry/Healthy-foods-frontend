import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'

function FoodsIndex () {
    const [foods, setFoods] = useState([])

    async function getFoods() {
        try {
            let myFoods = await fetch('https://healthy-foods-s1ri.onrender.com/food/')
            myFoods = await myFoods.json();
            setFoods(myFoods)
        } catch(err) {
            console.log(err)
        }
    }
    
    useEffect(() => {
        getFoods();
    }, [])

    console.log(foods)

    function loaded(arr) {
        return(
            <>
                {arr.map((food, idx) => {
                    return(
                        <div key={idx}>
                            <Link to={`/food/${food._id}`}>
                                <h2>Dish: {food.dishName}</h2>
                            </Link>
                            <hr />
                        </div>
                    )
                })}
            </>
        )
    }

    return(
        <>
            {foods.length ? loaded(foods) : <h2>Loading...</h2>}
        </>
    )
}

export default FoodsIndex;