import { sortComplex } from "./OS_CORE.js";

class RithEngine {
    runRev() {
        const rithSort = sortComplex([3,9,27,81,243], {
            mode: "RITH",
            axis: "3,9,27,81,243",
            format: "percent"
        });

        state.rev.score = rithSort.sorted.numeric.length;
        state.rev.emotion = rithSort.sorted.percent[0];
        state.human = state.rev.emotion;

        this.updateUI();
    }

    runUpg() {
        const evoSort = sortComplex([1,4,16,64,256], {
            mode: "EVO",
            axis: "3,9,27,81,243"
        });

        state.upg.level = evoSort.sorted.evo.length;
        this.updateUI();
    }
}
