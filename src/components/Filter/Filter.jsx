import styles from "./Filter.module.css";

export const Filter = ({ changeFilter }) => {
    return (
        <div className={styles.wrapper}>
            <p className={styles.text}>Find contacts by name</p>
            <input
                type="text"
                name="filter"
                onChange={changeFilter}
                placeholder="Enter a name..."
                className={styles.filter}
            />
        </div>
    );
};
