import PropTypes from "prop-types";
import css from "./Filter.module.css";

export const Filter = ({ filter, onChange }) => {
  return (
    <div className={css.filter}>
      <label className={css.label}>
        <span>Find contacts by name</span>
        <input
          className={css.input}
          type="text"
          name="filter"
          value={filter}
          onChange={onChange}
        />
      </label>
    </div>
  );
};

Filter.propTypes = { filter: PropTypes.string, onChange: PropTypes.func.isRequired };
