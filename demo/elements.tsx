import styled, {StyledComponentClass} from "styled-components";

export const Main: StyledComponentClass<any, any> = styled.main``;

export const Header: StyledComponentClass<any, any> = styled.header`
	padding: 1rem;
	text-align: center;
	position: relative;
`;

export const Title: StyledComponentClass<any, any> = styled.h1`
	font-size: 3rem;
	margin: 1rem 0;
	font-weight: lighter;
`;

export const Headline: StyledComponentClass<any, any> = styled.h2`
	font-size: 2rem;
	margin: 1rem auto;
	font-weight: lighter;
`;

export const Content: StyledComponentClass<any, any> = styled.article`
	margin: 1rem auto;
	padding: 1rem;
	max-width: 60rem;
	background: white;
	color: black;
`;

export const Copy: StyledComponentClass<any, any> = styled.p`
	margin: 1.5rem 0;
`;

export const Footer: StyledComponentClass<any, any> = styled.footer`
	padding: 3rem 1rem;
`;

export const Link: StyledComponentClass<any, any> = styled.a`
	color: currentColor;
	text-decoration: none;
	font-weight: bolder;

	&:hover {
		text-decoration: underline;
	}
`;

export const Dl: StyledComponentClass<any, any> = styled.dl`
	display: flex;
	flex-wrap: wrap;
	width: 100%;
	margin: 1rem auto;
	overflow: hidden;
`;

export const Dd: StyledComponentClass<any, any> = styled.dd`
	font-weight: normal;
	flex: 0 0 calc(100% - 3rem);
	margin: 0.5rem 0 0.5rem 3rem;
`;

export const Dt: StyledComponentClass<any, any> = styled.dt`
	font-weight: bolder;
	flex: 0 0 100%;
`;

export const Code: StyledComponentClass<any, any> = styled.code`
	padding: 0.125em 0.25rem;
	margin: -0.125em 0;
	background: hsla(231, 64%, 50%, 1);
	color: hsla(0, 0%, 100%, 1);
	border-radius: 2px;
`;

export const Row: StyledComponentClass<any, any> = styled.div`
	display: flex;
	flex-wrap: wrap;
`;

export const Column: StyledComponentClass<any, any> = styled.div`
	flex: 1 1 30rem;
`;

export const Icon: StyledComponentClass<any, any> = styled.svg.attrs({
	viewBox: "0 0 24 24"
})`
	width: 1.5rem;
	height: 1.5rem;
	fill: currentColor;
`;
export const Inner: StyledComponentClass<any, any> = styled.section`
	--pager-size: ${(props: any) => props.pagerSize || "3rem"};
	--background-h: ${(props: any) => props.hue || 0};
	--background-s: 48%;
	--background-l: 48%;
	--background-color: hsla(var(--background-h), var(--background-s), var(--background-l), 1);

	--stroke-h: 230;
	--stroke-s: 44%;
	--stroke-l: 64%;
	--stroke-a: 0.5;
	--stroke-color: hsla(var(--stroke-h), var(--stroke-s), var(--stroke-l), 1);
	--stroke-color-a: hsla(var(--stroke-h), var(--stroke-s), var(--stroke-l), var(--stroke-a));
	--stroke-width: 1px;

	--font-default: hsl(0, 0%, 100%);
	--font-invert: hsl(0, 0%, 0%);

	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	padding: 1rem 1rem 1rem
		${(props: any) => (props.withPagers ? "calc(var(--pager-size) + 2rem)" : "1rem")};
	overflow: hidden;
	color: white;
	background: var(--background-color);
`;