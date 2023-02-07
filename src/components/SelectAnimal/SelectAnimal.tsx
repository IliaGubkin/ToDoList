import { Link } from "react-router-dom"

export function SelectDogs() {
    return (
        <>
            <Link to="/slider/dogs" className="dogs-link">Собаки<img src="https://adamant-corgi.ru/wp-content/uploads/2022/10/image-17-09-22-03-27-3.jpeg"></img></Link>
        </>
    )
}

export function SelectCats() {
    return (
        <>
            <Link to="/slider/cats" className="cats-link">Кошки<img src="https://zooset.ru/upload/thumbs/breed/default/mejjn-kun_59b93e.jpeg"></img></Link>
        </>
    )
}