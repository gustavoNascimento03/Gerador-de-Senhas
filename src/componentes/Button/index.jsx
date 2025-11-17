import styles from "./styles.module.css";

export function Button({ onClick, label, isLoading = false }) {
    const buttonClasses = `
    ${styles.generateButton}
    ${!isLoading ? styles.animated : ""} 
  `;

    return (
        <button
            className={buttonClasses}
            onClick={onClick}
            disabled={isLoading}
        >
            <span>{label}</span>
        </button>
    );
}
