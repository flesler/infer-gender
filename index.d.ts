declare module 'infer-gender' {

	export function initialize(): void

	export function extractName(fullName: string, onlyFirst?: boolean): string

	export function infer(fullName: string, onlyFirst?: boolean): 'male' | 'female' | 'unisex' | 'unknown'
}
