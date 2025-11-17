import { useState, useEffect } from "react";
import styles from "./styles.module.css";
import { Button } from "../Button";
import { PasswordDisplay } from "../PasswordDisplay";
import { PasswordSettings } from "../PasswordSettings";

const charSets = {
    UPPER: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    LOWER: "abcdefghijklmnopqrstuvwxyz",
    NUMBERS: "0123456789",
    SYMBOLS: "!@#$%^&*()_+-=[]{}|;:,.<>?",
};

function getRandomChar(str) {
    const randomIndex = Math.floor(Math.random() * str.length);
    return str[randomIndex];
}

function shuffleArray(array) {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
}

export function PasswordGenerator() {
    const [password, setPassword] = useState("");
    const [length, setLength] = useState(14);
    const [includeUpper, setIncludeUpper] = useState(true);
    const [includeLower, setIncludeLower] = useState(true);
    const [includeNumbers, setIncludeNumbers] = useState(true);
    const [includeSymbols, setIncludeSymbols] = useState(false);
    const [startsWithLetter, setStartsWithLetter] = useState(true);

    const handleGeneratePassword = () => {
        let allChars = "";
        let guaranteedChars = [];
        let letterChars = "";

        if (includeUpper) {
            allChars += charSets.UPPER;
            letterChars += charSets.UPPER;
            guaranteedChars.push(getRandomChar(charSets.UPPER));
        }
        if (includeLower) {
            allChars += charSets.LOWER;
            letterChars += charSets.LOWER;
            guaranteedChars.push(getRandomChar(charSets.LOWER));
        }
        if (includeNumbers) {
            allChars += charSets.NUMBERS;
            guaranteedChars.push(getRandomChar(charSets.NUMBERS));
        }
        if (includeSymbols) {
            allChars += charSets.SYMBOLS;
            guaranteedChars.push(getRandomChar(charSets.SYMBOLS));
        }

        // Tratamento de erro
        if (allChars.length === 0) {
            setPassword("Selecione uma regra!");
            return;
        }
        if (startsWithLetter && letterChars.length === 0) {
            setPassword("Regra 'Letra' exige Maiúsculas/Minúsculas!");
            return;
        }

        let passwordArray = [...guaranteedChars];
        const fillLength = length - passwordArray.length;

        for (let i = 0; i < fillLength; i++) {
            if (passwordArray.length >= length) break;
            passwordArray.push(getRandomChar(allChars));
        }

        let shuffledPassword = shuffleArray(passwordArray);

        if (startsWithLetter) {
            const firstChar = shuffledPassword[0];
            if (!letterChars.includes(firstChar)) {
                let firstLetterIdx = -1;
                for (let i = 1; i < shuffledPassword.length; i++) {
                    if (letterChars.includes(shuffledPassword[i])) {
                        firstLetterIdx = i;
                        break;
                    }
                }
                if (firstLetterIdx !== -1) {
                    [shuffledPassword[0], shuffledPassword[firstLetterIdx]] = [
                        shuffledPassword[firstLetterIdx],
                        shuffledPassword[0],
                    ];
                }
            }
        }

        const finalPassword = shuffledPassword.slice(0, length).join("");
        setPassword(finalPassword);
    };

    const handleCopy = () => {
        if (!password || password.startsWith("Selecione")) {
            return;
        }
        if (navigator.clipboard) {
            navigator.clipboard
                .writeText(password)
                .then(() => {
                    console.log("Senha copiada para o clipboard!");
                })
                .catch((err) => {
                    console.error("Falha ao copiar: ", err);
                });
        }
    };

    useEffect(() => {
        handleGeneratePassword();
    }, []);

    return (
        <main className={styles.container}>
            <h1 className={styles.title}>Gerador de Senhas</h1>

            <PasswordDisplay password={password} onCopy={handleCopy} />

            <PasswordSettings
                length={length}
                setLength={setLength}
                includeUpper={includeUpper}
                onToggleUpper={() => setIncludeUpper(!includeUpper)}
                includeLower={includeLower}
                onToggleLower={() => setIncludeLower(!includeLower)}
                includeNumbers={includeNumbers}
                onToggleNumbers={() => setIncludeNumbers(!includeNumbers)}
                includeSymbols={includeSymbols}
                onToggleSymbols={() => setIncludeSymbols(!includeSymbols)}
                startsWithLetter={startsWithLetter}
                onToggleStartsWithLetter={() =>
                    setStartsWithLetter(!startsWithLetter)
                }
            />

            <Button onClick={handleGeneratePassword} label="Gerar Senha" />
        </main>
    );
}
