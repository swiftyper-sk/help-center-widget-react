export interface HelpCenterWidgetConfig {
  apiKey: string
  locale?: string
  isOpen?: boolean
  launcherPosition?: 'bottom-right' | 'bottom-left' | 'top-right' | 'top-left'
  launcherColor?: string
  launcherBackgroundColor?: string
  launcherSize?: string
  launcherMargin?: string
  launcherAnimation?: boolean
  widgetRadius?: string
  widgetWidth?: string
  widgetHeight?: string
  displayMode?: 'popup' | 'modal'
  showModalBackdrop?: boolean
  backdropColor?: string
  launcherIconSvg?: string
}

declare global {
  interface Window {
    helpCenterWidgetSDK: {
      run: (config: HelpCenterWidgetConfig) => void
      toggle: (state?: boolean) => void
      navigate: (
          route: 'search' | 'category' | 'article',
          idOrQuery: string
      ) => void
      hasLoaded: boolean
      isReady: boolean
    }
  }
} 