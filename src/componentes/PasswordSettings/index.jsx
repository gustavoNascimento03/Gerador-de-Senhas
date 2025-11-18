import styles from "./styles.module.css";

export function PasswordSettings({
    length,
    setLength,
    includeUpper,
    onToggleUpper,
    includeLower,
    onToggleLower,
    includeNumbers,
    onToggleNumbers,
    includeSymbols,
    onToggleSymbols,
    startsWithLetter,
    onToggleStartsWithLetter,
}) {
    const handleLengthChange = (e) => {
        setLength(Number(e.target.value));
    };

    return (
        <section className={styles.section}>
            {/* Regra: Comprimento da Senha */}
            <div>
                <label className={styles.titleLabel}>
                    Comprimento da Senha
                </label>
                <div className={styles.optionsGrid}>
                    {/* Opção 1 */}
                    <label className={styles.radioLabel}>
                        <input
                            type="radio"
                            name="passwordLength"
                            value="7"
                            className={styles.radioInput}
                            checked={length === 7}
                            onChange={handleLengthChange}
                        />
                        <div className={styles.radioTile}>7 Dígitos</div>
                    </label>

                    {/* Opção 2 */}
                    <label className={styles.radioLabel}>
                        <input
                            type="radio"
                            name="passwordLength"
                            value="14"
                            className={styles.radioInput}
                            checked={length === 14}
                            onChange={handleLengthChange}
                        />
                        <div className={styles.radioTile}>14 Dígitos</div>
                    </label>

                    {/* Opção 3 */}
                    <label className={styles.radioLabel}>
                        <input
                            type="radio"
                            name="passwordLength"
                            value="21"
                            className={styles.radioInput}
                            checked={length === 21}
                            onChange={handleLengthChange}
                        />
                        <div className={styles.radioTile}>21 Dígitos</div>
                    </label>
                </div>
            </div>

            {/* Regra: Checkboxes */}
            <div className={styles.optionsGrid}>
                {/* Regra: Incluir Letra Maiúsculas */}
                <div className={styles.optionItem}>
                    <input
                        type="checkbox"
                        id="includeUppercase"
                        className={styles.checkboxInput}
                        checked={includeUpper}
                        onChange={onToggleUpper}
                    />
                    <label
                        htmlFor="includeUppercase"
                        className={styles.optionLabel}
                    >
                        Incluir Maiúsculas (A-Z)
                    </label>
                </div>

                {/* Regra: Incluir Letra Minúscula */}
                <div className={styles.optionItem}>
                    <input
                        type="checkbox"
                        id="includeLowercase"
                        className={styles.checkboxInput}
                        checked={includeLower}
                        onChange={onToggleLower}
                    />
                    <label
                        htmlFor="includeLowercase"
                        className={styles.optionLabel}
                    >
                        Incluir Minúsculas (a-z)
                    </label>
                </div>

                {/* Regra: Incluir Números */}
                <div className={styles.optionItem}>
                    <input
                        type="checkbox"
                        id="includeNumbers"
                        className={styles.checkboxInput}
                        checked={includeNumbers}
                        onChange={onToggleNumbers}
                    />
                    <label
                        htmlFor="includeNumbers"
                        className={styles.optionLabel}
                    >
                        Incluir Números (0-9)
                    </label>
                </div>

                {/* Regra: Incluir Símbolos */}
                <div className={styles.optionItem}>
                    <input
                        type="checkbox"
                        id="includeSymbols"
                        className={styles.checkboxInput}
                        checked={includeSymbols}
                        onChange={onToggleSymbols}
                    />
                    <label
                        htmlFor="includeSymbols"
                        className={styles.optionLabel}
                    >
                        Incluir Símbolos (!@#)
                    </label>
                </div>

                {/* Regra: Começar com Letra */}
                <div className={styles.optionItem}>
                    <input
                        type="checkbox"
                        id="startsWithLetter"
                        className={styles.checkboxInput}
                        checked={startsWithLetter}
                        onChange={onToggleStartsWithLetter}
                    />
                    <label
                        htmlFor="startsWithLetter"
                        className={styles.optionLabel}
                    >
                        Forçar início com Letra (a-Z)
                    </label>
                </div>
            </div>
        </section>
    );
}
