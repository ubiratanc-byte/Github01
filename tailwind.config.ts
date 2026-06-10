import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			fontFamily: {
				'sans': ['Inter', 'system-ui', 'sans-serif'],
				'serif': ['Georgia', 'serif'],
				'headline': ['Roboto', 'system-ui', 'sans-serif'],
				'display': ['Roboto', 'system-ui', 'sans-serif'],
			},
			colors: {
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				
				/* Brand Colors - V-Power Sales Page */
				brand: {
					dark: 'hsl(var(--brand-dark))',
					'dark-foreground': 'hsl(var(--brand-dark-foreground))',
					blue: 'hsl(var(--brand-blue))',
					'blue-foreground': 'hsl(var(--brand-blue-foreground))',
					silver: 'hsl(var(--brand-silver))',
					'silver-foreground': 'hsl(var(--brand-silver-foreground))',
					accent: 'hsl(var(--brand-accent))',
					'accent-foreground': 'hsl(var(--brand-accent-foreground))',
					success: 'hsl(var(--brand-success))',
					'success-foreground': 'hsl(var(--brand-success-foreground))',
					gold: 'hsl(var(--brand-gold))',
					'gold-foreground': 'hsl(var(--brand-gold-foreground))',
					'gold-light': 'hsl(var(--brand-gold-light))',
				},
				
				/* News Portal Colors */
				'news-primary': 'hsl(var(--news-primary))',
				'news-primary-foreground': 'hsl(var(--news-primary-foreground))',
				'news-secondary': 'hsl(var(--news-secondary))',
				'news-secondary-foreground': 'hsl(var(--news-secondary-foreground))',
				
				/* Typography Colors */
				'headline-primary': 'hsl(var(--headline-primary))',
				'headline-secondary': 'hsl(var(--headline-secondary))',
				'body-text': 'hsl(var(--body-text))',
				'meta-text': 'hsl(var(--meta-text))',
				
				/* Interactive Colors */
				'link-color': 'hsl(var(--link-color))',
				'link-hover': 'hsl(var(--link-hover))',
				'button-cta': 'hsl(var(--button-cta))',
				'button-cta-hover': 'hsl(var(--button-cta-hover))',
				
				/* Layout Colors */
				'border-light': 'hsl(var(--border-light))',
				'border-medium': 'hsl(var(--border-medium))',
				'section-divider': 'hsl(var(--section-divider))',
				'article-bg': 'hsl(var(--article-bg))',
				
				/* Legacy Support */
				border: 'hsl(var(--border-light))',
				input: 'hsl(var(--border-light))',
				ring: 'hsl(var(--news-primary))',
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			boxShadow: {
				'blue': '0 0 20px rgba(59, 130, 246, 0.3)',
				'premium': '0 25px 50px rgba(0, 0, 0, 0.25)',
				'soft': '0 10px 40px rgba(0, 0, 0, 0.1)',
				'gold': '0 0 20px rgba(212, 175, 55, 0.3)',
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'warning-pulse': {
					'0%, 100%': { boxShadow: '0 0 0 0 rgba(251, 191, 36, 0.7)' },
					'50%': { boxShadow: '0 0 0 10px rgba(251, 191, 36, 0)' }
				},
				'bounce-slow': {
					'0%, 100%': { transform: 'translateY(-3%)' },
					'50%': { transform: 'translateY(0)' }
				},
				'glow': {
					'0%, 100%': { textShadow: '0 0 5px rgba(255, 255, 255, 0.5)' },
					'50%': { textShadow: '0 0 20px rgba(255, 255, 255, 0.8), 0 0 30px rgba(255, 255, 255, 0.6)' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'warning-pulse': 'warning-pulse 2s ease-in-out infinite',
				'bounce-slow': 'bounce-slow 2s ease-in-out infinite',
				'glow': 'glow 2s ease-in-out infinite'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
