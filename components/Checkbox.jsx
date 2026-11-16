import React from "react";

const Checkbox = ({ item, handleUpdate }) => {
  const handleChange = (field, value) => {
    handleUpdate({
      ...item,
      [field]: value,
    });
  };

  return (
    <div className={`checklist-row ${item.packed ? "packed" : ""}`}>
      <div className="item-name">{item.title}</div>

      <div className="quantity">{item.quantity}</div>

      <div className="checkbox-cell">
        <input
          type="checkbox"
          checked={item.ordered}
          onChange={(e) => handleChange("ordered", e.target.checked)}
        />
      </div>

      <div className="checkbox-cell">
        <input
          type="checkbox"
          checked={item.packed}
          onChange={(e) => handleChange("packed", e.target.checked)}
        />
      </div>
    </div>
  );
};

export default Checkbox;
