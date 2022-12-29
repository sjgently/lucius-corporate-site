export interface IProduct {
  title: string
  data: ITableItem[]
}

interface ITableRow {
  property: string
  value: string
}

interface ITableItem {
  imgData: ImageMetadata
  subName?: string
  rowData: ITableRow[]
}
