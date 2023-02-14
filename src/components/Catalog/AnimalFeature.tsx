import { v1 as uuidv1 } from "uuid"

export function AnimalFeature(props: any) {
    return (props.arr.map((e: any) => {
        return (
            <div className="catalog" key={uuidv1()} style={{ marginTop: "15px" }}>
                {e[props.animalFeature]}
            </div>
        )
    }))
}