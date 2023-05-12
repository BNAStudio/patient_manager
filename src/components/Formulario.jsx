import { useState } from "react"

const Formulario = () => {
    const [nombre, setNombre] = useState("");
    console.log(nombre);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Enviando formulario");
    }

    return (
        <div className="lg:w-2/5 md:w-1/2">
            <h2 className="font-black text-3xl text-center">Seguimiento pacientes</h2>
            <p className="text-lg mt-5 mb-10">
                Añade pacientes y {" "}
                <span className="text-indigo-600 font-bold">Administralos</span>
            </p>
            <form
                onSubmit={handleSubmit}
                className="bg-white shadow-md rounded-lg py-10 px-5 text-left mb-10">
                <div className="mb-5">
                    <label
                        className="block text-gray-700 uppercase font-bold"
                        htmlFor="mascota"
                    >Nombre Mascota</label>
                    <input
                        id="mascota"
                        className="w-full border-2 mt-2 p-2 placeholder-gray-400 rounded-md"
                        type="text"
                        placeholder="Nombre de la mascota"
                        onChange={(e) => setNombre(e.target.value)}
                    />
                </div>
                <div className="mb-5">
                    <label
                        className="block text-gray-700 uppercase font-bold"
                        htmlFor="propietario"
                    >Nombre Propietario</label>
                    <input
                        id="propietario"
                        className="w-full border-2 mt-2 p-2 placeholder-gray-400 rounded-md"
                        type="text"
                        placeholder="Nombre de la propietario"
                    />
                </div>
                <div className="mb-5">
                    <label
                        className="block text-gray-700 uppercase font-bold"
                        htmlFor="email"
                    >E-mail</label>
                    <input
                        id="email"
                        className="w-full border-2 mt-2 p-2 placeholder-gray-400 rounded-md"
                        type="email"
                        placeholder="Nombre de la propietario"
                    />
                </div>
                <div className="mb-5">
                    <label
                        className="block text-gray-700 uppercase font-bold"
                        htmlFor="alta"
                    >Alta</label>
                    <input
                        id="alta"
                        className="w-full border-2 mt-2 p-2 placeholder-gray-400 rounded-md"
                        type="date"
                    />
                </div>
                <div className="mb-5">
                    <label
                        className="block text-gray-700 uppercase font-bold"
                        htmlFor="sintomas"
                    >Alta</label>
                    < textarea
                        id="sintomas"
                        className="w-full border-2 mt-2 p-2 placeholder-gray-400 rounded-md"
                        placeholder="Describe los sintomas"
                    />
                </div>
                <input
                    type="submit"
                    className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer rounded-lg transition-all"
                    value="Agregar paciente"
                />
            </form>
        </div>
    )
}

export default Formulario


// const [form, setForm] = useState({})
// const handleChange = (e) => setForm({ ...form, [e.target.id]: e.target.value })
// console.log(form);