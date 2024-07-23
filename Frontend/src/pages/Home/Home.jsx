import { useState } from "react";
import ExploreMenu from "../../components/ExploreMenu/ExploreMenu";
import Header from "../../components/Header/Header";

export default function Home() {
    const [category, setcategory] = useState('All')

    return (
    <div>
        <Header />
        <ExploreMenu category={category} setcategory={setcategory} />
    </div>
    )
}