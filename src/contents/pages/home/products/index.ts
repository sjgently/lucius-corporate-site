import imgProductSapphireWafer from '@src/assets/product-sapphire-wafer.jpg'
import imgProductNanoPss from '@src/assets/product-nano-pss.jpg'
import imgProductSicWafer1 from '@src/assets/product-sic-wafer-1.jpg'
import imgProductSicWafer2 from '@src/assets/product-sic-wafer-2.jpg'

import type * as type from './type'

export * from './type'

export const products: type.IProduct[] = [
  {
    title: 'Sapphire wafer',
    data: getSapphireWaferData()
  },
  {
    title: 'Nano PSS',
    data: getNanoPssData()
  },
  {
    title: 'SiC wafer',
    data: getSicWaferData()
  }
]

function getSapphireWaferData(): type.IProduct['data'] {
  return [
    {
      imgData: imgProductSapphireWafer,
      rowData: [
        {
          property: 'Diameter',
          value: '2”, 3”, 4”, 5”, 6”, 8”, and custom diameter'
        },
        {
          property: 'Thickness',
          value: '25 µm ~ 2 mm'
        },
        {
          property: 'Polishing method',
          value: 'Epi ready polish, Double Side Polish, Single Side Polish'
        },
        {
          property: 'Orientation',
          value:
            'C–Plane (0001), A–Plane (11-20), R–Plane (10-12), M–Plane (10-10) Flat/Notch'
        }
      ]
    }
  ]
}

function getNanoPssData(): type.IProduct['data'] {
  return [
    {
      imgData: imgProductNanoPss,
      rowData: [
        {
          property: 'Diameter',
          value: '2”, 4”'
        },
        {
          property: 'Pattern pitch',
          value: '1,000 nm'
        },
        {
          property: 'Type',
          value: 'Cone or Hole'
        },
        {
          property: 'Depth',
          value: '250 ~ 500 nm'
        },
        {
          property: 'Polishing method',
          value: 'Epi ready polish, Double Side Polish, Single Side Polish'
        },
        {
          property: 'Orientation',
          value:
            'C–Plane (0001), A–Plane (11-20), R–Plane (10-12), M–Plane (10-10) Flat/Notch'
        }
      ]
    }
  ]
}

function getSicWaferData(): type.IProduct['data'] {
  return [
    {
      imgData: imgProductSicWafer1,
      subName: '4, 6 inch 4H-SiC N-type wafer',
      rowData: [
        {
          property: 'Diameter',
          value: '100.0 mm + 0.0/-0.5 mm, 150.0 mm + 0.0/-0.5 mm'
        },
        {
          property: 'Thickness',
          value: '350.0 µm ± 25.0 µm or 500.0 µm ± 25.0 µm'
        },
        {
          property: 'Micropipe Density',
          value: '≤ 1 micropipe/cm²'
        },
        {
          property: 'Resistivity',
          value: '0.015 Ω·cm ~ 0.028 Ω·cm'
        }
      ]
    },
    {
      imgData: imgProductSicWafer2,
      subName: '4, 6 inch 4H-SiC Semi-Insulating wafer',
      rowData: [
        {
          property: 'Diameter',
          value: '100.0 mm + 0.0/-0.5 mm, 150.0 mm + 0.0/-0.5 mm'
        },
        {
          property: 'Thickness',
          value: '500 µm ± 25 µm'
        },
        {
          property: 'Micropipe Density',
          value: '≤ 5 micropipes/cm²'
        },
        {
          property: 'Resistivity',
          value: '≥ 1E7 Ω·cm'
        }
      ]
    }
  ]
}
