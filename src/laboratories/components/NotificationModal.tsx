import { ReactNode } from "react";

export const NotificationModal = ({ children }: { children: ReactNode }) => {
  return (
    <div className="modal-container">
      <div className="modal">
        <div className="modal-content">{children}</div>
      </div>
    </div>
  );
};
