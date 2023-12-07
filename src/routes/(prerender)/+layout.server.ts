import type { LayoutServerLoad } from './$types';

export const load = (async () => {
    return {
        layoutnumber: Math.floor(Math.random() * 20)
    }
}) satisfies LayoutServerLoad;