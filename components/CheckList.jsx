import React, { useEffect, useState } from "react";
import Checkbox from "./Checkbox";
import { TREK_ITEMS } from "../utils";

const CheckList = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const trekItemsStr = localStorage.getItem("trekItems");

    const trekItems = trekItemsStr ? JSON.parse(trekItemsStr) : TREK_ITEMS;

    setItems(trekItems);

    if (!trekItemsStr) {
      localStorage.setItem("trekItems", JSON.stringify(TREK_ITEMS));
    }
  }, []);

  const handleUpdate = (item) => {
    const newItems = items.map((ele) => (ele.id === item.id ? item : ele));

    setItems(newItems);

    localStorage.setItem("trekItems", JSON.stringify(newItems));
  };

  const orderedCount = items.filter((item) => item.ordered).length;

  const packedCount = items.filter((item) => item.packed).length;

  const total = items.length;

  return (
    <div className="checklist-container">
      <div className="checklist-header">
        <div>
          <h1>Trek Checklist</h1>
          <p>
            Track what you need, what you've ordered, and what you've packed.
          </p>
        </div>

        <div className="progress-info">
          <div>
            <strong>{orderedCount}</strong>
            <span> Ordered</span>
          </div>

          <div>
            <strong>{packedCount}</strong>
            <span> Packed</span>
          </div>

          <small>{total} Total Items</small>
        </div>
      </div>

      <div className="checklist-table">
        <div className="checklist-heading">
          <div>ITEM</div>
          <div>QTY</div>
          <div>ORDERED</div>
          <div>PACKED</div>
        </div>

        {items.length ? (
          items.map((item) => (
            <Checkbox key={item.id} item={item} handleUpdate={handleUpdate} />
          ))
        ) : (
          <div className="empty-state">No items yet</div>
        )}
      </div>
    </div>
  );
};

export default CheckList;
