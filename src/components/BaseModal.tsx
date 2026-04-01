export default function BaseModal({ children, onClose }: any) {
  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div className="bg-white rounded-3xl p-6 w-[600px] shadow-xl relative">
        {children}

        <button
          onClick={onClose}
          className="mt-6 bg-green-900 text-white px-6 py-2 rounded-full block ml-auto"
        >
          Fechar
        </button>
      </div>
    </div>
  );
}