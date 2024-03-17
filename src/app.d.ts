// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
	interface Window {
		toggleTheme?(): void;
	}
	interface Document {
		startViewTransition?(callback: () => Promise<void>): void;
	}

	declare module "*&enhanced";

	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface PageState {}
		// interface Platform {}
	}
}

export {};
