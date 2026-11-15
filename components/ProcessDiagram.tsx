import type { CSSProperties, ReactNode } from "react";
import type { Dictionary } from "@/lib/dictionaries/en";
import styles from "./ProcessDiagram.module.css";

/** One example run, followed through every step. */
const run = [
  { name: "Warm Up", score: 0.86, config: [0.62, 0.3, 0.45] },
  { name: "Vivid", score: 0.74, config: [0.4, 0.7, 0.25] },
  { name: "Brighten", score: 0.62, config: [0.75, 0.2, 0.35] },
  { name: "Crisp", score: 0.31, config: [0.3, 0.5, 0.8] },
  { name: "Film", score: 0.18, config: [0.55, 0.35, 0.6] },
];
const threshold = 0.4;
const kept = run.filter((r) => r.score >= threshold);


function Step({ n, title, text, children }: { n: number; title: string; text: string; children: ReactNode }) {
  return (
    <li className={styles.step}>
      <div className={styles.copy}>
        <span className={styles.num}>{String(n).padStart(2, "0")}</span>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.text}>{text}</p>
      </div>
      <div className={styles.visual} aria-hidden="true">
        {children}
      </div>
    </li>
  );
}

export function ProcessDiagram({ t }: { t: Dictionary }) {
  const [s1, s2, s3, s4, s5] = t.process.steps;
  const name = (r: { name: string }) => t.recipes[r.name]?.name ?? r.name;
  return (
    <ol className={styles.diagram}>
      <Step n={1} title={s1.title} text={s1.text}>
        <div className={styles.photo}>
          <span className={styles.scan} />
        </div>
        <dl className={styles.readings}>
          {t.process.readings.map((r) => (
            <div key={r.label}>
              <dt>{r.label}</dt>
              <dd>{r.value}</dd>
            </div>
          ))}
        </dl>
      </Step>

      <Step n={2} title={s2.title} text={s2.text}>
        <ul className={styles.list}>
          {run.map((r) => (
            <li key={r.name} className={styles.configRow}>
              <span className={styles.name}>{name(r)}</span>
              <span className={styles.knobs}>
                {r.config.map((v, i) => (
                  <span key={i} className={styles.knob} style={{ "--v": v } as CSSProperties} />
                ))}
              </span>
            </li>
          ))}
        </ul>
      </Step>

      <Step n={3} title={s3.title} text={s3.text}>
        <ul className={styles.list}>
          {run.map((r) => (
            <li key={r.name} className={styles.scoreRow}>
              <span className={styles.name}>{name(r)}</span>
              <span className={styles.bar}>
                <span style={{ width: `${r.score * 100}%` }} />
              </span>
              <span className={styles.value}>{r.score.toFixed(2)}</span>
            </li>
          ))}
        </ul>
      </Step>

      <Step n={4} title={s4.title} text={s4.text}>
        <div className={styles.filterWrap} style={{ "--t": threshold } as CSSProperties}>
        <span className={styles.threshold} />
        <ul className={`${styles.list} ${styles.filtered}`}>
          {run.map((r) => (
            <li key={r.name} className={styles.scoreRow} data-out={r.score < threshold ? "" : undefined}>
              <span className={styles.name}>{name(r)}</span>
              <span className={styles.bar}>
                <span style={{ width: `${r.score * 100}%` }} />
              </span>
              <span className={styles.value}>{r.score < threshold ? "×" : "✓"}</span>
            </li>
          ))}
        </ul>
        </div>
      </Step>

      <Step n={5} title={s5.title} text={s5.text}>
        <ul className={styles.list}>
          {kept.map((r, i) => (
            <li key={r.name} className={styles.rankRow} data-top={i === 0 ? "" : undefined}>
              <span className={styles.rank}>{i + 1}</span>
              <span className={styles.thumb} data-look={r.name} />
              <span className={styles.name}>{name(r)}</span>
            </li>
          ))}
        </ul>
      </Step>
    </ol>
  );
}
