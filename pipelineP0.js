// P0.js – Aufwachen
export const P0 = {
    run(core){
        return { id: "P0", action: "wake", core };
    }
};

// P1.js – Schmelzen
export const P1 = {
    run(core){
        return { id: "P1", action: "melt", core };
    }
};

// P2.js – Verschmelzen
export const P2 = {
    run(core){
        return { id: "P2", action: "merge", core };
    }
};

// P4.js – Starten
export const P4 = {
    run(core){
        return { id: "P4", action: "start", core };
    }
};

// Pe.js – Finalisieren
export const Pe = {
    run(core){
        return { id: "Pe", action: "finalize", core };
    }
};
