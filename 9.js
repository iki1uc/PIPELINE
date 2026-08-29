// ─── UNI-9 · 360° Lebensmatrix ───────────────────────────────
export function UNI9(values) {
 
  // 1) 3-Achse: Grundsortierung
  const axis3 = values
    .map(Number)
    .filter(n => !isNaN(n))
    .sort((a,b)=>a-b);

  // 2) 9-Achse: 360°-Lebensraum
  const axis9 = axis3.map((v,i)=>({
    value: v,
    index: i,
    degree: (i * 40),       // 9 Punkte → 360° / 9 = 40°
    percent: (v / axis3[axis3.length-1]) * 100,
    vector: i === 0 ? 0 : v - axis3[i-1],
    te: v + "te"
  }));

  // 3) Pipeline21: 50%-Regel
  const pipeline21 = axis9.map(a => ({
    ...a,
    half: a.value * 0.5,
    full: a.value,
    delta: a.full - a.half
  }));

  // 4) Lebensmatrix zurückgeben
  return {
    raw: values,
    axis3,
    axis9,
    pipeline21,
    life360: axis9.map(a => a.degree)
  };
}
