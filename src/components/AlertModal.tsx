import type { Data } from "../types";

type Props = {
  alerts: Data["alerts"];
  onClose: () => void;
};

export default function AlertModal({ alerts, onClose }: Props) {
  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div className="bg-white w-[600px] max-h-[80vh] rounded-[36px] shadow-lg overflow-hidden flex flex-col">
        
        <div className="text-center font-bold text-xl py-4 border-b">
          Alertas do Sistema
        </div>

        <div className="flex-1 overflow-y-auto">
          {alerts.length === 0 ? (
            <p className="text-center py-6">Nenhum alerta</p>
          ) : (
            alerts.map((alert) => (
              <div
                key={alert.id}
                className="flex items-center justify-between px-6 py-4 border-b"
              >
                <div className="flex items-center gap-3">
                  <span>⚠️</span>
                  <span className="font-semibold">
                    {alert.type}: {alert.msg}
                  </span>
                </div>

                <span className="text-sm text-gray-500">
                  {new Date().toLocaleDateString()}
                </span>
              </div>
            ))
          )}
        </div>

        <div className="flex justify-end p-4">
          <button
            onClick={onClose}
            className="bg-[#8b0000] text-white px-6 py-2 rounded-full font-bold"
          >
            Fechar
          </button>
        </div>
      </div>
    </div>
  );
}