// @ts-check

import urlcat from 'urlcat';
import React from 'react';
import {HopLogo} from './assets/BrandVectors';
import {DocsThemeConfig, useConfig} from 'nextra-theme-docs';

const config: DocsThemeConfig = {
	project: {
		link: 'https://github.com/hopinc/docs',
	},

	chat: {
		link: 'https://discord.gg/hop',
	},

	feedback: {
		labels: 'feedback',
		content: 'Feedback',
	},

	nextThemes: {
		defaultTheme: 'dark',
	},

	toc: {
		float: true,

		extraContent: function ExtraTOCContent() {
			return (
				<div>
					<a
						target="_blank"
						rel="noopener noreferrer"
						className="text-xs font-medium text-neutral-500 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100 contrast-more:text-neutral-800 contrast-more:dark:text-neutral-50"
						href="https://console.hop.io"
					>
						Console
					</a>
				</div>
			);
		},
	},

	editLink: {
		text: 'Edit this page',
	},

	footer: {
		text: function FooterText() {
			return <>{new Date().getFullYear()} © Hop, Inc.</>;
		},
	},

	docsRepositoryBase: 'https://github.com/hopinc/docs/tree/master',
	titleSuffix: ' — Hop Documentation',

	logo: function Logo() {
		return <HopLogo width={50} />;
	},

	banner: {
		key: 'beta',
		text: function Banner() {
			return (
				<a
					href="https://hop.io"
					target="_blank"
					rel="noopener noreferrer"
					className="font-medium text-current no-underline"
					title="Go to the Hop beta announcement"
				>
					Hop is in private beta
				</a>
			);
		},
	},

	sidebar: {
		defaultMenuCollapsed: true,
	},

	head: function Head() {
		const {title, ...meta} = useConfig().frontMatter;

		const ogImage =
			meta.image ||
			urlcat('https://ogmeta.vercel.app/', {
				title,
				subtitle: meta.description ?? undefined,
				dark: 'true',
			});

		return (
			<>
				<meta name="msapplication-TileColor" content="#ffffff" />
				<meta httpEquiv="Content-Language" content="en" />
				<meta
					name="description"
					content={meta.description || 'Hop: The realtime engine'}
				/>
				<meta
					name="og:description"
					content={meta.description || 'Hop: The realtime engine'}
				/>
				<meta name="twitter:card" content="summary_large_image" />
				<meta name="twitter:site" content="@hop" />
				<meta name="twitter:image" content={ogImage} />
				<meta
					name="og:title"
					content={title ? title + ' — Hop' : 'Hop: The realtime engine'}
				/>
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
				<meta name="description" content="Hop: the realtime engine" />
				<meta name="og:title" content="Hop: the realtime engine" />{' '}
				<meta name="og:image" content={ogImage} />
				<style
					dangerouslySetInnerHTML={{
						__html: `
							img[decoding] {
								border-radius: 0.75rem;
							}

							html {
								font-family: "GT Walsheim",-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif !important;
							}

							code, kbd, pre, samp {
								font-family: "JetBrains Mono", ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, Liberation Mono, Courier New, monospace !important;
							}

							:root {
								--nextra-primary-hue: 258deg !important;
							}

							.dark {
								--nextra-primary-hue: 204deg !important;
							}

							.dark li.active > a {
								--tw-text-opacity: 1 !important;
								--tw-bg-opacity: 0.2 !important;
							}

							.nextra-sidebar-container li a {
								border-radius: 1.5em !important;
								padding-left: 12px !important;
							}

							.nextra-sidebar-container li a svg {
								border-radius: 100%;
							}

							.dark .nextra-body a {
								--nextra-primary-hue: 204deg !important;
							}
						`,
					}}
				/>
			</>
		);
	},
};

export default config;
