import { useEffect, useState } from "react";
import { useParams } from "react-router";

function FoodsShow () {
    const { foodId } = useParams()
    console.log(foodId)

    const [foods, setFoods] = useState([])

    async function getFoods() {
        try {
            let myFoods = await fetch(`https://healthy-foods-s1ri.onrender.com/food/${foodId}`)
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

    function loaded() {
        return(
            <>
                <h2>{foods.cuisine}</h2>
            </>
        )
    }

    function loading() {
        return(
            <h2>Loading...</h2>
        )
    }
    return(
        <>
        <h1>This is how to make the dish. Happy cooking! </h1>
        {foods ? loaded() : loading()}
        </>

    )
}

export default FoodsShow;