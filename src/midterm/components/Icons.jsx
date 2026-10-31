const iconProps = {
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  'aria-hidden': 'true',
}

export const PlusIcon = ({className}) => {
  return (
    <svg {...iconProps} strokeWidth="2.5" className={className}>
      <path d="M12 5v14M5 12h14" />
    </svg>
  )
}

export const CheckIcon = ({className}) => {
  return (
    <svg {...iconProps} strokeWidth="3" className={className}>
      <path d="M5 12.5l4.5 4.5L19 7.5" />
    </svg>
  )
}

export const TrashIcon = ({className}) => {
  return (
    <svg {...iconProps} strokeWidth="2" className={className}>
      <path d="M3 6h18" />
      <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6" />
      <path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
      <path d="M10 11v6M14 11v6" />
    </svg>
  )
}
