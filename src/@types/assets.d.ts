declare module '*.svg' {
	import React = require('react');

	const ReactComponent: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
	export default ReactComponent;
}

declare module '*.jpg' {
	const content: string;
	export default content;
}

declare module '*.png' {
	const content: string;
	export default content;
}

declare module '*.json' {
	const content: string;
	export default content;
}
