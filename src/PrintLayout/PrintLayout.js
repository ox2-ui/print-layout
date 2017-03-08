import React, { PropTypes } from 'react';

const styles = {
  wrapper: {
    height: '100%',
  },
};

/**
 * PrintLayout Component
 */
const PrintLayout = ({ children, className, style, fonts, bodyFont }) => {
  const mergedStyles = {
    ...styles.wrapper,
    ...style,
  };

  return (
    <div className={className} style={mergedStyles}>
      <style>{'html, body, #root, #app, #react-root { height: 100%; margin: 0; padding: 0; }'}</style>
      <style>{'::-webkit-scrollbar { display: none; }'}</style>
      {fonts.map((font, index) =>
        <style key={index}>{`@import 'https://fonts.googleapis.com/css?family=${font.importName}';`}</style>
      )}
      <style>{`body { font-family: ${bodyFont}, sans-serif; }`}</style>
      {children}
    </div>
  );
};


PrintLayout.propTypes = {
  /**
   * Font family name to set on the body tag
   */
  bodyFont: PropTypes.string,
  /**
   * Layout content
   */
  children: PropTypes.node.isRequired,
  /**
   * The css class name of the root element.
   */
  className: PropTypes.string,
  /**
   * List of fonts to import
   */
  fonts: PropTypes.array,
  /**
   * Override the inline-styles of the root element.
   */
  style: PropTypes.object,
};

export default PrintLayout;
