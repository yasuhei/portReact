import { Container } from "./styles";
import { IoClose } from "react-icons/io5";

interface IMenuNavProps {
    menuIsVisible: boolean;
    setMenuIsVisible: (props: boolean) => void;

}

export function Menunav({ menuIsVisible, setMenuIsVisible }: IMenuNavProps) {
    return (
        <Container isVisible={true}>
            <IoClose size={45} onClick={() => setMenuIsVisible(false)} />

            <nav>
                <a href="">Home</a>
                <a href="">Works</a>
                <a href="">About</a>
                <a href="">Contact</a>
            </nav>
        </Container>
    )
}