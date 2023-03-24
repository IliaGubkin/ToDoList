import { rejects } from "assert";
import axios from "axios";
import { resolve } from "path";
import { useEffect, useState } from "react";
import { IAnimalImg } from "./Types";

export function AnimalImg({ className, typeOfAnimal }: IAnimalImg) {
    return (
        <>
            <img className={className} src={typeOfAnimal} />
        </>
    )
}