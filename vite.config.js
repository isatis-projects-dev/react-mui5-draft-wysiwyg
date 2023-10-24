import { resolve } from 'path';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';

const pkg = require('./package.json');

export default defineConfig({
    build: {
        lib: {
            entry: resolve(__dirname, 'src/index.jsx'),
            name: 'react-mui5-draft-wysiwyg',
            fileName: 'react-mui5-draft-wysiwyg',
            formats: ['es'],
        },
        rollupOptions: {
            external: [...Object.keys(pkg.peerDependencies), 'react/jsx-runtime'],
        },
    },
    plugins: [dts()],
});
