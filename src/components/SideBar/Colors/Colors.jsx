import Input from "../Input/Input";

const Colors = ({ colors, filters, onFilterChange }) => {
  return (
    <div>
      <h1 className="sm:text-lg font-semibold">Color</h1>
      {colors.map((color) => (
        <div key={color}>
          <Input
            value={color}
            title={color}
            name="color"
            checked={filters.color.includes(color)}
            onChange={() => onFilterChange("color", color)}
          />
        </div>
      ))}
    </div>
  );
};

export default Colors;
