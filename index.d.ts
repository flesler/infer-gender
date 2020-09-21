declare module 'infer-gender' {

	export function initialize(): void

	export function extractName(fullName: string, onlyFirst = false): string

	export function infer(fullName: string, onlyFirst = false): 'male' | 'female' | 'unisex' | 'unknown'
}
