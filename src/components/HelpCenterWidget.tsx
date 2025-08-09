import React, { useEffect } from 'react';
import { HelpCenterWidgetConfig } from '../types';

export interface HelpCenterWidgetProps extends HelpCenterWidgetConfig {}

export const HelpCenterWidget: React.FC<HelpCenterWidgetProps> = (props) => {
  useEffect(() => {
    const scriptId = 'help-center-widget-script';
    if (!document.getElementById(scriptId)) {
      const script = document.createElement('script');
      script.id = scriptId;
      script.src = 'https://widget.swiftyper.sk/sdk.iife.js';
      script.type = 'module';
      script.async = true;
      script.defer = true;
      script.onload = () => {
        window.helpCenterWidgetSDK.run(props);
      };
      document.head.appendChild(script);
    }
  }, [props]);

  return null;
};