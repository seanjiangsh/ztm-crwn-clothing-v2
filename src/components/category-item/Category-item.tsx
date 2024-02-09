import { CategoryProps } from "../../types/common";

import "./Category-item.css";

export default function CategoryItem(props: CategoryProps) {
  const { id, title, imageUrl } = props;

  return (
    <div key={id} className="category-container">
      <div
        className="background-image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <div className="category-body-container">
        <h2>{title}</h2>
        <p>Shop Now</p>
      </div>
    </div>
  );
}