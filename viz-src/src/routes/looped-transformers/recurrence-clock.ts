import { readable } from 'svelte/store';
import { Timeline } from './tempus/timeline';
import { Player } from './tempus/player';

const visible = new Set<HTMLElement>();
let syncPlayback = () => {};
const clock = readable(0, set => {
  const player = new Player(Timeline.from({
    duration: 9.7,
    initialState: { elapsed: 0 },
    clips: [{ start: 0, end: 1, clip: { name: 'Sequence and depth recurrence', reduce: t => ({ elapsed: t * 9.7 }) } }]
  }), { looping: true });
  const motion = matchMedia('(prefers-reduced-motion: reduce)');
  const off = player.onTick((_, state) => set(state.elapsed));
  syncPlayback = () => {
    if (motion.matches) { player.pause(); player.seek(1); }
    else if (visible.size && !document.hidden) player.play();
    else player.pause();
  };
  motion.addEventListener('change', syncPlayback);
  document.addEventListener('visibilitychange', syncPlayback);
  syncPlayback();
  return () => {
    motion.removeEventListener('change', syncPlayback);
    document.removeEventListener('visibilitychange', syncPlayback);
    off(); player.dispose(); syncPlayback = () => {};
  };
});

export function observeRecurrence(element: HTMLElement, update: (elapsed: number) => void) {
  const unsubscribe = clock.subscribe(update);
  const observer = new IntersectionObserver(([entry]) => {
    if (entry.isIntersecting) visible.add(element);
    else visible.delete(element);
    syncPlayback();
  });
  observer.observe(element);
  return () => { observer.disconnect(); visible.delete(element); syncPlayback(); unsubscribe(); };
}
