"use client"

import { useEffect } from "react"
import { Crisp } from "crisp-sdk-web"


export const CrispChat = () => {
    useEffect(()=>{
        Crisp.configure("d8cee4ef-74d4-4989-b35c-1094d3be4811")
    },[])

    return null
}