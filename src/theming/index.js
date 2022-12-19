import React from 'react'
import { useColorScheme } from 'react-native'
import DNDefaultTheme from './default'

export default DNDefaultTheme

export const DNContext = React.createContext()

const defaultProps = {
  children: null,
  theme: {},
  appearance: null,
}

export function DNProvider(props = defaultProps) {
  const { theme, appearance, children } = props
  const colorScheme = useColorScheme()
  const overridenTheme = { ...DNDefaultTheme, ...theme }
  const overridenApperance = { ...colorScheme, ...appearance }
  const context = {
    theme: overridenTheme,
    appearance: overridenApperance,
  }
  return <DNContext.Provider value={context}>{children}</DNContext.Provider>
}

export function useTrulyNative(Component, styles) {
  return props => {
    const colorScheme = useColorScheme()
    return (
      <DNContext.Consumer>
        {context => (
          <Component
            {...props}
            theme={{ ...DNDefaultTheme, ...context.theme }}
            appearance={colorScheme || context.appearance}
            styles={
              styles &&
              styles(
                { ...DNDefaultTheme, ...context.theme },
                context.appearance,
              )
            }
          />
        )}
      </DNContext.Consumer>
    )
  }
}

export function extendTheme(theme) {
  return { ...DNDefaultTheme, ...theme }
}

export function useTheme() {
  return React.useContext(DNContext)
}
