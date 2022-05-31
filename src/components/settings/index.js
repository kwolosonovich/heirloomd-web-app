import PropTypes from 'prop-types';
//
import SettingsDrawer from './drawer';
//
import ThemeColorPresets from './ThemeColorPresets';
import ThemeContrast from './ThemeContrast';
import ThemeRtlLayout from './ThemeRtlLayout';

// ----------------------------------------------------------------------

export default function ThemeSettings({ children }) {
  return (
    <ThemeColorPresets>
      <ThemeContrast>
        <ThemeRtlLayout>
          {children}
          <SettingsDrawer />
        </ThemeRtlLayout>
      </ThemeContrast>
    </ThemeColorPresets>
  );
}

ThemeSettings.propTypes = {
  children: PropTypes.node.isRequired,
};
