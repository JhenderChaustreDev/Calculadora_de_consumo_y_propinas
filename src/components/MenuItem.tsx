import type { MenuItem} from "../types"

type MenuItemProps = {
    item: MenuItem, 
    addItem: (item: MenuItem) => void
}

export default function MenuItem({item, addItem} : MenuItemProps) {
  return (
    <button
      className="border-2 border-teal-950 w-full p-3 flex justify-between hover:bg-teal-800 rounded-md"
      onClick={() => addItem(item)}
    >
        <p className="font-medium">{item.name}</p>
        <p className="font-black">${item.price}</p>
    </button>
  )
}
