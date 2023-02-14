export function Bone(props: any) {
    return(
        <div style={{ bottom: props.boneMove, transition: "bottom 2s", position: "absolute", right: "45%" }}>
          <img className="jump-bone" src={props.animalArray["bone"].boneImg}></img>
        </div>
    )
}