import { memo } from "react";

interface PetitionsItemProps {
  textItem: string;
  LabName: string;
  Hours: string;
  onClick: (value: boolean) => void;
}
export const PetitionsItem = memo((PetitionsItems: PetitionsItemProps) => {
  return (
    <>
      <div className="text-section">
        <div className="text-info">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/aba0b9fd34ab76d14795d3a298f464c8c7b2ceacd1f8025572e73031ae8813b3?apiKey=d337f2d517f4408a99dd126ae7e4b446&"
            alt="Notification icon"
            className="text-icon"
          />
          <div className="text-details">
            <h3 className="text-title">{`${PetitionsItems.textItem}`}</h3>
            <div className="text-description">
              <p>{`${PetitionsItems.LabName}`}</p>
              <p>{`${PetitionsItems.Hours}`}</p>
            </div>
          </div>
        </div>
        <div className="text-actions">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/f3d63d7cab7d617c1f85fb0b1d5a1a8d1ce3d99fb4961c5c8a43363c6caa3dd2?apiKey=d337f2d517f4408a99dd126ae7e4b446&"
            alt="Approve button"
            className="large-request-icon"
            onClick={() => PetitionsItems.onClick(false)}
          />
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/506f100caa7e8dbe50e1a75baacf104c7c71b1174857fb69894e4bde09262cff?apiKey=d337f2d517f4408a99dd126ae7e4b446&"
            alt="Notification action icon"
            className="large-request-icon"
            onClick={() => PetitionsItems.onClick(true)}
          />
        </div>
      </div>
    </>
  );
});
