import { useState } from 'react'
import { BankIcon, UsbIcon } from '@vwjs/icons'

export function IconCheckbox() {
  const [checked, setChecked] = useState(false)
  const [checked1, setChecked1] = useState(false)
  return (
    <div className="flex border border-black/5 dark:border-white/5 flex-row gap-2 p-4 not-prose relative bg-slate-50 rounded-xl overflow-hidden dark:bg-slate-800/25">
      <BankIcon
        onClick={() => setChecked1(!checked1)}
        width={25}
        height={25}
        fill-rule="nonzero"
        fill={checked1 ? 'blue' : '#d4d4d8'}
      />
      <UsbIcon
        onClick={() => setChecked(!checked)}
        width={25}
        height={25}
        fill-rule="nonzero"
        fill={checked ? 'blue' : '#d4d4d8'}
      />
    </div>
  )
}
