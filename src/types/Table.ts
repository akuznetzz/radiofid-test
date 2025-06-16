export interface TableHeader {
  title: string
  key: string
  sortable?: boolean
  align?: 'start' | 'center' | 'end'
}

export interface GroupConfig {
  field: string | null
  enabled: boolean
}

export interface GroupByItem {
  key: string
  order?: 'asc' | 'desc'
} 