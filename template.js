function template(
  { template },
  opts,
  { imports, componentName, props, jsx, exports }
) {
  return template.ast`
    ${imports}
    import '../index.scss';
    const ${componentName} = ({ className = '', ...props }) => {
      props = {...props, className: \`\${className} ui-svg-icon\`};
      return (${jsx});
    }
    ${exports}
  `
}

module.exports = template
