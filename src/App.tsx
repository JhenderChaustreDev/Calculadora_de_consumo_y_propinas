import MenuItem from "./components/MenuItem"
import { menuItems } from "./data/db"
import useOrder from "./hooks/userOrder"

function App() {

  const {addItem} = useOrder ()

  return (
    <>
    <header className="bg-teal-950 py-5">
      <h1 className="text-center text-2xl text-white font-semibold">Calculadora de Propinas y Consumo</h1>
    </header>

    <main className=" mx-auto max-w-4xl py-20 grid md:grid-cols-2">
      <div>
        <h2 className="text-4xl font-black text-center mb-4">Menú</h2>
        <div className="space-y-3">
        {menuItems.map(item => (
          <MenuItem
            key={item.id}
            item={item}
            addItem={addItem}
          />
        ))}
        </div>
      </div>

      <div>
        <h2 className="text-4xl font-black text-center mb-4">Consumo</h2>
      </div>
      
    </main>
    </>
  )
}

export default App
