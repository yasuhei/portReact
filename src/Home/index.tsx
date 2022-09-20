import { useState } from "react";
import { Header } from "../components/Header";
import { Menunav } from "../components/Menunav";

export function Home() {
    const [menuIsVisible, setMenuIsVisible] = useState(false);

    return (
        <>
            <Menunav
                menuIsVisible={menuIsVisible}
                setMenuIsVisible={() => alert('poo')}
            />

        </>
    )
}