import { DIMENSIONS, ARCHETYPES } from '../data/archetypes.js';

export function calculateMindsetMetrics(state, scenarios) {
  const metrics = {
    connection: { total: 0, max: 0 },
    contradiction: { total: 0, max: 0 },
    objective: { total: 0, max: 0 },
    practice: { total: 0, max: 0 },
    depth: { total: 0, max: 0 }
  };

  // Base starting scores so brand new users have a baseline
  const baseScore = 40;

  // Tally scenario dimensions
  scenarios.forEach(sc => {
    const dim = sc.dimensionScores || {};
    const record = state.completedScenarios[sc.id];

    Object.keys(metrics).forEach(key => {
      const weight = dim[key] || 15;
      metrics[key].max += weight;
      if (record) {
        if (record.isDialectical) {
          metrics[key].total += weight;
        } else {
          // Partial credit for engagement
          metrics[key].total += Math.round(weight * 0.35);
        }
      }
    });
  });

  // Detective bonus
  const solvedCount = Object.keys(state.detectiveSolved || {}).length;
  const detectiveBonus = solvedCount * 8;

  // Calculate percentages (0 - 100)
  const result = {};
  let overallSum = 0;

  DIMENSIONS.forEach(dim => {
    const m = metrics[dim.key];
    let pct;
    if (m.max === 0) {
      pct = baseScore;
    } else {
      pct = Math.round((m.total / m.max) * 100);
      pct = Math.min(100, Math.max(20, pct + detectiveBonus));
    }
    result[dim.key] = pct;
    overallSum += pct;
  });

  const averageScore = Math.round(overallSum / DIMENSIONS.length);

  // Match Archetype
  let matchedArchetype = ARCHETYPES[ARCHETYPES.length - 1]; // default lowest
  for (const arch of ARCHETYPES) {
    if (averageScore >= arch.minScore) {
      matchedArchetype = arch;
      break;
    }
  }

  return {
    dimensionScores: result,
    averageScore,
    archetype: matchedArchetype,
    totalScenariosCompleted: Object.keys(state.completedScenarios).length,
    detectiveCasesSolved: solvedCount
  };
}

// Generate SVG Polygon path for 5-axis Radar Chart
export function generateRadarChartSVG(dimensionScores, size = 300) {
  const center = size / 2;
  const radius = (size / 2) - 40;
  const angles = [
    -Math.PI / 2,                          // Top (connection)
    -Math.PI / 2 + (2 * Math.PI / 5),      // Top Right (contradiction)
    -Math.PI / 2 + (4 * Math.PI / 5),      // Bottom Right (objective)
    -Math.PI / 2 + (6 * Math.PI / 5),      // Bottom Left (practice)
    -Math.PI / 2 + (8 * Math.PI / 5)       // Top Left (depth)
  ];

  const keys = ['connection', 'contradiction', 'objective', 'practice', 'depth'];

  // Calculate point coordinates
  const points = angles.map((angle, idx) => {
    const score = (dimensionScores[keys[idx]] || 50) / 100;
    const r = radius * score;
    const x = center + r * Math.cos(angle);
    const y = center + r * Math.sin(angle);
    return `${x.toFixed(1)},${y.toFixed(1)}`;
  }).join(' ');

  // Grid levels (20%, 40%, 60%, 80%, 100%)
  const gridLevels = [0.2, 0.4, 0.6, 0.8, 1.0].map(level => {
    const gridPoints = angles.map(angle => {
      const r = radius * level;
      const x = center + r * Math.cos(angle);
      const y = center + r * Math.sin(angle);
      return `${x.toFixed(1)},${y.toFixed(1)}`;
    }).join(' ');
    return `<polygon points="${gridPoints}" fill="none" stroke="currentColor" stroke-opacity="0.14" stroke-width="1.2" stroke-dasharray="${level === 1 ? 'none' : '3 3'}"/>`;
  }).join('');

  // Axis lines
  const axisLines = angles.map(angle => {
    const x = center + radius * Math.cos(angle);
    const y = center + radius * Math.sin(angle);
    return `<line x1="${center}" y1="${center}" x2="${x.toFixed(1)}" y2="${y.toFixed(1)}" stroke="currentColor" stroke-opacity="0.22" stroke-width="1.2"/>`;
  }).join('');

  // Axis labels
  const labelPositions = [
    { x: center, y: center - radius - 16, anchor: 'middle', label: 'Mối liên hệ' },
    { x: center + radius + 15, y: center - 25, anchor: 'start', label: 'Mâu thuẫn' },
    { x: center + radius * 0.7, y: center + radius + 22, anchor: 'middle', label: 'Khách quan' },
    { x: center - radius * 0.7, y: center + radius + 22, anchor: 'middle', label: 'Thực tiễn' },
    { x: center - radius - 15, y: center - 25, anchor: 'end', label: 'Bản chất' }
  ];

  const labelsSVG = labelPositions.map((pos, idx) => {
    const val = dimensionScores[keys[idx]] || 50;
    return `
      <text x="${pos.x}" y="${pos.y}" fill="currentColor" opacity="0.85" font-family="'Plus Jakarta Sans', sans-serif" font-size="11.5" font-weight="700" text-anchor="${pos.anchor}">
        ${pos.label}
        <tspan fill="#2563eb" font-weight="bold"> (${val}%)</tspan>
      </text>
    `;
  }).join('');

  return `
    <svg viewBox="0 0 ${size} ${size}" width="${size}" height="${size}" class="radar-chart-svg" style="color: var(--text-main); max-width: 100%;">
      <defs>
        <radialGradient id="radarFillGrad" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stop-color="#059669" stop-opacity="0.45"/>
          <stop offset="100%" stop-color="#2563eb" stop-opacity="0.2"/>
        </radialGradient>
      </defs>
      ${gridLevels}
      ${axisLines}
      <polygon points="${points}" fill="url(#radarFillGrad)" stroke="#2563eb" stroke-width="2.5" />
      ${angles.map((angle, idx) => {
        const score = (dimensionScores[keys[idx]] || 50) / 100;
        const r = radius * score;
        const x = center + r * Math.cos(angle);
        const y = center + r * Math.sin(angle);
        return `<circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="5" fill="#2563eb" stroke="#ffffff" stroke-width="2"/>`;
      }).join('')}
      ${labelsSVG}
    </svg>
  `;
}
