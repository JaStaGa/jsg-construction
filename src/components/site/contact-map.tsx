"use client"

import "leaflet/dist/leaflet.css"
import L, { type LatLngExpression } from "leaflet"
import { useEffect, useRef } from "react"

const CENTER: LatLngExpression = [42.3505, -71.1054] // demo: BU area
const RADIUS_METERS = 40234 // 25 miles

export default function ContactMap() {
    const ref = useRef<HTMLDivElement>(null)

    useEffect(() => {
        if (!ref.current) return

        const map = L.map(ref.current, {
            center: CENTER,
            zoom: 10,
            scrollWheelZoom: false,
            attributionControl: true,
        })

        const tiles = L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
            maxZoom: 19,
            attribution:
                '&copy; <a href="https://www.openstreetmap.org/copyright">OSM</a> contributors',
        }).addTo(map)

        const circle = L.circle(CENTER, { radius: RADIUS_METERS, color: "#0b1f3b" }).addTo(map)

        return () => {
            circle.remove()
            tiles.remove()
            map.remove()
        }
    }, [])

    return <div ref={ref} className="h-56 md:h-72 rounded-xl overflow-hidden" />
}
