// ============================================================
// RITH_WERT ENGINE · 4 als lebendige Achse
// ============================================================

// ── KONSTANTEN ──
const RITH_DEFAULT = 4;

// ── STATE ──
const state = {
    rith: RITH_DEFAULT,
    human: "WACH",
    mech: "BEREIT",
    rev: { score: 0, emotion: "NEUTRAL" },
    upd: { changes: 0, level: 0 },
    upg: { count: 0, level: 0 },
    p0: false, p1: false, p2: false
};

// ── ENGINE KERN ──
class RithEngine {
    constructor() {
        this.rith = RITH_DEFAULT;
        this.initialized = false;
    }

    // 1. INITIALISIEREN (mit optionalem URL-Parameter)
    init() {
        const params = new URLSearchParams(window.location.search);
        const wert = params.get('wert');
        
        if (wert && !isNaN(parseInt(wert))) {
            this.rith = parseInt(wert);
            state.rith = this.rith;
            log(`🌀 RITH-WERT von außen gesetzt: ${this.rith}`, "gold");
        } else {
            this.rith = RITH_DEFAULT;
            state.rith = RITH_DEFAULT;
            log(`🌀 RITH-WERT initialisiert: ${this.rith}`, "gold");
        }
        this.initialized = true;
        this.updateUI();
    }

    // 2. AKTUALISIEREN
    updateUI() {
        document.getElementById("rithWert").textContent = this.rith;
        document.getElementById("humanState").textContent = state.human;
        document.getElementById("mechState").textContent = state.mech;
        document.getElementById("revScore").textContent = state.rev.score;
        document.getElementById("revEmotion").textContent = state.rev.emotion;
        document.getElementById("updChanges").textContent = state.upd.changes;
        document.getElementById("updLevel").textContent = state.upd.level;
        document.getElementById("upgCount").textContent = state.upg.count;
        document.getElementById("upgLevel").textContent = state.upg.level;
    }

    // 3. EVO: REV (Humanistisch)
    runRev() {
        const score = Math.floor(Math.random() * 100) + 1;
        state.rev.score = score;
        state.rev.emotion = score > 70 ? "FREUDE" : score > 40 ? "NEUTRAL" : "MÜDE";
        state.human = state.rev.emotion;
        log(`🔮 REV · Score ${score} · Emotion ${state.rev.emotion}`, "human");
        this.updateUI();
    }

    // 4. EVO: UPD (Mechanisch)
    runUpd() {
        state.upd.changes++;
        state.upd.level = Math.floor(state.upd.changes / 5);
        state.mech = state.upd.changes % 2 === 0 ? "AKTIV" : "PAUSE";
        log(`🔄 UPD · Changes ${state.upd.changes} · Level ${state.upd.level}`, "mech");
        this.updateUI();
    }

    // 5. EVO: UPG (Evolution)
    runUpg() {
        state.upg.count++;
        state.upg.level = Math.floor(state.upg.count / 3);
        log(`🚀 UPG · Count ${state.upg.count} · Level ${state.upg.level}`, "gold");
        this.updateUI();
    }

    // 6. PIPELINE: P0 / P1 / P2
    runP0() {
        state.p0 = true;
        log(`🌅 P0 · RAW → WACH`, "mech");
        this.updateUI();
    }

    runP1() {
        state.p1 = true;
        log(`🔥 P1 · STRUCTURE → GEORDNET`, "mech");
        this.updateUI();
    }

    runP2() {
        state.p2 = true;
        log(`🔗 P2 · VECTOR → RICHTUNG`, "mech");
        this.updateUI();
    }

    // 7. FULL PIPELINE
    runPipeline() {
        this.runP0();
        setTimeout(() => this.runP1(), 200);
        setTimeout(() => this.runP2(), 400);
        setTimeout(() => this.runRev(), 600);
        setTimeout(() => this.runUpd(), 800);
        setTimeout(() => this.runUpg(), 1000);
        log(`🌀 FULL PIPELINE RUN`, "gold");
    }
}

// ── INSTANZ ──
const rithEngine = new RithEngine();

// ── LOG ──
function log(msg, type = "") {
    const el = document.getElementById("log");
    const e = document.createElement("div");
    e.textContent = msg;
    el.appendChild(e);
    el.scrollTop = el.scrollHeight;
}

// ── INIT ──
rithEngine.init();
log("🌀 RITH-WERT ENGINE bereit.");
log("🌀 Humanistisch & Mechanisch · RITH (4) · EVO");
