export interface Car {
  id: number
  brand: string
  horsepower: number
  country: string
  price: number
  color: string
}

export type GroupByField = 'country' | 'color' | null

export interface SortConfig {
  field: keyof Car
  direction: 'asc' | 'desc'
}

export interface FilterConfig {
  field: keyof Car
  value: string | number
}

export interface GroupConfig {
  field: GroupByField
  enabled: boolean
} 