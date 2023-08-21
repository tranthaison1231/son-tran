import clsx from 'clsx';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

function Drawer({ isOpen, onClose, children }: Props) {
  return (
    <>
      <div
        className={clsx('fixed inset-0 z-30 h-screen w-screen bg-black/70', {
          hidden: !isOpen,
        })}
        role="button"
        tabIndex={0}
        onClick={onClose}
      />
      <div
        className={clsx('fixed inset-0 z-40 h-screen w-3/4 bg-[#2e2b5a] pt-5 text-black transition-transform', {
          'translate-x-0': isOpen,
          '-translate-x-full': !isOpen,
        })}
      >
        {children}
      </div>
    </>
  );
}

export default Drawer;
