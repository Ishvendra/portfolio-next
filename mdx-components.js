// mdx-components.js (place this in your root directory)
export function useMDXComponents(components) {
  return {
    // Custom components for MDX
    h1: (props) => <h1 style={{ color: 'blue' }} {...props} />,
    h2: (props) => <h2 style={{ color: 'green' }} {...props} />,
    // Add more custom components as needed
    ...components,
  };
}
