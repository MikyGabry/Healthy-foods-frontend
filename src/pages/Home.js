import { useState, useEffect } from "react"

function Home () {

    const [foods, setFoods] = useState(null)
    
    async function  fetchFoods() {
        try{
            let myFoods = await fetch('https://healthy-foods-s1ri.onrender.com/food/')
            myFoods = await myFoods.json()
            setFoods(myFoods)
        } catch(err) {
            console.log(err)
        }
    }

    useEffect(() =>{
        fetchFoods();
    }, [])

    function randomDish() {
        // let featuredDish = 0;
        if (foods) {
            const featuredDish = Math.floor(Math.random() * (foods.length))
            console.log(featuredDish)
            return (
                <>
                <h2>{foods[featuredDish].dishName}</h2>
                <h3>{foods[featuredDish].cuisine}</h3>
                <h3>{foods[featuredDish].ingredients}</h3>
                <h3>{foods[featuredDish].recipe}</h3>
                </>
            )
        } else <h2>Loading...</h2>

    }
    // console.log(featuredDish)
    
    return(
        <>
        {randomDish()}
        </>
    )
}

export default Home;