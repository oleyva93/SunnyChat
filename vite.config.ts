import {defineConfig} from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh'

export default ({mode}: any) => {
    return defineConfig({
        plugins: [reactRefresh()],
    })
}
