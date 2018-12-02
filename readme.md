# react over-scroll

A scroll based slide-show with wings.

[Demo](https://pixelass.github.io/react-over-scroll/)

[![npm](https://img.shields.io/npm/v/react-over-scroll.svg)](https://www.npmjs.com/package/react-over-scroll)
[![Standard Version](https://img.shields.io/badge/release-standard%20version-brightgreen.svg)](https://github.com/conventional-changelog/standard-version)
[![Travis](https://img.shields.io/travis/pixelass/react-over-scroll.svg)](https://travis-ci.org/pixelass/react-over-scroll)
[![David](https://img.shields.io/david/pixelass/react-over-scroll.svg)](https://david-dm.org/pixelass/react-over-scroll)
[![David](https://img.shields.io/david/dev/pixelass/react-over-scroll.svg)](https://david-dm.org/pixelass/react-over-scroll#info=devDependencies&view=table)  
[![GitHub license](https://img.shields.io/github/license/pixelass/react-over-scroll.svg)](https://github.com/pixelass/react-over-scroll/blob/master/LICENSE)
[![GitHub issues](https://img.shields.io/github/issues/pixelass/react-over-scroll.svg)](https://github.com/pixelass/react-over-scroll/issues)
[![GitHub forks](https://img.shields.io/github/forks/pixelass/react-over-scroll.svg)](https://github.com/pixelass/react-over-scroll/network)
[![GitHub stars](https://img.shields.io/github/stars/pixelass/react-over-scroll.svg)](https://github.com/pixelass/react-over-scroll/stargazers)

```
yarn add react-over-scroll
```

## Description

OverScroll is a slide-show or content-slider, call it what you want. It is a full-screen/viewport element that snaps into fixed mode when it reaches the viewports top edge. Scrolling is now translated to paging, switching the content each time a predefined scroll amount has been reached. During an active slide two values are available. (See [Render](https://github.com/pixelass/react-over-scroll/#render) for more information). Take a look at the [Demo](https://pixelass.github.io/react-over-scroll/) to get a better understanding of the behavior.

## Render

OverScroll allows the usage of a child function or a render property.

### Example 1

```jsx
import OverScroll from "react-over-scroll";
import React from "react";

export const Example = () => (
	<OverScroll pages={5}>
		{({page, progress}) => (
			<div>
				<ul>
					<li>progress: {progress}</li>
					<li>page: {page}</li>
				</ul>
			</div>
		)}
	</OverScroll>
);
```

### Example 2

```jsx
import OverScroll from "react-over-scroll";
import React from "react";

const renderPages = ({page, progress}) => (
	<div>
		<ul>
			<li>progress: {progress}</li>
			<li>page: {page}</li>
		</ul>
	</div>
);

export const Example = () => <OverScroll pages={5} render={renderPages} />;
```

## Configuration

* `anchors: ?string`: Use anchors to allow deep-links and browser history.
* `factor: ?number`: Change the factor that translates scroll offset to progress.
* `pages: number`: The number of pages. Each page has its own progress scope.

```jsx
import OverScroll from "react-over-scroll";
import React from "react";

export const Example = () => (
	<OverScroll pages={5} anchors="!/example" factor{2}>
		{({page, progress, anchors}) => (
			<div>
				<ul>
					<li>progress: {progress}</li>
					<li>page: {page}</li>
					{Array(5).fill(Boolean).map((x, i) => {
						// Add links to for each page
						return (
							<li key={i}>
								<a href={`#${anchors}/i + 1`}>Go to Page {i + 1}</a>
							</li>
						)
					})}
				</ul>
			</div>
		)}
	</OverScroll>
);
```
## Development

If you want to build this module from source or contribute to this project you
should follow the steps listed below.

### Setup

```shell
yarn
```

### Run dev server

```shell
yarn dev
```
