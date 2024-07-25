import { useState } from "react";
import ExploreMenu from "../../components/ExploreMenu/ExploreMenu";
import Header from "../../components/Header/Header";
import FoodDisplay from "../../components/FoodDisplay/FoodDisplay";

export default function Home() {
    const [category, setcategory] = useState('All')

    return (
    <div>
        <Header />
        <ExploreMenu category={category} setcategory={setcategory} />
        <FoodDisplay category={category}/>
    </div>
    )
}