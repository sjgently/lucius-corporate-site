import imgSapphireSubstrate from '@src/assets/supphire-substrate.jpg'
import imgPss from '@src/assets/pss.jpg'
import imgSicSubstrate1 from '@src/assets/sic-substrate-1.jpg'
import imgSicSubstrate2 from '@src/assets/sic-substrate-2.jpg'
import imgGanSubstrate from '@src/assets/gan-substrate.jpg'
import imgAluminumNitride from '@src/assets/aluminum-nitride-substrate.jpg'

import type { IProps as IProductProps } from './product.astro'

export const products: IProductProps[] = [
  {
    title: 'Sapphire substrate',
    data: getSapphireSubstrateData()
  },
  {
    title: 'PSS (Patterned Sapphire Substrate)',
    data: getPssData()
  },
  {
    title: 'SiC substrate',
    data: getSicData()
  },
  {
    title: 'GaN substrate',
    data: getGanSubstrateData()
  },
  {
    title: 'Aluminum nitride substrate',
    data: getAluminumNitrideSubstrateData()
  }
]

function getSapphireSubstrateData(): IProductProps['data'] {
  return [
    {
      imgData: imgSapphireSubstrate,
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

function getPssData(): IProductProps['data'] {
  return [
    {
      imgData: imgPss,
      rowData: [
        {
          property: 'Diameter',
          value: '2”, 4”, 6”'
        },
        {
          property: 'Pattern pitch',
          value: '3 µm, 2 µm, 1.5 µm'
        },
        {
          property: 'Diameter',
          value: '1.0 ~ 2.8 µm'
        },
        {
          property: 'Depth',
          value: '0.6 ~ 2.0 µm'
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

function getSicData(): IProductProps['data'] {
  return [
    {
      imgData: imgSicSubstrate1,
      subName: '4 inch 4H-SiC N-type Substrate',
      rowData: [
        {
          property: 'Diameter',
          value: '100.0 mm + 0.0/-0.5 mm'
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
      imgData: imgSicSubstrate2,
      subName: '4 inch 4H-SiC High-Purity Semi-Insulating Substrate',
      rowData: [
        {
          property: 'Diameter',
          value: '100.0 mm + 0.0/-0.5 mm'
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

function getGanSubstrateData(): IProductProps['data'] {
  return [
    {
      imgData: imgGanSubstrate,
      subName: '2 inch Free-Standing GaN Substrates',
      rowData: [
        {
          property: 'Diameter',
          value: 'φ50.8 ± 1 mm'
        },
        {
          property: 'Thickness',
          value: '350 ± 25 µm'
        },
        {
          property: 'Micropipe Density',
          value: '< 0.05 Ω*cm for N-type or > 1 x 106 Ω*cm for Semi-insulating'
        }
      ]
    }
  ]
}

function getAluminumNitrideSubstrateData(): IProductProps['data'] {
  return [
    {
      imgData: imgAluminumNitride,
      subName: 'Single crystal aluminum nitride substrate',
      rowData: [
        {
          property: 'Diameter',
          value: '50.8 mm ± 0.5 mm'
        },
        {
          property: 'Thickness',
          value: '	400.0 μm ± 50.0 μm'
        },
        {
          property: 'Orientation',
          value: '{0001} ± 0.5°'
        },
        {
          property: 'High resolution XRD Rocking Curve, (0002) Reflection',
          value: '< 100 arcsec FWHM'
        }
      ]
    }
  ]
}
