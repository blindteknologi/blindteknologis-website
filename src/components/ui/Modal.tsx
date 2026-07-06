import { useEffect, type ReactNode } from 'react'
import { X } from 'lucide-react'

interface ModalProps {
  open: boolean
  onClose: () => void
  title: string
  children: ReactNode
}

export function Modal({ open, onClose, title, children }: ModalProps) {
  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [open, onClose])

  if (!open) return null

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <button
        type="button"
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        aria-label="Close dialog"
        onClick={onClose}
      />
      <div className="glass red-glow relative w-full max-w-lg rounded-2xl p-8 md:p-10">
        <button
          type="button"
          onClick={onClose}
          className="absolute top-5 right-5 rounded-lg p-1.5 text-text-secondary transition-colors hover:bg-white/5 hover:text-white"
          aria-label="Close"
        >
          <X size={18} />
        </button>
        <h2 id="modal-title" className="font-display pr-8 text-xl font-semibold tracking-tight text-white md:text-2xl">
          {title}
        </h2>
        <div className="mt-5 text-sm leading-relaxed text-text-secondary">{children}</div>
      </div>
    </div>
  )
}
