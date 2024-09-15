import MenuItem from "./components/menuItem"
import { menuItems } from "./data/db"

function App() {

  return (
    <>
    <header className="bg-teal-950 py-5">
      <h1 className="text-center text-2xl text-white font-semibold">Calculadora de Propinas y Consumo</h1>
    </header>

    <main className=" mx-auto max-w-4xl py-20 grid md:grid-cols-2">
      <div>
        <h2>Menú</h2>
        {menuItems.map(item => (
          <MenuItem
            key={item.id}
            item={item}
          />
        ))}
      </div>

      <div>
        <h2>Consumo</h2>
      </div>
      
    </main>
    </>
  )
}

export default App
