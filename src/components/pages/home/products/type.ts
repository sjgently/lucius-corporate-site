interface ITableRow {
  property: string
  value: string
}

interface ITableItem {
  imgData: ImageMetadata
  subName?: string
  rowData: ITableRow[]
}

export interface IProductProps {
  title: string
  data: ITableItem[]
}
