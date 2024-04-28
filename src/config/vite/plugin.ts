import reactRefresh from '@vitejs/plugin-react';
import { visualizer } from 'rollup-plugin-visualizer';

export const plugin = [
  reactRefresh(),
  visualizer({
    template: 'treemap',
    open: false,
    gzipSize: true,
    brotliSize: true,
    filename: 'analyse.html',
  }),
];
