import { Route, Routes } from '@solidjs/router'

import Index from '../views'

export default () => {
    return (
        <Routes>
            <Route path="/" element={<Index />} />
        </Routes>
    )
}