import { Component } from "solid-js";
import LayoutContext, {createLayoutMutable} from './contexts/LayoutContext'
import { ThemeProvider } from '@suid/material'
import themeConf from './theme'
import LayoutHeader from "./layout/LayoutHeader";
import LayoutContainer from './layout/LayoutContainer'
const App: Component = () => {

	const context = createLayoutMutable()

	const theme = themeConf.init(context)

	return (
		<LayoutContext.Provider value={context}>
			<ThemeProvider theme={theme}>
				<section class="flex flex-col w-full h-full">
					<LayoutHeader />
					<LayoutContainer />
				</section>
			</ThemeProvider>
		</LayoutContext.Provider>
	)
}

export default App