"use client"

import { useState } from "react"
import { Plus, Pencil, Trash2, Eye, EyeOff, GripVertical, ChevronDown, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog"
import { Switch } from "@/components/ui/switch"
import { getRestaurant, formatCurrency } from "@/lib/mock-data"
import type { MenuCategory, MenuItem } from "@/lib/mock-data"
import { cn } from "@/lib/utils"

type EditingItem = Omit<MenuItem, "id"> & { id: string; categoryName: string }

const dietaryOptions = ["Vegano", "Vegetariano", "Sin gluten", "Sin lactosa", "Ecologico", "Pescetariano"]

export default function CartaPage() {
  const restaurant = getRestaurant("1")!

  const [menu, setMenu] = useState<MenuCategory[]>(restaurant.menu)
  const [expandedCats, setExpandedCats] = useState<Record<string, boolean>>(
    Object.fromEntries(restaurant.menu.map((c) => [c.name, true]))
  )
  const [unavailable, setUnavailable] = useState<Set<string>>(new Set())
  const [editingItem, setEditingItem] = useState<EditingItem | null>(null)
  const [isNewItem, setIsNewItem] = useState(false)
  const [newCatName, setNewCatName] = useState("")
  const [showNewCat, setShowNewCat] = useState(false)

  const toggleExpand = (name: string) =>
    setExpandedCats((prev) => ({ ...prev, [name]: !prev[name] }))

  const toggleAvailability = (itemId: string) =>
    setUnavailable((prev) => {
      const next = new Set(prev)
      next.has(itemId) ? next.delete(itemId) : next.add(itemId)
      return next
    })

  const openNewItem = (categoryName: string) => {
    setEditingItem({ id: "", name: "", description: "", price: 0, dietary: [], categoryName })
    setIsNewItem(true)
  }

  const openEditItem = (item: MenuItem, categoryName: string) => {
    setEditingItem({ ...item, categoryName })
    setIsNewItem(false)
  }

  const saveItem = () => {
    if (!editingItem) return
    setMenu((prev) =>
      prev.map((cat) => {
        if (cat.name !== editingItem.categoryName) return cat
        if (isNewItem) {
          const newId = `m-${Date.now()}`
          return { ...cat, items: [...cat.items, { ...editingItem, id: newId }] }
        }
        return {
          ...cat,
          items: cat.items.map((i) => (i.id === editingItem.id ? editingItem : i)),
        }
      })
    )
    setEditingItem(null)
  }

  const deleteItem = (itemId: string, categoryName: string) => {
    setMenu((prev) =>
      prev.map((cat) =>
        cat.name === categoryName
          ? { ...cat, items: cat.items.filter((i) => i.id !== itemId) }
          : cat
      )
    )
  }

  const addCategory = () => {
    if (!newCatName.trim()) return
    setMenu((prev) => [...prev, { name: newCatName.trim(), items: [] }])
    setExpandedCats((prev) => ({ ...prev, [newCatName.trim()]: true }))
    setNewCatName("")
    setShowNewCat(false)
  }

  const deleteCategory = (name: string) => {
    setMenu((prev) => prev.filter((c) => c.name !== name))
  }

  const totalItems = menu.reduce((s, c) => s + c.items.length, 0)

  return (
    <div>
      {/* Header */}
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Carta</h1>
          <p className="mt-1 text-sm text-muted-foreground">
            {menu.length} categorías · {totalItems} platos
          </p>
        </div>
        <Button onClick={() => setShowNewCat(true)} className="gap-1.5">
          <Plus className="h-4 w-4" />
          Nueva categoría
        </Button>
      </div>

      {/* Nueva categoría inline */}
      {showNewCat && (
        <div className="mb-4 flex gap-2 rounded-xl border border-primary/30 bg-primary/5 p-3">
          <Input
            placeholder="Nombre de la categoría (ej: Entrantes)"
            value={newCatName}
            onChange={(e) => setNewCatName(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && addCategory()}
            autoFocus
            className="flex-1"
          />
          <Button onClick={addCategory} size="sm">Añadir</Button>
          <Button variant="ghost" size="sm" onClick={() => setShowNewCat(false)}>Cancelar</Button>
        </div>
      )}

      {/* Lista de categorías */}
      <div className="flex flex-col gap-4">
        {menu.map((category) => {
          const isOpen = expandedCats[category.name] ?? true
          return (
            <div key={category.name} className="rounded-xl border border-border bg-card overflow-hidden">
              {/* Categoría header */}
              <div className="flex items-center gap-3 px-4 py-3 bg-muted/50">
                <button
                  onClick={() => toggleExpand(category.name)}
                  className="flex flex-1 items-center gap-2 text-left"
                >
                  {isOpen ? (
                    <ChevronDown className="h-4 w-4 text-muted-foreground shrink-0" />
                  ) : (
                    <ChevronRight className="h-4 w-4 text-muted-foreground shrink-0" />
                  )}
                  <span className="text-sm font-semibold text-foreground">{category.name}</span>
                  <span className="text-xs text-muted-foreground">({category.items.length})</span>
                </button>
                <div className="flex items-center gap-1">
                  <Button
                    variant="ghost"
                    size="sm"
                    className="h-7 gap-1 px-2 text-xs"
                    onClick={() => openNewItem(category.name)}
                  >
                    <Plus className="h-3.5 w-3.5" />
                    Añadir plato
                  </Button>
                  {category.items.length === 0 && (
                    <Button
                      variant="ghost"
                      size="sm"
                      className="h-7 px-2 text-xs text-destructive hover:text-destructive"
                      onClick={() => deleteCategory(category.name)}
                    >
                      <Trash2 className="h-3.5 w-3.5" />
                    </Button>
                  )}
                </div>
              </div>

              {/* Platos */}
              {isOpen && (
                <div className="divide-y divide-border">
                  {category.items.length === 0 ? (
                    <div className="flex flex-col items-center py-8 text-center">
                      <p className="text-sm text-muted-foreground">Sin platos en esta categoría</p>
                      <Button
                        variant="outline"
                        size="sm"
                        className="mt-3 gap-1"
                        onClick={() => openNewItem(category.name)}
                      >
                        <Plus className="h-3.5 w-3.5" />
                        Añadir primer plato
                      </Button>
                    </div>
                  ) : (
                    category.items.map((item) => {
                      const isUnavailable = unavailable.has(item.id)
                      return (
                        <div
                          key={item.id}
                          className={cn(
                            "flex items-center gap-3 px-4 py-3 transition-colors",
                            isUnavailable && "opacity-50"
                          )}
                        >
                          <GripVertical className="h-4 w-4 shrink-0 text-muted-foreground/40 cursor-grab" />

                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-2 flex-wrap">
                              <span className="text-sm font-medium text-foreground">{item.name}</span>
                              {isUnavailable && (
                                <Badge variant="secondary" className="text-xs">No disponible</Badge>
                              )}
                              {item.dietary?.map((d) => (
                                <Badge key={d} variant="outline" className="text-xs px-1.5 py-0">
                                  {d}
                                </Badge>
                              ))}
                            </div>
                            <p className="mt-0.5 text-xs text-muted-foreground truncate">
                              {item.description}
                            </p>
                          </div>

                          <span className="text-sm font-bold text-foreground shrink-0 w-16 text-right">
                            {formatCurrency(item.price)}
                          </span>

                          <div className="flex items-center gap-1 shrink-0">
                            <button
                              onClick={() => toggleAvailability(item.id)}
                              className={cn(
                                "flex h-8 w-8 items-center justify-center rounded-lg transition-colors hover:bg-muted",
                                isUnavailable ? "text-muted-foreground" : "text-green-600"
                              )}
                              title={isUnavailable ? "Activar" : "Desactivar"}
                            >
                              {isUnavailable ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                            </button>
                            <button
                              onClick={() => openEditItem(item, category.name)}
                              className="flex h-8 w-8 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                            >
                              <Pencil className="h-4 w-4" />
                            </button>
                            <button
                              onClick={() => deleteItem(item.id, category.name)}
                              className="flex h-8 w-8 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:bg-muted hover:text-destructive"
                            >
                              <Trash2 className="h-4 w-4" />
                            </button>
                          </div>
                        </div>
                      )
                    })
                  )}
                </div>
              )}
            </div>
          )
        })}
      </div>

      {/* Dialog editar/crear plato */}
      <Dialog open={!!editingItem} onOpenChange={(open) => !open && setEditingItem(null)}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle>
              {isNewItem ? "Nuevo plato" : "Editar plato"}
            </DialogTitle>
          </DialogHeader>

          {editingItem && (
            <div className="flex flex-col gap-4 py-2">
              <div>
                <Label htmlFor="item-name" className="mb-1.5 block text-sm">Nombre *</Label>
                <Input
                  id="item-name"
                  value={editingItem.name}
                  onChange={(e) => setEditingItem({ ...editingItem, name: e.target.value })}
                  placeholder="Ej: Patatas bravas"
                />
              </div>

              <div>
                <Label htmlFor="item-desc" className="mb-1.5 block text-sm">Descripción</Label>
                <Input
                  id="item-desc"
                  value={editingItem.description}
                  onChange={(e) => setEditingItem({ ...editingItem, description: e.target.value })}
                  placeholder="Ej: Con salsa brava casera y alioli"
                />
              </div>

              <div>
                <Label htmlFor="item-price" className="mb-1.5 block text-sm">Precio (€) *</Label>
                <Input
                  id="item-price"
                  type="number"
                  min="0"
                  step="0.5"
                  value={editingItem.price || ""}
                  onChange={(e) => setEditingItem({ ...editingItem, price: parseFloat(e.target.value) || 0 })}
                  placeholder="0.00"
                />
              </div>

              <div>
                <Label className="mb-2 block text-sm">Etiquetas dietéticas</Label>
                <div className="flex flex-wrap gap-2">
                  {dietaryOptions.map((opt) => {
                    const isSelected = editingItem.dietary?.includes(opt)
                    return (
                      <button
                        key={opt}
                        onClick={() => {
                          const current = editingItem.dietary ?? []
                          setEditingItem({
                            ...editingItem,
                            dietary: isSelected
                              ? current.filter((d) => d !== opt)
                              : [...current, opt],
                          })
                        }}
                        className={cn(
                          "rounded-full px-3 py-1 text-xs font-medium border transition-colors",
                          isSelected
                            ? "bg-primary text-primary-foreground border-primary"
                            : "border-border text-muted-foreground hover:border-primary/50"
                        )}
                      >
                        {opt}
                      </button>
                    )
                  })}
                </div>
              </div>
            </div>
          )}

          <DialogFooter className="gap-2">
            <Button variant="outline" onClick={() => setEditingItem(null)}>Cancelar</Button>
            <Button
              onClick={saveItem}
              disabled={!editingItem?.name || !editingItem?.price}
            >
              {isNewItem ? "Añadir plato" : "Guardar cambios"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}
