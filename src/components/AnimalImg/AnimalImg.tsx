export function AnimalImg(props: any) {
    return (
        <>
            <img className={props.className} src={props.typeOfAnimal[props.index].img} />
        </>
    )
}