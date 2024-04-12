import React from "react"
import { useMapContext } from "../context/MapContext"

export default function Dashboard() {
    const {
        open
    } = useMapContext();

    return (
        <div style={{color: "white"}}>
            Dashboard = {open}
        </div>
    )
}