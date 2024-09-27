import MenuItem from "./components/MenuItem"
import { OrderContents } from "./components/OrderContents"
import OrderTotals from "./components/OrderTotals"
import TipPresentageForm from "./components/TipPresentageForm"
import { menuItems } from "./data/db"
import useOrder from "./hooks/userOrder"

function App() {

  const { order, tip, setTip, addItem, removeItem } = useOrder ()

  return (
    <>
    <header className="bg-teal-950 py-5">
      <h1 className="text-center text-2xl text-white font-semibold">Calculadora de Propinas y Consumo</h1>
    </header>

    <main className=" mx-auto max-w-4xl py-20 grid md:grid-cols-2">
      <div>
        <h2 className="text-4xl font-black text-center mb-4">Menú</h2>
        <div className="space-y-3 mt-5">
        {menuItems.map(item => (
          <MenuItem
            key={item.id}
            item={item}
            addItem={addItem}
          />
        ))}
        </div>
      </div>

      <div className="border border-dashed mx-5 border-slate-300 rounded-lg space-y-10">
        <OrderContents
        order={order}
        removeItem={removeItem}
        />

        <TipPresentageForm
          setTip={setTip}
        />

        <OrderTotals
        order={order}
        tip={tip}
        />

      </div>
      
    </main>
    </>
  )
}

export default App
