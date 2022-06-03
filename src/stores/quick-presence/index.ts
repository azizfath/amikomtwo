import { writable, type Writable } from "svelte/store";

export const quicknims: Writable<string[]> = writable([])