import { IBone } from "./Types";

export function Bone({boneMove, animalArray}: IBone) {
    return(
        <div style={{ bottom: boneMove, transition: "bottom 2s", position: "absolute", right: "45%" }}>
          <img className="jump-bone" src={animalArray["bone"].boneImg}></img>
        </div>
    )
}