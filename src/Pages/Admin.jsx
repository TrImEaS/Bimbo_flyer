import { useState, useEffect } from "react"
import data from '../Data/flyer_data.json'

export default function Admin() {
  return (
    <section className="w-full min-h-screen flex flex-col justify-center items-center bg-gray-800">
      <article className="flex flex-col p-10 items-center gap-10 w-3/4 max-w-[700px] h-fit min-h-[600px] border-2 border-[#fafafa] rounded-lg text-[#fafafa]">
        <div className="w-full">
          <h2>Cambiar titulo de nav</h2>

        </div>
      </article>
    </section>
  )
}