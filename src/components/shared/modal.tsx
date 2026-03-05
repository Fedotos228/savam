import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle
} from "@/components/ui/dialog"

type Props = {
  disabled: boolean,
  isOpen: boolean
  setIsOpen: (open: boolean) => void
  handleSendRequest: () => void
  isLoading: boolean
}

export default function Modal({ isOpen, setIsOpen }: Props) {
  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent
        style={{ background: 'url(./hero.jpg) center/cover no-repeat' }}
        className='w-200 h-100 flex items-center justify-center flex-col gap-10'
      >
        <DialogHeader>
          <DialogTitle className='text-[48px] text-gold'>Vielen Dank!</DialogTitle>
          <DialogDescription className='text-background text-center'>
            Die Bestellung wurde erfolgreich aufgegeben! Wir werden uns in Kürze mit Ihnen in Verbindung setzen, um alle Details zu klären.
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  )
}
